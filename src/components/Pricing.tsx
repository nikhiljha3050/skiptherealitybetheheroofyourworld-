'use client'

import { motion } from 'framer-motion'
import { Check, Shield, Infinity } from 'lucide-react'

export function Pricing() {
  return (
    <section id="pricing" className="relative py-32 bg-background overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at 50% 50%, rgba(251,191,36,0.02) 0%, transparent 60%)',
      }} />

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-orbitron text-aether-gold/60 text-xs tracking-[0.5em] uppercase mb-4">
            One Payment. Infinite Worlds.
          </p>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 text-foreground">
            No Subscriptions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Own your gateway to Wonderland. No recurring fees. No hidden costs. Just pure, eternal magic.
          </p>
        </motion.div>

        {/* Glassmorphic Receipt */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-lg mx-auto"
        >
          <div
            className="relative rounded-3xl overflow-hidden"
            style={{
              background: 'rgba(255,255,255,0.03)',
              backdropFilter: 'blur(40px)',
              border: '1px solid rgba(251,191,36,0.15)',
              boxShadow: '0 0 60px rgba(251,191,36,0.05), 0 25px 50px rgba(0,0,0,0.5)',
            }}
          >
            {/* Receipt Header */}
            <div className="px-8 pt-10 pb-6 border-b border-border/50 text-center">
              <div className="font-orbitron text-aether-cyan text-2xl tracking-[0.3em] font-bold mb-2">
                AETHER
              </div>
              <p className="text-muted-foreground text-sm tracking-wider">NEURAL LINK CHECKOUT</p>
            </div>

            {/* Line Items */}
            <div className="px-8 py-8 space-y-6">
              {/* Hardware */}
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className="text-foreground font-semibold text-lg">AETHER V1 Artifact</h4>
                  <p className="text-muted-foreground text-sm mt-1">Neural-Link VR Hardware</p>
                </div>
                <div className="text-foreground font-orbitron font-bold text-lg">₹18,999</div>
              </div>

              <div className="h-px bg-border/30" />

              {/* Module */}
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className="text-foreground font-semibold text-lg">Life Module Cartridge</h4>
                  <p className="text-muted-foreground text-sm mt-1">Your first world — choose any module</p>
                </div>
                <div className="text-foreground font-orbitron font-bold text-lg">₹2,499</div>
              </div>

              <div className="h-px bg-border/30" />

              {/* Total */}
              <div className="flex items-center justify-between pt-2">
                <h3 className="text-2xl font-black text-foreground">TOTAL</h3>
                <div className="text-3xl font-orbitron font-black" style={{
                  background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-gold))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                  ₹21,498
                </div>
              </div>
            </div>

            {/* Badges */}
            <div className="px-8 pb-10 space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <Check className="w-4 h-4 text-aether-cyan flex-shrink-0" />
                <span className="text-muted-foreground">Single Payment. No Subscriptions.</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Shield className="w-4 h-4 text-aether-gold flex-shrink-0" />
                <span className="text-muted-foreground">Eternal Warranty Included.</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Infinity className="w-4 h-4 text-aether-purple flex-shrink-0" />
                <span className="text-muted-foreground">Unlimited Neural Sessions. Forever.</span>
              </div>
            </div>

            {/* CTA */}
            <div className="px-8 pb-10">
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(251,191,36,0.3)' }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-xl font-orbitron font-bold text-sm tracking-wider cursor-pointer gentle-animation"
                style={{
                  background: 'linear-gradient(135deg, rgba(251,191,36,0.15), rgba(0,240,255,0.1))',
                  border: '1px solid rgba(251,191,36,0.3)',
                  color: 'var(--accent-gold)',
                }}
              >
                Pre-Order AETHER
              </motion.button>
            </div>
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-8 font-orbitron text-xs tracking-[0.3em] text-muted-foreground"
          >
            SINGLE PAYMENT · NO SUBSCRIPTIONS · ETERNAL WARRANTY
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
