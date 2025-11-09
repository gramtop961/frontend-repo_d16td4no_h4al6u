import { Code2, Database, Rocket, ShieldCheck } from 'lucide-react'

const features = [
  {
    icon: Rocket,
    title: 'Spin up apps fast',
    desc: 'Generate full-stack apps with live previews in minutes, not weeks.'
  },
  {
    icon: Code2,
    title: 'Clean architecture',
    desc: 'Clear separation of frontend, backend, and database with sensible defaults.'
  },
  {
    icon: Database,
    title: 'Built-in persistence',
    desc: 'MongoDB is ready out of the box so your data sticks around.'
  },
  {
    icon: ShieldCheck,
    title: 'Safe sandbox',
    desc: 'Everything runs isolated, so you can explore freely without breaking anything.'
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Features</h2>
          <p className="mt-3 text-slate-600">Purpose-built for rapid prototyping and iteration.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-gradient-to-br from-indigo-500 to-violet-600 text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
