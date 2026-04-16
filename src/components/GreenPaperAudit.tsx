import lockImg from '../assets/lock.png'
import looperImg from '../assets/Looper.png'

function LooperDecor() {
  return (
    <div
      className="pointer-events-none absolute top-0 right-0 hidden h-full min-h-[451px] w-[min(45vw,441px)] max-w-[441px] overflow-hidden md:block"
      aria-hidden
    >
      <img
        src={looperImg}
        alt=""
        className="h-full max-h-[452px] w-full scale-y-[-1] object-contain object-right opacity-50"
        loading="lazy"
        decoding="async"
      />
    </div>
  )
}

export default function GreenPaperAudit() {
  return (
    <section
      id="documents"
      className="relative z-10 w-full overflow-hidden bg-[#0B1818]"
      aria-labelledby="green-paper-audit-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[#5CE1E6]/25" aria-hidden />
      <LooperDecor />

      <div className="relative mx-auto flex min-h-[min(451px,100svh)] w-full max-w-[1728px] flex-col items-center gap-8 px-4 py-10 sm:px-6 md:px-8 lg:flex-row lg:items-center lg:justify-between lg:gap-6 lg:px-12 lg:py-12 xl:px-16">
        <div className="relative flex w-full max-w-[580px] shrink-0 justify-center lg:w-[38%] lg:justify-start">
          <img
            src={lockImg}
            alt=""
            className="h-auto w-full max-h-[420px] object-contain object-left"
            width={580}
            height={420}
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="flex w-full max-w-[643px] flex-col items-center gap-8 text-center lg:max-w-none lg:flex-1 lg:items-start lg:gap-8 lg:text-left xl:pr-[min(12rem,8vw)]">
          <div className="flex flex-col gap-4">
            <h2
              id="green-paper-audit-heading"
              className="font-twobit-only text-[clamp(1.75rem,4vw,50px)] font-normal leading-[130%] tracking-[0.25em] text-white sm:tracking-[0.35em] md:tracking-[15px]"
            >
              Green PAPER & AUDIT
            </h2>
            <p className="font-inter max-w-[643px] text-base leading-[150%] text-white">
              Read the whole WTE idea and project composition and details in its whitepaper
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <a
              href="#"
              className="font-twobit-only inline-flex h-14 w-[210px] max-w-full shrink-0 items-center justify-center rounded-[5px] bg-gradient-to-b from-[#5CE1E6] to-[#35A0A4] text-center text-base leading-none tracking-[10px] text-[#232325] transition-opacity hover:opacity-90"
            >
              Green Paper
            </a>
            <a
              href="#"
              className="font-twobit-only box-border inline-flex h-14 w-[156px] max-w-full shrink-0 items-center justify-center rounded-[5px] border border-[#5CE1E6] bg-transparent text-center text-base leading-none tracking-[10px] text-white transition-[background-color,color] hover:bg-[#5CE1E6]/10"
            >
              Audit
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
