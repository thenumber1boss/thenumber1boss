import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import StructuredData from "@/components/structured-data"
import { profileData } from "@/lib/profile-data"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: {
    default: `${profileData.name} | ${profileData.tagline}`,
    template: `%s | ${profileData.name}`,
  },
  description: profileData.bio.short,
  keywords: [
    "Adebayo Bamijoko",
    "Technical Founder",
    "Grit Informed Media",
    "Kyoraq",
    "Carton",
    "System Architecture",
    "African Tech Ecosystem"
  ],
  authors: [{ name: profileData.name }],
  creator: profileData.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://adebayo.gritinformedia.tech",
    title: `${profileData.name} - ${profileData.role}`,
    description: profileData.bio.short,
    siteName: profileData.company,
    images: [
      {
        url: "/og-image.jpg", // You should update this image later
        width: 1200,
        height: 630,
        alt: profileData.tagline,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profileData.name} - ${profileData.role}`,
    description: profileData.bio.short,
    creator: "@thenumber1boss",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                const preferredTheme = theme || systemPreference;
                document.documentElement.classList.toggle('dark', preferredTheme === 'dark');
              } catch (e) {}
            `,
          }}
        />
        <StructuredData />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}