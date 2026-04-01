import { useState, useEffect, useRef, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const steps = [
  { image: '/moa/moa-step-1.png', alt: 'Step 1: Target Recognition — Siplizumab binds to CD2 receptor on T cells and NK cells', label: 'Target Recognition' },
  { image: '/moa/moa-step-2.png', alt: 'Step 2: Effector Recruitment — Fc region recruits NK cells and macrophages', label: 'Effector Recruitment' },
  { image: '/moa/moa-step-3.png', alt: 'Step 3: Engulfment — Macrophages engulf target cells via ADCP', label: 'Engulfment' },
  { image: '/moa/moa-step-4.png', alt: 'Step 4: Cell Killing — Selective depletion of activated and memory T cells', label: 'Cell Killing' },
  { image: '/moa/moa-step-5.png', alt: 'Step 5: Restored Immune Homeostasis — Regulatory T cells enriched', label: 'Immune Homeostasis' },
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

  const scrollToStep = useCallback((index) => {
    const trigger = triggerRefs.current[index]
    if (trigger) {
      trigger.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }, [])

  // Mobile step navigation
  const [mobileStep, setMobileStep] = useState(0)
  const goToMobileStep = useCallback((index) => {
    if (index >= 0 && index < steps.length) {
      setMobileStep(index)
    }
  }, [])

  return (
    <section className="bg-navy-950 relative">
      {/* Desktop: sticky image + scrolling triggers + progression indicator */}
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

            {/* Desktop progression indicator — right side */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 flex flex-col items-end gap-4">
              {steps.map((step, i) => (
                <button
                  key={i}
                  onClick={() => scrollToStep(i)}
                  className="group flex items-center gap-3 cursor-pointer"
                  aria-label={`Go to step ${i + 1}: ${step.label}`}
                >
                  {/* Label — visible on hover or when active */}
                  <span
                    className={`text-xs font-medium tracking-wide uppercase transition-all duration-300 ${
                      activeStep === i
                        ? 'opacity-100 text-white translate-x-0'
                        : 'opacity-0 text-white/70 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
                    }`}
                  >
                    {step.label}
                  </span>
                  {/* Dot */}
                  <div className="relative flex items-center justify-center">
                    <div
                      className={`rounded-full transition-all duration-300 ${
                        activeStep === i
                          ? 'w-3 h-3 bg-accent-400 shadow-[0_0_8px_rgba(59,130,246,0.5)]'
                          : 'w-2 h-2 bg-white/30 group-hover:bg-white/60'
                      }`}
                    />
                    {/* Active ring */}
                    {activeStep === i && (
                      <div className="absolute w-5 h-5 rounded-full border border-accent-400/40 animate-pulse" />
                    )}
                  </div>
                </button>
              ))}
              {/* Step counter */}
              <div className="mt-2 text-[11px] text-white/40 font-medium tabular-nums">
                {activeStep + 1} / {steps.length}
              </div>
            </div>
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

      {/* Mobile: single image with navigation */}
      <div className="lg:hidden py-12 px-4">
        <div className="text-center mb-8">
          <p className="text-accent-400 font-medium text-sm tracking-wider uppercase mb-3">Mechanism of Action</p>
          <h2 className="font-serif text-2xl text-white">How Siplizumab Works</h2>
        </div>

        {/* Image with prev/next */}
        <div className="relative aspect-[16/9] rounded-lg overflow-hidden bg-navy-900">
          <img
            src={steps[mobileStep].image}
            alt={steps[mobileStep].alt}
            className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-500"
          />

          {/* Prev button */}
          {mobileStep > 0 && (
            <button
              onClick={() => goToMobileStep(mobileStep - 1)}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-navy-900/70 backdrop-blur-sm flex items-center justify-center text-white/80 hover:text-white hover:bg-navy-900/90 transition-all"
              aria-label="Previous step"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          {/* Next button */}
          {mobileStep < steps.length - 1 && (
            <button
              onClick={() => goToMobileStep(mobileStep + 1)}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-navy-900/70 backdrop-blur-sm flex items-center justify-center text-white/80 hover:text-white hover:bg-navy-900/90 transition-all"
              aria-label="Next step"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Step label */}
        <p className="text-center text-white/70 text-sm font-medium mt-4 tracking-wide">
          Step {mobileStep + 1}: {steps[mobileStep].label}
        </p>

        {/* Dot indicator */}
        <div className="flex items-center justify-center gap-2.5 mt-4">
          {steps.map((step, i) => (
            <button
              key={i}
              onClick={() => goToMobileStep(i)}
              className={`rounded-full transition-all duration-300 ${
                mobileStep === i
                  ? 'w-8 h-2 bg-accent-400'
                  : 'w-2 h-2 bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to step ${i + 1}: ${step.label}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
