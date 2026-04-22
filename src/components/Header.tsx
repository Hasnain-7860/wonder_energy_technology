import { useEffect, useId, useState } from 'react'
import { btnPrimary } from '../constants/buttonClasses'
import Logo from '../assets/logo.png'
import { useWeb3 } from './Web3Context'
import { FiPower } from "react-icons/fi";


const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about-us', label: 'About us' },
  { href: '#documents', label: 'Documents' },
  { href: '#projects', label: 'Projects' },
  { href: '#roadmap', label: 'Roadmap' },
  { href: '#faqs', label: 'FAQs' },
  { href: '#contact', label: 'Contact' },
] as const

function MenuIcon({ open }: { open: boolean }) {
  
  return (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden
    >
      {open ? (
        <>
          <path d="M6 6l12 12M18 6L6 18" />
        </>
      ) : (
        <>
          <path d="M4 7h16M4 12h16M4 17h16" />
        </>
      )}
    </svg>
  )
}

export function Header() {
   const { isConnected, logout } = useWeb3();
  const [menuOpen, setMenuOpen] = useState(false)
  const panelId = useId()

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [menuOpen])

  const linkClass =
    'text-[14px] font-medium text-[rgba(244,254,255,0.92)] no-underline transition-colors hover:text-[#5ffbf1] sm:text-[15px]'

  return (
    <header className="mb-9 border-[rgba(95,251,241,0.12)] pb-4 lg:mb-10 lg:pb-5">
      <div className="flex items-center justify-between gap-3 sm:gap-10">
        <a
          href="#top"
          className="flex min-w-0 shrink items-center gap-2.5 text-inherit no-underline lg:gap-3"
          onClick={() => setMenuOpen(false)}
        >
          <img
            src={Logo}
            alt="Wonder Energy Technology"
            className="h-9 w-9 shrink-0 rounded-full object-cover sm:h-[80px]  sm:w-[80px]"
          />
          <span className="font-crypto font-twobit-only min-w-0 text-[11px] font-bold uppercase leading-tight tracking-[0.14em] sm:text-[20px] sm:tracking-[0.18em]">
            WONDER ENERGY TECHNOLOGY
          </span>
        </a>

        <nav
          className="font-inter hidden flex-wrap items-center justify-center gap-x-3 gap-y-2 lg:flex lg:flex-1 lg:gap-x-7 xl:gap-x-9"
          aria-label="Primary"
        >
          {NAV_LINKS.map(({ href, label }) => (
            <a key={href} className={linkClass} href={href}>
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center lg:flex">
          <a
            className={`${btnPrimary} px-5 py-[10px] text-[14px] sm:px-[22px] sm:text-[15px]`}
            href="https://telegram.org"
            target="_blank"
            rel="noreferrer"
          >
            Telegram
          </a>
        </div>
 {isConnected && (
  <button
    onClick={logout}
    
    title="Disconnect Wallet flex min-w-0 shrink items-center gap-2.5 text-inherit no-underline lg:gap-3"
     className="flex w-10 h-10 border rounded-2xl shrink items-center justify-center text-center gap-2.5 text-inherit no-underline lg:gap-3 bg-red-500/10  text-red-400  hover:bg-red-500/20 hover:scale-110 transition-all duration-200"
  >
    <FiPower className="w-5 h-5" />
  </button>
)}

        <button
          type="button"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[rgba(95,251,241,0.25)] bg-[rgba(5,18,20,0.65)] text-[rgba(244,254,255,0.95)] backdrop-blur-sm transition-colors hover:border-[rgba(95,251,241,0.45)] hover:bg-[rgba(5,18,20,0.85)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5ffbf1] lg:hidden"
          aria-expanded={menuOpen}
          aria-controls={panelId}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <MenuIcon open={menuOpen} />
        </button>
      </div>

      <div
        id={panelId}
        className={`fixed inset-0 z-[200] lg:hidden ${menuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          className={`absolute inset-0 bg-black/55 backdrop-blur-[2px] transition-opacity duration-200 ${
            menuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          aria-label="Close menu"
          tabIndex={menuOpen ? 0 : -1}
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 flex h-full w-[min(100%,20rem)] flex-col border-l border-[rgba(95,251,241,0.15)] bg-[#050e10] shadow-[-12px_0_40px_rgba(0,0,0,0.45)] transition-transform duration-200 ease-out sm:w-[min(100%,22rem)] ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
         <div className="flex items-center justify-between border-b border-[rgba(95,251,241,0.12)] px-4 py-3">

  <span className="font-twobit-only text-[13px] tracking-[0.12em] text-white/80">
    Menu
  </span>
  {isConnected && (
  <button     className="absolute top-4 right-4 text-[10px] px-2 py-1 rounded bg-red-500/20 text-red-400 hover:bg-red-500/30"
 onClick={logout}>
    Disconnect
  </button>
)}

  <div className="flex items-center gap-2">
    {isConnected && (
      <button
        onClick={logout}
        className="flex items-center justify-center 
        w-8 h-8 rounded-full 
        bg-red-500/10 text-red-400 
        hover:bg-red-500/20 transition"
      >
        <FiPower className="w-4 h-4" />
      </button>
    )}

    <button
      type="button"
      className="inline-flex h-10 w-10 items-center justify-center rounded-md text-white/90 hover:bg-white/5"
      onClick={() => setMenuOpen(false)}
    >
      <MenuIcon open />
    </button>

  </div>
</div>
          <nav className="font-inter flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-4" aria-label="Mobile primary">
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="rounded-lg px-3 py-3 text-[15px] font-medium text-[rgba(244,254,255,0.92)] no-underline transition-colors hover:bg-white/[0.06] hover:text-[#5ffbf1] active:bg-white/[0.08]"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="border-t border-[rgba(95,251,241,0.12)] p-4">
            <a
              className={`${btnPrimary} flex w-full justify-center px-5 py-3 text-[15px]`}
              href="https://telegram.org"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              Telegram
            </a>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">

  {isConnected && (
    <button
      onClick={logout}
      className="flex items-center justify-center 
      w-9 h-9 sm:w-10 sm:h-10 
      rounded-full 
      bg-red-500/10 text-red-400 
      hover:bg-red-500/20 hover:scale-110 
      transition-all duration-200"
      title="Disconnect Wallet"
    >
      <FiPower className="w-4 h-4 sm:w-5 sm:h-5" />
    </button>
  )}

  <div className="hidden lg:flex">
    <a
      className={`${btnPrimary} px-4 py-2 text-[13px] sm:px-5 sm:py-[10px] sm:text-[15px]`}
      href="https://telegram.org"
      target="_blank"
      rel="noreferrer"
    >
      Telegram
    </a>
  </div>

  <button
    type="button"
    className="inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-lg border border-[rgba(95,251,241,0.25)] bg-[rgba(5,18,20,0.65)] text-white backdrop-blur-sm hover:border-[rgba(95,251,241,0.45)] hover:bg-[rgba(5,18,20,0.85)] lg:hidden"
    onClick={() => setMenuOpen((v) => !v)}
  >
    <MenuIcon open={menuOpen} />
  </button>

</div>
        </div>
      </div>
    </header>
  )
}
