"use client"

export function ExperienceSection() {
  const skills = ["AWS", "Azure", "CompTIA"]

  const companies = [
    { name: "Airbnb", logo: "/airbnb-2-logo-svgrepo-com.svg" },
    { name: "Meta", logo: "/facebook-logo-meta-2-svgrepo-com.svg" },
    { name: "Vercel", logo: "/vercel-svgrepo-com.svg" },
  ]

  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-5xl mx-auto px-6 text-center space-y-16">
        
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-semi-bold text-foreground">
          Experience
        </h2>

        {/* Skills */}
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-6">Technologies</h3>
          <div className="flex flex-wrap justify-center gap-25">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-5 py-2 text-sm font-medium bg-accent/20 text-accent rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Companies */}
        <div>
          <h3 className="text-xl font-thin text-foreground mb-6">Previous Companies</h3>
          <div className="flex flex-wrap justify-center items-center gap-25">
            {companies.map((company) => (
              <div
                key={company.name}
                className="p-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className={`h-12 md:h-16 object-contain ${
                    company.name === "Vercel" ? "md:h-20" : ""
                  }`}
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}


