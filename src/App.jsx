import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import DemoPanel from './components/DemoPanel'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <DemoPanel />
      </main>
      <Footer />
    </div>
  )
}

export default App
