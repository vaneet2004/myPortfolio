"use client";

import { useEffect, useState, useRef } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="py-20 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <div
          className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              A driven Student of Computer Science with Practical Experience
              using the MERN stack to develop and launch Full-stack web
              Applications. Adept at using React to create Responsive user
              interfaces and Node.js and Express to build reliable server-side
              APIs. I’m eager to land a demanding internship so I can use my
              abilities on actual projects and support a cooperative development
              team.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              My journey in tech started with a curiosity about how things work.
              Today, I specialize in building scalable applications and creating
              intuitive user interfaces that users love.
            </p>
            <div className="space-y-3">
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">
                  Education:
                </span>{" "}
                Pursuing B.Tech Computer Science and Engineering
              </p>
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">
                  Focus Areas:
                </span>{" "}
                Web Development, UI/UX Design, Mern Stack Development
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden border border-border bg-accent/10">
              <img
                src="/professional-portrait.jpg"
                alt="Professional portrait"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
