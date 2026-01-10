"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { profileData } from "@/lib/profile-data"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        scrolled ? "bg-background/80 backdrop-blur-md border-border/40 py-4" : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-sm font-bold tracking-tighter uppercase text-primary">
            {profileData.name}
          </span>
        </div>

        <div className="flex gap-6 text-sm font-medium">
          <a href={profileData.socials.linkedin} target="_blank" className="text-muted-foreground hover:text-primary transition-colors">LinkedIn</a>
          <a href={profileData.socials.github} target="_blank" className="text-muted-foreground hover:text-primary transition-colors">GitHub</a>
          <a href={`mailto:${profileData.socials.email}`} className="text-muted-foreground hover:text-primary transition-colors">Email</a>
        </div>
        
        <div className="md:hidden">
            {/* Simple mobile placeholder - can be expanded later */}
            <span className="text-xs font-mono text-muted-foreground">MENU</span>
        </div>
      </div>
    </motion.header>
  )
}