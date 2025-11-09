"use client"

import { useTheme } from "./theme-provider"
import { Moon, Sun } from "lucide-react"

export default function Navigation() {
  const { theme, toggleTheme } = useTheme()

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-bold text-foreground">Vaneet</div>

        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("about")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </button>
        </div>

        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg hover:bg-accent transition-colors"
          aria-label="Toggle theme"
        >
          {theme === "light" ? (
            <Moon size={20} className="text-foreground" />
          ) : (
            <Sun size={20} className="text-foreground" />
          )}
        </button>
      </div>
    </nav>
  )
}
