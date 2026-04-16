import { btnPrimary } from '../constants/buttonClasses'
import Logo from '../assets/logo.png'

export function Header() {
  return (
    <header className="mb-9 border-[rgba(95,251,241,0.12)] pb-4 lg:mb-10 lg:pb-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
        <a
          href="#top"
          className="flex shrink-0 items-center gap-2.5 text-inherit no-underline lg:gap-3"
        >
          <img src={Logo} alt="Wonder Energy Technology" className="h-10 w-10 rounded-full object-cover" />
          <span className="font-crypto font-twobit-only max-w-[220px] text-[12px] font-bold uppercase leading-tight tracking-[0.16em] sm:text-[13px] sm:tracking-[0.18em]">
            WONDER ENERGY TECHNOLOGY
          </span>
        </a>

        <nav
          className="font-inter flex flex-wrap items-center justify-center gap-x-3 gap-y-2 sm:gap-x-5 lg:flex-1 lg:justify-center lg:gap-x-7 xl:gap-x-9"
          aria-label="Primary"
        >
          <a
            className="text-[14px] font-medium text-[rgba(244,254,255,0.92)] no-underline transition-colors hover:text-[#5ffbf1] sm:text-[15px]"
            href="#home"
          >
            Home
          </a>
          <a
            className="text-[14px] font-medium text-[rgba(244,254,255,0.92)] no-underline transition-colors hover:text-[#5ffbf1] sm:text-[15px]"
            href="#about-us"
          >
            About us
          </a>
          <a
            className="text-[14px] font-medium text-[rgba(244,254,255,0.92)] no-underline transition-colors hover:text-[#5ffbf1] sm:text-[15px]"
            href="#documents"
          >
            Documents
          </a>
          <a
            className="text-[14px] font-medium text-[rgba(244,254,255,0.92)] no-underline transition-colors hover:text-[#5ffbf1] sm:text-[15px]"
            href="#roadmap"
          >
            Roadmap
          </a>
          <a
            className="text-[14px] font-medium text-[rgba(244,254,255,0.92)] no-underline transition-colors hover:text-[#5ffbf1] sm:text-[15px]"
            href="#faqs"
          >
            FAQs
          </a>
          <a
            className="text-[14px] font-medium text-[rgba(244,254,255,0.92)] no-underline transition-colors hover:text-[#5ffbf1] sm:text-[15px]"
            href="#contact"
          >
            Contact
          </a>
        </nav>

        <a
          className={`${btnPrimary} shrink-0 px-5 py-[10px] text-[14px] sm:px-[22px] sm:text-[15px]`}
          href="https://telegram.org"
          target="_blank"
          rel="noreferrer"
        >
          Telegram
        </a>
      </div>
    </header>
  )
}
