import ScrollFadeIn from './ScrollFadeIn'

export default function NumberedCard({ number, title, description, icon: Icon, delay = 0 }) {
  return (
    <ScrollFadeIn delay={delay}>
      <div className="group relative p-8 rounded-2xl bg-white border border-navy-100/60 hover:border-accent-300/50 transition-all duration-300 hover:shadow-lg h-full">
        <div className="flex items-center gap-3 mb-3">
          <span className="font-sans text-sm font-bold text-accent-500 tracking-wider">
            {String(number).padStart(2, '0')}
          </span>
          {Icon && <Icon className="w-4 h-4 text-accent-400" />}
        </div>
        <h3 className="font-serif text-xl mb-3 text-navy-900">{title}</h3>
        <p className="text-navy-600 leading-relaxed text-[15px]">{description}</p>
      </div>
    </ScrollFadeIn>
  )
}
