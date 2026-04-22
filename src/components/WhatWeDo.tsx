import { useState } from 'react'
import type { CSSProperties } from 'react'
import nftImg from '../assets/NFTT.png'
import Bit from '../assets/Bit.png'
import Tracking from '../assets/tracking.png'



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
      className="relative mx-auto min-h-0 w-full scroll-mt-24 overflow-hidden py-10 text-white sm:py-14 lg:min-h-[787.5px] lg:py-16"
      style={{
        background:
          'linear-gradient(90deg, #000000 0%, #020303 8%, #050A0A 14%, #0B1818 20%, #122A2B 38%, #152F30 50%, #122A2B 62%, #0B1818 80%, #050A0A 86%, #020303 92%, #000000 100%)',
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.52)_0%,rgba(0,0,0,0.22)_14%,transparent_30%,transparent_70%,rgba(0,0,0,0.22)_86%,rgba(0,0,0,0.52)_100%)]" />

      <div className="relative z-10 mx-auto w-full max-w-[1200px]">
        <header className="mb-12 text-center sm:mb-14 lg:mb-16">
          <h2 className="font-twobit-only text-[40px] font-normal tracking-[0.18em] text-white sm:tracking-[0.22em]">
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
                className={`flex w-full flex-col items-center text-center transition-[background,box-shadow,border-color,transform] outline-none focus-visible:ring-2 focus-visible:ring-[#5ce1e6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1818] md:items-start md:text-left ${
                  isActive
                    ? 'max-w-[412px] gap-[30px] rounded-[10px] border border-transparent bg-[linear-gradient(180deg,#5CE1E6_0%,#35A0A4_100%)] px-[40px] py-[50px] text-[#0a1416] shadow-[0_18px_42px_rgba(53,160,164,0.22)] md:max-w-none min-h-[294px]'
                    : 'max-w-[400px] min-h-[280px] rounded-[20px] border border-white/[0.12] bg-[rgba(18,26,28,0.92)] px-6 py-8 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] hover:border-white/20 sm:min-h-[300px] sm:px-8 sm:py-10 md:max-w-none'
                }`}
              >
                <div className="self-center md:self-start">
                  <ServiceIcon active={isActive} src={item.img} />
                </div>
                <h3
                  className={`font-twobit-only text-lg tracking-[0.2em] sm:text-xl ${
                    isActive ? 'text-[#0a1416]' : 'mt-6 text-white'
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`font-['Plus_Jakarta_Sans',ui-sans-serif,system-ui,sans-serif] max-w-[280px] text-[14px] leading-snug sm:text-[15px] md:max-w-none ${
                    isActive ? 'text-[#0d1f22]/88' : 'mt-3 text-white/72'
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
