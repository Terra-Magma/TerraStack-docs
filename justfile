set dotenv-load := true

# Run terraform actions: plan, apply
[working-directory('terraform')]
terraform action:
    @echo "Running terraform {{ action }} ..."
    terraform {{ action }} \
      -var="gcp_project_id=$GCP_PROJECT_ID" \
      -var="google_service_account_id=$GOOGLE_SERVICE_ACCOUNT_ID" \
      -var="github_registry_access_token=$GITHUB_REGISTRY_ACCESS_TOKEN" \
      -var="github_registry_username=$GITHUB_REGISTRY_USERNAME"
