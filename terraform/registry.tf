resource "portainer_registry" "github" {
  name                     = "GitHub"
  type                     = 8
  url                      = "ghcr.io"
  authentication           = true
  username                 = var.github_registry_username
  password                 = var.github_registry_access_token
  github_use_organisation  = true
  github_organisation_name = "Terra-Magma"
}
