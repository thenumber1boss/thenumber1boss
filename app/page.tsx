import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import Projects from "@/components/projects"
import WhyWorkWithMe from "@/components/why-work-with-me"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white transition-colors duration-300">
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <WhyWorkWithMe />
      <Contact />
      <Footer />
    </main>
  )
}
