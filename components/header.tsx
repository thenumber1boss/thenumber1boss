"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { profileData } from "@/lib/profile-data"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen)

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          scrolled ? "bg-background/80 backdrop-blur-md border-border/40 py-4" : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <Link href="/" className="flex flex-col hover:opacity-80 transition-opacity">
            <span className="text-sm font-bold tracking-tighter uppercase text-primary">
              {profileData.name}
            </span>
          </Link>

          <div className="hidden md:flex gap-6 text-sm font-medium">
            <a href={profileData.socials.linkedin} target="_blank" className="text-muted-foreground hover:text-primary transition-colors">LinkedIn</a>
            <a href={profileData.socials.github} target="_blank" className="text-muted-foreground hover:text-primary transition-colors">GitHub</a>
            <a href={`mailto:${profileData.socials.email}`} className="text-muted-foreground hover:text-primary transition-colors">Email</a>
          </div>
          
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="fixed top-16 left-0 right-0 z-40 md:hidden bg-background/95 backdrop-blur-md border-b border-border/40"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 flex flex-col gap-4">
            <a href={profileData.socials.linkedin} target="_blank" className="text-muted-foreground hover:text-primary transition-colors py-2">LinkedIn</a>
            <a href={profileData.socials.github} target="_blank" className="text-muted-foreground hover:text-primary transition-colors py-2">GitHub</a>
            <a href={`mailto:${profileData.socials.email}`} className="text-muted-foreground hover:text-primary transition-colors py-2">Email</a>
          </div>
        </motion.div>
      )}
    </>
  )
}