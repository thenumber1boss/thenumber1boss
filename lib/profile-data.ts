export interface Venture {
  id: string;
  name: string;
  role: string;
  url: string;
  description: string;
  status: string;
  highlight?: string;
  stats?: string[];
}

export interface ClientProject {
  year?: string;
  client: string;
  service: string;
  duration: string;
  url?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface Bio {
  short: string;
  long: string;
}

export interface Socials {
  linkedin: string;
  github: string;
  email: string;
}

export interface ProfileData {
  name: string;
  role: string;
  company: string;
  location: string;
  tagline: string;
  bio: Bio;
  socials: Socials;
  ventures: Venture[];
  clientProjects: ClientProject[];
  experience: Experience[];
  skills: {
    technical: string[];
    strategic: string[];
  };
  philosophy: {
    title: string;
    content: string;
  }[];
}

export const profileData: ProfileData = {
  name: "Adebayo Bamijoko",
  role: "Founder & Creative Director",
  company: "Grit Informed Media",
  location: "Abuja, NG",
  tagline: "Building digital infrastructure.",
  bio: {
    short: "Solutions work when they last, and they last when they’re built on what works.",
    long: "In software, it is easy to build things that look good for a moment but crumble under pressure. To do things differently, I focus on the unsexy fundamentals—logic, efficiency, and real utility. I don't care about the trend of the week; I care about building infrastructure that is still standing and solving problems five years from now.",
  },
  socials: {
    linkedin: "https://linkedin.com/in/thenumber1boss",
    github: "https://github.com/thenumber1boss",
    email: "adebayo@gritinformedia.tech",
  },
  ventures: [
    {
      id: "grit",
      name: "Grit Informed Media",
      role: "Holding Company",
      url: "#",
      description: "My venture studio. Basically, the lab where we cook up solutions for problems that annoy us.",
      status: "Operational",
      highlight: "The Lab",
    },
    {
      id: "kyoraq",
      name: "Kyoraq",
      role: "EdTech Infrastructure",
      url: "https://www.kyoraq.com",
      description: "A unified platform for educators. We killed the need for Zoom + Teachable + Eventbrite and put it all in one box.",
      status: "Active Beta",
      stats: ["50+ Users", "Unified Platform"],
      highlight: "Flagship",
    },
    {
      id: "outpost",
      name: "Outpost",
      role: "AI Content Orchestrator",
      url: "#",
      description: "For creators who hate switching tabs. Manage LinkedIn, X, and your blog from one single dashboard.",
      status: "In Development",
      stats: ["Multi-Channel", "AI Analysis"],
      highlight: "New",
    },
    {
      id: "enceipt",
      name: "Enceipt",
      role: "SaaS Utility",
      url: "https://enceipt.vercel.app",
      description: "A dead-simple invoice generator that works offline. Because sometimes you just need to get paid.",
      status: "Operational",
      stats: ["Offline-First", "PWA"],
    },
    {
      id: "carton",
      name: "Carton",
      role: "Hyperlocal Logistics",
      url: "https://carton.com.ng",
      description: "Connecting vendors to the closest logistics partners. It's about moving goods without the usual headache.",
      status: "Operational",
      stats: ["Hyperlocal", "Logistics"],
    },
    {
      id: "axii",
      name: "Axii",
      role: "Outbound Automation Engine",
      url: "https://axii.vercel.app",
      description: "An autonomous B2B lead generation system. Set a target niche and location — the swarm scrapes, enriches, scores, and drafts personalized outreach. You wake up to qualified leads, not spreadsheets.",
      status: "Live",
      stats: ["Autonomous Scraping", "AI Scoring", "Outbound Automation"],
    },
  ],
  clientProjects: [
    {
      client: "Dede Consult LLC",
      service: "Corporate Identity",
      duration: "2 weeks",
      url: "https://dede-consult.vercel.app",
    },
    {
      client: "Icandit Dynamic Consult",
      service: "Digital Platform",
      duration: "3 weeks",
      url: "https://icandit.com.ng",
    },
    {
      client: "Ionworx Limited",
      service: "Commercial Platform",
      duration: "2 weeks",
      url: "https://www.ionworx.ng",
    },
    {
      client: "Bamidele and Sons",
      service: "Digital Catalogue",
      duration: "2 weeks",
      url: "https://bamiandsons.vercel.app",
    },
    {
      client: "ConnectUsOnline",
      service: "Financial Record System",
      duration: "8 weeks",
      url: "#",
    },
  ],
  experience: [
    {
      company: "Grit Informed Media",
      role: "Executive Creative Director & Lead Engineer",
      period: "2022 — Present",
      description: "Managing a team of 12 talents across media and dev. Architected the GRIT AI Infrastructure (Cloudflare Workers + MongoDB) to power multiple apps. Spearheaded the NextGen Tech-Fi Web App (achieving a 98% UI/UX match) and built Carton's multi-vendor geolocation engine.",
    },
    {
      company: "ALX Africa",
      role: "Software Engineering Fellow",
      period: "2023 — 2024",
      description: "Intensive specialization in Front-End Engineering. Mastered React/Next.js architectures and peer-led system design for scalable web applications.",
    },
    {
      company: "Upwork",
      role: "Digital Marketing Manager",
      period: "2021 — 2023",
      description: "Managed global campaigns and remote client strategies. Bridged the gap between technical product features and user acquisition funnels.",
    },
  ],
  skills: {
    technical: [
      "Web Development: React.js, Next.js, Node.js, NestJs, Express.js, Shadcn-UI, Tailwind CSS, Supabase, Firebase",
      "Database: MongoDB Atlas, SQL",
      "Version Control: Git, GitHub, GitLens",
      "Project Management: Agile, Trello, Jira",
      "AI & Automation: ChatGPT, GitHub CoPilot, V0, Cursor",
    ],
    strategic: [
      "Venture Building",
      "Product Strategy",
      "Unit Economics",
      "Technical Direction",
      "System Architecture",
      "Multi-tenant Database Design",
    ],
  },
  philosophy: [
    {
      title: "Viability First",
      content: "If it doesn't make money or solve a real pain, it's just a hobby. I build systems designed to survive and generate revenue.",
    },
    {
      title: "Unified Systems",
      content: "I hate fragmentation. I build shared infrastructure—like the Grit AI System—so I don't have to reinvent the wheel for every project.",
    },
    {
      title: "Context Aware",
      content: "What works in San Francisco often fails in Abuja. I build for the reality of the market, not the ideal.",
    },
  ],
};