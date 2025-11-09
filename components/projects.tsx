"use client"

import { useEffect, useState, useRef } from "react"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "AI Waste Classifier",
    description: "Intelligent Waste Classify with real-time processing and AI integration.",
    tags: ["TensorFlow / Keras", "Python/Flask", "HTML, CSS, JS , TailwindCSS", "Jupyter"],
    image: "/Screenshot 2025-11-10 011804.png",
    github: "https://github.com/vaneet2004/WasteIdentifier",
  },
  {
    title: "Sid-Cup UI",
    description: "Collaborative platform with real-time updates and drag-and-drop interface.",
    tags: ["React", "Firebase", "TailwindCSS"],
    image: "/Screenshot 2025-11-10 012928.png",
    github: "https://github.com/vaneet2004/sidcup",
  },
]

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 px-6 relative"
      style={{
        backgroundImage:
          'url("data:image/svg+xml,%3Csvg width=%22200%22 height=%22200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cline x1=%220%22 y1=%220%22 x2=%22200%22 y2=%22200%22 stroke=%22rgba(0,255,136,0.05)%22 strokeWidth=%221%22/%3E%3Cline x1=%22200%22 y1=%220%22 x2=%220%22 y2=%22200%22 stroke=%22rgba(0,255,136,0.05)%22 strokeWidth=%221%22/%3E%3C/svg%3E")',
      }}
    >
      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-foreground mb-12 text-center font-mono">
          [PORTFOLIO_PROJECTS]
        </h2>

        <div
          className={`grid md:grid-cols-2 gap-8 transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group rounded overflow-hidden border border-border bg-card card-hover relative"
              style={{
                transitionDelay: `${idx * 100}ms`,
              }}
            >
              {/* ✅ Updated Image Container */}
              <div className="relative h-56 overflow-hidden bg-accent/10 border-b border-border flex items-center justify-center">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="max-h-56 w-auto object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Content */}
              <div className="p-6 relative">
                <h3 className="text-lg font-semibold text-foreground mb-2 font-mono">
                  &gt; {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-primary/20 text-primary rounded font-mono font-medium border border-primary/50 hover:border-primary hover:bg-primary/30 hover:shadow-md hover:shadow-primary/30 transition-all duration-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 border-t border-border">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-sm text-accent hover:text-foreground transition-all duration-300 hover:shadow-md hover:shadow-accent/50 font-mono"
                  >
                    <Github size={16} />
                    [CODE]
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
