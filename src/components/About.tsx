import { useState } from 'react'
import type { ReactNode } from 'react'
import aiImg from '../assets/AI.png'
import energyImg from '../assets/energy.png'
import aboutGif from '../assets/gif.gif'
import nftImg from '../assets/NFT.png'
import centerlineDecor from '../assets/centerline.png'
import line1Decor from '../assets/line.png'
import line2Decor from '../assets/line2.png'
import tradingImg from '../assets/trading.png'

const FEATURES = [
  { id: 'energy', title: 'Energy', image: energyImg },
  { id: 'ai', title: 'AI TECH', image: aiImg },
  { id: 'nft', title: 'NFT', image: nftImg },
  { id: 'trading', title: 'Trading', image: tradingImg },
]

const fontJakarta = "font-['Plus_Jakarta_Sans',ui-sans-serif,system-ui,sans-serif]"

function CardIconImg({ src, alt }: { src: string; alt: string }) {
  return (
    <img src={src} alt={alt} className="h-11 w-11 max-h-full max-w-full object-contain" loading="lazy" decoding="async" />
  )
}

type FeatureCardProps = {
  title: string
  icon: ReactNode
  active: boolean
  onClick: () => void
}

function FeatureCard({ title, icon, active, onClick }: FeatureCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`flex min-h-[108px] w-full max-w-[min(100%,270px)] cursor-pointer items-center gap-3 rounded-[12px] pl-4 pr-3 text-left transition-[box-shadow,border-color,background-color] outline-none sm:gap-4 sm:pl-[18px] sm:pr-4 sm:mx-0 focus-visible:ring-2 focus-visible:ring-[#5CE1E6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1818] ${
        active
          ? 'bg-white/[0.02] shadow-[inset_0_0_0_2px_#5CE1E6]'
          : 'border-2 border-white/10 bg-white/[0.02] hover:border-white/20'
      }`}
    >
      <div className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-lg bg-white/[0.05]">
        {icon}
      </div>
      <span className="font-twobit-only text-[22px] leading-tight tracking-[0.16em] text-white sm:text-[26px] sm:tracking-[0.18em] lg:text-[28px] lg:leading-[33px] lg:tracking-[0.2em]">
        {title}
      </span>
    </button>
  )
}

export default function About() {
  const [active, setActive] = useState<(typeof FEATURES)[number]['id']>('energy')

  return (
    <section
      id="about-us"
      className="relative mx-auto min-h-0 w-full scroll-mt-24 overflow-hidden py-10 text-white sm:py-14 lg:min-h-[787.5px] lg:py-16"
      style={{
        background:
          'linear-gradient(90deg, #050A0A 0%, #0B1818 12%, #122A2B 38%, #152F30 50%, #122A2B 62%, #0B1818 88%, #050A0A 100%)',
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_90%_at_50%_50%,rgba(21,47,48,0.4)_0%,transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.22)_0%,transparent_24%,transparent_76%,rgba(0,0,0,0.22)_100%)]" />

      <div
        className="pointer-events-none absolute left-1/2 top-[9%] h-10 w-[min(344px,55vw)] max-w-full -translate-x-1/2 opacity-[0.05]"
        style={{
          background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(255,255,255,0) 100%)',
          maskImage: 'radial-gradient(ellipse 80% 100% at 50% 0%, black 40%, transparent 70%)',
        }}
      />
       <img
        src={centerlineDecor}
        alt="dsdg"
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-24 z-0 h-[min(344.373px,85vmin)] w-[min(344.415px,85vmin)] -translate-x-1/2 object-contain opacity-[0.05] xl:left-[max(0px,calc(50vw-720px+667.8px))] xl:top-[1130.8px] xl:h-[344.373px] xl:w-[344.415px] xl:translate-x-0"
        width={344}
        height={344}
        loading="lazy"
        decoding="async"
      />

        <img
          src={line2Decor}
          alt=""
          aria-hidden
          className="pointer-events-none absolute left-2 top-[72px] h-[100px] w-[62px] object-contain opacity-70 sm:left-6 sm:top-[120px] sm:h-[140px] sm:w-[86px] sm:opacity-90 md:left-8 lg:left-[63px] lg:top-[150px] lg:h-[178px] lg:w-[109px] xl:w-[179.5px]"
          width={109}
          height={178}
          loading="lazy"
          decoding="async"
        />
        <img
          src={line1Decor}
          alt=""
          aria-hidden
          className="pointer-events-none absolute right-2 top-6 h-[100px] w-[80px] object-contain opacity-70 sm:right-6 sm:top-10 sm:h-[140px] sm:w-[112px] sm:opacity-90 md:right-8 lg:right-12 lg:h-[178px] lg:w-[140px] xl:w-[178px]"
          width={140}
          height={178}
          loading="lazy"
          decoding="async"
        />

       

      <div className="relative z-10 mx-auto w-full max-w-[1728px] px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-[160px]">
        <div className="mb-14 grid items-start gap-10 lg:mb-12 lg:grid-cols-[minmax(0,689px)_minmax(280px,526px)] lg:justify-between lg:gap-8">
          <div className="max-w-[689px]">
            <p
              className={`${fontJakarta} mb-2 text-[18px] font-medium leading-snug text-white/30 sm:text-[22px] sm:leading-[28px] lg:text-[26px] lg:leading-[33px]`}
            >
              Know More About Us
            </p>
            <h2 className="font-twobit-only mb-4 text-[clamp(1.75rem,6vw,3.125rem)] font-normal leading-tight tracking-[0.14em] text-white sm:mb-6 sm:tracking-[0.18em] lg:leading-[1.1] lg:tracking-[0.2em] xl:leading-[88px]">
              Introduction
            </h2>
            <p
              className={`${fontJakarta} max-w-[621px] text-[15px] font-normal leading-[26px] text-white sm:text-[17px] sm:leading-[30px] lg:text-[20px] lg:leading-[36px]`}
            >
              WONDER ENERGY TECHNOLOGY (WTE) is the result of extensive research and development conducted by a
              team with a deep understanding of the cryptocurrency sector. With a focus on addressing challenges
              and providing innovative solutions, WTE has officially entered the cryptocurrency space. With WTE we
              applied usage of energy &amp; technology in business By integration blockchain , Web3 &amp; AI
              technologies in our Trading Solutions projects
            </p>
          </div>

          <div className="relative flex w-full flex-col items-center lg:w-[526px] lg:shrink-0 lg:items-end">
          
            <img
              src={aboutGif}
              alt="WTE introduction animation"
              className="relative z-10 h-auto w-full max-w-[526px] object-contain"
              width={526}
              height={526}
              loading="lazy"
              decoding="async"
            />
           
          </div>
        </div>

        <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 sm:justify-items-stretch lg:grid-cols-4 lg:gap-[27px]">
          {FEATURES.map((item) => (
            <FeatureCard
              key={item.id}
              title={item.title}
              icon={<CardIconImg src={item.image} alt={item.title} />}
              active={active === item.id}
              onClick={() => setActive(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
