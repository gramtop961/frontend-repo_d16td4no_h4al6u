export default function Footer() {
  return (
    <footer className="py-10 bg-white border-t border-slate-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Vibe Coding. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#features" className="hover:text-slate-700">Features</a>
            <a href="#demo" className="hover:text-slate-700">Demo</a>
            <a href="#" className="hover:text-slate-700">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
