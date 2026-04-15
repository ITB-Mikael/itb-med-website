import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Building2, Globe, MapPin } from 'lucide-react'
import SectionWrapper from '../components/SectionWrapper'
import ScrollFadeIn from '../components/ScrollFadeIn'
import Timeline from '../components/Timeline'

export default function About() {
  useEffect(() => {
    document.title = 'About Us — ITB-MED'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', 'ITB-MED develops TCD601 (siplizumab) for transplantation and autoimmunity, with worldwide clinical trials and preclinical therapies.')
    else {
      const m = document.createElement('meta')
      m.name = 'description'
      m.content = 'ITB-MED develops TCD601 (siplizumab) for transplantation and autoimmunity, with worldwide clinical trials and preclinical therapies.'
      document.head.appendChild(m)
    }
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="bg-dark-bg overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-blur-fade-in">
            {/* DRAFT — AWAITING LT APPROVAL */}
            {/* COMPLIANCE: "First-in-class" claim needs verification — do not publish without legal review */}
            <p className="text-accent-400 font-medium text-sm tracking-wider uppercase mb-4">About ITB-MED</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05] text-white mb-6">
              Advancing transplant medicine through targeted immunology
            </h1>
            <p className="text-lg text-navy-300 leading-relaxed mb-4">
              Transplant patients today face significant limitations — from the risks of current induction protocols to the long-term burden of maintenance immunosuppression. Founded in 2016, ITB-MED is developing new therapeutics designed to meaningfully improve each stage of the transplant journey: induction, maintenance, conditioning, and the pursuit of tolerance.
            </p>
            <p className="text-lg text-navy-300 leading-relaxed">
              Our pipeline includes siplizumab (TCD601), an investigational anti-CD2 monoclonal antibody being evaluated as a modernized induction agent; multiple assets for monotherapy or combination approaches to improve long-term maintenance; novel conditioning options for bone marrow transplantation; and regimens aimed at establishing durable immune tolerance. Beyond transplantation, ITB-MED is also exploring its platform in immune-mediated diseases.
            </p>
          </div>
          <div className="hidden lg:block">
            <img
              src="/images/lab-research.jpg"
              alt="Scientific research in a modern laboratory"
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Mission */}
      <SectionWrapper bg="light">
        <ScrollFadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="font-serif text-2xl md:text-3xl italic text-navy-100 leading-relaxed">
              "Our mission is to develop therapies that enable transplant tolerance — freeing patients from the burden and risks of lifelong immunosuppression."
            </blockquote>
          </div>
        </ScrollFadeIn>
      </SectionWrapper>

      {/* Partnership */}
      <SectionWrapper bg="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <ScrollFadeIn>
            <div>
              {/* DRAFT — AWAITING LT APPROVAL */}
              <p className="text-accent-400 font-medium text-sm tracking-wider uppercase mb-4">Strategic Partnership</p>
              <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-white mb-6">
                ITB-MED & Nefro Avillion
              </h2>
              <p className="text-navy-300 leading-relaxed">
                ITB-MED partners with Nefro Avillion Clinical Development (NACD) as its strategic clinical development partner, supporting the design and execution of ITB-MED's clinical programs.
              </p>
            </div>
          </ScrollFadeIn>
          <ScrollFadeIn delay={200}>
            <div className="grid grid-cols-1 gap-6">
              <div className="p-8 rounded-2xl bg-navy-900/50 border border-navy-700/30">
                <div className="w-12 h-12 rounded-xl bg-accent-500/10 flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-accent-400" />
                </div>
                <h3 className="font-serif text-xl text-white mb-2">ITB-MED</h3>
                <p className="text-navy-300 text-sm leading-relaxed">Biopharmaceutical company advancing a multi-asset pipeline in transplantation and immune-mediated diseases.</p>
              </div>
              <div className="p-8 rounded-2xl bg-navy-900/50 border border-navy-700/30">
                <div className="w-12 h-12 rounded-xl bg-accent-500/10 flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-accent-400" />
                </div>
                <h3 className="font-serif text-xl text-white mb-2">Nefro Avillion</h3>
                <p className="text-navy-300 text-sm leading-relaxed">Strategic clinical development partner supporting ITB-MED's clinical programs.</p>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </SectionWrapper>

      {/* Timeline */}
      <SectionWrapper bg="light">
        <div className="text-center mb-16">
          <ScrollFadeIn>
            <p className="text-accent-400 font-medium text-sm tracking-wider uppercase mb-4">Our Journey</p>
            <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-white">
              Development History
            </h2>
          </ScrollFadeIn>
        </div>
        <Timeline />
      </SectionWrapper>

      {/* Offices */}
      <SectionWrapper bg="white">
        <ScrollFadeIn>
          <div className="text-center mb-12">
            <p className="text-accent-400 font-medium text-sm tracking-wider uppercase mb-4">Global Presence</p>
            <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-white">Our Offices</h2>
          </div>
        </ScrollFadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <ScrollFadeIn delay={100}>
            <div className="rounded-2xl border border-navy-700/30 overflow-hidden">
              <div className="relative w-full h-48 overflow-hidden">
                <img src="/images/forskaren.jpg" alt="Modern glass office building in Stockholm, home of ITB-MED" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-1.5">
                  <MapPin className="w-4 h-4 text-accent-500" />
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-serif text-xl text-white mb-2">Stockholm</h3>
                <p className="text-navy-400 text-sm leading-relaxed">
                  ITB-MED AB<br />
                  Hagaplan 4<br />
                  113 68 Stockholm, Sweden
                </p>
                <p className="text-navy-400 text-xs mt-3 leading-relaxed">Located in Forskaren — a state-of-the-art science hub in Stockholm's life science ecosystem, near Karolinska Hospital.</p>
              </div>
            </div>
          </ScrollFadeIn>
          <ScrollFadeIn delay={200}>
            <div className="rounded-2xl border border-navy-700/30 overflow-hidden">
              <div className="relative w-full h-48 overflow-hidden">
                <img src="/images/newyork.jpg" alt="Manhattan skyline, location of ITB-MED's New York office" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-1.5">
                  <MapPin className="w-4 h-4 text-accent-500" />
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-serif text-xl text-white mb-2">New York</h3>
                <p className="text-navy-400 text-sm leading-relaxed">
                  ITB-MED LLC<br />
                  110 East 59th Street, 28th Floor<br />
                  New York, NY 10022
                </p>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper bg="dark">
        <ScrollFadeIn>
          <div className="text-center">
            <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-white mb-6">
              Discover our science
            </h2>
            <p className="text-navy-300 max-w-xl mx-auto leading-relaxed mb-8">
              Learn how siplizumab works to achieve immune tolerance through targeted CD2 modulation.
            </p>
            <Link
              to="/science"
              className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-medium px-8 py-3.5 rounded-lg transition-colors duration-300"
            >
              Explore Our Science
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollFadeIn>
      </SectionWrapper>
    </>
  )
}
