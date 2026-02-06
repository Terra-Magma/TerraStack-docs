variable "github_registry_username" {
  type        = string
  description = "Username for GHCR image pulls (typically the GitHub actor)"
}

variable "github_registry_access_token" {
  type        = string
  description = "Token for GHCR image pulls (GITHUB_TOKEN or a PAT with read:packages)"
  sensitive   = true
}

variable "gcp_project_id" {
  type        = string
  description = "GCP Project ID for Google Cloud resources"
}

variable "google_service_account_email" {
  type        = string
  description = "GCP Service Account email"
}

variable "app_image" {
  type        = string
  description = "Container image (including tag) to deploy to GKE"
  default     = "ghcr.io/terra-magma/terrastack-docs:latest"
}
