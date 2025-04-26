# 🏗️ Design Decisions - Airbnb Cloud Platform

## 📚 Project Overview
This project designs a scalable, resilient, and cloud-native reservation platform architecture, inspired by Airbnb's AWS migration case study.  
The goal is to simulate a production-grade system capable of handling dynamic booking activity, media storage, data processing, and real-time user interactions.

---

## 🔥 Key Design Principles
- **Scalability:** Auto Scaling groups and load balancers adjust to traffic demand automatically.
- **High Availability:** Multi-AZ RDS deployment and Elastic Load Balancer for fault tolerance.
- **Cost Optimization:** Use of Auto Scaling, S3 storage, and EMR for efficient resource management.
- **Security:** Private VPC network boundaries and secure S3 buckets.
- **Observability:** CloudWatch metrics, logging, and alarms across critical resources.

---

## ⚙️ Service-by-Service Design Choices

- **Amazon Route 53:**  
  Provides highly available and scalable DNS routing to direct user traffic efficiently.

- **Amazon CloudFront:**  
  Distributes static content (user-uploaded images, backups) globally with low latency.

- **Elastic Load Balancer (ELB):**  
  Distributes incoming application traffic across EC2 instances in multiple Availability Zones for fault tolerance.

- **Amazon EC2 Auto Scaling Group:**  
  Hosts the main application and search servers with automatic scaling based on demand spikes.

- **Amazon RDS (MySQL Multi-AZ):**  
  Managed relational database service with automatic failover to ensure data availability and durability.

- **Amazon S3:**  
  Object storage for static assets like user-uploaded images, backups, and data logs.

- **Amazon EMR:**  
  Processes large-scale data batches (e.g., daily reservation logs, user analytics) efficiently and cost-effectively.

- **Amazon CloudWatch:**  
  Provides monitoring, logging, and alerting to maintain system health and performance.

---

## 🔒 Security and Networking
- **VPC:**  
  Isolates EC2 instances and RDS within a private network.
- **Public Subnets:**  
  For load balancer endpoints and EC2 servers needing internet access.
- **Private Subnets:**  
  For RDS instances and backend application tiers.
- **S3 Bucket Policies:**  
  Enforces encryption and controlled access to stored assets.

---

## 📈 Monitoring and Observability
- **CloudWatch Metrics:**  
  Track EC2 instance health, database performance, load balancer request count, and EMR job status.
- **CloudWatch Alarms:**  
  Trigger alerts based on thresholds (e.g., high CPU usage, database replication lag).
- **CloudWatch Logs:**  
  Aggregate application logs and batch job logs for troubleshooting.

---

## 🚀 Future Improvements
- Add caching layers with Amazon ElastiCache (Redis) to reduce database load.
- Implement AWS WAF (Web Application Firewall) for enhanced security.
- Explore Aurora Serverless for dynamic database scaling.
- Integrate real-time streaming pipelines using Kinesis for reservation event streaming.

---
