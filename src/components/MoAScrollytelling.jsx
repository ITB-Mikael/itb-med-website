import { useState, useEffect, useRef } from 'react'

const steps = [
  { image: '/moa/moa-step-1.png', alt: 'Step 1: Target Recognition — Siplizumab binds to CD2 receptor on T cells and NK cells' },
  { image: '/moa/moa-step-2.png', alt: 'Step 2: Effector Recruitment — Fc region recruits NK cells and macrophages' },
  { image: '/moa/moa-step-3.png', alt: 'Step 3: Engulfment — Macrophages engulf target cells via ADCP' },
  { image: '/moa/moa-step-4.png', alt: 'Step 4: Cell Killing — Selective depletion of activated and memory T cells' },
  { image: '/moa/moa-step-5.png', alt: 'Step 5: Restored Immune Homeostasis — Regulatory T cells enriched' },
]

export default function MoAScrollytelling() {
  const [activeStep, setActiveStep] = useState(0)
  const containerRef = useRef(null)
  const triggerRefs = useRef([])

  useEffect(() => {
    const observers = []

    triggerRefs.current.forEach((trigger, i) => {
      if (!trigger) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveStep(i)
          }
        },
        { threshold: 0.5, rootMargin: '-20% 0px -20% 0px' }
      )
      observer.observe(trigger)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <section className="bg-navy-950 relative">
      {/* Desktop: sticky image + scrolling triggers */}
      <div className="hidden lg:block">
        <div ref={containerRef} className="relative">
          {/* Sticky image panel */}
          <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
            {steps.map((step, i) => (
              <img
                key={i}
                src={step.image}
                alt={step.alt}
                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-700 ease-in-out ${
                  activeStep === i ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
            {/* Subtle gradient overlay at top/bottom */}
            <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-navy-950 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-navy-950 to-transparent" />
          </div>

          {/* Scroll trigger divs */}
          <div className="relative z-10 pointer-events-none">
            {steps.map((_, i) => (
              <div
                key={i}
                ref={(el) => (triggerRefs.current[i] = el)}
                className="h-screen"
                aria-hidden="true"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile: stacked images */}
      <div className="lg:hidden py-12 px-4 space-y-6">
        <div className="text-center mb-8">
          <p className="text-accent-400 font-medium text-sm tracking-wider uppercase mb-3">Mechanism of Action</p>
          <h2 className="font-serif text-2xl text-white">How Siplizumab Works</h2>
        </div>
        {steps.map((step, i) => (
          <img
            key={i}
            src={step.image}
            alt={step.alt}
            className="w-full rounded-lg"
            loading="lazy"
          />
        ))}
      </div>
    </section>
  )
}
