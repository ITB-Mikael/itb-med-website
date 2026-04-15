import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Check, Minus } from 'lucide-react'
import { Ref, References } from '../components/RefNote'
import SectionWrapper from '../components/SectionWrapper'
import ScrollFadeIn from '../components/ScrollFadeIn'
import MoAScrollytelling from '../components/MoAScrollytelling'
import MoAVideo from '../components/MoAVideo'

const comparisonRows = [
  { mechanism: 'Co-stimulation blockade (unique epitope binding)', sipli: true, cedu: true },
  { mechanism: 'Selective memory T-cell & NK-cell depletion', sipli: true, cedu: false },
  { mechanism: 'Enrichment of protective regulatory T-cells (Tregs)', sipli: true, cedu: true },
]

export default function Science() {
  useEffect(() => {
    document.title = 'Science — ITB-MED'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', 'ITB-MED\'s multi-asset platform: siplizumab (IgG1), ceduprubart (IgG4), belatacept, and anti-CD117 for transplantation and autoimmunity.')
    else {
      const m = document.createElement('meta')
      m.name = 'description'
      m.content = 'ITB-MED\'s multi-asset platform targeting CD2 for transplantation and autoimmunity.'
      document.head.appendChild(m)
    }
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="bg-dark-bg overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          <div className="animate-blur-fade-in">
            <p className="text-accent-400 font-medium text-sm tracking-wider uppercase mb-4">The Science</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05] text-white mb-6">
              CD2 Targeting — The Power of Immune Rebalancing
            </h1>
            <p className="text-lg text-navy-300 leading-relaxed">
              ITB-MED is developing two anti-CD2 monoclonal antibodies — siplizumab (TCD601, IgG1) and ceduprubart (IgG4) — with complementary mechanisms of action. Together with additional pipeline assets, they form a comprehensive platform for transplantation and autoimmune diseases.
            </p>
          </div>
          {/* Antibody / receptor illustration */}
          <div className="hidden lg:flex items-center justify-center" aria-hidden="true">
            <svg viewBox="0 0 400 400" className="w-80 h-80 opacity-80">
              {/* Cell membrane */}
              <ellipse cx="200" cy="320" rx="160" ry="40" fill="none" stroke="#BFDBFE" strokeWidth="2" strokeDasharray="6 4" />
              {/* CD2 receptors */}
              {[140, 200, 260].map((x, i) => (
                <g key={i}>
                  <rect x={x - 6} y="200" width="12" height="120" rx="6" fill="#DBEAFE" />
                  <circle cx={x} cy="195" r="14" fill="#93C5FD" stroke="#3B82F6" strokeWidth="2" />
                  <text x={x} y="199" textAnchor="middle" fill="#1D4ED8" fontSize="8" fontWeight="bold">CD2</text>
                </g>
              ))}
              {/* Antibody (Y-shape) */}
              <g transform="translate(200, 80)">
                <line x1="0" y1="40" x2="0" y2="80" stroke="#2563EB" strokeWidth="4" strokeLinecap="round" />
                <line x1="0" y1="40" x2="-35" y2="5" stroke="#2563EB" strokeWidth="4" strokeLinecap="round" />
                <line x1="0" y1="40" x2="35" y2="5" stroke="#2563EB" strokeWidth="4" strokeLinecap="round" />
                <circle cx="-35" cy="5" r="10" fill="#3B82F6" opacity="0.8" />
                <circle cx="35" cy="5" r="10" fill="#3B82F6" opacity="0.8" />
                <circle cx="0" cy="85" r="8" fill="#60A5FA" opacity="0.6" />
                <text x="0" y="110" textAnchor="middle" fill="#2563EB" fontSize="9" fontWeight="600">Siplizumab</text>
              </g>
              {/* Binding lines */}
              <line x1="165" y1="85" x2="140" y2="195" stroke="#3B82F6" strokeWidth="1" strokeDasharray="4 3" opacity="0.5" />
              <line x1="235" y1="85" x2="260" y2="195" stroke="#3B82F6" strokeWidth="1" strokeDasharray="4 3" opacity="0.5" />
              {/* Decorative particles */}
              <circle cx="80" cy="150" r="3" fill="#93C5FD" opacity="0.4" />
              <circle cx="320" cy="130" r="4" fill="#BFDBFE" opacity="0.5" />
              <circle cx="100" cy="250" r="2.5" fill="#60A5FA" opacity="0.3" />
              <circle cx="310" cy="260" r="3" fill="#93C5FD" opacity="0.4" />
              <circle cx="60" cy="80" r="2" fill="#DBEAFE" opacity="0.4" />
              <circle cx="340" cy="90" r="2.5" fill="#BFDBFE" opacity="0.3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Target Biology */}
      <SectionWrapper bg="light">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <ScrollFadeIn>
            <div>
              <p className="text-accent-400 font-medium text-sm tracking-wider uppercase mb-4">Target Biology</p>
              <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-white mb-6">
                CD2 — A Strategic Target
              </h2>
              <p className="text-navy-300 leading-relaxed mb-4">
                CD2 is a cell surface molecule found on T cells and NK cells that plays a critical role in immune activation. It mediates cell adhesion and T cell activation through its interaction with LFA-3 (CD58).
              </p>
              <p className="text-navy-300 leading-relaxed">
                Crucially, activated and memory T cells — the cells responsible for transplant rejection and autoimmune pathology — express dramatically higher levels of CD2 than naive T cells. This differential expression enables targeted modulation of pathogenic cells while preserving the naive and regulatory populations essential for immune reconstitution.
              </p>
            </div>
          </ScrollFadeIn>
          <ScrollFadeIn delay={200}>
            <div className="relative p-8 rounded-2xl bg-navy-900/50 border border-navy-700/30 shadow-sm">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-16 h-4 rounded-full bg-accent-500/80" />
                  <div>
                    <p className="text-sm font-semibold text-navy-100">Activated/Memory T cells</p>
                    <p className="text-xs text-navy-400">19x CD2 expression<Ref id={1} /></p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-3 h-4 rounded-full bg-navy-300/60" />
                  <div>
                    <p className="text-sm font-semibold text-navy-100">Naive T cells</p>
                    <p className="text-xs text-navy-400">Baseline CD2 expression</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-4 rounded-full bg-accent-300/60" />
                  <div>
                    <p className="text-sm font-semibold text-navy-100">Regulatory T cells</p>
                    <p className="text-xs text-navy-400">Preserved and enriched</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </SectionWrapper>

      {/* MoA Scrollytelling */}
      <MoAScrollytelling />

      {/* MoA Video */}
      <MoAVideo />

      {/* Ceduprubart */}
      <SectionWrapper bg="light">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <ScrollFadeIn>
            <div>
              <p className="text-accent-400 font-medium text-sm tracking-wider uppercase mb-4">ITB200 — IgG4</p>
              <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-white mb-6">
                Ceduprubart
              </h2>
              <p className="text-navy-300 leading-relaxed mb-4">
                Ceduprubart is a humanized anti-CD2 IgG4 monoclonal antibody that targets the same receptor as siplizumab but with fundamentally different downstream effects due to its IgG4 Fc properties.
              </p>
              <p className="text-navy-300 leading-relaxed">
                Because IgG4 does not engage Fc receptors for ADCC or ADCP, ceduprubart provides co-stimulation blockade and Treg enrichment without depleting memory T cells or NK cells. This makes it ideally suited for maintenance therapy in transplantation and for autoimmune conditions where depletion is not desired.
              </p>
            </div>
          </ScrollFadeIn>
          <ScrollFadeIn delay={200}>
            <div className="p-8 rounded-2xl bg-navy-900/50 border border-navy-700/30 shadow-sm">
              <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-navy-400 mb-6">Mechanism Comparison</h3>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-navy-700/50">
                    <th className="text-left py-3 text-navy-200 font-medium">Mechanism</th>
                    <th className="text-center py-3 text-navy-200 font-medium w-24">Siplizumab<br /><span className="text-xs text-navy-400 font-normal">IgG1</span></th>
                    <th className="text-center py-3 text-navy-200 font-medium w-24">Ceduprubart<br /><span className="text-xs text-navy-400 font-normal">IgG4</span></th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={i} className="border-b border-navy-700/50">
                      <td className="py-3 text-navy-300 text-xs leading-relaxed pr-4">{row.mechanism}</td>
                      <td className="py-3 text-center">
                        <Check className="w-5 h-5 text-accent-500 mx-auto" />
                      </td>
                      <td className="py-3 text-center">
                        {row.cedu ? (
                          <Check className="w-5 h-5 text-accent-500 mx-auto" />
                        ) : (
                          <Minus className="w-5 h-5 text-navy-300 mx-auto" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollFadeIn>
        </div>
      </SectionWrapper>

      {/* Broader Platform */}
      <SectionWrapper bg="white">
        <div className="text-center mb-16">
          <ScrollFadeIn>
            <p className="text-accent-400 font-medium text-sm tracking-wider uppercase mb-4">Multi-Asset Platform</p>
            <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-white">
              Complementary Pipeline Assets
            </h2>
          </ScrollFadeIn>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <ScrollFadeIn>
            <div className="p-8 rounded-2xl border border-navy-700/30 h-full">
              <span className="text-accent-500 font-sans text-sm font-bold tracking-wider">ITB100</span>
              <h3 className="font-serif text-xl text-white mt-2 mb-3">Belatacept</h3>
              <p className="text-navy-300 text-sm leading-relaxed">
                CTLA4-Ig that blocks co-stimulation via the CD80/CD86-CD28 pathway. Being evaluated for a CNI-free maintenance regimen in combination with siplizumab or ceduprubart — targeting a fundamentally different axis of immune co-stimulation.
              </p>
            </div>
          </ScrollFadeIn>
          <ScrollFadeIn delay={150}>
            <div className="p-8 rounded-2xl border border-navy-700/30 h-full">
              <span className="text-accent-500 font-sans text-sm font-bold tracking-wider">ITB300</span>
              <h3 className="font-serif text-xl text-white mt-2 mb-3">Anti-CD117</h3>
              <p className="text-navy-300 text-sm leading-relaxed">
                Novel target for transplant conditioning, currently in preclinical development. Part of ITB-MED's broader strategy to build a comprehensive platform covering induction, maintenance, and conditioning in transplant medicine.
              </p>
            </div>
          </ScrollFadeIn>
        </div>
      </SectionWrapper>

      {/* References */}
      <SectionWrapper bg="white">
        <References items={[
          'Daniels MA, et al. Mol Immunol. 2004. CD2 expression levels on activated/memory vs. naive T cells. [Source to be confirmed by Medical Affairs]',
          'Morris H, et al. Science Transl Med. 2015; Sprangers B, AJT. 2017. Costimulatory blockade and selective depletion via anti-CD2. [Sources to be confirmed]',
          'Savage TM, JCI Insight. 2018. Fc-mediated effector functions of IgG1 vs IgG4 anti-CD2 antibodies. [Source to be confirmed by Medical Affairs]',
        ]} />
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper bg="light">
        <ScrollFadeIn>
          <div className="text-center">
            <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-white mb-6">
              View our clinical pipeline
            </h2>
            <Link
              to="/pipeline"
              className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-medium px-8 py-3.5 rounded-lg transition-colors duration-300"
            >
              Pipeline
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollFadeIn>
      </SectionWrapper>
    </>
  )
}
