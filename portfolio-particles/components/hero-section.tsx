"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="about" className="py-80 flex items-center justify-center relative z-20"
>
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Your Photo */}
        <div className="flex justify-center">
          <img
            src="/IMG_8763.JPG" // <-- make sure this is in the /public folder
            alt="Lucas Furlan"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-lg border-4 border-primary/20"
          />
        </div>

        {/* Right: Text + Links */}
        <div className="space-y-8 text-left">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground tracking-tight font-[var(--font-orbitron)]">
              Welcome!
            </h1>
            <h2 className="text-2xl md:text-3xl text-primary font-low font-[var(--font-orbitron)]">
              I'm Lucas, a Cloud Engineer.
            </h2>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
            I architect and optimize scalable, cloud-native solutions. Passionate about building resilient
            infrastructure that empowers innovation at scale.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-6 pt-4">
            <a href="https://github.com/furlanflucas" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-primary/20 hover:border-primary hover:bg-primary/10 bg-transparent"
              >
                <Github className="h-5 w-5" />
              </Button>
            </a>

            <a href="https://linkedin.com/in/furlanflucas" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-primary/20 hover:border-primary hover:bg-primary/10 bg-transparent"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
            </a>

            <a href="mailto:furlanflucas@gmail.com">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-primary/20 hover:border-primary hover:bg-primary/10 bg-transparent"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </a>
          </div>

          {/* Scroll Down */}
          <div className="pt-8">
            <Button onClick={scrollToProjects} variant="ghost" className="group hover:bg-transparent">
              <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                VIEW WORK
              </span>
              <ArrowDown className="ml-2 h-4 w-4 text-muted-foreground group-hover:text-primary transition-all group-hover:translate-y-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
