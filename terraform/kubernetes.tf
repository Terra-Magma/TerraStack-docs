resource "kubernetes_secret_v1" "ghcr_login_secret" {
  metadata {
    name = "ghcr-login-secret"
  }

  type = "kubernetes.io/dockerconfigjson"

  data = {
    ".dockerconfigjson" = jsonencode({
      auths = {
        "ghcr.io" = {
          username = var.github_registry_username
          password = var.github_registry_access_token
          auth     = base64encode("${var.github_registry_username}:${var.github_registry_access_token}")
        }
      }
    })
  }

  depends_on = [google_container_node_pool.primary_nodes]
}

resource "kubernetes_deployment_v1" "web_deployment" {
  metadata {
    name = "terrastack-docs"
    labels = {
      App = "terrastack-docs"
    }
  }

  # Ensure nodes + secret exist before attempting to schedule/pull.
  depends_on = [
    google_container_node_pool.primary_nodes,
    kubernetes_secret_v1.ghcr_login_secret,
  ]

  spec {
    replicas = 2

    selector {
      match_labels = {
        App = "terrastack-docs"
      }
    }

    template {
      metadata {
        labels = {
          App = "terrastack-docs"
        }
      }

      spec {
        container {
          name              = "terrastack-docs"
          image             = var.app_image
          image_pull_policy = "Always"

          port {
            container_port = 3000
          }
        }
        image_pull_secrets {
          name = kubernetes_secret_v1.ghcr_login_secret.metadata[0].name
        }
      }
    }
  }
}

resource "kubernetes_service_v1" "web_service" {
  metadata {
    name = "terrastack-docs-svc"
  }

  depends_on = [kubernetes_deployment_v1.web_deployment]

  spec {
    selector = {
      App = "terrastack-docs"
    }

    port {
      port        = 80
      target_port = 3000
    }

    type = "LoadBalancer"
  }
}

output "external_ip" {
  value = kubernetes_service_v1.web_service.status[0].load_balancer[0].ingress[0].ip
}
