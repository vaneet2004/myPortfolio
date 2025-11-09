"use client"

import { useEffect, useState, useRef } from "react"
import { Award } from "lucide-react"

const certifications = [
  {
    title: "Digigreen National Hackathon",
    credential: "Certificate of Competition",
    issuer: "Digigreen",
    achievement: "Top 10 Finalist",
    icon: "🏆",
  },
  {
    title: "TCS CodeVita Season 12",
    credential: "Rank Certificate",
    issuer: "Tata Consultancy Services",
    achievement: "Rank 2811",
    icon: "⭐",
  },
  {
    title: "HackerWarth Hackathon",
    credential: "Certificate of Appreciation",
    issuer: "HackerWarth",
    achievement: "Recognized Contributor",
    icon: "🎖️",
  },
]

export default function Certifications() {
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
      id="certifications"
      ref={ref}
      className="py-20 px-6 relative"
      style={{
        backgroundImage:
          'url("data:image/svg+xml,%3Csvg width=%22200%22 height=%22200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cline x1=%220%22 y1=%220%22 x2=%22200%22 y2=%22200%22 stroke=%22rgba(255,0,110,0.05)%22 strokeWidth=%221%22/%3E%3Cline x1=%22200%22 y1=%220%22 x2=%220%22 y2=%22200%22 stroke=%22rgba(255,0,110,0.05)%22 strokeWidth=%221%22/%3E%3C/svg%3E")',
      }}
    >
      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-foreground mb-12 text-center font-mono">[CERTIFICATIONS]</h2>

        <div
          className={`grid md:grid-cols-3 gap-6 transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="group rounded-lg overflow-hidden border border-border bg-card hover:border-primary transition-all duration-300 p-6 relative card-hover"
              style={{
                transitionDelay: `${idx * 100}ms`,
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-4xl">{cert.icon}</span>
                <Award className="w-5 h-5 text-primary group-hover:text-accent transition-colors duration-300" />
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2 font-mono group-hover:text-primary transition-colors duration-300">
                {cert.title}
              </h3>

              <p className="text-sm text-accent mb-2 font-mono">[{cert.credential}]</p>

              <p className="text-xs text-muted-foreground mb-4">{cert.issuer}</p>

              <div className="pt-4 border-t border-border">
                <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded font-mono text-xs font-medium border border-primary/50 hover:border-primary hover:bg-primary/30 hover:shadow-md hover:shadow-primary/30 transition-all duration-300 group-hover:shadow-lg">
                  #{cert.achievement}
                </span>
              </div>

              {/* Neon glow effect on hover */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/0 via-transparent to-accent/0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
