resource "portainer_registry" "github" {
  name           = "GitHub"
  type           = 3
  url            = "ghcr.io"
  authentication = true
  username       = var.github_registry_username
  password       = var.github_registry_access_token
}
