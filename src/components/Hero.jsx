import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[70vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/6RFJq1d4A-eF1iJ7/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 py-24">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900">
            Build apps with AI. Instantly.
          </h1>
          <p className="mt-6 text-lg text-slate-600">
            Describe your idea. Watch it become a working application with a live preview, backend, and database in minutes.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#demo" className="inline-flex items-center justify-center rounded-md bg-slate-900 px-5 py-3 text-white hover:bg-slate-800 transition">Try a demo</a>
            <a href="#features" className="inline-flex items-center justify-center rounded-md border border-slate-300 px-5 py-3 text-slate-800 hover:bg-slate-50 transition">Explore features</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
    </section>
  )
}
