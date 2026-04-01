const bgVariants = {
  white: 'bg-dark-surface',
  dark: 'bg-navy-950',
  light: 'bg-dark-bg',
  elevated: 'bg-dark-elevated',
}

export default function SectionWrapper({ children, bg = 'white', className = '', id }) {
  return (
    <section id={id} className={`py-20 md:py-28 ${bgVariants[bg]} ${className}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        {children}
      </div>
    </section>
  )
}
