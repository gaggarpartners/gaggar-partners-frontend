import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import DisclaimerPopup from "@/components/disclaimer-popup"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Gaggar & Partners | Law Firm",
  description: "A full spectrum of legal support, under one roof.",
  generator: 'v0.dev',
  icons: {
    icon: "/images/gaggar-emblem.png"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 pt-20 md:pt-24 lg:pt-28">{children}</main>
            <Footer />
          </div>
          <DisclaimerPopup />
        </ThemeProvider>
      </body>
    </html>
  )
}
