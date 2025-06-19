"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Mail, Calendar, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission (integrate with Formspree or similar)
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Let's Build <span className="gradient-text">Together</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto">
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
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-slate-800 border-slate-700 text-white placeholder-gray-400 h-12 sm:h-14"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-slate-800 border-slate-700 text-white placeholder-gray-400 h-12 sm:h-14"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-slate-800 border-slate-700 text-white placeholder-gray-400 text-sm sm:text-base"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white group h-12 sm:h-14 text-sm sm:text-base"
                size="lg"
              >
                Send Message
                <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
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
            <div className="glass-effect rounded-xl p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Get In Touch</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-300 break-all">adebayo@gritinformedia.tech</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-300">+234 813 1140 937</span>
                </div>
              </div>
            </div>

            <div className="glass-effect rounded-xl p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Connect With Me</h3>
              <div className="flex space-x-3 sm:space-x-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900 h-10 w-10 sm:h-12 sm:w-12"
                  onClick={() => window.open('https://github.com/thenumber1boss', '_blank')}
                >
                  <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 h-10 w-10 sm:h-12 sm:w-12"
                  onClick={() => window.open('https://linkedin.com/in/thenumber1boss', '_blank')}
                >
                  <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </div>
            </div>

            <div className="glass-effect rounded-xl p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Quick Response</h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
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