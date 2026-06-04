"use client";
import { motion } from "framer-motion";
import { Send, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
            <span className="w-12 h-[2px] bg-accent inline-block" />
            Get In Touch
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <p className="text-slate-300 text-lg leading-relaxed">
                Whether you have a question, a project idea, or just want to say hi, 
                my inbox is always open. I'll try my best to get back to you!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-slate-300">
                  <div className="p-3 glass rounded-lg text-accent-light">
                    <Mail size={20} />
                  </div>
                  <span>hello@babitaneupane.com</span>
                </div>
                <div className="flex items-center gap-4 text-slate-300">
                  <div className="p-3 glass rounded-lg text-accent-light">
                    <MapPin size={20} />
                  </div>
                  <span>Nepal</span>
                </div>
              </div>
            </div>

            <form className="space-y-6 glass p-8 rounded-2xl border border-white/5">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-slate-900/50 border border-white/10 p-4 rounded-lg text-white focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-slate-900/50 border border-white/10 p-4 rounded-lg text-white focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div>
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="w-full bg-slate-900/50 border border-white/10 p-4 rounded-lg text-white focus:outline-none focus:border-accent transition-colors resize-none"
                />
              </div>

              <button className="w-full bg-accent hover:bg-accent-light text-white font-medium px-6 py-4 rounded-lg transition-all flex items-center justify-center gap-2 group">
                Send Message
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
