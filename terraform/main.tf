terraform {
  required_providers {
    portainer = {
      source  = "portainer/portainer"
      version = "1.14.1"
    }
  }
}


provider "portainer" {
  endpoint = var.portainer_url

  # Option 1: API key authentication
  api_key = var.portainer_api_key
}
