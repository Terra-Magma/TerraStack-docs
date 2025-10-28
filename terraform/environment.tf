resource "portainer_environment" "terramagma-web-host" {
  name                = "Terramagma Web Host"
  environment_address = var.terramagma_local_ip
  type                = 2
}
