import cryptoShield from '../assets/crypto.svg'

function MarcomLogo() {
  return (
    <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
      <div
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E53935] text-lg font-black leading-none text-white sm:h-10 sm:w-10"
        aria-hidden
      >
        M
      </div>
      <span className="font-inter text-[11px] font-semibold uppercase leading-tight tracking-wide text-white sm:text-xs">
        MARCOM
        <br />
        AGENCY
      </span>
    </div>
  )
}

function CoinGeckoLogo() {
  return (
    <div className="flex min-w-0 items-center gap-2 sm:gap-2.5">
      <svg className="h-8 w-8 shrink-0 sm:h-9 sm:w-9" viewBox="0 0 32 32" fill="none" aria-hidden>
        <circle cx="16" cy="16" r="15" fill="#4BCC00" />
        <ellipse cx="11" cy="14" rx="2.2" ry="2.8" fill="white" />
        <ellipse cx="20" cy="13" rx="2" ry="2.5" fill="white" />
        <path
          d="M8 22c2-4 6-6 10-5 3 0 6 2 7 5-2 2-5 3-8 3-4 0-7-1-9-3z"
          fill="white"
          opacity="0.9"
        />
      </svg>
      <span className="font-inter text-sm font-semibold tracking-wide text-white sm:text-base">CoinGecko</span>
    </div>
  )
}

function CoinMarketCapLogo() {
  return (
    <div className="flex min-w-0 items-center gap-2 sm:gap-2.5">
      <div
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0C53B7] sm:h-9 sm:w-9"
        aria-hidden
      >
        <span className="font-inter text-lg font-black leading-none text-white">M</span>
      </div>
      <span className="font-inter text-sm font-semibold tracking-wide text-white sm:text-base">
        CoinMarketCap
      </span>
    </div>
  )
}

function CryptoComLogo() {
  return (
    <div className="flex min-w-0 items-center gap-2 sm:gap-2.5">
      <img src={cryptoShield} alt="" className="h-7 w-auto shrink-0 opacity-95 sm:h-8" width={28} height={32} />
      <span className="font-inter text-sm font-semibold tracking-wide text-white sm:text-base">crypto.com</span>
    </div>
  )
}

export default function Partners() {
  return (
    <div className="mx-auto mt-14 w-full sm:mt-16 lg:mt-20" id="partners">
      <header className="mb-8 text-center sm:mb-10">
        <p className="mb-2 font-inter text-[13px] font-medium uppercase tracking-[0.22em] text-[rgba(200,210,212,0.72)] sm:text-[14px]">
          Our Partners
        </p>
        <h2 className="font-twobit-only text-[clamp(1.75rem,5vw,2.75rem)] font-normal tracking-[0.2em] text-white">
          Partners
        </h2>
      </header>

     <div className="relative px-1 pt-3 sm:px-2">
  <div
    className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-[3px] h-[10px] w-[92%] rounded-[8px] bg-white opacity-90"
    aria-hidden
  />
  <div className="relative z-[1] flex items-center justify-between rounded-[14px] bg-[#2FA7A0] px-6 py-5 sm:px-10 sm:py-6 shadow-[0_8px_20px_rgba(0,0,0,0.15)]">
    
    <MarcomLogo />
    <CoinGeckoLogo />
    <CoinMarketCapLogo />
    <CryptoComLogo />

  </div>
</div>
    </div>
  )
}
