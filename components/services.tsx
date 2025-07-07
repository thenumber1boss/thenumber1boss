"use client"

import { motion } from "framer-motion"
import { Globe, Smartphone, Brain, Lightbulb, Palette } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Web App Development",
    description: "Full-stack applications built for scale and performance.",
  },
  {
    icon: Smartphone,
    title: "Website Development",
    description: "Modern, responsive websites that convert visitors to customers.",
  },
  {
    icon: Brain,
    title: "AI App Integration",
    description: "Intelligent features that enhance user experience and business value.",
  },
  {
    icon: Lightbulb,
    title: "MVP Technical Strategy",
    description: "Strategic technical planning for rapid, cost-effective product launches.",
  },
  {
    icon: Palette,
    title: "Business-Centric Product Design",
    description: "User experiences designed with business goals and metrics in mind.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-12 sm:py-20 px-4 sm:px-6 bg-slate-100 dark:bg-slate-800/50">
      <div className="mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-slate-900 dark:text-white">
            What I <span className="gradient-text">Do</span>
          </h2>
          <p className="text-base sm:text-xl text-slate-700 dark:text-gray-300 max-w-3xl mx-auto">
            I offer comprehensive technical services with a strategic business perspective
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-effect rounded-xl p-6 sm:p-8 hover:scale-105 transition-transform duration-300 border border-slate-200 dark:border-white/10"
            >
              <service.icon className="h-10 w-10 sm:h-12 sm:w-12 text-emerald-600 dark:text-emerald-400 mb-4 sm:mb-6" />
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-slate-900 dark:text-white">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-700 dark:text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
