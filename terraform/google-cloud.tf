resource "google_storage_bucket" "terra-stack-docs-bucket" {
  name          = "terra-stack-docs-bucket"
  location      = "US"
  force_destroy = true

  lifecycle_rule {
    action {
      type = "Delete"
    }

    condition {
      age = 30
    }
  }
}

resource "google_service_account" "default" {
  account_id   = var.google_service_account_id
  display_name = "Service Account"
}

resource "google_container_cluster" "primary" {
  name               = "terra-magma-cluster-primary"
  location           = "us-central1-a"
  initial_node_count = 1
}

resource "google_container_node_pool" "primary_nodes" {
  cluster    = google_container_cluster.primary.name
  location   = google_container_cluster.primary.location
  node_count = 1

  node_config {
    preemptible  = false
    machine_type = "e2-medium"

    service_account = google_service_account.default.email
    oauth_scopes = [
      "https://www.googleapis.com/auth/cloud-platform",
    ]
  }
}

output "cluster_name" {
  value = google_container_cluster.primary.name
}

output "get_kubeconfig_command" {
  value = "gcloud container clusters get-credentials ${google_container_cluster.primary.name} --zone ${google_container_cluster.primary.location} --project ${var.gcp_project_id}"
}
