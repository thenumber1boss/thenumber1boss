"use client"

import { motion } from "framer-motion"
import { CheckCircle, Target, Zap, Users } from "lucide-react"

const benefits = [
  {
    icon: Target,
    title: "Strategic Thinking",
    description: "Every line of code serves a business purpose",
  },
  {
    icon: Zap,
    title: "Rapid Execution",
    description: "From concept to deployment in record time",
  },
  {
    icon: Users,
    title: "Collaborative Approach",
    description: "Your goals become my technical roadmap",
  },
  {
    icon: CheckCircle,
    title: "Proven Results",
    description: "Track record of delivering growth-driving solutions",
  },
]

export default function WhyWorkWithMe() {
  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 bg-slate-800/50">
      <div className="mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">
            Why Work <span className="gradient-text">With Me</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect rounded-2xl p-6 sm:p-8 md:p-12 mb-8 sm:mb-12"
          >
            <blockquote className="text-base sm:text-xl md:text-2xl text-gray-200 leading-relaxed italic text-center">
              "I don't just code — I collaborate with business owners to understand their goals, solve problems, and
              build apps that drive growth. With a startup founder's mindset and a developer's skillset, I deliver
              solutions that make sense technically and commercially."
            </blockquote>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-start space-x-3 sm:space-x-4"
              >
                <div className="flex-shrink-0">
                  <benefit.icon className="h-6 w-6 sm:h-8 sm:w-8 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}