export default function Footer() {
  return (
    <footer className="py-8 text-center text-slate-400 border-t border-white/10 bg-slate-900">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>
          &copy; {new Date().getFullYear()} Babita Neupane. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-accent-light transition-colors text-sm">GitHub</a>
          <a href="#" className="hover:text-accent-light transition-colors text-sm">LinkedIn</a>
          <a href="#" className="hover:text-accent-light transition-colors text-sm">Twitter</a>
        </div>
      </div>
    </footer>
  );
}