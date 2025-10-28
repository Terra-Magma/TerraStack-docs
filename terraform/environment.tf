resource "portainer_environment" "terramagma-web-host" {
  name                = "Terramagma Web Host"
  environment_address = "${var.terramagma_local_ip}:9001"
  type                = 2
}
