// lib/data.ts
import { 
  Terminal, 
  Layers, 
  Cpu, 
  Globe, 
  Briefcase 
} from "lucide-react"

export const PROFILE = {
  identity: {
    name: "Adebayo Bamijoko",
    handle: "@thenumber1boss",
    role: "Executive Creative Director & Founder",
    company: "Grit Informed Media",
    location: "Abuja, Nigeria",
    tagline: "Engineering Business Logic.",
    summary: "Solutions work when they last, and they last when they’re built on what works.",
  },
  stats: {
    experience: "10+ Years", // Combined Mech + Soft
    ventures: 3,
    uptime: "99.9%",
    betaUsers: "50+"
  },
  ventures: [
    {
      name: "Kyoraq",
      url: "https://www.kyoraq.com",
      status: "Active Beta",
      description: "The unified Learning & Event Management System (LEMS). Replaces the disconnected webinar/LMS stack with one cohesive platform.",
      tech: ["Next.js", "Cloudflare Workers AI", "Real-time Webhooks"],
      metric: "40% Engagement Increase"
    },
    {
      name: "Carton",
      url: "https://carton.com.ng",
      status: "Live",
      description: "Hyperlocal e-commerce infrastructure optimizing logistics through proximity-based vendor connections.",
      tech: ["Next.js", "Geo-Location", "PWA"],
      metric: "Logistics Optimization"
    },
    {
      name: "Grit AI System",
      status: "Internal Infrastructure",
      description: "Multi-tenant AI architecture serving the entire portfolio. Modular, cost-efficient, and scalable.",
      tech: ["Cloudflare Workers", "Vector DB", "Edge Computing"],
      metric: "Multi-tenant Core"
    }
  ],
  philosophy: {
    core: "The business model matters more than the product.",
    approach: "Minimal cost, maximum efficiency. Breaking complex systems into small, independent parts while maintaining a holistic view."
  }
}