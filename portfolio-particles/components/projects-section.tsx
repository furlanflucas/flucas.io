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
      image: "/geospatial.png",
      technologies: ["Python", "Streamlit", "Folium", "OpenStreetMap"],
      githubUrl:
        "https://github.com/furlanflucas/cloud-data-engineering-portfolio/tree/main/data_engineering/geospatial_data_quality_pipeline",
    },
    {
      title: "Real-Time Fraud Detection",
      description:
        "AWS-based simulation using Kafka for event streaming, Python for data processing, and Streamlit for visualization.",
      image: "/fraud.png",
      technologies: ["AWS", "Kafka", "Python", "Streamlit"],
      githubUrl:
        "https://github.com/furlanflucas/cloud-data-engineering-portfolio/tree/main/data_engineering/real_time_fraud_detections",
    },
    {
      title: "Cloud Data Warehouse for Music Analytics",
      description:
        "Cloud data warehouse with AWS Redshift using star schema design and ETL pipelines to process song play data from S3.",
      image: "/cloudwarehouse.jpg",
      technologies: ["AWS Redshift", "S3", "ETL", "SQL"],
      githubUrl:
        "https://github.com/furlanflucas/cloud-data-engineering-portfolio/tree/main/data_engineering/cloud_data_warehouse_for_music_analytics",
    },
  ]

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16">
          Projects
        </h2>

        {/* Grid of Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group flex flex-col h-full overflow-hidden 
                         bg-card/50 backdrop-blur-sm border border-border/50 
                         hover:bg-card/70 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Project Content */}
              <div className="flex flex-col flex-grow p-6 space-y-4">
                <h3 className="text-xl font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-md 
                                 bg-[var(--cardaccent)] text-[var(--foreground)]
                                 border border-border/40 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* GitHub Button (always pinned at bottom) */}
                <div className="mt-auto pt-4">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Button
                      size="sm"
                      className="w-full bg-[var(--background)] text-[var(--foreground)] 
                                 hover:bg-[var(--accent)] hover:text-[var(--background)] transition-colors"
                    >
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
