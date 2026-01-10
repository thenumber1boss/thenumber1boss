"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const GOOGLE_FORM_ACTION_URL =
  "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeKDvLACmCQ1yL3EkK2vM8sxuatRKtlOqr27tvpU67v-fcq5w/formResponse"

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle")
  const [error, setError] = useState<string | null>(null)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    honeypot: "",
  })

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const wordCount = formData.message.trim().split(/\s+/).length

    if (formData.honeypot) return "Bot detected."
    if (!formData.name || !formData.email || !formData.message) return "All fields are required."
    if (!emailRegex.test(formData.email)) return "Invalid email address."
    if (wordCount < 10) return "Message must be at least 10 words."

    return null
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const validationError = validateForm()
    if (validationError) {
      setError(validationError)
      return
    }

    setStatus("submitting")
    setError(null)

    const today = new Date()
    const year = today.getFullYear().toString()
    const month = (today.getMonth() + 1).toString()
    const day = today.getDate().toString()

    const payload = new FormData()
    payload.append("entry.2116052852", formData.name)
    payload.append("entry.1558582620", formData.email)
    payload.append("entry.93691977", formData.message)
    payload.append("entry.1183170113_year", year)
    payload.append("entry.1183170113_month", month)
    payload.append("entry.1183170113_day", day)

    try {
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: "POST",
        mode: "no-cors",
        body: payload,
      })

      setFormData({ name: "", email: "", message: "", honeypot: "" })
      setStatus("success")
      setTimeout(() => setStatus("idle"), 3000)
    } catch (err) {
      console.error(err)
      setError("Something went wrong. Please try again.")
      setStatus("idle")
    }
  }

  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 bg-background border-t border-border/40"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* LEFT */}
        <div className="flex flex-col justify-between h-full">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-6">
              Connect.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-sm">
              Open to discussions regarding venture building, technical architecture,
              and strategic partnerships.
            </p>
          </div>

          <div className="mt-12 md:mt-0">
            <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground block mb-2">
              Direct Channel
            </span>
            <a
              href="mailto:adebayo@gritinformedia.tech"
              className="text-xl md:text-2xl font-medium hover:text-primary/70 transition-colors"
            >
              adebayo@gritinformedia.tech
            </a>
          </div>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-8 pt-2">
          
          {/* Honeypot */}
          <input
            type="text"
            name="honeypot"
            value={formData.honeypot}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                Name
              </label>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary bg-transparent"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                Email
              </label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary bg-transparent"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
              Context
            </label>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary min-h-[100px] resize-none bg-transparent"
            />
          </div>

          {error && (
            <p className="text-sm text-red-500">{error}</p>
          )}

          <div className="flex justify-end">
            <Button
              type="submit"
              variant="outline"
              disabled={status === "submitting"}
              className="rounded-full px-8 border-primary text-primary hover:bg-primary hover:text-white transition-all"
            >
              {status === "submitting"
                ? "Sending..."
                : status === "success"
                ? "Sent ✓"
                : "Send Message"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}
