import { useEffect, useRef } from 'react'

export default function ScrollFadeIn({ children, className = '', delay = 0 }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const show = () => {
      setTimeout(() => {
        el.classList.add('scroll-visible')
      }, delay)
    }

    // If already in viewport on mount, show immediately
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      show()
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show()
          observer.unobserve(el)
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div ref={ref} className={`scroll-hidden ${className}`}>
      {children}
    </div>
  )
}
