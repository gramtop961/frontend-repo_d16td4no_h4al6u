import { Rocket, Github } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-semibold text-slate-800">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-indigo-500 to-violet-600 text-white">
              <Rocket className="h-5 w-5" />
            </span>
            <span className="text-lg tracking-tight">Vibe Coding</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
            <a href="#features" className="hover:text-slate-900 transition">Features</a>
            <a href="#demo" className="hover:text-slate-900 transition">Demo</a>
            <a href="#" className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-3 py-2 text-white hover:bg-slate-800 transition">
              <Github className="h-4 w-4" />
              Star us
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
