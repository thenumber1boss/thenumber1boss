"use client"

import { motion } from "framer-motion"
import { ExternalLink, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-20 px-4 sm:px-6">
      <div className="mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-slate-900 dark:text-white">
            About <span className="gradient-text">Me</span>
          </h2>

          <div className="text-base sm:text-lg md:text-xl text-slate-700 dark:text-gray-300 leading-relaxed space-y-4 sm:space-y-6 mb-8 sm:mb-12">
            <p>
              I'm a technical entrepreneur who bridges the gap between cutting-edge development and strategic business
              thinking.
            </p>
            <p>
              I combine deep technical expertise with a founder's mindset to build digital products that don't just
              function—they drive growth, solve real problems, and deliver measurable results.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6"
          >
            <Button
              variant="outline"
              size="sm"
              className="border-emerald-500 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500 hover:text-white group w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 bg-transparent"
            >
              <FileText className="mr-2 h-4 w-4" />
              View Resume
              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-500 hover:text-white group w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 bg-transparent"
              onClick={() => window.open("https://linkedin.com/in/thenumber1boss", "_blank")}
            >
              LinkedIn Profile
              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
