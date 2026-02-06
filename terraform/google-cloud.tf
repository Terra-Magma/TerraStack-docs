resource "google_container_cluster" "primary" {
  name                     = "terra-magma-cluster-primary"
  location                 = "us-central1-a"
  remove_default_node_pool = true
  initial_node_count       = 1
  subnetwork               = "projects/${var.gcp_project_id}/regions/us-central1/subnetworks/default"
}

resource "google_container_node_pool" "primary_nodes" {
  cluster    = google_container_cluster.primary.name
  location   = google_container_cluster.primary.location
  node_count = 1

  node_config {
    preemptible  = false
    machine_type = "e2-medium"

    service_account = var.google_service_account_email
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
