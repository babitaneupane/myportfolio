"use client";
import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "AI Personal Finance Manager",
    description: "Track expenses and receive AI-powered financial insights to manage your budget better. A comprehensive dashboard with predictive analysis.",
    tags: ["React", "AI", "Node.js"],
    year: "2024"
  },
  {
    title: "Task Manager Pro",
    description: "Full-stack task management application with secure user authentication, real-time collaborative updates, and drag-and-drop interfaces.",
    tags: ["Next.js", "Firebase", "Tailwind"],
    year: "2023"
  },
  {
    title: "Playwright Automation Suite",
    description: "Robust automated UI testing framework built using Playwright and Python for rigorous end-to-end testing of enterprise applications.",
    tags: ["Python", "Playwright", "Pytest"],
    year: "2023"
  },
];

export default function Project() {
  return (
    <section id="projects" className="py-32 relative bg-surface/30 border-y border-surface-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Selected <span className="text-gradient-accent">Works.</span>
              </h2>
              <p className="text-foreground/60 max-w-lg text-lg font-light">
                A showcase of my recent endeavors in development and quality assurance.
              </p>
            </div>
            <a href="#" className="hidden md:flex items-center gap-2 text-foreground/60 hover:text-accent transition-colors group">
              View full archive
              <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative h-full"
              >
                {/* Card Background & Glow */}
                <div className="absolute inset-0 bg-accent/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="card-glass p-8 rounded-3xl h-full flex flex-col relative z-10 transition-all duration-500 hover:bg-white/[0.05] hover:border-accent/30 overflow-hidden">

                  {/* Decorative corner accent */}
                  <div className="absolute -top-12 -right-12 w-24 h-24 bg-accent/20 rounded-full blur-2xl group-hover:bg-accent/40 transition-colors duration-500"></div>

                  <div className="flex justify-between items-start mb-8 relative z-20">
                    <span className="text-5xl font-black text-white/5 group-hover:text-white/10 transition-colors duration-300">
                      0{index + 1}
                    </span>
                    <div className="flex gap-4 text-foreground/40">
                      {/* <a href="#" className="hover:text-foreground transition-colors p-2 rounded-full hover:bg-white/5"><Github size={22} /></a> */}
                      <a href="#" className="hover:text-accent transition-colors p-2 rounded-full hover:bg-white/5"><ExternalLink size={22} /></a>
                    </div>
                  </div>

                  <div className="mb-4">
                    <span className="text-xs font-mono text-accent mb-2 block">{project.year}</span>
                    <h3 className="font-bold text-2xl text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-foreground/60 mb-8 flex-grow font-light leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-mono text-foreground/80 bg-surface border border-surface-border px-3 py-1.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile View Archive Link */}
          <a href="#" className="md:hidden mt-8 flex items-center justify-center gap-2 text-foreground/60 hover:text-accent transition-colors group">
            View full archive
            <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
