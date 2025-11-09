"use client"

import { useEffect, useState } from "react"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Certifications from "@/components/certifications"
import { ThemeProvider } from "@/components/theme-provider"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <ThemeProvider>
      <main className="relative overflow-x-hidden">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
    </ThemeProvider>
  )
}
