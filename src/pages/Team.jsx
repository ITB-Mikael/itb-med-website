import { useEffect } from 'react'
import SectionWrapper from '../components/SectionWrapper'
import ScrollFadeIn from '../components/ScrollFadeIn'
import TeamCard from '../components/TeamCard'
import { teamMembers } from '../data/team'

export default function Team() {
  useEffect(() => {
    document.title = 'Team — ITB-MED'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', 'Meet the ITB-MED team — scientists, physicians, and professionals driving the development of siplizumab (TCD601) for transplantation and autoimmunity.')
    else {
      const m = document.createElement('meta')
      m.name = 'description'
      m.content = 'Meet the ITB-MED team — scientists, physicians, and professionals driving the development of siplizumab (TCD601) for transplantation and autoimmunity.'
      document.head.appendChild(m)
    }
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="bg-dark-bg">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-20 md:py-28">
          <div className="max-w-3xl animate-blur-fade-in">
            <p className="text-accent-400 font-medium text-sm tracking-wider uppercase mb-4">Our Team</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05] text-white mb-6">
              The people behind the science
            </h1>
            <p className="text-lg text-navy-300 leading-relaxed">
              A dedicated team of scientists, clinicians, and industry professionals working across Stockholm and New York to advance siplizumab (TCD601) through clinical development.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <SectionWrapper bg="light">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
          {teamMembers.map((member, i) => (
            <ScrollFadeIn key={member.name} delay={i * 60}>
              <TeamCard {...member} />
            </ScrollFadeIn>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper bg="dark">
        <ScrollFadeIn>
          <div className="text-center">
            <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-white mb-6">
              Join our team
            </h2>
            <p className="text-navy-300 max-w-xl mx-auto leading-relaxed mb-8">
              We're looking for talented people passionate about transforming transplant medicine.
            </p>
            <a
              href="https://careers.itb-med.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-medium px-8 py-3.5 rounded-lg transition-colors duration-300"
            >
              View Open Positions
            </a>
          </div>
        </ScrollFadeIn>
      </SectionWrapper>
    </>
  )
}
