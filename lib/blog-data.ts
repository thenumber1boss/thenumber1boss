export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  content?: string; // HTML or Markdown content
}

export const blogPosts: BlogPost[] = [
  {
    slug: "engineering-business-logic",
    title: "Engineering Business Logic: Why Code is Secondary",
    excerpt: "The most common mistake technical founders make is obsessing over the stack while ignoring the unit economics. Here is how I structure ventures first.",
    date: "Jan 12, 2026",
    readTime: "5 min read",
    tags: ["Strategy", "Venture Building"],
    content: `
      <p>We often talk about "Clean Code" but rarely about "Clean Business Logic." In the early days of building Kyoraq, I was tempted to over-engineer the backend...</p>
      <h2>The Trap of Perfection</h2>
      <p>Perfection in code is a liability if the product market fit isn't established. The goal is not to write code that lasts forever, but code that survives the next pivot.</p>
    `
  },
  {
    slug: "solving-logistics-lagos",
    title: "The Last Mile: Solving Logistics in High-Friction Markets",
    excerpt: "Western e-commerce models fail in Nigeria because they assume infrastructure that doesn't exist. Carton's hyperlocal approach is a response to this reality.",
    date: "Dec 28, 2025",
    readTime: "7 min read",
    tags: ["Logistics", "African Tech"],
  },
  {
    slug: "monoliths-vs-microservices",
    title: "In Defense of the Monolith (for Startups)",
    excerpt: "Microservices are great for Netflix. For a team of two? They are a death sentence. Why I stick to modular monoliths until Series A.",
    date: "Nov 15, 2025",
    readTime: "4 min read",
    tags: ["Architecture", "Engineering"],
  },
  {
    slug: "context-aware-design",
    title: "Designing for Low Bandwidth: A UX Imperative",
    excerpt: "Your fancy 3D animations look great in San Francisco, but they break the experience in Abuja. How we optimized Kyoraq for edge networks.",
    date: "Oct 10, 2025",
    readTime: "6 min read",
    tags: ["UX Design", "Performance"],
  }
];