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
