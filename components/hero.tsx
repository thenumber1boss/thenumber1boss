"use client"

import { motion } from "framer-motion"
import { ArrowRight, Code, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Enhanced3DAnimation from "./enhanced-3d-animation"

export default function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden px-4 sm:px-6 pt-16 sm:pt-20">
      {/* Background animation area */}
      <div className="hero-animation-bg">
        <Enhanced3DAnimation />
      </div>

      <div className="mx-auto relative z-10">
        <div className="min-h-screen flex items-center">
          {/* Main content with overlapping design */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="hero-text-overlay max-w-4xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex items-center space-x-3 mb-4 sm:mb-8"
            >
              <Code className="h-6 w-6 sm:h-8 sm:w-8 text-emerald-400" />
              <span className="text-gray-400 dark:text-gray-400 light:text-gray-500">+</span>
              <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-coral-400" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-8 leading-tight text-white dark:text-white light:text-gray-900"
            >
              I Build with <span className="gradient-text inline">Code</span>.
              <br />I Think Like a <span className="gradient-text inline">
                <br/>Founder</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-base max-w-[90%] sm:text-xl md:text-2xl text-gray-300 dark:text-gray-300 light:text-gray-600 mb-6 sm:mb-12 leading-relaxed sm:max-w-2xl"
            >
              A technical entrepreneur who crafts digital products that don't just work — they{" "}
              <span className="text-emerald-400 font-semibold">deliver results</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row sm:items-start space-y-3 sm:space-y-0 sm:space-x-6"
            >
              <Button
                size="lg"
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg group shadow-lg shadow-emerald-500/25"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900 px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg shadow-lg"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Hire Me
              </Button>
            </motion.div>

            {/* Floating stats/badges */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-8 sm:mt-16 flex flex-wrap gap-3 sm:gap-4"
            >
              {[
                { label: "Projects Delivered", value: "50+" },
                { label: "Years Experience", value: "5+" },
                { label: "Happy Clients", value: "30+" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                  className="glass-effect rounded-xl px-4 py-3 sm:px-6 sm:py-4 backdrop-blur-sm"
                >
                  <div className="text-lg sm:text-2xl font-bold text-emerald-400">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-400 dark:text-gray-400 light:text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Ambient background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>
    </section>
  )
}