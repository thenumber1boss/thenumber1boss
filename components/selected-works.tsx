"use client"

import { ArrowUpRight } from "lucide-react"
import { profileData } from "@/lib/profile-data"

export default function SelectedWorks() {
  return (
    <section id="other-projects" className="py-24 px-4 sm:px-6 bg-secondary/10 border-t border-border/40">
      <div className="max-w-6xl mx-auto">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Other Projects</h2>
            <p className="text-muted-foreground max-w-xl">
              Selected client engagements and technical consulting work.
            </p>
          </div>
        </div>

        {/* Table Header (Hidden on mobile) - No Year Column */}
        <div className="hidden md:grid grid-cols-12 gap-4 py-4 border-b border-border/60 text-xs font-mono uppercase text-muted-foreground tracking-widest">
          <div className="col-span-5">Client</div>
          <div className="col-span-4">Service</div>
          <div className="col-span-3">Duration</div>
        </div>

        {/* Project List */}
        <div className="divide-y divide-border/40">
          {profileData.clientProjects.map((project, index) => (
            <div 
              key={index} 
              className="group grid grid-cols-1 md:grid-cols-12 gap-4 py-6 md:py-8 items-start md:items-center hover:bg-secondary/30 transition-colors px-2 -mx-2 rounded-lg"
            >
              {/* Client / Title */}
              <div className="col-span-12 md:col-span-5 font-bold text-lg md:text-base flex items-center gap-2">
                {project.client}
                {project.url && (
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="opacity-0 group-hover:opacity-100 transition-opacity text-primary"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </div>

              {/* Service */}
              <div className="col-span-12 md:col-span-4 text-muted-foreground text-sm">
                {project.service}
              </div>

              {/* Duration */}
              <div className="col-span-12 md:col-span-3 text-muted-foreground text-sm font-mono">
                {project.duration}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}