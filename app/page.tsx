import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

import Header from "@/components/header"
import Hero from "@/components/hero"
import Ventures from "@/components/ventures"
import About from "@/components/about"
import SelectedWorks from "@/components/selected-works"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary selection:text-primary-foreground">
      <Header />
      
      {/* 1. The Statement */}
      <Hero />
      
      {/* 2. The Portfolio Companies (Grit, Kyoraq, Carton) */}
      <Ventures />
      
      {/* 3. The Philosophy & History (Narrative Engineering) */}
      <About />
      
      {/* 4. Client Projects (The "Contracts" List) */}
      <SelectedWorks />
      
      {/* 5. Blog Teaser - Links to the real /blog page */}
      <section className="py-24 px-4 sm:px-6 border-t border-border/40 bg-secondary/5">
        <div className="max-w-5xl mx-auto text-center space-y-8">
           <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest block">
             Thinking in Public
           </span>
           
           <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
             Thoughts, Unfiltered
           </h2>
           
           <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
             I share how I think about engineering, systems, startups, and building in Africa. Regularly. Honestly. Sometimes uncomfortable.
           </p>

           <div className="pt-4">
             <Button asChild variant="outline" className="rounded-full px-8 h-12 text-base">
               <Link href="/blog">
                 Read my thoughts <ArrowRight className="ml-2 h-4 w-4" />
               </Link>
             </Button>
           </div>
        </div>
      </section>

      {/* 6. Contact & Footer */}
      <Contact />
      <Footer />
    </main>
  )
}