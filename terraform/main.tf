terraform {
  required_providers {
    portainer = {
      source  = "portainer/portainer"
      version = "1.14.1"
    }
  }

  backend "gcs" {
    bucket = "terramagma_terraform_state_bucket"
    prefix = "terraform/state"
  }
}


provider "portainer" {
  endpoint = var.portainer_url

  # Option 1: API key authentication
  api_key = var.portainer_api_key
}

provider "google" {
  project = var.gcp_project_id
  region  = "us-central1"
}
