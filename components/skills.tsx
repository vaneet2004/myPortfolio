"use client"

import { useEffect, useState, useRef } from "react"

const skillCategories = [
  {
    category: "LANGUAGES",
    skills: ["Python", "JavaScript", "TypeScript", "C++", "SQL"],
  },
  {
    category: "FRAMEWORKS",
    skills: ["React", "Next.js", "TailwindCSS", "Flask", "TensorFlow"],
  },
  {
    category: "TOOLS",
    skills: ["Git", "VS Code", "Docker", "AWS", "Vercel"],
  },
]

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 px-6 relative"
      style={{
        backgroundImage:
          'url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22%3E%3Ctext x=%2210%22 y=%2220%22 fontFamily=%22monospace%22 fontSize=%2214%22 fill=%22rgba(0,255,136,0.05)%22%3E01010101%3C/text%3E%3Ctext x=%2210%22 y=%2250%22 fontFamily=%22monospace%22 fontSize=%2214%22 fill=%22rgba(0,255,136,0.05)%22%3E10101010%3C/text%3E%3Ctext x=%2210%22 y=%2280%22 fontFamily=%22monospace%22 fontSize=%2214%22 fill=%22rgba(0,255,136,0.05)%22%3E11001100%3C/text%3E%3C/svg%3E")',
      }}
    >
      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-foreground mb-12 text-center font-mono">[SKILL_MATRIX]</h2>

        <div
          className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 rounded bg-card border border-border card-hover group relative overflow-hidden"
              style={{
                transitionDelay: `${idx * 100}ms`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <h3 className="text-lg font-semibold text-primary mb-4 font-mono relative z-10">[&gt; {cat.category}]</h3>
              <div className="flex flex-wrap gap-2 relative z-10">
                {cat.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-primary/20 text-primary rounded text-sm font-mono font-medium hover:bg-primary/40 hover:shadow-md hover:shadow-primary/50 transition-all duration-300 border border-primary/50 hover:border-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
