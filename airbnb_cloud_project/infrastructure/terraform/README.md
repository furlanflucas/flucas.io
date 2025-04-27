# Airbnb Cloud Project - Terraform Infrastructure

This folder contains the Terraform code that provisions the core cloud infrastructure for the Airbnb-inspired cloud platform.

---

## 📚 Overview

The infrastructure includes:

- VPC with Public and Private Subnets (Multi-AZ)
- Internet Gateway and NAT Gateway
- Security Groups for Load Balancer, EC2 Instances, and RDS Database
- Application Load Balancer (ALB) with Target Group and Listener
- Launch Template for EC2 Instances
- Auto Scaling Group for scalable compute
- RDS MySQL Database (Multi-AZ)
- S3 Bucket for static assets and backups

---

## ⚙️ How to Deploy

> ⚠️ Ensure your AWS credentials are configured (`aws configure`) before proceeding.

1. Initialize Terraform:

    ```bash
    terraform init
    ```

2. Validate the configuration:

    ```bash
    terraform validate
    ```

3. Review the plan:

    ```bash
    terraform plan
    ```

4. Apply the configuration:

    ```bash
    terraform apply
    ```

    Type `yes` to confirm resource creation.

---

## 🛑 How to Destroy

To remove all resources and avoid AWS charges:

```bash
terraform destroy
