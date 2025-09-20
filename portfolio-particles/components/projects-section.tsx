"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "Geospatial Data Quality Monitor",
      description:
        "Pipeline that fetches road network data from OpenStreetMap, detects missing speed limits, and visualizes anomalies in a Streamlit dashboard.",
      image: "/geospatial.png", // replace with your screenshot in /public
      technologies: ["Python", "Streamlit", "Folium", "OpenStreetMap"],
      githubUrl:
        "https://github.com/furlanflucas/cloud-data-engineering-portfolio/tree/main/data_engineering/geospatial_data_quality_pipeline",
    },
    {
      title: "Real-Time Fraud Detection",
      description:
        "AWS-based simulation using Kafka for event streaming, Python for data processing, and Streamlit for visualization.",
      image: "/fraud.png", // replace with your screenshot in /public
      technologies: ["AWS", "Kafka", "Python", "Streamlit"],
      githubUrl:
        "https://github.com/furlanflucas/cloud-data-engineering-portfolio/tree/main/data_engineering/real_time_fraud_detections",
    },
    {
      title: "Cloud Data Warehouse for Music Analytics",
      description:
        "Cloud data warehouse with AWS Redshift using star schema design and ETL pipelines to process song play data from S3.",
      image: "/cloudwarehouse.jpg", // replace with your screenshot in /public
      technologies: ["AWS Redshift", "S3", "ETL", "SQL"],
      githubUrl:
        "https://github.com/furlanflucas/cloud-data-engineering-portfolio/tree/main/data_engineering/cloud_data_warehouse_for_music_analytics",
    },
  ]

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 text-balance">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-medium bg-secondary/20 text-secondary rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 pt-2">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Button size="sm" variant="ghost">
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </Button>
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
