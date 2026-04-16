import backgroundArt from '../assets/background.png'
import { CountdownUnit } from '../components/CountdownBox'
import { PageBackground } from '../components/PageBackground'
import { PrivateSaleCard } from '../components/PrivateSaleCard'

const COUNTDOWN = {
  days: '22',
  hours: '15',
  minutes: '19',
  seconds: '01',
} as const

export function Hero() {
  return (
    <div
      id="home"
      className="relative isolate w-full min-h-0 overflow-x-clip overflow-y-visible pb-8 sm:min-h-[560px] sm:pb-10 lg:min-h-[min(100svh,780px)] lg:overflow-hidden lg:pb-10 xl:min-h-[calc(671px+3rem)]"
    >
      <PageBackground textureUrl={backgroundArt} scope="section" />
      <section className="relative z-[1] w-full max-w-full pt-1 lg:max-w-none lg:pr-[min(537px+1.5rem,calc(100%-1rem))] xl:pr-[calc(537px+2rem)]">
        <h1
          className="font-hero-title font-crypto font-twobit-only mb-4 max-w-[min(720px,100%)] !text-[clamp(1.5rem,5.5vw,3rem)] !leading-[1.15] !tracking-[0.12em] sm:mb-5 sm:!text-[clamp(1.85rem,4vw,2.85rem)] sm:!leading-[1.18] sm:!tracking-[0.16em] lg:!text-[48px] lg:!leading-[57px] lg:!tracking-[0.2em]"
        >
          Revolutionising Crypto with WTE
        </h1>

        <p className="font-hero-body mb-8 max-w-[min(620px,100%)] !text-[15px] !leading-[22px] sm:mb-10 sm:!text-[17px] sm:!leading-[23px] lg:mb-14 lg:!text-[18px] lg:!leading-6">
          Meet Wonder Energy Technology (WTE), a game-changer in cryptocurrency. Born from deep research, WTE
          offers cutting-edge solutions, marking its official debut in the dynamic crypto space. Join the
          revolution, ride the innovation wave with WTE.
        </p>

        <div className="mb-8 flex flex-wrap items-start gap-2.5 sm:mb-10 lg:mb-12">
          <a className="btn-hero-fill" href="#services">
            Our Service
          </a>
          <a className="btn-hero-ghost" href="#documents">
            Green Paper
          </a>
        </div>

        <div>
          <p className="font-countdown-heading font-twobit-only mb-5 text-left !text-[17px] !leading-[22px] !tracking-[0.08em] sm:!text-[19px] sm:!leading-[23px] sm:!tracking-[0.1em] lg:mb-6 lg:!text-[21.33px] lg:!leading-6 lg:!tracking-[0.1em]">
            Token sale ends in:
          </p>
          <div className="flex max-w-[min(560px,100%)] flex-nowrap items-end gap-3 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-4 [&::-webkit-scrollbar]:hidden">
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
