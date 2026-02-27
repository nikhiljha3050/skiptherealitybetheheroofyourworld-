'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Sparkles, Zap, Globe, Wand2, Swords, Smile } from 'lucide-react'

interface Module {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  glowColor: string
  glowRgb: string
}

export function EnchantmentForge() {
  const [selectedModule, setSelectedModule] = useState<string | null>(null)

  const modules: Module[] = [
    {
      id: 'fairytale',
      title: 'The Dreamy Fairytale',
      description: 'Step into a bioluminescent wonderland with mythical creatures and pure magic.',
      icon: <Sparkles className="w-7 h-7" />,
      glowColor: 'var(--accent-magenta)',
      glowRgb: '236, 72, 153',
    },
    {
      id: 'billionaire',
      title: 'The Armored Billionaire',
      description: 'Experience flight mechanics and repulsor haptics in your own power suit.',
      icon: <Zap className="w-7 h-7" />,
      glowColor: 'var(--accent-gold)',
      glowRgb: '251, 191, 36',
    },
    {
      id: 'webslinger',
      title: 'The Web-Slinger',
      description: 'Urban fantasy with kinetic haptic feedback. Swing through the city.',
      icon: <Globe className="w-7 h-7" />,
      glowColor: 'var(--accent-red)',
      glowRgb: '239, 68, 68',
    },
    {
      id: 'chosen',
      title: 'The Chosen One',
      description: 'Master the elder wand at a magical academy. Your letter has arrived.',
      icon: <Wand2 className="w-7 h-7" />,
      glowColor: 'var(--accent-purple)',
      glowRgb: '168, 85, 247',
    },
    {
      id: 'titan',
      title: 'The Titan Vanguard',
      description: 'Hyper-kinetic aerial combat with ODM gear. Humanity\'s last hope.',
      icon: <Swords className="w-7 h-7" />,
      glowColor: 'var(--accent-dark-red)',
      glowRgb: '153, 27, 27',
    },
    {
      id: 'menace',
      title: 'The 5-Year Old Menace',
      description: 'Whimsical, relaxing life in Kasukabe. Pure chaotic joy.',
      icon: <Smile className="w-7 h-7" />,
      glowColor: 'var(--accent-orange)',
      glowRgb: '249, 115, 22',
    },
  ]

  return (
    <section id="forge" className="relative py-32 bg-background overflow-hidden">
      {/* Background ambience */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(0,240,255,0.03) 0%, transparent 60%), radial-gradient(ellipse at 50% 100%, rgba(168,85,247,0.03) 0%, transparent 60%)',
        }} />
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-orbitron text-aether-cyan/60 text-xs tracking-[0.5em] uppercase mb-4">
              Choose Your Reality
            </p>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 text-foreground">
              The Enchantment Forge
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Select your Life Module. Each cartridge unlocks a fully immersive neuro-haptic world crafted for your deepest fantasies.
            </p>
          </motion.div>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {modules.map((module, index) => {
            const isSelected = selectedModule === module.id

            return (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedModule(isSelected ? null : module.id)}
                className="cursor-pointer group"
              >
                <div
                  className={`relative p-8 rounded-2xl border gentle-animation ${
                    isSelected
                      ? 'neural-sync border-transparent'
                      : 'glass-effect hover:border-opacity-40'
                  }`}
                  style={{
                    '--glow-color': `rgba(${module.glowRgb}, 0.4)`,
                    borderColor: isSelected ? module.glowColor : undefined,
                    background: isSelected
                      ? `linear-gradient(135deg, rgba(${module.glowRgb}, 0.08) 0%, rgba(0,0,0,0.9) 100%)`
                      : undefined,
                  } as React.CSSProperties}
                >
                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 gentle-animation"
                    style={{
                      background: `rgba(${module.glowRgb}, ${isSelected ? 0.2 : 0.1})`,
                      color: module.glowColor,
                      boxShadow: isSelected ? `0 0 20px rgba(${module.glowRgb}, 0.3)` : 'none',
                    }}
                  >
                    {module.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-foreground gentle-animation">
                    {module.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {module.description}
                  </p>

                  {/* Status */}
                  <div className="flex items-center gap-2">
                    <div
                      className="w-2 h-2 rounded-full gentle-animation"
                      style={{
                        background: isSelected ? module.glowColor : 'var(--muted-foreground)',
                        boxShadow: isSelected ? `0 0 8px rgba(${module.glowRgb}, 0.6)` : 'none',
                      }}
                    />
                    <span
                      className="text-xs font-orbitron tracking-wider uppercase gentle-animation"
                      style={{ color: isSelected ? module.glowColor : 'var(--muted-foreground)' }}
                    >
                      {isSelected ? 'Module Loaded' : 'Tap to Sync'}
                    </span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
