"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="py-8 sm:py-12 px-4 sm:px-6 border-t border-slate-300 dark:border-slate-800">
      <div className="mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between"
        >
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <div className="text-xl sm:text-2xl font-bold gradient-text mb-2">Adebayo Bamijoko</div>
            <p className="text-sm sm:text-base text-slate-600 dark:text-gray-400">
              Building the future, one line of code at a time.
            </p>
          </div>

          <div className="flex items-center space-x-3 sm:space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-slate-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 h-8 w-8 sm:h-10 sm:w-10"
              onClick={() => window.open("https://github.com/thenumber1boss", "_blank")}
            >
              <Github className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-slate-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 h-8 w-8 sm:h-10 sm:w-10"
              onClick={() => window.open("https://linkedin.com/in/thenumber1boss", "_blank")}
            >
              <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-slate-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 h-8 w-8 sm:h-10 sm:w-10"
              onClick={() => window.open("/resume.pdf", "_blank")}
            >
              <FileText className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-slate-300 dark:border-slate-800 text-center text-slate-600 dark:text-gray-400"
        >
          <p className="text-xs sm:text-sm">&copy; 2025 TechEntrepreneur - Adebayo Bamijoko.</p>
        </motion.div>
      </div>
    </footer>
  )
}
