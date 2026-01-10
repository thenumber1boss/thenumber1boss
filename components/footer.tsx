"use client"

import { profileData } from "@/lib/profile-data"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="py-12 px-4 sm:px-6 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8 md:items-center">
        
        <div className="flex flex-col">
          <span className="font-bold text-lg">{profileData.name}</span>
          <span className="text-xs text-muted-foreground">{profileData.role}</span>
        </div>

        <div className="flex gap-6 text-sm font-medium">
          <a href={profileData.socials.linkedin} target="_blank" className="text-muted-foreground hover:text-primary transition-colors">LinkedIn</a>
          <a href={profileData.socials.github} target="_blank" className="text-muted-foreground hover:text-primary transition-colors">GitHub</a>
          <a href={`mailto:${profileData.socials.email}`} className="text-muted-foreground hover:text-primary transition-colors">Email</a>
        </div>

        <div className="text-xs text-muted-foreground font-mono">
           © {year} {profileData.company}.
        </div>

      </div>
    </footer>
  )
}