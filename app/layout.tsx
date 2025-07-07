import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import StructuredData from "@/components/structured-data"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Technical Entrepreneur | Full-Stack Developer & Product Strategist - Adebayo Bamijoko",
  description:
    "I build with code and think like a founder. A technical entrepreneur who crafts digital products that deliver results.",
  keywords:
    "Adebayo Bamijoko, technical entrepreneur, full-stack developer, product strategy, web development, AI integration",
  authors: [{ name: "Adebayo Bamijoko" }],
  creator: "Adebayo Bamijoko",
  publisher: "Adebayo Bamijoko",
  metadataBase: new URL("https://adebayo.gritinformedia.tech"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Technical Entrepreneur Portfolio - Adebayo Bamijoko",
    description: "Building digital products that work and deliver results",
    url: "https://adebayo.gritinformedia.tech",
    siteName: "Adebayo Bamijoko Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://adebayo.gritinformedia.tech/og-image.jpg", // Create this image
        width: 1200,
        height: 630,
        alt: "Adebayo Bamijoko - Technical Entrepreneur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Technical Entrepreneur - Adebayo Bamijoko",
    description: "Full-Stack Developer & Product Strategist",
    creator: "@thenumber1boss", // If you have one
    images: ["https://adebayo.gritinformedia.tech/og-image.jpg"], // Same as OG image
  },
  verification: {
    google: "your-google-site-verification-code", // Add if you have one
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <StructuredData />
      </head>

      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
