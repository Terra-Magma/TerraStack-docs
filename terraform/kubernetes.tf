resource "kubernetes_deployment_v1" "nginx_deployment" {
  metadata {
    name = "terrastack-docs"
    labels = {
      App = "terrastack-docs"
    }
  }

  # Ensure nodes exist before attempting to schedule.
  depends_on = [google_container_node_pool.primary_nodes]

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
          name  = "terrastack-docs"
          image = var.app_image

          port {
            container_port = 80
          }
        }
      }
    }
  }
}

resource "kubernetes_service_v1" "nginx_service" {
  metadata {
    name = "terrastack-docs-svc"
  }

  depends_on = [kubernetes_deployment_v1.nginx_deployment]

  spec {
    selector = {
      App = "terrastack-docs"
    }

    port {
      port        = 80
      target_port = 80
    }

    type = "LoadBalancer"
  }
}

output "nginx_external_ip" {
  value = kubernetes_service_v1.nginx_service.status[0].load_balancer[0].ingress[0].ip
}
