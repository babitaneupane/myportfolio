"use client";
import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    category: "Backend",
    skills: ["Node.js", "Python", "REST APIs", "Firebase"]
  },
  {
    category: "Testing & Tools",
    skills: ["Playwright", "Pytest", "Git", "Figma"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16 text-center">
            Technical <span className="text-gradient-accent">Arsenal.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {skillCategories.map((group, groupIndex) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: groupIndex * 0.2 }}
                className="flex flex-col"
              >
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-accent font-mono text-sm tracking-widest uppercase">0{groupIndex + 1}</span>
                  <div className="h-[1px] flex-grow bg-surface-border"></div>
                </div>
                
                <h3 className="text-2xl font-bold mb-6 text-foreground/90">{group.category}</h3>
                
                <div className="flex flex-col gap-4">
                  {group.skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: (groupIndex * 0.2) + (index * 0.1) }}
                      className="group flex items-center justify-between p-4 rounded-2xl bg-surface/30 border border-surface-border hover:bg-white/[0.03] hover:border-accent/30 transition-all duration-300"
                    >
                      <span className="text-lg font-medium text-foreground/80 group-hover:text-accent transition-colors">{skill}</span>
                      <div className="w-2 h-2 rounded-full bg-surface-border group-hover:bg-accent transition-colors duration-300"></div>
                    </motion.div>
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