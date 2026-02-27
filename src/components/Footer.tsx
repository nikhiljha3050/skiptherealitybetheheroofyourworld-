'use client'

export function Footer() {
  return (
    <footer className="relative py-16 bg-background border-t border-border/30">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <div className="font-orbitron text-aether-cyan text-xl tracking-[0.3em] font-bold mb-2">
              AETHER
            </div>
            <p className="text-muted-foreground text-sm">
              Neural-Link VR — Your Fairytale Awaits
            </p>
          </div>

          <div className="flex items-center gap-8">
            <a href="#forge" className="text-muted-foreground hover:text-aether-cyan text-sm gentle-animation">The Forge</a>
            <a href="#pricing" className="text-muted-foreground hover:text-aether-cyan text-sm gentle-animation">Pricing</a>
            <a href="#contact" className="text-muted-foreground hover:text-aether-cyan text-sm gentle-animation">Contact</a>
          </div>
        </div>

        <div className="border-t border-border/20 pt-8 mt-12 text-center">
          <p className="text-muted-foreground text-sm">
            © 2026 AETHER Technologies. All rights reserved. Reality is optional.
          </p>
        </div>
      </div>
    </footer>
  )
}
