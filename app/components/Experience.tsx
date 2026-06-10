"use client";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="py-32 relative bg-surface/30 border-y border-surface-border">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col md:flex-row gap-12 md:gap-24">
            
            {/* Heading Column */}
            <div className="md:w-1/3">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 sticky top-32">
                Work <br/><span className="text-gradient-accent">History.</span>
              </h2>
            </div>

            {/* Timeline Column */}
            <div className="md:w-2/3">
              <div className="relative border-l border-surface-border/50 pl-8 md:pl-12 space-y-16 py-8">
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative group"
                >
                  {/* Timeline dot & line glow */}
                  <div className="absolute -left-[32px] md:-left-[48px] top-2 w-[11px] h-[11px] rounded-full bg-surface-border border-[3px] border-surface group-hover:bg-accent group-hover:shadow-[0_0_15px_rgba(212,175,55,0.6)] transition-all duration-300"></div>
                  
                  <div className="card-glass p-8 rounded-3xl hover:bg-white/[0.03] hover:border-accent/30 transition-all duration-500">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-6 gap-4">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                          QA Automation Practice
                        </h3>
                        <p className="text-foreground/60 font-medium">Independent / Self-Directed</p>
                      </div>
                      <span className="inline-block px-4 py-1.5 bg-surface border border-surface-border text-foreground/80 text-xs tracking-widest uppercase rounded-full whitespace-nowrap">
                        Present
                      </span>
                    </div>
                    
                    <p className="text-foreground/70 leading-relaxed font-light">
                      Worked extensively with Playwright and pytest. Developed automated web testing scripts utilizing
                      robust locators, custom assertions, and fixtures to ensure application reliability and performance.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative group"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[32px] md:-left-[48px] top-2 w-[11px] h-[11px] rounded-full bg-surface-border border-[3px] border-surface group-hover:bg-accent group-hover:shadow-[0_0_15px_rgba(212,175,55,0.6)] transition-all duration-300"></div>
                  
                  <div className="card-glass p-8 rounded-3xl hover:bg-white/[0.03] hover:border-accent/30 transition-all duration-500">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-6 gap-4">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                          Full Stack Developer
                        </h3>
                        <p className="text-foreground/60 font-medium">Personal Projects & Academics</p>
                      </div>
                      <span className="inline-block px-4 py-1.5 bg-surface border border-surface-border text-foreground/80 text-xs tracking-widest uppercase rounded-full whitespace-nowrap">
                        2022 - 2024
                      </span>
                    </div>
                    
                    <p className="text-foreground/70 leading-relaxed font-light">
                      Built dynamic full-stack applications using Next.js, React, and Node.js. Focused on responsive UI design and robust backend integration with Firebase and custom APIs.
                    </p>
                  </div>
                </motion.div>

              </div>
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}