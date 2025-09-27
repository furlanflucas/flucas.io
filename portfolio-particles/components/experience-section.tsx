"use client"

export function ExperienceSection() {
  const skills = ["AWS", "Azure", "CompTIA"]

  const companies = [
    { name: "Vercel", logo: "/vercel-svgrepo-com.svg" },
    { name: "Airbnb", logo: "/airbnb-2-logo-svgrepo-com.svg" },
    { name: "Meta", logo: "/facebook-logo-meta-2-svgrepo-com.svg" },
]

  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 text-balance">Experience</h2>
        
        {/* Companies */}
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-6"></h3>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {companies.map((company) => (
              <div
                key={company.name}
                className="p-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className={`h-12 md:h-16 object-contain ${
                    company.name === "Vercel" ? "md:h-10" : ""
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
