import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Ref, References } from '../components/RefNote'
import SectionWrapper from '../components/SectionWrapper'
import ScrollFadeIn from '../components/ScrollFadeIn'
import StatCounter from '../components/StatCounter'
import VideoPlayer from '../components/VideoPlayer'

export default function Home() {
  useEffect(() => {
    document.title = 'ITB-MED — Immunosuppression Freedom After Transplantation'
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'ITB-MED develops TCD601 (siplizumab) for transplantation and autoimmunity — pioneering immunosuppression-free outcomes for transplant patients.')
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="relative bg-white overflow-hidden">
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
              <p className="text-accent-600 font-medium text-sm tracking-wider uppercase mb-4">Transforming Transplant Medicine</p>
              <h1 className="font-serif text-[32px] sm:text-5xl md:text-6xl lg:text-[72px] tracking-tight leading-[1.05] text-navy-900 mb-6">
                Immunosuppression freedom after transplantation
              </h1>
              <p className="text-lg text-navy-600 leading-relaxed mb-8">
                ITB-MED is developing TCD601 (siplizumab), a monoclonal antibody targeting CD2, to achieve lasting immune tolerance in transplant recipients — eliminating the need for lifelong immunosuppressive drugs.
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
                  className="inline-flex items-center gap-2 border border-navy-200 hover:border-navy-300 text-navy-700 font-medium px-7 py-3.5 rounded-lg transition-colors duration-300"
                >
                  View Pipeline
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Story — Jennifer Searl */}
      <SectionWrapper bg="light">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScrollFadeIn>
            <div>
              <p className="text-accent-600 font-medium text-sm tracking-wider uppercase mb-4">Patient Story</p>
              <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-navy-900 mb-6">
                Jennifer Searl
              </h2>
              <blockquote className="font-serif text-xl italic text-navy-700 leading-relaxed border-l-4 border-accent-400 pl-6 mb-6">
                The first HLA-mismatched kidney transplant recipient to achieve induced tolerance — living more than 15 years without immunosuppression.<Ref id={1} />
              </blockquote>
              <p className="text-navy-600 leading-relaxed">
                Jennifer's story embodies ITB-MED's mission. Through a pioneering tolerance induction protocol using siplizumab and mixed chimerism, she received a kidney transplant and was able to discontinue all immunosuppressive medication. Her case demonstrates the transformative potential of our approach to transplant medicine.
              </p>
            </div>
          </ScrollFadeIn>
          <ScrollFadeIn delay={200}>
            <VideoPlayer />
          </ScrollFadeIn>
        </div>
      </SectionWrapper>

      {/* Stats */}
      <SectionWrapper bg="dark">
        <ScrollFadeIn>
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-white mb-4">
              Clinical Heritage
            </h2>
            <p className="text-navy-300 max-w-2xl mx-auto leading-relaxed">
              Decades of research and clinical experience form the foundation of our program.
            </p>
          </div>
        </ScrollFadeIn>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <StatCounter end={7} suffix="+" label="Active Trials" />
          <StatCounter end={4} label="Therapeutic Areas" duration={1500} />
          <StatCounter end={20} suffix="+" label="Years of Research" duration={2500} />
          <StatCounter end={600} suffix="+" label="Patients Studied" duration={3000} />
        </div>
      </SectionWrapper>

      {/* Disease Burden */}
      <SectionWrapper bg="white">
        <div className="text-center mb-16">
          <ScrollFadeIn>
            <p className="text-accent-600 font-medium text-sm tracking-wider uppercase mb-4">The Unmet Need</p>
            <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-navy-900 mb-4">
              The burden of kidney disease
            </h2>
            <p className="text-navy-600 max-w-2xl mx-auto leading-relaxed">
              End-stage renal disease affects hundreds of thousands of patients, yet transplant outcomes remain limited by the toxicity of lifelong immunosuppression.
            </p>
          </ScrollFadeIn>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <ScrollFadeIn delay={0}><div className="text-center p-6 rounded-2xl bg-navy-50 border border-navy-100/60">
            <div className="font-serif text-3xl md:text-4xl tracking-tight text-navy-900">800K+</div>
            <div className="mt-2 text-xs font-medium uppercase tracking-widest text-navy-500">ESRD Patients (US)<Ref id={2} /></div>
          </div></ScrollFadeIn>
          <ScrollFadeIn delay={100}><div className="text-center p-6 rounded-2xl bg-navy-50 border border-navy-100/60">
            <div className="font-serif text-3xl md:text-4xl tracking-tight text-navy-900">~40%</div>
            <div className="mt-2 text-xs font-medium uppercase tracking-widest text-navy-500">5-Year Survival on Dialysis<Ref id={2} /></div>
          </div></ScrollFadeIn>
          <ScrollFadeIn delay={200}><div className="text-center p-6 rounded-2xl bg-navy-50 border border-navy-100/60">
            <div className="font-serif text-3xl md:text-4xl tracking-tight text-navy-900">$130B</div>
            <div className="mt-2 text-xs font-medium uppercase tracking-widest text-navy-500">Medicare CKD & ESRD Spend<Ref id={3} /></div>
          </div></ScrollFadeIn>
          <ScrollFadeIn delay={300}><div className="text-center p-6 rounded-2xl bg-navy-50 border border-navy-100/60">
            <div className="font-serif text-3xl md:text-4xl tracking-tight text-navy-900">100K</div>
            <div className="mt-2 text-xs font-medium uppercase tracking-widest text-navy-500">On Transplant Waiting List<Ref id={4} /></div>
          </div></ScrollFadeIn>
        </div>
        {/* Survival comparison */}
        <ScrollFadeIn delay={400}>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-5 rounded-xl bg-red-50 border border-red-100/60">
              <div className="font-serif text-2xl text-red-700">~40%</div>
              <div className="text-xs font-medium text-red-500 mt-1">Dialysis 5-Year Survival<Ref id={2} /></div>
            </div>
            <div className="text-center p-5 rounded-xl bg-amber-50 border border-amber-100/60">
              <div className="font-serif text-2xl text-amber-700">80%+</div>
              <div className="text-xs font-medium text-amber-600 mt-1">Deceased Donor Transplant<Ref id={5} /></div>
            </div>
            <div className="text-center p-5 rounded-xl bg-green-50 border border-green-100/60">
              <div className="font-serif text-2xl text-green-700">90%+</div>
              <div className="text-xs font-medium text-green-600 mt-1">Living Donor Transplant<Ref id={5} /></div>
            </div>
          </div>
        </ScrollFadeIn>
        <ScrollFadeIn delay={500}>
          <div className="mt-8 text-center">
            <blockquote className="font-serif text-lg italic text-navy-700 max-w-2xl mx-auto">
              Five-year survival in cancer has surpassed dialysis patients<Ref id={6} />
            </blockquote>
            <p className="text-sm text-navy-500 mt-4 max-w-2xl mx-auto leading-relaxed">
              Despite driving &gt;24% of Medicare spending, kidney disease receives only ~$3-5B in R&D<Ref id={7} /> — a fraction of what other therapeutic areas attract. CNI-based therapy remains nephrotoxic, damaging the very organ it's meant to protect.<Ref id={8} />
            </p>
          </div>
        </ScrollFadeIn>
      </SectionWrapper>

      {/* One Kidney for Life */}
      <SectionWrapper bg="light">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <ScrollFadeIn>
            <div>
              <p className="text-accent-600 font-medium text-sm tracking-wider uppercase mb-4">Our Strategy</p>
              <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-navy-900 mb-6">
                One Kidney for Life
              </h2>
              <p className="text-navy-600 leading-relaxed mb-8">
                ITB-MED's three-pillar strategy aims to transform kidney transplant outcomes — from improving induction therapy through achieving complete immunosuppression freedom.
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
              <div className="p-6 rounded-2xl bg-white border border-navy-100/60">
                <span className="text-accent-500 font-sans text-sm font-bold tracking-wider">01</span>
                <h3 className="font-serif text-xl text-navy-900 mt-2 mb-2">Induction Therapy Improvements</h3>
                <p className="text-navy-600 text-sm leading-relaxed">
                  Establish siplizumab as a new standard of care for depleting induction therapy, improving on rabbit-derived polyclonal ATG.
                </p>
              </div>
            </ScrollFadeIn>
            <ScrollFadeIn delay={200}>
              <div className="p-6 rounded-2xl bg-white border border-navy-100/60">
                <span className="text-accent-500 font-sans text-sm font-bold tracking-wider">02</span>
                <h3 className="font-serif text-xl text-navy-900 mt-2 mb-2">Maintenance Therapy Improvements</h3>
                <p className="text-navy-600 text-sm leading-relaxed">
                  Achieve a highly effective CNI-free regimen combining siplizumab or ceduprubart (ITB200) with belatacept (ITB100).
                </p>
              </div>
            </ScrollFadeIn>
            <ScrollFadeIn delay={300}>
              <div className="p-6 rounded-2xl bg-white border border-navy-100/60">
                <span className="text-accent-500 font-sans text-sm font-bold tracking-wider">03</span>
                <h3 className="font-serif text-xl text-navy-900 mt-2 mb-2">Tolerance-Mediated Freedom</h3>
                <p className="text-navy-600 text-sm leading-relaxed">
                  Develop a siplizumab-based regimen to induce durable tolerance, eliminating the need for chronic immunosuppressive therapy entirely.
                </p>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </SectionWrapper>

      {/* Pipeline Teaser */}
      <SectionWrapper bg="white">
        <ScrollFadeIn>
          <div className="text-center mb-12">
            <p className="text-accent-600 font-medium text-sm tracking-wider uppercase mb-4">Our Pipeline</p>
            <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-navy-900 mb-6">
              A multi-asset approach to transplant medicine
            </h2>
            <p className="text-navy-600 leading-relaxed max-w-2xl mx-auto">
              Siplizumab, ceduprubart, belatacept, and anti-CD117 — four assets with complementary mechanisms targeting induction, maintenance, conditioning, and tolerance.
            </p>
          </div>
        </ScrollFadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <ScrollFadeIn delay={0}>
            <div className="group relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img src="/images/surgery.jpg" alt="Surgical team performing a transplant procedure" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white font-serif text-lg">Transplantation</p>
                <p className="text-navy-200 text-sm mt-1">Kidney induction & xenotransplantation</p>
              </div>
            </div>
          </ScrollFadeIn>
          <ScrollFadeIn delay={100}>
            <div className="group relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img src="/images/neurology.jpg" alt="Brain scan imaging for neurological research" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white font-serif text-lg">Neurology</p>
                <p className="text-navy-200 text-sm mt-1">ALS & hidradenitis suppurativa</p>
              </div>
            </div>
          </ScrollFadeIn>
          <ScrollFadeIn delay={200}>
            <div className="group relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img src="/images/cells.jpg" alt="Microscopic view of immune cells" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white font-serif text-lg">Autoimmunity</p>
                <p className="text-navy-200 text-sm mt-1">Ceduprubart & belatacept</p>
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
      <SectionWrapper bg="white">
        <References items={[
          'Kawai T, et al. HLA-mismatched renal transplantation without maintenance immunosuppression. N Engl J Med. 2008;358(4):353-361. [Source to be confirmed by Medical Affairs]',
          'United States Renal Data System (USRDS). Annual Data Report: Epidemiology of Kidney Disease in the United States. [Year/edition to be confirmed]',
          'Centers for Medicare & Medicaid Services (CMS). Medicare spending on chronic kidney disease and ESRD. [Source/year to be confirmed]',
          'Organ Procurement and Transplantation Network (OPTN). National waiting list data. [Date to be confirmed]',
          'Scientific Registry of Transplant Recipients (SRTR). Annual report on transplant outcomes: graft and patient survival rates. [Year to be confirmed]',
          'American Cancer Society. Cancer Facts & Figures; compared with USRDS dialysis survival data. [Source/year to be confirmed]',
          'Cortellis Competitive Intelligence database. Global R&D spend by therapeutic area. [Source/year to be confirmed]',
          'Naesens M, et al. Calcineurin inhibitor nephrotoxicity. Clin J Am Soc Nephrol. 2009;4(2):481-508. [Source to be confirmed by Medical Affairs]',
        ]} />
      </SectionWrapper>

      {/* CTA */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900 py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent-400 blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-accent-300 blur-[100px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16 text-center">
          <ScrollFadeIn>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight text-white mb-6">
              Help us make a real difference
            </h2>
            <p className="text-navy-300 max-w-xl mx-auto leading-relaxed mb-10">
              Join our team and contribute to developing therapies that can transform the lives of transplant patients worldwide.
            </p>
            <a
              href="https://careers.itb-med.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-medium px-8 py-3.5 rounded-lg transition-colors duration-300"
            >
              Explore Careers
              <ArrowRight className="w-4 h-4" />
            </a>
          </ScrollFadeIn>
        </div>
      </section>
    </>
  )
}
