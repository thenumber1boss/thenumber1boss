import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Technical Entrepreneur | Full-Stack Developer & Product Strategist",
  description:
    "I build with code and think like a founder. A technical entrepreneur who crafts digital products that deliver results.",
  keywords: "technical entrepreneur, full-stack developer, product strategy, web development, AI integration",
  authors: [{ name: "Technical Entrepreneur" }],
  openGraph: {
    title: "Technical Entrepreneur Portfolio",
    description: "Building digital products that work and deliver results",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
