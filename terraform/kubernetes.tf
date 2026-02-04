resource "kubernetes_deployment_v1" "nginx_deployment" {
  metadata {
    name = "nginx-deployment"
    labels = {
      App = "nginx"
    }
  }
  spec {
    replicas = 2
    selector {
      match_labels = {
        App = "nginx"
      }
    }
    template {
      metadata {
        labels = {
          App = "nginx"
        }
      }
      spec {
        container {
          name  = "nginx"
          image = "nginx:1.14.2" #todo change me
          port {
            container_port = 80
          }
        }
      }
    }
  }
}

# Define a Kubernetes Service to expose the NGINX Deployment
resource "kubernetes_service_v1" "nginx_service" {
  metadata {
    name = "nginx-service"
  }
  spec {
    selector = {
      App = "nginx"
    }
    port {
      port        = 80
      target_port = 3000
    }
    type = "LoadBalancer" # Expose the service externally with a LoadBalancer
  }
}

output "nginx_external_ip" {
  value = kubernetes_service_v1.nginx_service.status[0].load_balancer[0].ingress[0].ip
}
