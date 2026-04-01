export function Ref({ id }) {
  return (
    <sup className="text-accent-500 text-[10px] font-semibold ml-0.5 cursor-help" title={`Reference ${id}`}>
      [{id}]
    </sup>
  )
}

export function References({ items }) {
  return (
    <div className="mt-16 pt-8 border-t border-navy-700/30">
      <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-navy-400 mb-4">References & Sources</h4>
      <ol className="space-y-2 text-xs text-navy-400 leading-relaxed list-decimal pl-5">
        {items.map((item, i) => (
          <li key={i} id={`ref-${i + 1}`}>{item}</li>
        ))}
      </ol>
    </div>
  )
}
