import { pipelineData, pipelinePhases, pipelineFootnotes } from '../data/pipeline'
import ScrollFadeIn from './ScrollFadeIn'

const barColors = {
  'Siplizumab': 'bg-blue-500/70',
  'ITB100': 'bg-teal-500/70',
  'ITB200': 'bg-indigo-500/70',
  'ITB300': 'bg-violet-500/70',
}

function PhaseBar({ startCol, endCol, label, asset, progress }) {
  return (
    <div className="grid grid-cols-5 gap-0.5 h-9">
      {pipelinePhases.map((_, i) => {
        const inRange = i >= startCol && i <= endCol
        const color = barColors[asset] || 'bg-blue-500/70'
        const isPartial = inRange && progress && progress < 1 && i === endCol
        return (
          <div key={i} className="relative flex items-center">
            {inRange && (
              <div
                className={`absolute inset-y-1 inset-x-0.5 rounded ${color} flex items-center justify-center`}
                style={isPartial ? { width: `${progress * 100}%` } : undefined}
              >
                {label && i === startCol && (
                  <span className="text-[10px] font-medium text-white/80 tracking-wide">{label}</span>
                )}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default function PipelineTable() {
  return (
    <div>
      {/* Desktop table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border-collapse min-w-[700px]">
          <thead>
            <tr className="bg-navy-900 text-white">
              <th className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider w-[140px]">Asset</th>
              <th className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider w-[200px]">Indication</th>
              {pipelinePhases.map((phase) => (
                <th key={phase} className="text-center px-2 py-3 text-xs font-semibold uppercase tracking-wider">{phase}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {pipelineData.map((group) =>
              group.rows.map((row, ri) => {
                const color = barColors[group.asset] || 'bg-blue-500/70'
                return (
                  <tr key={`${group.asset}-${ri}`} className="border-b border-navy-700/30 bg-dark-surface">
                    {ri === 0 ? (
                      <td
                        className="px-4 py-3 align-top border-r border-navy-700/30"
                        rowSpan={group.rows.length}
                      >
                        <span className="font-semibold text-white text-sm">{group.asset}</span>
                        {group.subtitle && (
                          <span className="block text-xs text-navy-400 font-normal">{group.subtitle}</span>
                        )}
                      </td>
                    ) : null}
                    <td className="px-4 py-3 text-sm text-navy-300 border-r border-navy-700/30">{row.indication}</td>
                    {pipelinePhases.map((_, ci) => {
                      const inRange = ci >= row.startCol && ci <= row.endCol
                      const isPartial = inRange && row.progress && row.progress < 1 && ci === row.endCol
                      return (
                        <td key={ci} className="px-1 py-2">
                          {inRange && (
                            <div
                              className={`h-7 rounded ${color} flex items-center justify-center`}
                              style={isPartial ? { width: `${row.progress * 100}%` } : undefined}
                            >
                              {row.label && ci === row.startCol && (
                                <span className="text-[10px] font-medium text-white/80 tracking-wide">{row.label}</span>
                              )}
                            </div>
                          )}
                        </td>
                      )
                    })}
                  </tr>
                )
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile view */}
      <div className="md:hidden space-y-6">
        {pipelineData.map((group) => {
          const color = barColors[group.asset] || 'bg-blue-500/70'
          const pillColor = color.replace('/70', '/20')
          return (
            <div key={group.asset} className="bg-dark-surface rounded-xl border border-navy-700/30 overflow-hidden">
              <div className="bg-navy-900 px-4 py-3">
                <span className="font-semibold text-white text-sm">{group.asset}</span>
                {group.subtitle && <span className="text-navy-300 text-xs ml-2">{group.subtitle}</span>}
              </div>
              {group.rows.map((row, ri) => (
                <div key={ri} className="px-4 py-3 border-b border-navy-700/30 last:border-0">
                  <p className="text-sm font-medium text-navy-300 mb-2">{row.indication}</p>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-medium text-navy-200 ${color.replace('bg-', 'bg-').replace('/70', '/20')} px-2.5 py-1 rounded-full`}>
                      {row.startCol === row.endCol
                        ? `${pipelinePhases[row.startCol]}${row.progress ? ' (ongoing)' : ''}`
                        : `${pipelinePhases[row.startCol]} — ${pipelinePhases[row.endCol]}`}
                    </span>
                    {row.label && <span className="text-xs text-navy-400">({row.label})</span>}
                  </div>
                </div>
              ))}
            </div>
          )
        })}
      </div>

      {/* Footnotes */}
      <ScrollFadeIn>
        <div className="mt-8 space-y-1">
          {pipelineFootnotes.map((note, i) => (
            <p key={i} className="text-xs text-navy-400">{note}</p>
          ))}
        </div>
      </ScrollFadeIn>
    </div>
  )
}
