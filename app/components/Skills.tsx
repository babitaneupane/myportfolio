"use client";
import { motion } from "framer-motion";

const skills = [
  "HTML", "CSS", "JavaScript", "TypeScript", 
  "React", "Next.js", "Node.js", "Python", 
  "Playwright", "Firebase", "Git"
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-slate-900/50">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
            <span className="w-12 h-[2px] bg-accent inline-block" />
            My Skills
          </h2>

          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="glass px-6 py-3 rounded-full text-slate-200 font-medium border border-white/5 hover:border-accent/50 hover:text-accent-light hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all cursor-default"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}