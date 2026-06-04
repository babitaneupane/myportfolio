"use client";
import { motion } from "framer-motion";
import { FolderGit2, ExternalLink, Code } from "lucide-react";

const projects = [
  {
    title: "AI Personal Finance Manager",
    description: "Track expenses and receive AI-powered financial insights to manage your budget better.",
    tags: ["React", "AI", "Node.js"],
  },
  {
    title: "Task Manager",
    description: "Full-stack task management application with secure user authentication and real-time updates.",
    tags: ["Next.js", "Firebase", "Tailwind"],
  },
  {
    title: "Playwright Automation",
    description: "Robust automated UI testing framework built using Playwright and Python for end-to-end testing.",
    tags: ["Python", "Playwright", "Pytest"],
  },
];

export default function Project() {
  return (
    <section id="projects" className="py-24 relative bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
            <span className="w-12 h-[2px] bg-accent inline-block" />
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass p-6 rounded-2xl flex flex-col h-full group hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] transition-all border border-white/5 hover:border-accent/50"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-accent/10 text-accent rounded-xl group-hover:bg-accent group-hover:text-white transition-colors">
                    <FolderGit2 size={24} />
                  </div>
                  <div className="flex gap-3 text-slate-400">
                    <a href="#" className="hover:text-accent-light transition-colors"><Code size={20} /></a>
                    <a href="#" className="hover:text-accent-light transition-colors"><ExternalLink size={20} /></a>
                  </div>
                </div>

                <h3 className="font-bold text-xl text-white mb-3 group-hover:text-accent-light transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-400 mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-mono text-accent-light bg-accent/10 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
