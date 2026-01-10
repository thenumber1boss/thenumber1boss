"use client"

import { motion } from "framer-motion"
import { ExternalLink, Layers, ShoppingBag, Cpu, Receipt, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { profileData } from "@/lib/profile-data"
import { useIsMobile } from "@/hooks/use-mobile"

export default function Ventures() {
  const isMobile = useIsMobile()
  return (
    <section id="ventures" className="py-24 px-4 sm:px-6 border-t border-border/40 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 md:flex md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Built by Grit.</h2>
            <p className="text-xl leading-[1.6] text-muted-foreground">
              My primary focus is <span className="text-primary font-medium">Building</span> solutions that abstract complexity and <span className="text-primary font-medium">Empower</span> users. Grit Informed Media is the umbrella under which I architect these ventures.
            </p>
          </div>
          <div className="hidden md:block">
            <Button variant="ghost" className="text-muted-foreground hover:text-primary">
              Visit Grit website <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* 5-Item Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* 1. Kyoraq (Flagship) - Top Left (2 Cols) */}
          <motion.div
            whileHover={{ y: -5 }}
            className="md:col-span-2 min-h-[400px] rounded-3xl bg-card border border-border/50 p-8 flex flex-col justify-between overflow-hidden relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-primary/5 rounded-lg">
                  <Layers className="h-6 w-6 text-primary" />
                </div>
                <span className="text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                  Flagship Product
                </span>
              </div>
              <h3 className="text-3xl font-bold mb-2">{profileData.ventures[1].name}</h3>
              <p className="text-lg text-muted-foreground max-w-lg">{profileData.ventures[1].description}</p>
              
              <div className="flex flex-wrap gap-2 mt-6">
                {profileData.ventures[1].stats?.map((stat, i) => (
                  <span key={i} className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-mono rounded-md uppercase tracking-wider">
                    {stat}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative z-10 mt-8 pt-8 border-t border-border/50 flex items-center justify-between">
               <span className="text-sm font-mono text-muted-foreground">Status: {profileData.ventures[1].status}</span>
               <Button variant="outline" className="rounded-full" onClick={() => window.open(profileData.ventures[1].url, '_blank')}>
                 Visit Platform <ExternalLink className="ml-2 h-4 w-4" />
               </Button>
            </div>
          </motion.div>

          {/* 2. Outpost (New AI Tool) - Top Right (1 Col) */}
          <motion.div
             whileHover={{ y: -5 }}
             className="md:col-span-1 rounded-3xl bg-card border border-border/50 p-8 flex flex-col justify-between relative group"
          >
            <div className={`absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 ${isMobile ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-opacity duration-500`} />
            <div>
              <div className="p-2 bg-primary/5 rounded-lg w-fit mb-4">
                <Share2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">{profileData.ventures[2].name}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{profileData.ventures[2].description}</p>
            </div>
             <div className="mt-6 flex flex-wrap gap-2">
                {profileData.ventures[2].stats?.map((stat, i) => (
                  <span key={i} className="px-2 py-1 bg-secondary text-secondary-foreground text-[10px] font-mono rounded-md uppercase">
                    {stat}
                  </span>
                ))}
              </div>
            <div className={`mt-6 pt-4 border-t border-border/50 flex items-center justify-between ${!isMobile && 'opacity-0 group-hover:opacity-100'} transition-opacity duration-300`}>
               <span className="text-xs font-mono text-muted-foreground uppercase">{profileData.ventures[2].status}</span>
               <span className="text-xs text-primary font-medium">Coming Soon</span>
            </div>
          </motion.div>

          {/* 3. Enceipt (Utility) - Bottom Left */}
          <motion.div
             whileHover={{ y: -5 }}
             className="md:col-span-1 rounded-3xl bg-card border border-border/50 p-8 flex flex-col justify-between relative group"
          >
             <div className={`absolute inset-0 bg-gradient-to-br from-gray-500/5 to-slate-500/5 ${isMobile ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-opacity duration-500`} />
             <div>
               <div className="p-2 bg-primary/5 rounded-lg w-fit mb-4">
                 <Receipt className="h-6 w-6 text-primary" />
               </div>
               <h3 className="text-xl font-bold mb-2">{profileData.ventures[3].name}</h3>
               <p className="text-muted-foreground text-sm">{profileData.ventures[3].description}</p>
             </div>
             <div className={`mt-4 pt-4 border-t border-border/50 ${!isMobile && 'opacity-0 group-hover:opacity-100'} transition-opacity duration-300`}>
               <a href={profileData.ventures[3].url} target="_blank" className="text-sm font-medium hover:underline inline-flex items-center">
                 enceipt.vercel.app <ExternalLink className="ml-1 h-3 w-3" />
               </a>
             </div>
          </motion.div>

          {/* 4. Carton (Logistics) - Bottom Middle */}
          <motion.div
             whileHover={{ y: -5 }}
             className="md:col-span-1 rounded-3xl bg-card border border-border/50 p-8 flex flex-col justify-between relative group"
          >
            <div className={`absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 ${isMobile ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-opacity duration-500`} />
            <div>
              <div className="p-2 bg-primary/5 rounded-lg w-fit mb-4">
                <ShoppingBag className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{profileData.ventures[4].name}</h3>
              <p className="text-muted-foreground text-sm">{profileData.ventures[4].description}</p>
            </div>
            <div className={`mt-4 pt-4 border-t border-border/50 ${!isMobile && 'opacity-0 group-hover:opacity-100'} transition-opacity duration-300`}>
              <a href={profileData.ventures[4].url} target="_blank" className="text-sm font-medium hover:underline inline-flex items-center">
                carton.com.ng <ExternalLink className="ml-1 h-3 w-3" />
              </a>
            </div>
          </motion.div>

          {/* 5. Grit AI (Infrastructure) - Bottom Right */}
          <motion.div
             whileHover={{ y: -5 }}
             className="md:col-span-1 rounded-3xl bg-primary text-primary-foreground p-8 flex flex-col justify-between relative overflow-hidden"
          >
             <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
             
             <div className="relative z-10">
               <Cpu className="h-6 w-6 mb-4 opacity-80" />
               <h3 className="text-xl font-bold mb-2">Grit AI System</h3>
               <p className="text-primary-foreground/70 text-sm">
                 Multi-tenant AI infrastructure powering Outpost and Kyoraq.
               </p>
             </div>
             <div className="relative z-10 mt-4">
               <span className="text-xs font-mono opacity-50 uppercase tracking-widest">Internal Tool</span>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}