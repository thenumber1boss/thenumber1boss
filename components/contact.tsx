"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("submitting")
    setTimeout(() => {
      setStatus("success")
      setTimeout(() => setStatus("idle"), 3000)
    }, 1500)
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 bg-background border-t border-border/40">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        
        <div className="flex flex-col justify-between h-full">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-6">
              Connect.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-sm">
              Open to discussions regarding venture building, technical architecture, and strategic partnerships.
            </p>
          </div>
          
          <div className="mt-12 md:mt-0">
             <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground block mb-2">Direct Channel</span>
             <a href="mailto:adebayo@gritinformedia.tech" className="text-xl md:text-2xl font-medium hover:text-primary/70 transition-colors inline-flex items-center gap-2">
               adebayo@gritinformedia.tech 
             </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 pt-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label htmlFor="name" className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Name</label>
              <Input 
                id="name"
                className="border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary text-base h-10 bg-transparent"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Email</label>
              <Input 
                id="email"
                type="email"
                className="border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary text-base h-10 bg-transparent"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Context</label>
            <Textarea 
              id="message"
              className="border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary text-base min-h-[100px] resize-none bg-transparent"
              required
            />
          </div>

          <div className="flex justify-end">
            <Button 
              type="submit" 
              variant="outline"
              disabled={status === "submitting"}
              className="rounded-full px-8 border-primary text-primary hover:bg-primary hover:text-white transition-all"
            >
              {status === "submitting" ? "Sending..." : status === "success" ? "Sent" : "Send Message"}
            </Button>
          </div>
        </form>

      </div>
    </section>
  )
}