import type { CSSProperties } from 'react'
import Partners from './Partners'
import cyberDecor from '../assets/ctber.svg'
import laptopDecor from '../assets/laptop.svg'
import mikeDecor from '../assets/mike.svg'
import saleDecor from '../assets/sale.svg'
import timeDecor from '../assets/time.svg'



const ART_MAP = {
  laptop: laptopDecor,
  sale: saleDecor,
  social: mikeDecor,
  time: timeDecor,
  cyber: cyberDecor,
} as const

type ArtKey = keyof typeof ART_MAP

type ProjectItem = {
  num: string
  title: string
  body: string
  art: ArtKey
}

const PROJECTS: ProjectItem[] = [
  {
    num: '01.',
    title: 'E-commerce Platform',
    body: 'Transform your online store with our user-friendly ecommerce solution. Streamlined operations, secure transactions, and customizable storefronts – experience the future of digital commerce with us.',
    art: 'sale',
  },
  {
    num: '02.',
    title: 'Social Media Mastery',
    body: 'Our expertise spans social media app development, management, and targeted marketing services, ensuring a powerful and engaging online brand presence.',
    art: 'social',
  },
  {
    num: '03.',
    title: 'Freelancer Marketplace',
    body: 'A platform connecting freelancers and clients for diverse job opportunities, facilitating efficient collaboration and project completion.',
    art: 'time',
  },
  {
    num: '04.',
    title: 'Cyber Risk Management',
    body: 'Protecting your digital assets is our priority. We offer comprehensive cyber risk management services, identifying and mitigating potential threats to secure your online operations.',
    art: 'cyber',
  },
  {
    num: '05.',
    title: 'Your Ultimate Online Marketplace for Global Shopping',
    body: 'Explore a world of convenience at WTE Mall, where you can buy and sell products seamlessly. Accepting Visa, Mastercard, and the exclusive WTE Token, our online marketplace offers a secure and diverse shopping experience. Join us to discover a new era of global commerce, right at your fingertips.',
    art: 'laptop',
  },
 

]



const CARD_SHINE =
  'pointer-events-none absolute inset-0 z-[3] rounded-[24px] opacity-[0.05]'

const CARD_SHINE_BG: CSSProperties = {
  background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)',
}


const CARD_BG =
  'bg-[linear-gradient(180deg,rgba(22,61,62,0.52)_0%,rgba(22,61,62,0.36)_32%,rgba(15,45,47,0.2)_58%,rgba(15,45,47,0.08)_80%,rgba(15,45,47,0.02)_92%,rgba(15,45,47,0)_100%)]'

const CARD_EDGE =
  'border-t border-l border-r border-[#5CE1E6]/18 border-b-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)]'

const NUM_GRADIENT =
  'bg-gradient-to-b from-[#5CE1E6] to-[#35A0A4] bg-clip-text text-transparent'

const FEATURED_SHELL =
  'relative overflow-hidden rounded-[24px] border border-[#5CE1E6]/25 bg-[linear-gradient(165deg,rgba(22,61,62,0.65)_0%,rgba(15,45,47,0.75)_42%,rgba(30,30,30,0.55)_100%)] p-6 shadow-[0_0_0_1px_rgba(92,225,230,0.12),inset_0_1px_0_rgba(255,255,255,0.08)] sm:p-8 lg:p-10'

function CardArt({ art }: { art: ArtKey }) {
  const src = ART_MAP[art]
  const tall = art === 'laptop' || art === 'cyber'
  return (
    <div className="mt-auto flex justify-center pt-6 opacity-[0.98]">
      <img
        src={src}
        alt=""
        className={`w-auto max-w-full object-contain object-bottom ${tall ? 'max-h-[140px] sm:max-h-[170px]' : 'h-[233.46238708496094px] sm:h-[274.1474914550781px] w-[274px]'}`}
        loading="lazy"
        decoding="async"
      />
    </div>
  )
}

