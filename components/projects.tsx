"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Eye, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

const projects = [
  {
    id: 1,
    title: "Closed Financial Management Web App",
    tag: "FinTech",
    image: "/fin-web-app.png?height=300&width=400",
    description:
      "A multi-user financial tracking tool with admin oversight, authentication, and data migration from SQLite to MongoDB.",
    features: [
      "Multi-user authentication system",
      "Admin dashboard with oversight capabilities",
      "Database migration from SQLite to MongoDB",
      "Real-time financial tracking",
      "Secure data handling and encryption",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    demoUrl: "https://connectusonline.vercel.app",
  },
  {
    id: 2,
    title: "Multi-Vendor E-commerce Platform",
    tag: "E-commerce",
    image: "/e-commerce.png?height=300&width=400",
    description:
      "A 3-faced platform (User, Vendor, Admin) with regional product visibility, Quick View feature, and AI-powered shopping assistant.",
    features: [
      "Three-tier user system (User/Vendor/Admin)",
      "Regional product visibility controls",
      "Quick View product feature",
      "AI shopping assistant for price comparison",
      "Rating and review system integration",
    ],
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "OpenAI API"],
    demoUrl: "https://www.carton.com.ng",
  },
  {
    id: 3,
    title: "Learning/Event Management System",
    tag: "EdTech",
    image: "/lms.png?height=300&width=400",
    description:
      "For schools or trainers — create events, manage instructors and learners, upload learning tracks, conduct messaging, run quizzes, and track certificates.",
    features: [
      "Event creation and management",
      "Instructor and learner management",
      "Learning track uploads and organization",
      "In-app messaging system",
      "Quiz creation and management",
      "Certificate tracking via superadmin dashboard",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "AWS S3"],
    demoUrl: "https://nextegen-lms.vercel.app",
  },
  {
    id: 4,
    title: "Enceipt – PWA Invoice Generator",
    tag: "Business Tool",
    image: "/enceipt.png?height=300&width=400",
    description:
      "A lightweight offline-first PWA that syncs to the cloud. Allows freelancers and small businesses to issue branded invoices and receipts easily.",
    features: [
      "Offline-first PWA functionality",
      "Cloud synchronization",
      "Branded invoice templates",
      "Receipt generation",
      "Client management system",
      "Payment tracking",
    ],
    technologies: ["PWA", "IndexedDB", "Service Workers", "Firebase", "React"],
    demoUrl: "https://enceipt.vercel.app",
  },
]

const categories = ["All", "FinTech", "E-commerce", "EdTech", "Business Tool"]

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
  const [previewProject, setPreviewProject] = useState<(typeof projects)[0] | null>(null)

  const filteredProjects = selectedCategory === "All" ? projects : projects.filter((project) => project.tag === selectedCategory)

  const openDetails = (project: typeof projects[0]) => {
    setSelectedProject(project)
  }

  const openPreview = (project: typeof projects[0]) => {
    setPreviewProject(project)
  }

  const closeDetails = () => {
    setSelectedProject(null)
  }

  const closePreview = () => {
    setPreviewProject(null)
  }

  return (
    <section id="projects" className="py-12 sm:py-20 px-4 sm:px-6">
      <div className="mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8">
            Real-world applications that blend technical excellence with business impact
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? "bg-emerald-500 hover:bg-emerald-600 text-xs sm:text-sm px-3 py-2 sm:px-4 sm:py-2"
                    : "border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900 text-xs sm:text-sm px-3 py-2 sm:px-4 sm:py-2"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-effect rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <div className="relative">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-40 sm:h-48 object-cover"
                />
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                  <span className="bg-emerald-500 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium">
                    {project.tag}
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-white">{project.title}</h3>
                <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 leading-relaxed">{project.description}</p>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900 flex-1 text-xs sm:text-sm px-3 py-2 sm:px-4 sm:py-2"
                    onClick={() => openDetails(project)}
                  >
                    Learn More
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 flex-1 text-xs sm:text-sm px-3 py-2 sm:px-4 sm:py-2"
                    onClick={() => openPreview(project)}
                  >
                    <Eye className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                    View Project
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Details Modal */}
        <Dialog open={!!selectedProject} onOpenChange={closeDetails}>
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-slate-800 border-slate-700">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-xl sm:text-2xl font-bold text-white mb-4">{selectedProject.title}</DialogTitle>
                </DialogHeader>

                <div className="space-y-4 sm:space-y-6">
                  <img
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    className="w-full h-48 sm:h-64 object-cover rounded-lg"
                  />

                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Project Overview</h4>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{selectedProject.description}</p>
                  </div>

                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Key Features</h4>
                    <ul className="list-disc list-inside text-sm sm:text-base text-gray-300 space-y-1 sm:space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span key={index} className="bg-emerald-500/20 text-emerald-400 px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <Button
                      className="bg-emerald-500 hover:bg-emerald-600 text-white flex-1"
                      onClick={() => window.open(selectedProject.demoUrl, "_blank")}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Visit Live Project
                    </Button>
                    <Button
                      variant="outline"
                      className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 flex-1"
                      onClick={() => openPreview(selectedProject)}
                    >
                      <Eye className="mr-2 h-4 w-4" />
                      Preview in Modal
                    </Button>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>

        {/* Iframe Viewer Modal */}
        <Dialog open={!!previewProject} onOpenChange={closePreview}>
          <DialogContent className="max-w-6xl max-h-[90vh] p-0 bg-slate-800 border-slate-700">
            {previewProject && (
              <div className="h-[70vh] sm:h-[80vh] flex flex-col">
                <div className="flex items-center justify-between p-3 sm:p-4 border-b border-slate-700">
                  <h3 className="text-base sm:text-lg font-semibold text-white">{previewProject.title}</h3>
                </div>
                <iframe
                  src={previewProject.demoUrl}
                  className="flex-1 w-full border-0"
                  title={previewProject.title}
                />
                <div className="p-3 sm:p-4 border-t border-slate-700 text-center">
                  <Button
                    className="bg-emerald-500 hover:bg-emerald-600 text-white"
                    onClick={() => window.open(previewProject.demoUrl, "_blank")}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Open in New Tab
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}