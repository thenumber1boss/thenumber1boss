"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { blogPosts } from "@/lib/blog-data"

export default function BlogList() {
  return (
    <div className="flex flex-col border-t border-border/40">
      {blogPosts.map((post, index) => (
        <Link 
          key={post.slug} 
          href={`/blog/${post.slug}`}
          className="group grid grid-cols-1 md:grid-cols-12 gap-6 py-12 border-b border-border/40 hover:bg-secondary/20 transition-colors px-4 sm:px-0"
        >
          {/* Date & Meta */}
          <div className="col-span-12 md:col-span-3 flex flex-row md:flex-col justify-between md:justify-start gap-2">
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {post.date}
            </span>
            <span className="font-mono text-xs text-primary/50">
              {post.readTime}
            </span>
          </div>

          {/* Content */}
          <div className="col-span-12 md:col-span-6 space-y-4">
            <h3 className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">
              {post.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {post.excerpt}
            </p>
            <div className="flex gap-2">
              {post.tags.map(tag => (
                <span key={tag} className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-muted-foreground">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action */}
          <div className="col-span-12 md:col-span-3 flex md:justify-end items-start pt-2">
            <span className="text-sm font-medium flex items-center gap-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
              Read Article <ArrowRight className="h-4 w-4" />
            </span>
          </div>
        </Link>
      ))}
    </div>
  )
}