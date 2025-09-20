import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, MessageCircle } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-balance">Let's Work Together</h2>

        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          If you would like to discuss a project or just say hi, I'm always down to chat.
        </p>

        <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 max-w-md mx-auto">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-center">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Get In Touch</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Ready to start your next project? Let's discuss how we can work together.
                </p>
              </div>
            </div>

            <Button className="w-full bg-primary hover:bg-primary/90">
              <MessageCircle className="h-4 w-4 mr-2" />
              Send Message
            </Button>
          </div>
        </Card>

        <div className="mt-16 pt-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground">© 2024 — Crafted with care using Next.js and Tailwind CSS</p>
        </div>
      </div>
    </section>
  )
}
