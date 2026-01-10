import Header from "@/components/header"
import Footer from "@/components/footer"
import { blogPosts } from "@/lib/blog-data"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

// This would normally fetch data based on the slug
export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(p => p.slug === params.slug)

  if (!post) {
    // In a real app, you might want to show a custom 404
    // return notFound() 
    
    // For demo purposes, we fallback to the first post if not found
    // so the preview always works
  }
  
  const displayPost = post || blogPosts[0]

  return (
    <main className="min-h-screen bg-background selection:bg-primary selection:text-primary-foreground">
      <Header />
      
      <article className="pt-32 pb-24 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          
          {/* Back Link */}
          <Link href="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-12">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Insights
          </Link>

          {/* Header */}
          <header className="mb-12">
            <div className="flex gap-4 text-xs font-mono uppercase tracking-widest text-muted-foreground mb-6">
              <span>{displayPost.date}</span>
              <span>—</span>
              <span>{displayPost.readTime}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
              {displayPost.title}
            </h1>
            <div className="flex flex-wrap gap-2">
              {displayPost.tags.map(tag => (
                <span key={tag} className="text-xs bg-secondary px-2 py-1 rounded-md text-muted-foreground">
                  {tag}
                </span>
              ))}
            </div>
          </header>

          {/* Content Body */}
          <div className="prose prose-zinc dark:prose-invert max-w-none prose-lg">
            <p className="lead text-xl text-muted-foreground mb-8">
              {displayPost.excerpt}
            </p>
            
            {/* In a real app, you would render the HTML/Markdown content here.
              We are using the mock content or a placeholder.
            */}
            {displayPost.content ? (
              <div dangerouslySetInnerHTML={{ __html: displayPost.content }} />
            ) : (
               <>
                <p>
                  We often talk about "Clean Code" but rarely about "Clean Business Logic." In the early days of building Kyoraq, I was tempted to over-engineer the backend. I wanted microservices, I wanted event-driven architecture, I wanted the shiny new toys.
                </p>
                <p>
                  But then I remembered my roots in Mechanical Engineering. You don't build a Ferrari engine for a golf cart. You build for the load you need to carry.
                </p>
                <h3>The Trap of Perfection</h3>
                <p>
                  Perfection in code is a liability if the product market fit isn't established. The goal is not to write code that lasts forever, but code that survives the next pivot. When we built the first version of Carton, we didn't use a complex geo-sharding database. We used Postgres with basic indexing. Why? Because we didn't have a million users yet. We had fifty.
                </p>
                <p>
                   <strong>The lesson is simple:</strong> Engineering is the art of constraint. If you aren't constrained by business realities, you aren't engineering—you're playing.
                </p>
               </>
            )}
          </div>

        </div>
      </article>

      <Footer />
    </main>
  )
}