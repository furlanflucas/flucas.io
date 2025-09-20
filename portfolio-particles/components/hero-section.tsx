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
    <section id="about" className="min-h-screen flex items-center justify-center relative z-10">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold text-foreground tracking-tight">
              <span className="text-balance">CREATIVE</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground font-light">Front End Developer</h2>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I build accessible, pixel-perfect digital experiences for the web. Passionate about crafting interfaces that
            blend thoughtful design with robust engineering.
          </p>

          <div className="flex items-center justify-center gap-6 pt-8">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-primary/20 hover:border-primary hover:bg-primary/10 bg-transparent"
            >
              <Github className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-primary/20 hover:border-primary hover:bg-primary/10 bg-transparent"
            >
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-primary/20 hover:border-primary hover:bg-primary/10 bg-transparent"
            >
              <Mail className="h-5 w-5" />
            </Button>
          </div>

          <div className="pt-12">
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
