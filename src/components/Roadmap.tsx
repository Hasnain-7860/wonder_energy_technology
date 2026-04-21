import { useEffect, useState } from 'react'
import { FiCheck } from 'react-icons/fi'
import { client } from '../sanityClient'

type Phase = {
  num: number
  title: string
  items: string[]
}

type RoadmapPhaseRow = {
  _key?: string
  num?: number
  title?: string
  items?: string[]
}

const ROADMAP_QUERY = `*[_type == "roadmapSettings"] | order(_updatedAt desc) {
  phases[]{
    _key,
    num,
    title,
    items
  }
}`

function isValidPhaseRow(row: RoadmapPhaseRow | null | undefined): row is RoadmapPhaseRow {
  if (!row) return false
  if (typeof row.num !== 'number' || !Number.isFinite(row.num)) return false
  if (typeof row.title !== 'string' || row.title.trim().length === 0) return false
  if (!Array.isArray(row.items) || row.items.length === 0) return false
  return row.items.every((line) => typeof line === 'string' && line.trim().length > 0)
}

function mergePhasesFromDocuments(
  docs: { phases?: RoadmapPhaseRow[] | null }[] | null | undefined,
): Phase[] {
  if (!docs?.length) return []
  const out: Phase[] = []
  const seen = new Set<string>()
  for (const doc of docs) {
    const rows = doc?.phases
    if (!rows?.length) continue
    for (const row of rows) {
      if (!isValidPhaseRow(row)) continue
      const num = Math.round(row.num)
      const title = row.title.trim()
      const items = row.items.map((line) => line.trim()).filter(Boolean)
      if (items.length === 0) continue
      const dedupeKey = `${num}\n${title}\n${items.join('\n')}`
      if (seen.has(dedupeKey)) continue
      seen.add(dedupeKey)
      out.push({ num, title, items })
    }
  }
  out.sort((a, b) => a.num - b.num)
  return out
}



function RoadmapConnector({ rows }: { rows: number }) {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 hidden md:block">

      {Array.from({ length: rows }).map((_, i) => {
        const isEven = i % 2 === 0

        return (
          <div
            key={i}
            className={`absolute w-full h-[220px]
              ${isEven
                ? "border-t-2 border-r-2 border-b-2 border-l-0 rounded-r-[30px] "
                : "border-t-2 border-l-2 border-b-2 border-r-0 rounded-l-[30px]"
              }
              border-dashed border-[#6FE7EC]/60
            `}
            style={{
              top: `${160 + i * 218}px`, 
              left: isEven ? "0%" : "-2%",
              width: isEven ? "110%" : "100%",
            }}
          />
        )
      })}

    </div>
  )
}
function PhaseCard({ phase, isTopRow }: { phase: Phase; isTopRow: boolean }) {
  return (
<article className={`relative z-10 w-full text-center md:max-w-none md:text-left`}>
       <p
  className={`mb-1.5 font-inter text-[11px] font-semibold uppercase tracking-[0.26em] text-[#7ee8ec] sm:text-[12px] sm:tracking-[0.3em]
  ${isTopRow ? "text-center md:text-left" : "text-center md:text-left md:mt-10"}`}
  style={{ fontFamily: "'Acme', ui-sans-serif, system-ui, sans-serif" }}
>
  Phase {phase.num}
</p>

<h3
  className={`font-twobit-only text-[clamp(0.95rem,3.8vw,1.2rem)] font-normal leading-snug tracking-[0.12em] text-white sm:tracking-[0.14em]
  ${isTopRow ? "" : "md:mb-10"}`}
>
  {phase.title}
</h3>

        <div className="mt-3 flex items-stretch justify-center gap-2.5 sm:mt-5 sm:gap-4 md:justify-start">
         <div className="flex w-8 shrink-0 flex-col items-center sm:w-11">
  <div
    className={`relative z-20 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#5CE1E6] sm:h-[20px] sm:w-[20px]
    ${isTopRow ? "" : "md:order-2 md:top-[-225px]"}`}
  >
  <FiCheck className="text-xs sm:text-base" />
  </div>
  <div
    className={`w-[2px] flex-1 min-h-[3rem] rounded-full bg-[#5CE1E6] sm:min-h-[4.5rem]
    ${isTopRow ? "mt-1.5 sm:mt-2" : "mb-1.5 md:mb-2 md:order-1"}`}
  />

</div>
                      <ul className={`font-inter list-disc space-y-1.5 pl-4 text-left text-[11px] leading-relaxed text-white/95 sm:pl-5 sm:text-[12px]
  ${isTopRow ? "mt-2 sm:mt-10" : "mb-0 md:mb-10"}`}>
            {phase.items.map((line) => (
              <li key={line} className="pl-0.5">
                {line}
              </li>
            ))}
          </ul>
        </div>
      </article>
  )
}

export default function Roadmap() {
  const [phases, setPhases] = useState<Phase[]>([])

  useEffect(() => {
    let cancelled = false

    client
      .fetch<{ phases?: RoadmapPhaseRow[] | null }[]>(ROADMAP_QUERY, {}, { useCdn: false })
      .then((docs) => {
        if (cancelled) return
        const fromSanity = mergePhasesFromDocuments(docs)
        setPhases(fromSanity)
      })
      .catch((err: unknown) => {
        if (cancelled) return
        if (import.meta.env.DEV) {
          console.error('[Roadmap] Sanity fetch failed:', err)
        }
      })

    return () => {
      cancelled = true
    }
  }, [])

  const chunkSize = 3

const rows = []
for (let i = 0; i < phases.length; i += chunkSize) {
  rows.push(phases.slice(i, i + chunkSize))
}

  if (phases.length === 0) {
    return null
  }
  return (
    <section
      id="roadmap"
      className=""
    
      aria-labelledby="roadmap-heading"
    >
      {/* <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.18)_0%,transparent_24%,transparent_76%,rgba(0,0,0,0.18)_100%)]" /> */}

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-1 sm:px-0">
        <header className="mb-12 text-center sm:mb-14 lg:mb-16">
          <p
            className="mb-2 text-[13px] font-medium uppercase tracking-[0.28em] text-[#7ee8ec] sm:text-[14px]"
            style={{ fontFamily: "'Acme', ui-sans-serif, system-ui, sans-serif" }}
          >
            Our Roadmap
          </p>
          <h2
            id="roadmap-heading"
            className="font-twobit-only mx-auto max-w-[24ch] text-[clamp(1.1rem,4vw,2.25rem)] font-normal leading-tight tracking-[0.14em] text-white sm:max-w-none sm:tracking-[0.18em] md:tracking-[0.2em]"
          >
            STRATEGY & PROJECT PLAN
          </h2>
        </header>

      <div className="relative z-10 mx-auto py-10 sm:py-14 md:py-20">
  <RoadmapConnector rows={rows.length} />

  {rows.map((row, rowIndex) => (
    <div
      key={rowIndex}
      className="grid grid-cols-1 gap-8 mb-8 sm:gap-10 sm:mb-10 md:grid-cols-3 md:gap-14 md:mb-15"
    >
      {row.map((phase) => (
        <PhaseCard
          key={phase.num}
          phase={phase}
        isTopRow={rowIndex === 0}
        />
      ))}
    </div>
  ))}
</div>

</div>
    </section>
  )
}
