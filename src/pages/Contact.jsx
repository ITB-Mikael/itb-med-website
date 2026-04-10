import { useEffect } from 'react'
import { MapPin, AlertTriangle } from 'lucide-react'
import SectionWrapper from '../components/SectionWrapper'
import ScrollFadeIn from '../components/ScrollFadeIn'
import ContactForm from '../components/ContactForm'

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact — ITB-MED'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', 'Contact ITB-MED — offices in Stockholm, Sweden and New York, USA. Reach us for general inquiries, clinical trial information, or partnerships.')
    else {
      const m = document.createElement('meta')
      m.name = 'description'
      m.content = 'Contact ITB-MED — offices in Stockholm, Sweden and New York, USA.'
      document.head.appendChild(m)
    }
  }, [])

  return (
    <>
      <section className="bg-dark-bg">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-20 md:py-28">
          <div className="max-w-3xl animate-blur-fade-in mb-16">
            <p className="text-accent-400 font-medium text-sm tracking-wider uppercase mb-4">Get in Touch</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05] text-white mb-6">
              Contact us
            </h1>
            <p className="text-lg text-navy-300 leading-relaxed">
              We welcome inquiries about our clinical programs, partnership opportunities, and general information.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            {/* Offices */}
            <div className="lg:col-span-2 space-y-8">
              <div className="rounded-2xl border border-navy-700/30 bg-navy-900/50 overflow-hidden">
                <div className="relative h-32 overflow-hidden">
                  <img src="/images/forskaren.jpg" alt="ITB-MED Stockholm office building" className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/30 to-transparent" />
                  <div className="absolute top-3 right-3 bg-navy-800/90 backdrop-blur-sm rounded-full p-1">
                    <MapPin className="w-3.5 h-3.5 text-accent-500" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-lg text-white mb-2">Stockholm</h3>
                  <address className="not-italic text-sm text-navy-300 leading-relaxed">
                    ITB-MED AB<br />
                    Hagaplan 4<br />
                    113 68 Stockholm, Sweden
                  </address>
                  <p className="text-navy-400 text-xs mt-2 leading-relaxed">Forskaren — near Karolinska Hospital</p>
                </div>
              </div>

              <div className="rounded-2xl border border-navy-700/30 bg-navy-900/50 overflow-hidden">
                <div className="relative h-32 overflow-hidden">
                  <img src="/images/newyork.jpg" alt="Manhattan skyline near ITB-MED New York office" className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/30 to-transparent" />
                  <div className="absolute top-3 right-3 bg-navy-800/90 backdrop-blur-sm rounded-full p-1">
                    <MapPin className="w-3.5 h-3.5 text-accent-500" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-lg text-white mb-2">New York</h3>
                  <address className="not-italic text-sm text-navy-300 leading-relaxed">
                    ITB-MED LLC<br />
                    110 East 59th Street, 28th Floor<br />
                    New York, NY 10022
                  </address>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-amber-950/20 border border-amber-800/30">
                <div className="flex items-center gap-3 mb-3">
                  <AlertTriangle className="w-5 h-5 text-amber-400" />
                  <h3 className="font-sans text-sm font-bold text-amber-300">Fraud Warning</h3>
                </div>
                <p className="text-sm text-amber-400/80 leading-relaxed">
                  ITB-MED does not recruit via text messages, Signal, WhatsApp, or other messaging platforms. All legitimate recruitment is conducted through official channels only.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
