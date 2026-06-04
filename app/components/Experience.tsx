"use client";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
            <span className="w-12 h-[2px] bg-accent inline-block" />
            Experience
          </h2>

          <div className="relative border-l-2 border-accent/30 pl-8 ml-4 md:ml-0 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[41px] top-1 p-2 bg-slate-900 border-2 border-accent rounded-full text-accent shadow-[0_0_15px_rgba(139,92,246,0.5)]">
                <Briefcase size={16} />
              </div>

              <div className="glass p-6 rounded-2xl hover:border-accent/50 transition-colors">
                <h3 className="text-xl font-bold text-white mb-2">
                  QA Automation Practice
                </h3>

                <span className="inline-block px-3 py-1 bg-accent/20 text-accent-light text-sm rounded-full mb-4">
                  Present
                </span>
                <p className="text-slate-300 leading-relaxed">
                  Worked extensively with Playwright and pytest. Developed automated web testing scripts utilizing
                  robust locators, custom assertions, and fixtures to ensure application reliability and performance.
                </p>

              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}