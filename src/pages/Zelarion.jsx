import { useEffect } from 'react'
import { Ref, References } from '../components/RefNote'
import SectionWrapper from '../components/SectionWrapper'
import ScrollFadeIn from '../components/ScrollFadeIn'
import BoardCard from '../components/BoardCard'
import { boardMembers } from '../data/board'

export default function Zelarion() {
  useEffect(() => {
    document.title = 'Zelarion — ITB-MED'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', 'Zelarion Group owns TCD601 and ITB-MED, developing siplizumab for transplantation and autoimmunity with Orphan Drug Designation in US and EU.')
    else {
      const m = document.createElement('meta')
      m.name = 'description'
      m.content = 'Zelarion Group owns TCD601 and ITB-MED, developing siplizumab for transplantation and autoimmunity with Orphan Drug Designation in US and EU.'
      document.head.appendChild(m)
    }
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-blur-fade-in">
            <p className="text-accent-600 font-medium text-sm tracking-wider uppercase mb-4">Zelarion Group</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05] text-navy-900 mb-6">
              The parent organization behind ITB-MED
            </h1>
            <p className="text-lg text-navy-600 leading-relaxed">
              Zelarion Group is the owner of TCD601 (siplizumab) and ITB-MED. The group is dedicated to developing TCD601 for transplantation and autoimmune diseases, with Orphan Drug Designation granted in both the United States and the European Union.
            </p>
          </div>
          <div className="hidden lg:block">
            <img
              src="/images/dna.jpg"
              alt="Abstract DNA double helix representing pharmaceutical innovation"
              className="w-full h-72 object-cover rounded-2xl shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Key Facts */}
      <SectionWrapper bg="light">
        <ScrollFadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-navy-100/60 text-center">
              <h3 className="font-serif text-xl text-navy-900 mb-2">TCD601 Owner</h3>
              <p className="text-navy-500 text-sm leading-relaxed">Zelarion holds worldwide rights to TCD601 (siplizumab)</p>
            </div>
            <div className="p-8 rounded-2xl bg-white border border-navy-100/60 text-center">
              <h3 className="font-serif text-xl text-navy-900 mb-2">Orphan Drug (US)</h3>
              <p className="text-navy-500 text-sm leading-relaxed">FDA Orphan Drug Designation for transplant tolerance<Ref id={1} /></p>
            </div>
            <div className="p-8 rounded-2xl bg-white border border-navy-100/60 text-center">
              <h3 className="font-serif text-xl text-navy-900 mb-2">Orphan Drug (EU)</h3>
              <p className="text-navy-500 text-sm leading-relaxed">EMA Orphan Drug Designation in the European Union<Ref id={2} /></p>
            </div>
          </div>
        </ScrollFadeIn>
      </SectionWrapper>

      {/* Board */}
      <SectionWrapper bg="white">
        <div className="text-center mb-16">
          <ScrollFadeIn>
            <p className="text-accent-600 font-medium text-sm tracking-wider uppercase mb-4">Leadership</p>
            <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-navy-900">
              Board of Directors
            </h2>
          </ScrollFadeIn>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10">
          {boardMembers.map((member, i) => (
            <ScrollFadeIn key={member.name} delay={i * 80}>
              <BoardCard {...member} />
            </ScrollFadeIn>
          ))}
        </div>
      </SectionWrapper>

      {/* References */}
      <SectionWrapper bg="light">
        <References items={[
          'U.S. Food and Drug Administration. Orphan Drug Designation for siplizumab (TCD601). [Designation number and date to be confirmed by Regulatory Affairs]',
          'European Medicines Agency. Orphan Drug Designation for siplizumab (TCD601) in the European Union. [Designation number and date to be confirmed by Regulatory Affairs]',
        ]} />
      </SectionWrapper>
    </>
  )
}
