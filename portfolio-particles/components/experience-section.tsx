import { Card } from "@/components/ui/card"

export function ExperienceSection() {
  const experiences = [
    {
      period: "2024 — PRESENT",
      title: "Senior Frontend Engineer, Accessibility",
      company: "TechCorp",
      description:
        "Build and maintain critical components used to construct the frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
      technologies: ["JavaScript", "TypeScript", "React", "Next.js"],
    },
    {
      period: "2022 — 2024",
      title: "Frontend Developer",
      company: "StartupXYZ",
      description:
        "Developed responsive web applications and user interfaces. Collaborated with design teams to implement pixel-perfect designs and ensure optimal user experience across all devices.",
      technologies: ["React", "Vue.js", "Tailwind CSS", "Node.js"],
    },
    {
      period: "2020 — 2022",
      title: "Junior Web Developer",
      company: "WebAgency",
      description:
        "Created and maintained websites for various clients. Gained experience in full-stack development and learned modern web development practices.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    },
  ]

  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 text-balance">Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300"
            >
              <div className="grid md:grid-cols-4 gap-6">
                <div className="md:col-span-1">
                  <p className="text-sm text-muted-foreground font-medium">{exp.period}</p>
                </div>
                <div className="md:col-span-3 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 text-xs font-medium bg-accent/20 text-accent rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
