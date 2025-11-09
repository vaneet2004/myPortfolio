"use client"

import { useEffect, useState } from "react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="hero"
      className="min-h-screen pt-20 px-6 flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: 'url("/hacker-hero-bg.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-accent/20 opacity-95"></div>

      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(90deg, #00ff88 1px, transparent 1px),
                            linear-gradient(0deg, #00ff88 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
          animation: "grid-move 20s linear infinite",
        }}
      ></div>

      <div
        className={`max-w-4xl mx-auto text-center transition-all duration-1000 transform relative z-10 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance animate-neon-flicker">
          {"<> HACKER MODE </>"}
        </h1>

        <p className="text-lg md:text-xl text-accent mb-2 font-mono text-balance">$ _sophisticated_coder.git</p>

        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto text-balance font-mono">
          Building elegant exploits & secure systems through code.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }}
            className="px-8 py-3 bg-primary text-primary-foreground rounded hover:shadow-lg btn-neon font-mono font-medium border border-primary transition-all duration-300"
          >
            [CONNECT]
          </a>
          <a
            href="/resume.pdf"
            download="Vaneet-Resume.pdf"
            className="px-8 py-3 border border-accent text-accent rounded hover:shadow-lg btn-neon font-mono font-medium transition-all duration-300 hover:bg-accent/10"
          >
            [DOWNLOAD MY CV]
          </a>
        </div>
      </div>
    </section>
  )
}
