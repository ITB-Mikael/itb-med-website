import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionWrapper from '../components/SectionWrapper'
import ScrollFadeIn from '../components/ScrollFadeIn'
import PipelineTable from '../components/PipelineTable'

export default function Pipeline() {
  useEffect(() => {
    document.title = 'Pipeline — ITB-MED'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', 'ITB-MED clinical pipeline: Siplizumab, ITB100, ITB200, and ITB300 in development across transplantation, autoimmunity, and neurology.')
    else {
      const m = document.createElement('meta')
      m.name = 'description'
      m.content = 'ITB-MED clinical pipeline: Siplizumab, ITB100, ITB200, and ITB300.'
      document.head.appendChild(m)
    }
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="bg-dark-bg overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-blur-fade-in">
            <p className="text-accent-400 font-medium text-sm tracking-wider uppercase mb-4">Clinical Pipeline</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05] text-white mb-6">
              Focused pipeline with significant opportunities
            </h1>
            <p className="text-lg text-navy-300 leading-relaxed">
              ITB-MED is advancing a multi-asset pipeline anchored by siplizumab, with additional programs targeting transplantation and autoimmune conditions through complementary mechanisms of action.
            </p>
          </div>
          <div className="hidden lg:block">
            <img
              src="/images/pipeline-hero.jpg"
              alt="Fluorescence microscopy of cells"
              className="w-full h-72 object-cover rounded-2xl shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Pipeline Table */}
      <SectionWrapper bg="light">
        <ScrollFadeIn>
          <PipelineTable />
        </ScrollFadeIn>
      </SectionWrapper>

      {/* Asset Descriptions */}
      <SectionWrapper bg="dark">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ScrollFadeIn>
            <div className="p-8 rounded-2xl bg-navy-900/50 border border-navy-700/30 h-full">
              <span className="text-accent-500 font-sans text-sm font-bold tracking-wider">TRANSPLANT & IMMUNE-MEDIATED DISEASES</span>
              <h3 className="font-serif text-2xl text-white mt-2 mb-3">Siplizumab</h3>
              <p className="text-navy-300 text-sm leading-relaxed">
                Humanized anti-CD2 IgG1 monoclonal antibody with programs across kidney transplant induction, ALS, hidradenitis suppurativa, and xenotransplantation.
              </p>
            </div>
          </ScrollFadeIn>
          <ScrollFadeIn delay={100}>
            <div className="p-8 rounded-2xl bg-navy-900/50 border border-navy-700/30 h-full">
              <span className="text-accent-500 font-sans text-sm font-bold tracking-wider">TRANSPLANT & IMMUNE-MEDIATED DISEASES</span>
              <h3 className="font-serif text-2xl text-white mt-2 mb-3">ITB200 (ceduprubart)</h3>
              <p className="text-navy-300 text-sm leading-relaxed">
                Humanized anti-CD2 IgG4 monoclonal antibody. Provides co-stimulation blockade and Treg enrichment without memory T-cell depletion — designed for maintenance therapy and autoimmune conditions.
              </p>
            </div>
          </ScrollFadeIn>
          <ScrollFadeIn delay={200}>
            <div className="p-8 rounded-2xl bg-navy-900/50 border border-navy-700/30 h-full">
              <span className="text-accent-500 font-sans text-sm font-bold tracking-wider">TRANSPLANT</span>
              <h3 className="font-serif text-2xl text-white mt-2 mb-3">ITB100 (Belatacept)</h3>
              <p className="text-navy-300 text-sm leading-relaxed">
                CTLA4-Ig that blocks co-stimulation via the CD80/CD86-CD28 pathway. Being evaluated for combination regimens aimed at improving long-term transplant maintenance.
              </p>
            </div>
          </ScrollFadeIn>
          <ScrollFadeIn delay={300}>
            <div className="p-8 rounded-2xl bg-navy-900/50 border border-navy-700/30 h-full">
              <span className="text-accent-500 font-sans text-sm font-bold tracking-wider">TRANSPLANT</span>
              <h3 className="font-serif text-2xl text-white mt-2 mb-3">ITB300 (anti-CD117)</h3>
              <p className="text-navy-300 text-sm leading-relaxed">
                Novel target for transplant conditioning, currently in preclinical development. Part of ITB-MED's broader strategy to build a comprehensive transplant medicine platform.
              </p>
            </div>
          </ScrollFadeIn>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper bg="dark">
        <ScrollFadeIn>
          <div className="text-center">
            <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-white mb-6">
              Learn about our science
            </h2>
            <Link
              to="/science"
              className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-medium px-8 py-3.5 rounded-lg transition-colors duration-300"
            >
              Explore the Science
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollFadeIn>
      </SectionWrapper>
    </>
  )
}
