import { useState } from 'react'

export default function DemoPanel() {
  const [input, setInput] = useState('Build a to-do app with auth')
  const [loading, setLoading] = useState(false)
  const [output, setOutput] = useState('')

  const runDemo = async () => {
    setLoading(true)
    setOutput('')
    try {
      // This is a frontend-only demo that simulates a response
      await new Promise((r) => setTimeout(r, 900))
      setOutput('✅ Your spec was parsed. Backend endpoints created. UI scaffolded. Ready to preview!')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="demo" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-2 items-start">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Try the flow</h2>
            <p className="mt-3 text-slate-600">Describe your idea and see how the system would scaffold it.</p>

            <div className="mt-6 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-full resize-none rounded-md border border-slate-300 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
                rows={4}
              />
              <div className="mt-3 flex items-center gap-3">
                <button
                  onClick={runDemo}
                  disabled={loading}
                  className="inline-flex items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-white hover:bg-slate-800 disabled:opacity-50"
                >
                  {loading ? 'Generating…' : 'Generate'}
                </button>
                <span className="text-xs text-slate-500">No data sent. This is a local demo.</span>
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm min-h-[180px]">
              <h3 className="font-semibold text-slate-900">Result</h3>
              <p className="mt-2 text-sm text-slate-600 whitespace-pre-line">{output || 'Describe your app and click Generate to see a simulated result.'}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