function ProjectCard({ item }: { item: ProjectItem }) {
  return (
    <article
      className={`relative flex w-full max-w-[620px] min-h-[480px] flex-col overflow-hidden rounded-[24px] p-6 backdrop-blur-md sm:min-h-[560px] sm:p-7 lg:h-[788px] lg:min-h-0 lg:p-8 ${CARD_BG} ${CARD_EDGE}`}
    >
      <div className="relative z-[2] flex min-h-0 flex-1 flex-col">
        <span className={`font-twobit-only text-[68px] leading-none tracking-[0.12em] ${NUM_GRADIENT}`}>
          {item.num}
        </span>
        <h3 className="font-twobit-only mt-4 text-left text-[35px] leading-snug tracking-[0.12em] text-white sm:mt-5">
          {item.title}
        </h3>
        <p className="font-inter mt-3 text-left text-[20px] leading-relaxed text-[rgba(255,255,255,1)] sm:mt-4 sm:text-[15px] sm:leading-7">
          {item.body}
        </p>
        <CardArt art={item.art} />
      </div>
      <div aria-hidden className={CARD_SHINE} style={CARD_SHINE_BG} />
    </article>
  )
}

function FeaturedProject({ item }: { item: ProjectItem }) {
  return (
    <article className={FEATURED_SHELL}>
      <div className="relative z-[2]">
        <span
          className={`font-twobit-only text-[clamp(2rem,5vw,2.75rem)] leading-none tracking-[0.12em] ${NUM_GRADIENT}`}
        >
          {item.num}
        </span>
        <h2
          id="wte-mall-heading"
          className="font-twobit-only mt-4 max-w-[720px] text-left text-[clamp(1.25rem,3.5vw,1.75rem)] leading-snug tracking-[0.1em] text-white sm:mt-5"
        >
          {item.title}
        </h2>
        <div className="mt-8 flex flex-col gap-8 lg:mt-10 lg:flex-row lg:items-center lg:gap-10">
          <div className="flex shrink-0 justify-center lg:w-[48%]">
            <img
              src={ART_MAP[item.art]}
              alt="Laptop illustration for WTE Mall marketplace"
              className="h-[296px] w-full max-w-[520px] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.45)]"
              loading="lazy"
              decoding="async"
            />
          </div>
          <p className="font-inter flex-1 text-left text-[14px] leading-relaxed text-white/88 sm:text-[15px] sm:leading-7 lg:text-[16px]">
            {item.body}
          </p>
        </div>
      </div>
      <div aria-hidden className={CARD_SHINE} style={CARD_SHINE_BG} />
    </article>
  )
}

export default function Projects() {
  const n = PROJECTS.length
  const isOddCount = n > 0 && n % 2 === 1
  const hasFeatured = isOddCount
  const gridItems = hasFeatured ? PROJECTS.slice(0, -1) : PROJECTS
  const featured = hasFeatured ? PROJECTS[n - 1] : undefined

  return (
    <section
      id="projects"
      className="relative w-full scroll-mt-24 overflow-hidden border-t-2 border-black py-12 text-white sm:py-16 lg:py-20"
      // style={{background: "linear-gradient(90deg, #1E1E1E 0%, #1E1E1E 8%, #0F2D2F 22%, #163D3E 40%, #163D3E 50%, #163D3E 60%, #0F2D2F 78%, #1E1E1E 92%, #1E1E1E 100%)" }}
      aria-labelledby="projects-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(30,30,30,0.35)_0%,transparent_28%,transparent_72%,rgba(30,30,30,0.35)_100%)]" />

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-4 sm:px-6">
        <header className="mb-10 text-center sm:mb-12 lg:mb-14">
          <p
            className="mb-2 text-[13px] font-medium uppercase tracking-[0.28em] text-[#5CE1E6] sm:text-[14px]"
            style={{ fontFamily: "'Acme', ui-sans-serif, system-ui, sans-serif" }}
          >
            Our Projects
          </p>
          <h2
            id="projects-heading"
            className="font-twobit-only text-[clamp(1.75rem,5vw,2.75rem)] font-normal tracking-[0.16em] text-white sm:tracking-[0.2em]"
          >
            WTE Projects
          </h2>
        </header>

        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
          {gridItems.map((item, i) => (
            <ProjectCard key={`${item.num}-${i}`} item={item} />
          ))}
        </div>

        {featured ? (
          <div className={gridItems.length > 0 ? 'mt-8 sm:mt-10 lg:mt-12' : 'mt-8'}>
            <FeaturedProject item={featured} />
          </div>
        ) : null}

        <Partners />
      </div>
    </section>
  )
}
