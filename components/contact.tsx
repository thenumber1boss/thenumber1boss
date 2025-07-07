"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Mail, Calendar, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const GOOGLE_FORM_ACTION_URL =
  "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeKDvLACmCQ1yL3EkK2vM8sxuatRKtlOqr27tvpU67v-fcq5w/formResponse"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    honeypot: "",
  })

  const [errors, setErrors] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const wordCount = formData.message.trim().split(/\s+/).length

    if (formData.honeypot) return "Bot detected."
    if (!formData.name || !formData.email || !formData.message) return "All fields are required."
    if (!emailRegex.test(formData.email)) return "Please enter a valid email."
    if (wordCount < 10) return "Message should be at least 10 words."

    return null
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const validationError = validateForm()
    if (validationError) {
      setErrors(validationError)
      return
    }

    setIsSubmitting(true)
    setErrors(null)

    // Extract today's date
    const today = new Date()
    const year = today.getFullYear().toString()
    const month = (today.getMonth() + 1).toString()
    const day = today.getDate().toString()

    const formPayload = new FormData()
    formPayload.append("entry.2116052852", formData.name)
    formPayload.append("entry.1558582620", formData.email)
    formPayload.append("entry.93691977", formData.message)
    formPayload.append("entry.1183170113_year", year)
    formPayload.append("entry.1183170113_month", month)
    formPayload.append("entry.1183170113_day", day)

    try {
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: "POST",
        mode: "no-cors",
        body: formPayload,
      })

      setFormData({ name: "", email: "", message: "", honeypot: "" })
      setIsSubmitted(true)
      setTimeout(() => setIsSubmitted(false), 4000)
    } catch (err) {
      console.error("Submission error:", err)
      alert("❌ Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-12 sm:py-20 px-4 sm:px-6">
      <div className="mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-slate-900 dark:text-white">
            Let's Build <span className="gradient-text">Together</span>
          </h2>
          <p className="text-base sm:text-xl text-slate-700 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to turn your vision into a powerful digital product? Let's discuss your project.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Honeypot field */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
              />

              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white h-12 sm:h-14"
              />

              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white h-12 sm:h-14"
              />

              <Textarea
                name="message"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-sm sm:text-base"
              />

              {errors && <div className="text-red-600 dark:text-red-400 text-sm sm:text-base">{errors}</div>}

              {!isSubmitted ? (
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white group h-12 sm:h-14 text-sm sm:text-base flex items-center justify-center"
                  size="lg"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1, ease: "linear" }}
                    >
                      <Send className="h-4 w-4 animate-spin" />
                    </motion.div>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-green-600 dark:text-green-400 text-center font-semibold"
                >
                  ✅ Message Sent! I'll get back to you soon.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            <div className="glass-effect rounded-xl p-4 sm:p-6 border border-slate-200 dark:border-white/10">
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white mb-3 sm:mb-4">
                Get In Touch
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-slate-700 dark:text-gray-300 break-all">
                    adebayo@gritinformedia.tech
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-slate-700 dark:text-gray-300">+234 813 1140 937</span>
                </div>
              </div>
            </div>

            <div className="glass-effect rounded-xl p-4 sm:p-6 border border-slate-200 dark:border-white/10">
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white mb-3 sm:mb-4">
                Connect With Me
              </h3>
              <div className="flex space-x-3 sm:space-x-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-emerald-500 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500 hover:text-white h-10 w-10 sm:h-12 sm:w-12 bg-transparent"
                  onClick={() => window.open("https://github.com/thenumber1boss", "_blank")}
                >
                  <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-500 hover:text-white h-10 w-10 sm:h-12 sm:w-12 bg-transparent"
                  onClick={() => window.open("https://linkedin.com/in/thenumber1boss", "_blank")}
                >
                  <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </div>
            </div>

            <div className="glass-effect rounded-xl p-4 sm:p-6 border border-slate-200 dark:border-white/10">
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white mb-3 sm:mb-4">
                Quick Response
              </h3>
              <p className="text-sm sm:text-base text-slate-700 dark:text-gray-300 leading-relaxed">
                I typically respond to all inquiries within 24 hours. For urgent projects, feel free to mention it in
                your message.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
