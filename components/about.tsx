"use client"

import { profileData } from "@/lib/profile-data"

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 bg-background relative">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 items-start">
        
        {/* LEFT COLUMN: Sticky Founder's Mindset */}
        {/* sticky top-32 ensures it stays in view while you scroll the long right column */}
        <div className="md:col-span-5 md:sticky md:top-32 self-start">
           <h2 className="text-sm font-mono text-muted-foreground uppercase tracking-widest mb-6">
             The Founder's Mindset
           </h2>
           <p className="text-xl md:text-2xl md:leading-[1.5] font-medium text-primary/90">
             {profileData.bio.long}
           </p>
        </div>

        {/* RIGHT COLUMN: Experience, Philosophy, & Stack */}
        <div className="md:col-span-7 space-y-20">
          

          {/* 1. Philosophy */}
          <div>
            <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-widest mb-8 border-b border-border pb-2">
              Core Philosophy
            </h3>
            <div className="grid gap-10">
              {profileData.philosophy.map((item, index) => (
                <div key={index} className="group">
                  <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Technical Architecture */}
          <div>
            <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-widest mb-8 border-b border-border pb-2">
              Technical Architecture
            </h3>
            <div className="grid grid-cols-2 gap-8">
               <div>
                 <span className="block text-xs font-bold uppercase text-primary mb-4">Engineering</span>
                 <ul className="space-y-3">
                   {profileData.skills.technical.map(skill => (
                     <li key={skill} className="text-muted-foreground text-sm border-b border-border/40 pb-2 last:border-0">
                       {skill}
                     </li>
                   ))}
                 </ul>
               </div>
               <div>
                 <span className="block text-xs font-bold uppercase text-primary mb-4">Strategy</span>
                 <ul className="space-y-3">
                   {profileData.skills.strategic.map(skill => (
                     <li key={skill} className="text-muted-foreground text-sm border-b border-border/40 pb-2 last:border-0">
                       {skill}
                     </li>
                   ))}
                 </ul>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}