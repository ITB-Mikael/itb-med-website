import { useState, useEffect, useRef } from 'react'

export default function StatCounter({ end, suffix = '', label, duration = 2000 }) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [hasStarted])

  useEffect(() => {
    if (!hasStarted) return
    const steps = 60
    const increment = end / steps
    const stepTime = duration / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, stepTime)
    return () => clearInterval(timer)
  }, [hasStarted, end, duration])

  return (
    <div ref={ref} className="text-center">
      <div className="font-serif text-5xl md:text-6xl tracking-tight text-accent-500">
        {count}{suffix}
      </div>
      <div className="mt-2 text-sm font-medium uppercase tracking-widest text-navy-400">
        {label}
      </div>
    </div>
  )
}
