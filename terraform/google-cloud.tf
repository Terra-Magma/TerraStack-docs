# resource "google_compute_global_address" "ingress_static_ip" {
#   name    = "gke-ingress-ip"
#   project = var.gcp_project_id
# }
#
resource "google_container_cluster" "primary" {
  name                     = "terra-magma-cluster-primary"
  location                 = var.region
  remove_default_node_pool = true
  initial_node_count       = 1
  subnetwork               = "projects/${var.gcp_project_id}/regions/us-central1/subnetworks/default"
}
#
# resource "google_container_node_pool" "primary_nodes" {
#   cluster    = google_container_cluster.primary.name
#   location   = google_container_cluster.primary.location
#   node_count = 1
#
#   node_config {
#     preemptible  = false
#     machine_type = "e2-medium"
#
#     service_account = var.google_service_account_email
#     oauth_scopes = [
#       "https://www.googleapis.com/auth/cloud-platform",
#     ]
#   }
# }
#
# output "cluster_name" {
#   value = google_container_cluster.primary.name
# }
#
# output "get_kubeconfig_command" {
#   value = "gcloud container clusters get-credentials ${google_container_cluster.primary.name} --zone ${google_container_cluster.primary.location} --project ${var.gcp_project_id}"
# }

# Create a Google Cloud Storage bucket for the static website
resource "google_storage_bucket" "react_app_bucket" {
  name          = "unique-bucket-name-for-react-app" # Must be globally unique
  location      = "US-CENTRAL1"
  force_destroy = true # Allows bucket to be destroyed even if not empty

  website {
    main_page_suffix = "index.html"
    not_found_page   = "index.html" # Handles client-side routing
  }

  uniform_bucket_level_access = true
}

# Make the bucket content publicly readable
resource "google_storage_bucket_iam_member" "public_access" {
  bucket = google_storage_bucket.react_app_bucket.name
  role   = "roles/storage.objectViewer"
  member = "allUsers"
}

# Output the website URL
output "website_url" {
  value = google_storage_bucket.react_app_bucket.url
}


resource "google_secret_manager_secret" "ghcr_token" {
  secret_id = "ghcr-token"
  replication {
    auto {}
  }
}

resource "google_secret_manager_secret_version" "ghcr_token_version" {
  secret      = google_secret_manager_secret.ghcr_token.id
  secret_data = var.github_registry_access_token
}

resource "google_secret_manager_secret_iam_member" "ghcr_access" {
  secret_id = google_secret_manager_secret.ghcr_token.id
  role      = "roles/secretmanager.secretAccessor"
  member    = "serviceAccount:${google_cloud_run_v2_service.app.template[0].service_account}"
}

resource "google_artifact_registry_repository" "my-repo" {
  location      = var.region
  repository_id = "github-terra-magma"
  description   = "remote github container registry"
  format        = "DOCKER"
  mode          = "REMOTE_REPOSITORY"
  remote_repository_config {
    description                 = "Remote repository for GHCR images"
    disable_upstream_validation = true
    common_repository {
      uri = "https://ghcr.io"
    }
    upstream_credentials {
      username_password_credentials {
        username                = var.github_registry_username
        password_secret_version = google_secret_manager_secret_version.ghcr_token_version.name
      }
    }
  }
}



# Enable required APIs
resource "google_project_service" "run" {
  service = "run.googleapis.com"
}

resource "google_project_service" "artifact_registry" {
  service = "artifactregistry.googleapis.com"
}

# Cloud Run service
resource "google_cloud_run_v2_service" "app" {
  name     = "my-container-service"
  location = var.region

  template {
    service_account = "cloud-run-pull@${var.gcp_project_id}.iam.gserviceaccount.com"

    containers {
      image = var.container_image

      ports {
        container_port = 80
      }
    }
  }

  depends_on = [
    google_project_service.run,
    google_secret_manager_secret_version.ghcr_token_version
  ]
}

# Allow public (unauthenticated) access
resource "google_cloud_run_v2_service_iam_member" "public_access" {
  name     = google_cloud_run_v2_service.app.name
  location = google_cloud_run_v2_service.app.location
  project  = var.gcp_project_id
  role     = "roles/run.invoker"
  member   = "allUsers"
}

output "service_url" {
  value = google_cloud_run_v2_service.app.uri
}
