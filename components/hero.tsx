// components/hero.tsx
"use client"

import { motion } from "framer-motion"
import { ArrowDownRight, Globe, Terminal } from "lucide-react"
import { PROFILE } from "@/lib/data"

export default function Hero() {
  // Stagger animation configuration for a cohesive "load" feel
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  }

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-end pb-20 px-6 md:px-12 pt-32 border-b border-border bg-background">
      {/* Background Technical Grid - Subtle, rigid, engineering-focused */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none dark:opacity-50" />

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-[1800px] w-full mx-auto z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end"
      >
        
        {/* Left Column: Context & Metadata */}
        <div className="lg:col-span-4 flex flex-col justify-between h-full gap-12">
          <motion.div variants={item} className="flex items-center gap-3 text-xs font-mono tracking-widest uppercase text-muted-foreground">
            Founder
            <span className="text-muted-foreground/50">|</span>
            Creative Director

          </motion.div>

          <motion.div variants={item} className="max-w-md">
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed text-balance font-light">
              {PROFILE.identity.summary}
            </p>
          </motion.div>
        </div>

        {/* Right Column: The "Manifesto" Headline */}
        <div className="lg:col-span-8 relative">
          <motion.h1 
            variants={item}
            className="text-[13vw] lg:text-[10vw] font-bold leading-[0.85] tracking-tighter text-primary"
          >
            Engineering
          </motion.h1>
          <motion.div variants={item} className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            <h1 className="text-[13vw] lg:text-[10vw] font-bold leading-[0.85] tracking-tighter text-foreground/40">
              Business
            </h1>
            <div className="flex flex-col gap-2 mt-2 md:mt-0">
               <span className="h-px w-full md:w-32 bg-border" />
               <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">Logic & Systems</span>
            </div>
          </motion.div>
          <motion.h1 
            variants={item}
            className="text-[13vw] lg:text-[10vw] font-bold leading-[0.85] tracking-tighter text-primary"
          >
            Logic.
          </motion.h1>
        </div>

      </motion.div>

      {/* Floating Action / Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 right-6 md:right-12 flex items-center gap-4"
      >
        <span className="font-mono text-xs text-muted-foreground/60 uppercase hidden md:block">Explore Ventures</span>
        <button 
            onClick={() => document.getElementById('ventures')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-12 h-12 border border-border rounded-full flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
        >
          <ArrowDownRight className="w-5 h-5" />
        </button>
      </motion.div>
    </section>
  )
}