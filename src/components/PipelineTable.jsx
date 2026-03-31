import { pipelineData, pipelinePhases, pipelineFootnotes } from '../data/pipeline'
import ScrollFadeIn from './ScrollFadeIn'

function PhaseBar({ startCol, endCol, label }) {
  return (
    <div className="grid grid-cols-5 gap-0.5 h-9">
      {pipelinePhases.map((_, i) => {
        const inRange = i >= startCol && i <= endCol
        return (
          <div key={i} className="relative flex items-center">
            {inRange && (
              <div className="absolute inset-y-1 inset-x-0.5 rounded bg-navy-200/70 flex items-center justify-center">
                {label && i === startCol && (
                  <span className="text-[10px] font-medium text-navy-700 tracking-wide">{label}</span>
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
              group.rows.map((row, ri) => (
                <tr key={`${group.asset}-${ri}`} className="border-b border-navy-100/60 bg-white">
                  {ri === 0 ? (
                    <td
                      className="px-4 py-3 align-top border-r border-navy-100/40"
                      rowSpan={group.rows.length}
                    >
                      <span className="font-semibold text-navy-900 text-sm">{group.asset}</span>
                      {group.subtitle && (
                        <span className="block text-xs text-navy-400 font-normal">{group.subtitle}</span>
                      )}
                    </td>
                  ) : null}
                  <td className="px-4 py-3 text-sm text-navy-700 border-r border-navy-100/40">{row.indication}</td>
                  {pipelinePhases.map((_, ci) => {
                    const inRange = ci >= row.startCol && ci <= row.endCol
                    return (
                      <td key={ci} className="px-1 py-2">
                        {inRange && (
                          <div className="h-7 rounded bg-navy-200/70 flex items-center justify-center">
                            {row.label && ci === row.startCol && (
                              <span className="text-[10px] font-medium text-navy-700 tracking-wide">{row.label}</span>
                            )}
                          </div>
                        )}
                      </td>
                    )
                  })}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile view */}
      <div className="md:hidden space-y-6">
        {pipelineData.map((group) => (
          <div key={group.asset} className="bg-white rounded-xl border border-navy-100/60 overflow-hidden">
            <div className="bg-navy-900 px-4 py-3">
              <span className="font-semibold text-white text-sm">{group.asset}</span>
              {group.subtitle && <span className="text-navy-300 text-xs ml-2">{group.subtitle}</span>}
            </div>
            {group.rows.map((row, ri) => (
              <div key={ri} className="px-4 py-3 border-b border-navy-100/40 last:border-0">
                <p className="text-sm font-medium text-navy-800 mb-2">{row.indication}</p>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-navy-500 bg-navy-50 px-2.5 py-1 rounded-full">
                    {row.startCol === row.endCol
                      ? pipelinePhases[row.startCol]
                      : `${pipelinePhases[row.startCol]} — ${pipelinePhases[row.endCol]}`}
                  </span>
                  {row.label && <span className="text-xs text-navy-400">({row.label})</span>}
                </div>
              </div>
            ))}
          </div>
        ))}
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
