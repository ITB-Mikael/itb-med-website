import ScrollFadeIn from './ScrollFadeIn'

const events = [
  { year: 'Origins', text: 'Siplizumab (MEDI-507) initially developed by MedImmune, with decades of clinical research in transplantation and autoimmunity.' },
  { year: '2016', text: 'ITB-MED founded to advance TCD601 (siplizumab) through clinical development in transplantation and autoimmune diseases.' },
  { year: '2018', text: '$67 million raised to fund the comprehensive clinical program across multiple transplant and autoimmune indications.' },
  { year: '2025', text: 'Nefro Avillion Clinical Development established as sister company to execute the kidney transplant tolerance program.' },
]

export default function Timeline() {
  return (
    <div className="relative">
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-navy-200/60 md:-translate-x-px" />
      <div className="space-y-12 md:space-y-16">
        {events.map((event, i) => (
          <ScrollFadeIn key={i} delay={i * 100}>
            <div className={`relative flex items-start gap-8 md:gap-16 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-accent-500 -translate-x-1.5 mt-2 ring-4 ring-white" />
              <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'}`}>
                <span className="inline-block font-sans text-sm font-bold text-accent-500 tracking-wider mb-2">{event.year}</span>
                <p className="text-navy-700 leading-relaxed">{event.text}</p>
              </div>
            </div>
          </ScrollFadeIn>
        ))}
      </div>
    </div>
  )
}
