import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  useEffect(() => {
    document.title = '404 — Page Not Found — ITB-MED'
  }, [])

  return (
    <section className="bg-white min-h-[70vh] flex items-center justify-center">
      <div className="max-w-xl mx-auto px-6 text-center animate-blur-fade-in">
        <p className="text-accent-500 font-sans text-sm font-bold tracking-widest uppercase mb-4">404</p>
        <h1 className="font-serif text-4xl md:text-5xl tracking-tight text-navy-900 mb-4">
          Page not found
        </h1>
        <p className="text-navy-600 leading-relaxed mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-medium px-7 py-3 rounded-lg transition-colors duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    </section>
  )
}
