import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Ref, References } from '../components/RefNote'
import SectionWrapper from '../components/SectionWrapper'
import ScrollFadeIn from '../components/ScrollFadeIn'


export default function Home() {
  useEffect(() => {
    document.title = 'ITB-MED — Advancing Transplant Medicine and Targeted Immunology'
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'ITB-MED is developing therapies to transform induction, maintenance, and long-term outcomes for transplant patients and those living with immune-mediated diseases.')
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="relative bg-dark-bg overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[85vh]">
          {/* Image — bleeds to left edge */}
          <div className="relative order-2 lg:order-1 h-[350px] lg:h-auto">
            <img
              src="/images/siplizumab-antibody.png"
              alt="3D render of siplizumab IgG1 antibody — ITB-MED's lead therapeutic targeting CD2"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          {/* Text — right column with padding */}
          <div className="order-1 lg:order-2 flex items-center px-8 md:px-12 lg:pl-16 lg:pr-16 xl:pr-24 py-20 md:py-28">
            <div className="animate-blur-fade-in max-w-xl">
              {/* DRAFT — AWAITING LT APPROVAL */}
              <p className="text-accent-400 font-medium text-sm tracking-wider uppercase mb-4">Transforming Transplant Medicine</p>
              <h1 className="font-serif text-[28px] sm:text-4xl md:text-5xl lg:text-[56px] tracking-tight leading-[1.08] text-white mb-6">
                Advancing the future of transplant medicine and targeted immunology
              </h1>
              <p className="text-lg text-navy-300 leading-relaxed mb-8">
                ITB-MED is developing therapies to transform induction, maintenance, and long-term outcomes for transplant patients and those living with immune-mediated diseases.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/science"
                  className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-medium px-7 py-3.5 rounded-lg transition-colors duration-300"
                >
                  Explore Our Science
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/pipeline"
                  className="inline-flex items-center gap-2 border border-navy-700 hover:border-navy-600 text-navy-200 font-medium px-7 py-3.5 rounded-lg transition-colors duration-300"
                >
                  View Pipeline
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disease Burden */}
      {/* DRAFT — AWAITING LT APPROVAL */}
      {/* COMPLIANCE: All rATG and CNI statistics must be verified against published peer-reviewed sources before launch */}
      <SectionWrapper bg="dark">
        {/* 1. Burden of disease */}
        <div className="text-center mb-16">
          <ScrollFadeIn>
            <p className="text-accent-400 font-medium text-sm tracking-wider uppercase mb-4">The Unmet Need</p>
            <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-white mb-4">
              The burden of kidney disease
            </h2>
            <p className="text-navy-300 max-w-2xl mx-auto leading-relaxed">
              End-stage renal disease affects hundreds of thousands of patients. For many, dialysis remains the only option — with five-year survival rates of approximately 40%.
            </p>
          </ScrollFadeIn>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <ScrollFadeIn delay={0}><div className="text-center p-6 rounded-2xl bg-navy-900/50 border border-navy-700/30">
            <div className="font-serif text-3xl md:text-4xl tracking-tight text-white">800K+</div>
            <div className="mt-2 text-xs font-medium uppercase tracking-widest text-navy-400">ESRD Patients (US)<Ref id={2} /></div>
          </div></ScrollFadeIn>
          <ScrollFadeIn delay={100}><div className="text-center p-6 rounded-2xl bg-navy-900/50 border border-navy-700/30">
            <div className="font-serif text-3xl md:text-4xl tracking-tight text-white">~40%</div>
            <div className="mt-2 text-xs font-medium uppercase tracking-widest text-navy-400">5-Year Survival on Dialysis<Ref id={2} /></div>
          </div></ScrollFadeIn>
          <ScrollFadeIn delay={200}><div className="text-center p-6 rounded-2xl bg-navy-900/50 border border-navy-700/30">
            <div className="font-serif text-3xl md:text-4xl tracking-tight text-white">$130B</div>
            <div className="mt-2 text-xs font-medium uppercase tracking-widest text-navy-400">Medicare CKD & ESRD Spend<Ref id={3} /></div>
          </div></ScrollFadeIn>
          <ScrollFadeIn delay={300}><div className="text-center p-6 rounded-2xl bg-navy-900/50 border border-navy-700/30">
            <div className="font-serif text-3xl md:text-4xl tracking-tight text-white">100K</div>
            <div className="mt-2 text-xs font-medium uppercase tracking-widest text-navy-400">On Transplant Waiting List<Ref id={4} /></div>
          </div></ScrollFadeIn>
        </div>
        {/* 2. Promise of transplant */}
        <ScrollFadeIn delay={400}>
          <div className="mt-12 text-center max-w-3xl mx-auto">
            <h3 className="font-serif text-2xl text-white mb-4">Transplant offers the best chance</h3>
            <p className="text-navy-300 leading-relaxed">
              Kidney transplantation dramatically improves survival and quality of life compared with dialysis. Yet the transplant experience itself remains constrained by significant limitations in current approaches to induction and maintenance therapy.
            </p>
          </div>
        </ScrollFadeIn>
        {/* 3. Opportunity to improve */}
        <ScrollFadeIn delay={500}>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="p-6 rounded-2xl bg-navy-900/50 border border-navy-700/30">
              <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-navy-400 mb-3">Induction Therapy</h4>
              {/* Source: Brennan DC, et al. Rabbit antithymocyte globulin versus basiliximab in renal transplantation. N Engl J Med. 2006;355(19):1967-1977 */}
              <p className="text-navy-300 text-sm leading-relaxed">
                Current induction protocols rely heavily on rabbit-derived polyclonal antibodies (rATG), which carry risks of over-immunosuppression, infection, and inconsistent batch potency.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-navy-900/50 border border-navy-700/30">
              <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-navy-400 mb-3">Maintenance Therapy</h4>
              {/* Source: Naesens M, et al. Calcineurin inhibitor nephrotoxicity. Clin J Am Soc Nephrol. 2009;4(2):481-508 */}
              <p className="text-navy-300 text-sm leading-relaxed">
                Calcineurin inhibitor (CNI)-based maintenance remains the standard of care, yet long-term CNI use is associated with progressive nephrotoxicity, cardiovascular risk, and metabolic complications.
              </p>
            </div>
          </div>
        </ScrollFadeIn>
      </SectionWrapper>

      {/* One Kidney for Life */}
      {/* DRAFT — AWAITING LT APPROVAL */}
      <SectionWrapper bg="elevated">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <ScrollFadeIn>
            <div>
              <p className="text-accent-400 font-medium text-sm tracking-wider uppercase mb-4">Our Strategy</p>
              <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-white mb-6">
                One Kidney for Life
              </h2>
              <p className="text-navy-300 leading-relaxed mb-8">
                ITB-MED is advancing a three-pillar strategy to transform the transplant experience — developing novel approaches to induction, maintenance, and long-term graft survival.
              </p>
              <img
                src="/images/patient-care.jpg"
                alt="Healthcare professional providing patient care in a clinical setting"
                className="w-full h-48 object-cover rounded-xl"
                loading="lazy"
              />
            </div>
          </ScrollFadeIn>
          <div className="space-y-6">
            <ScrollFadeIn delay={100}>
              <div className="p-6 rounded-2xl bg-dark-elevated border border-navy-700/30">
                <span className="text-accent-500 font-sans text-sm font-bold tracking-wider">01</span>
                <h3 className="font-serif text-xl text-white mt-2 mb-2">Modernizing Induction</h3>
                <p className="text-navy-300 text-sm leading-relaxed">
                  Developing a next-generation induction therapy designed to selectively target pathogenic immune cells while preserving protective populations.
                </p>
              </div>
            </ScrollFadeIn>
            <ScrollFadeIn delay={200}>
              <div className="p-6 rounded-2xl bg-dark-elevated border border-navy-700/30">
                <span className="text-accent-500 font-sans text-sm font-bold tracking-wider">02</span>
                <h3 className="font-serif text-xl text-white mt-2 mb-2">Improving Maintenance</h3>
                <p className="text-navy-300 text-sm leading-relaxed">
                  Evaluating combination regimens aimed at reducing the long-term burden of maintenance immunosuppression while maintaining graft function.
                </p>
              </div>
            </ScrollFadeIn>
            <ScrollFadeIn delay={300}>
              <div className="p-6 rounded-2xl bg-dark-elevated border border-navy-700/30">
                <span className="text-accent-500 font-sans text-sm font-bold tracking-wider">03</span>
                <h3 className="font-serif text-xl text-white mt-2 mb-2">Working Towards Tolerance</h3>
                <p className="text-navy-300 text-sm leading-relaxed">
                  Pursuing the ultimate goal in transplantation — durable immune tolerance that could free patients from chronic immunosuppressive therapy entirely.
                </p>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </SectionWrapper>

      {/* Pipeline Teaser */}
      <SectionWrapper bg="dark">
        <ScrollFadeIn>
          <div className="text-center mb-12">
            <p className="text-accent-400 font-medium text-sm tracking-wider uppercase mb-4">Our Pipeline</p>
            <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-white mb-6">
              A multi-asset approach to transplant medicine
            </h2>
            <p className="text-navy-300 leading-relaxed max-w-2xl mx-auto">
              Siplizumab (TCD601), ceduprubart, belatacept, and anti-CD117 — four assets with complementary mechanisms targeting induction, maintenance, conditioning, and tolerance.
            </p>
          </div>
        </ScrollFadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <ScrollFadeIn delay={0}>
            <div className="group relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img src="/images/surgery.jpg" alt="Researchers analyzing transplant data" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white font-serif text-lg">Transplant</p>
                <p className="text-navy-200 text-sm mt-1">Kidney induction, maintenance & conditioning</p>
              </div>
            </div>
          </ScrollFadeIn>
          <ScrollFadeIn delay={100}>
            <div className="group relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img src="/images/neurology.jpg" alt="Brain scan imaging for neurological research" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white font-serif text-lg">Neuro-inflammatory</p>
                <p className="text-navy-200 text-sm mt-1">ALS</p>
              </div>
            </div>
          </ScrollFadeIn>
          <ScrollFadeIn delay={200}>
            <div className="group relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img src="/images/inflammatory.jpg" alt="Biotech laboratory research for dermatology" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white font-serif text-lg">Dermatology</p>
                <p className="text-navy-200 text-sm mt-1">Hidradenitis suppurativa</p>
              </div>
            </div>
          </ScrollFadeIn>
          <ScrollFadeIn delay={300}>
            <div className="group relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img src="/images/cells.jpg" alt="Microscopic view of immune cells" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white font-serif text-lg">Rheumatology</p>
                <p className="text-navy-200 text-sm mt-1">Autoimmune conditions</p>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
        <div className="text-center">
          <Link
            to="/pipeline"
            className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-medium px-8 py-3.5 rounded-lg transition-colors duration-300"
          >
            View Full Pipeline
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </SectionWrapper>

      {/* References */}
      <SectionWrapper bg="dark">
        <References items={[
          'Kawai T, et al. HLA-mismatched renal transplantation without maintenance immunosuppression. N Engl J Med. 2008;358(4):353-361. [Source to be confirmed by Medical Affairs]',
          'United States Renal Data System (USRDS). Annual Data Report: Epidemiology of Kidney Disease in the United States. [Year/edition to be confirmed]',
          'Centers for Medicare & Medicaid Services (CMS). Medicare spending on chronic kidney disease and ESRD. [Source/year to be confirmed]',
          'Organ Procurement and Transplantation Network (OPTN). National waiting list data. [Date to be confirmed]',
          'Scientific Registry of Transplant Recipients (SRTR). Annual report on transplant outcomes: graft and patient survival rates. [Year to be confirmed]',
          'American Cancer Society. Cancer Facts & Figures; compared with USRDS dialysis survival data. [Source/year to be confirmed]',
          'Cortellis Competitive Intelligence database. Global R&D spend by therapeutic area. [Source/year to be confirmed]',
        ]} />
      </SectionWrapper>

    </>
  )
}
