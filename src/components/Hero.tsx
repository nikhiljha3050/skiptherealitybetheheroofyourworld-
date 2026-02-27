'use client'

import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

export function Hero() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset'
    return () => { document.body.style.overflow = 'unset' }
  }, [isMobileMenuOpen])

  useEffect(() => {
    if (!isMobileMenuOpen) return
    const handleScroll = () => setIsMobileMenuOpen(false)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMobileMenuOpen])

  const navLinks = [
    { href: '#forge', label: 'The Forge' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <div className="relative h-screen w-full overflow-hidden bg-background">
      {/* Dark enchanted forest background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 aurora-bg"
          style={{
            background: 'linear-gradient(135deg, #000000 0%, #050520 20%, #0a0a2e 40%, #0d0b1a 60%, #000000 100%)',
          }}
        />
        {/* Bioluminescent particles */}
        <div className="absolute top-[15%] left-[10%] w-2 h-2 rounded-full bioluminescent-float" style={{ background: 'var(--accent-cyan)', boxShadow: '0 0 20px var(--accent-cyan)' }} />
        <div className="absolute top-[30%] right-[15%] w-3 h-3 rounded-full bioluminescent-float" style={{ background: 'var(--accent-purple)', boxShadow: '0 0 30px var(--accent-purple)', animationDelay: '2s' }} />
        <div className="absolute top-[60%] left-[20%] w-1.5 h-1.5 rounded-full bioluminescent-float" style={{ background: 'var(--accent-gold)', boxShadow: '0 0 15px var(--accent-gold)', animationDelay: '4s' }} />
        <div className="absolute top-[45%] right-[25%] w-2 h-2 rounded-full bioluminescent-float" style={{ background: 'var(--accent-cyan)', boxShadow: '0 0 20px var(--accent-cyan)', animationDelay: '1s' }} />
        <div className="absolute bottom-[20%] left-[40%] w-2.5 h-2.5 rounded-full bioluminescent-float" style={{ background: 'var(--accent-magenta)', boxShadow: '0 0 25px var(--accent-magenta)', animationDelay: '3s' }} />
        <div className="absolute top-[70%] right-[40%] w-1 h-1 rounded-full bioluminescent-float" style={{ background: 'var(--accent-cyan)', boxShadow: '0 0 12px var(--accent-cyan)', animationDelay: '5s' }} />
        <div className="absolute top-[20%] left-[60%] w-1.5 h-1.5 rounded-full bioluminescent-float" style={{ background: 'var(--accent-purple)', boxShadow: '0 0 18px var(--accent-purple)', animationDelay: '6s' }} />
        <div className="absolute bottom-[35%] right-[10%] w-2 h-2 rounded-full bioluminescent-float" style={{ background: 'var(--accent-gold)', boxShadow: '0 0 22px var(--accent-gold)', animationDelay: '7s' }} />

        {/* Magical aura gradient overlay */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at 30% 70%, rgba(0,240,255,0.05) 0%, transparent 50%), radial-gradient(ellipse at 70% 30%, rgba(168,85,247,0.05) 0%, transparent 50%)',
        }} />
      </div>

      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="fixed top-0 left-0 right-0 w-full z-[110]"
      >
        <div className={`w-full px-6 sm:px-8 lg:px-12 py-4 transition-all duration-300 ease-out ${
          isScrolled ? 'bg-black/80 backdrop-blur-xl border-b border-aether-cyan/10' : 'bg-transparent'
        }`}>
          <div className="flex items-center justify-between">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <span className="font-orbitron text-aether-cyan text-xl tracking-[0.3em] font-bold">AETHER</span>
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map(link => (
                <a key={link.href} href={link.href} className="text-foreground/80 hover:text-aether-cyan font-medium gentle-animation hover:scale-105 text-sm tracking-wider uppercase">
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('forge')?.scrollIntoView({ behavior: 'smooth' })}
                className="hidden sm:block bg-aether-cyan/10 border border-aether-cyan/30 text-aether-cyan font-semibold px-6 py-3 rounded-md hover:bg-aether-cyan/20 hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] gentle-animation cursor-pointer font-orbitron text-sm tracking-wider"
              >
                Enter Wonderland
              </motion.button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden glass-effect p-3 rounded-full text-foreground hover:bg-aether-cyan/10 gentle-animation cursor-pointer z-[120] relative"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-md z-[80]" onClick={() => setIsMobileMenuOpen(false)} />
      )}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isMobileMenuOpen ? '0%' : '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="md:hidden fixed top-0 right-0 h-full w-72 max-w-[85vw] bg-black/95 backdrop-blur-xl border-l border-aether-cyan/10 z-[90]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-end p-4">
            <button onClick={() => setIsMobileMenuOpen(false)} className="glass-effect p-3 rounded-full text-foreground cursor-pointer">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="flex flex-col px-6 pb-6 space-y-4">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="px-4 py-3 text-foreground hover:text-aether-cyan hover:bg-aether-cyan/5 rounded-lg font-medium text-lg tracking-wider" onClick={() => setIsMobileMenuOpen(false)}>
                {link.label}
              </a>
            ))}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => { document.getElementById('forge')?.scrollIntoView({ behavior: 'smooth' }); setIsMobileMenuOpen(false) }}
              className="bg-aether-cyan/10 border border-aether-cyan/30 text-aether-cyan font-semibold px-6 py-3 rounded-lg gentle-animation mt-4 cursor-pointer font-orbitron text-sm tracking-wider"
            >
              Enter Wonderland
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center justify-center z-40">
        <div className="text-center max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <p className="font-orbitron text-aether-cyan/80 text-xs sm:text-sm tracking-[0.5em] uppercase mb-6">
              Neuro-Haptic VR Technology
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1 }}
            className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-black leading-[0.95] mb-8"
          >
            <span className="block text-foreground">YOUR FAIRYTALE</span>
            <span className="block text-foreground">AWAITS.</span>
            <span className="block mt-2" style={{
              background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-purple), var(--accent-gold))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundSize: '200% 200%',
              animation: 'auroraShift 8s ease infinite',
            }}>
              REALITY IS OBSOLETE.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-10"
          >
            Step into Wonderland. Stop being a spectator and start being the hero. Aether uses neuro-haptic VR to transport you into a dreamy, bioluminescent fantasy.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(0,240,255,0.4), 0 0 100px rgba(0,240,255,0.2)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('forge')?.scrollIntoView({ behavior: 'smooth' })}
              className="relative bg-aether-cyan/10 border-2 border-aether-cyan/40 text-aether-cyan font-orbitron font-bold px-10 py-4 rounded-lg text-lg tracking-wider cursor-pointer gentle-animation glow-cyan"
            >
              Enter Wonderland
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-30" />
    </div>
  )
}
