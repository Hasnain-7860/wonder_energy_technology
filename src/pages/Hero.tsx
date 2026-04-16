import { CountdownUnit } from '../components/CountdownBox'
import { PrivateSaleCard } from '../components/PrivateSaleCard'

const COUNTDOWN = {
  days: '22',
  hours: '15',
  minutes: '19',
  seconds: '01',
} as const

const HERO_BODY =
  'Meet Wonder Energy Technology (WTE), a game-changer in cryptocurrency. Born from deep research, WTE offers cutting-edge solutions, marking its official debut in the dynamic crypto space. Join the revolution, ride the innovation wave with WTE.'

export function Hero() {
  return (
    <div className="relative w-full min-h-[720px] pb-10 lg:min-h-[calc(671px+3rem)]">
      <section
        className="relative z-0 max-w-full pt-1 lg:max-w-[min(589px,50.5%)] lg:pr-8"
        aria-labelledby="hero-heading"
      >
        <h1 id="hero-heading" className="font-hero-title font-twobit-only mb-5 max-w-[589px]">
          Revolutionising Crypto with WTE
        </h1>

        <p className="font-hero-body mb-12 max-w-[527px] lg:mb-14">{HERO_BODY}</p>

        <div className="mb-11 flex flex-wrap items-start gap-2.5 lg:mb-12">
          <a className="btn-hero-fill" href="#services">
            Our Service
          </a>
          <a className="btn-hero-ghost" href="#green-paper">
            Green Paper
          </a>
        </div>

        <div>
          <p className="font-countdown-heading font-twobit-only mb-5 text-left lg:mb-6">Token sale ends in:</p>
          <div className="flex max-w-[520px] flex-nowrap items-end gap-4 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <CountdownUnit label="Days" value={COUNTDOWN.days} />
            <CountdownUnit label="Hours" value={COUNTDOWN.hours} />
            <CountdownUnit label="Minutes" value={COUNTDOWN.minutes} />
            <CountdownUnit label="Seconds" value={COUNTDOWN.seconds} />
          </div>
        </div>
      </section>

      <PrivateSaleCard />
    </div>
  )
}
