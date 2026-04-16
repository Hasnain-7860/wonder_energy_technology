import { useState } from 'react'
import type { CSSProperties } from 'react'
import nftImg from '../assets/NFTT.png'
import Bit from '../assets/BIT.png'
import Tracking from '../assets/TRACKING.png'



const SERVICES: readonly {
  id: 'nft' | 'staking' | 'tracking'
  title: string
  description: string
  img: string
}[] = [
  {
    id: 'nft',
    title: 'NFT',
    description: 'Fully dedicated NFT Platform',
    img: nftImg,
  },
  {
    id: 'staking',
    title: 'STAKING',
    description: 'Fully decentralized staking platform',
    img: Bit,
  },
  {
    id: 'tracking',
    title: 'TRACKING',
    description: 'Fully decentralized whale wallet tracking',
    img: Tracking,
  },
]

type ServiceId = (typeof SERVICES)[number]['id']

const INACTIVE_ICON: { ring: string; style: CSSProperties } = {
  ring: 'relative flex flex-none order-0 h-[80px] w-[80px] shrink-0 grow-0 items-center justify-center rounded-full',
  style: {
    background: 'radial-gradient(72% 72% at 50% 38%, #3d3c34 0%, #2a2922 42%, #1c1b17 100%)',
    boxShadow:
      '0 4px 22px rgba(0,0,0,0.55), inset 0 0 0 1px rgba(255,255,255,0.07), 0 0 32px rgba(0,0,0,0.35)',
  },
}

function ServiceIcon({ active, src }: { active: boolean; src: string }) {
  const ringLayout =
    'relative flex flex-none order-0 h-[80px] w-[80px] shrink-0 grow-0 items-center justify-center rounded-full'

  const activeRing = `${ringLayout} border-2 border-white/55 bg-white shadow-[0_10px_32px_rgba(0,0,0,0.18)]`

  const imgClass = `relative z-[1] h-[43.699951171875px] w-[44.08531951904297px] object-contain ${
    active ? '' : '[filter:drop-shadow(0_2px_10px_rgba(0,0,0,0.45))]'
  }`

  return (
    <div className={active ? activeRing : INACTIVE_ICON.ring} style={active ? undefined : INACTIVE_ICON.style}>
      <img src={src} alt="" className={imgClass} loading="lazy" decoding="async" />
    </div>
  )
}

export default function WhatWeDo() {
  const [active, setActive] = useState<ServiceId>('staking')

  return (
    <section
      id="services"
      className="relative z-10 mx-auto w-full scroll-mt-24 overflow-hidden px-4 py-14 text-white sm:px-6 sm:py-16 md:px-8 lg:px-12 lg:py-35 xl:px-16"
      style={{
        background:
          'radial-gradient(ellipse 85% 75% at 50% 42%, #152f30 0%, #0f2426 35%, #0b1818 62%, #050a0a 100%)',
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.28)_0%,transparent_22%,transparent_78%,rgba(0,0,0,0.28)_100%)]" />

      <div className="relative z-10 mx-auto w-full max-w-[1200px]">
        <header className="mb-12 text-center sm:mb-14 lg:mb-16">
          <h2 className="font-twobit-only text-[clamp(1.5rem,4.5vw,2.75rem)] font-normal tracking-[0.18em] text-white sm:tracking-[0.22em]">
            WHAT WE DO
          </h2>
          <p className="font-['Plus_Jakarta_Sans',ui-sans-serif,system-ui,sans-serif] mx-auto mt-4 max-w-[640px] text-[15px] font-normal leading-relaxed text-white/85 sm:mt-5 sm:text-[17px] sm:leading-7 lg:text-[18px]">
            Empower forensic investigators with ingenious tools to detect and explore crypto-enabled crimes.
          </p>
        </header>

        <div className="grid grid-cols-1 justify-items-center gap-5 md:grid-cols-3 md:justify-items-stretch md:gap-4 lg:gap-6">
          {SERVICES.map((item) => {
            const isActive = active === item.id
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(item.id)}
                aria-pressed={isActive}
                className={`flex min-h-[280px] w-full max-w-[400px] flex-col items-center rounded-[20px] border px-6 py-8 text-center transition-[background,box-shadow,border-color,transform] outline-none focus-visible:ring-2 focus-visible:ring-[#5ce1e6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1818] sm:min-h-[300px] sm:px-8 sm:py-10 md:max-w-none md:items-start md:text-left ${
                  isActive
                    ? 'border-transparent bg-gradient-to-b from-[#5ce1e6] to-[#2ad4e8] text-[#0a1416] shadow-[0_24px_55px_rgba(92,225,230,0.28)] md:-translate-y-0.5'
                    : 'border-white/[0.12] bg-[rgba(18,26,28,0.92)] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] hover:border-white/20'
                }`}
              >
                <div className="self-center md:self-start">
                  <ServiceIcon active={isActive} src={item.img} />
                </div>
                <h3
                  className={`font-twobit-only mt-6 text-lg tracking-[0.2em] sm:text-xl ${
                    isActive ? 'text-[#0a1416]' : 'text-white'
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`font-['Plus_Jakarta_Sans',ui-sans-serif,system-ui,sans-serif] mt-3 max-w-[280px] text-[14px] leading-snug sm:text-[15px] md:max-w-none ${
                    isActive ? 'text-[#0d1f22]/88' : 'text-white/72'
                  } ${item.id === 'tracking' ? 'whitespace-normal md:whitespace-nowrap' : ''}`}
                >
                  {item.description}
                </p>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
