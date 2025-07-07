"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  if (!mounted) {
    return (
      <header className="fixed top-0 right-0 left-0 z-50 bg-transparent">
        <nav className="mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="text-lg sm:text-xl md:text-2xl font-bold gradient-text">TechEntrepreneur</div>
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm lg:text-base text-slate-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
              <div className="w-8 h-8 lg:w-10 lg:h-10" />
            </div>
            <div className="md:hidden">
              <div className="w-8 h-8" />
            </div>
          </div>
        </nav>
      </header>
    )
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${scrolled ? "glass-effect" : "bg-transparent"}`}
    >
      <nav className="mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-lg sm:text-xl md:text-2xl font-bold gradient-text"
          >
            Adebayo Bamijoko
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm lg:text-base text-slate-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="text-slate-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 h-8 w-8 lg:h-10 lg:w-10"
            >
              {resolvedTheme === "dark" ? (
                <Sun className="h-4 w-4 lg:h-5 lg:w-5" />
              ) : (
                <Moon className="h-4 w-4 lg:h-5 lg:w-5" />
              )}
            </Button>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="text-slate-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 h-8 w-8"
            >
              {resolvedTheme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 h-8 w-8"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-3 pb-3 border-t border-slate-300 dark:border-slate-700/50"
          >
            <div className="pt-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 px-2 text-sm text-slate-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-200 dark:hover:bg-slate-800/50 rounded-md transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  )
}
