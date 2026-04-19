import { FiCheck } from "react-icons/fi"

type Phase = {
  num: number
  title: string
  items: string[]
}

const PHASES: Phase[] = [
  {
    num: 1,
    title: 'START WTE',
    items: [
      'Private sale',
      'Listing',
      'WTE NFT World beta version WTE',
      'staking platform Beta version',
    ],
  },
  
  {
    num: 2,
    title: 'WTE',
    items: ['Profit sharing event', 'Tracking wallet Dapps Beta version'],
  },
  {
    num: 3,
    title: 'WTE',
    items: [
      'Cex Platform Beta version',
      'WTE NFT World Alpha version',
      'WTE staking platform Alpha Version',
    ],
  },
  {
    num: 4,
    title: 'WTE',
    items: ['Tracking wallets Alpha Version', 'CEX platform alpha Version'],
  },
  {
    num: 5,
    title: 'WTE',
    items: [
      'WTE NFT world',
      'WTE staking platform full version',
      'Mobile apps',
    ],
  },
  {
    num: 6,
    title: 'WTE',
    items: [
      'WTE Tracking wallets',
      'CEX platform Full versions',
      'Mobile apps',
    ],
  },

 
]



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
<article className={`relative z-10 w-full text-left md:max-w-none 
  ${isTopRow ? "items-start" : "items-end"}`}>
       <p
  className={`mb-1.5 font-inter text-[11px] font-semibold uppercase tracking-[0.26em] text-[#7ee8ec] sm:text-[12px] sm:tracking-[0.3em]
  ${isTopRow ? "text-left" : "text-left md:mt-15"}`}
  style={{ fontFamily: "'Acme', ui-sans-serif, system-ui, sans-serif" }}
>
  Phase {phase.num}
</p>

<h3
  className={`font-twobit-only text-[clamp(0.95rem,2.4vw,1.2rem)] font-normal leading-snug tracking-[0.12em] text-white sm:tracking-[0.14em]
  ${isTopRow ? "" : "md:mb-10"}`}
>
  {phase.title}
</h3>

        <div className="mt-4 flex items-stretch gap-3 sm:mt-5 sm:gap-4">
         <div className="flex w-10 shrink-0 flex-col items-center sm:w-11">
  <div
    className={`relative z-20 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#5CE1E6] sm:h-[20px] sm:w-[20px]
    ${isTopRow ? "" : "order-2 top-[-225px]"}`}
  >
  <FiCheck className=" text-sm sm:text-base " />
  </div>

  {/* Line */}
  <div
    className={`w-[2px] flex-1 min-h-[4.5rem] rounded-full bg-[#5CE1E6]
    ${isTopRow ? "mt-2" : "mb-2 order-1"}`}
  />

</div>
                      <ul className={`font-inter list-disc space-y-1.5 pl-5 text-[12px] text-white/95
  ${isTopRow ? "mt-10" : "mb-10"}`}>
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
  const chunkSize = 3

const rows = []
for (let i = 0; i < PHASES.length; i += chunkSize) {
  rows.push(PHASES.slice(i, i + chunkSize))
}
  return (
    <section
      id="roadmap"
      className=""
    
      aria-labelledby="roadmap-heading"
    >
      {/* <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.18)_0%,transparent_24%,transparent_76%,rgba(0,0,0,0.18)_100%)]" /> */}

      <div className="relative z-10 mx-auto w-full max-w-[1200px] ">
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

      <div className="relative z-10 mx-auto py-20">
  <RoadmapConnector rows={rows.length} />

  {rows.map((row, rowIndex) => (
    <div
      key={rowIndex}
      className="grid grid-cols-1 md:grid-cols-3 gap-14 mb-20"
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
