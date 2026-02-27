'use client'

import { motion } from 'framer-motion'
import { Mail, ArrowRight } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="relative py-32 bg-background overflow-hidden">
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at 50% 100%, rgba(0,240,255,0.03) 0%, transparent 60%)',
      }} />

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="font-orbitron text-aether-cyan/60 text-xs tracking-[0.5em] uppercase mb-4">
            Join the Revolution
          </p>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 text-foreground">
            Ready to Dream?
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-12">
            Be among the first to enter Wonderland. Join our waitlist for early access to AETHER and exclusive founding member benefits.
          </p>

          {/* Email Signup */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <div className="flex-1 relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-aether-cyan/50 focus:shadow-[0_0_20px_rgba(0,240,255,0.1)] gentle-animation"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0,240,255,0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 bg-aether-cyan/10 border border-aether-cyan/30 text-aether-cyan font-orbitron font-bold px-8 py-4 rounded-xl text-sm tracking-wider cursor-pointer gentle-animation"
            >
              Join Waitlist
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>

          <p className="text-muted-foreground text-sm mt-6">
            No spam. Early access + founding member pricing only.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
