import { Card } from "@/components/ui/card"

export function ContactSection() {
  return (
    <footer className="py-12 text-center border-t border-border/50 relative z-10">
      <p className="text-sm text-muted-foreground">
        FLUXCLOUD © {new Date().getFullYear()}
      </p>
    </footer>
  )
}
