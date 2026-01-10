import Header from "@/components/header"
import Footer from "@/components/footer"
import BlogList from "@/components/blog-list"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function BlogIndex() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary selection:text-primary-foreground">
      <Header />
      
      <section className="pt-32 pb-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Back Link */}
          <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>

          <div className="mb-16">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Insights.
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Thoughts on system architecture, venture building, and the mechanics of the African digital economy.
            </p>
          </div>
          
          <BlogList />
        </div>
      </section>

      <Footer />
    </main>
  )
}