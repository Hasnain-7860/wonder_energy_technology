import { useState } from 'react'
import { btnPrimary } from '../constants/buttonClasses'
import Logo from '../assets/logo.png'


export function PrivateSaleCard() {
  const [payWith, setPayWith] = useState<'bnb' | 'usdt'>('bnb')
  const [bnbAmount, setBnbAmount] = useState('0.0')
  const [referral] = useState('https://wonderenergy.technology/ref=0x8a3f...')

  const copyReferral = () => {
    void navigator.clipboard.writeText(referral)
  }

  const toggleBase =
    'font-twobit-only cursor-pointer rounded-[5px] border px-2 py-2.5 text-[11px] tracking-[0.05em] transition-[background,border-color,color] sm:text-[12px]'
  const toggleOff =
    'border-[rgba(242,242,254,0.22)] bg-[rgba(242,242,254,0.06)] text-[rgba(244,254,255,0.9)]'
  const toggleOn =
    'border-transparent bg-gradient-to-r from-[#5ffbf1] to-[#2ad4e8] text-[#001018]'

  return (
    <aside
      className="box-border relative z-10 mx-auto mt-8 flex h-auto min-h-0 w-full max-w-[537px] flex-col overflow-y-auto rounded-[20px] border border-[rgba(242,242,254,0.18)] bg-[rgba(242,242,254,0.1)] px-5 pb-5 pt-7 backdrop-blur-[3.5px] [box-shadow:0_24px_60px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.06)] sm:px-7 sm:pt-8 lg:absolute lg:mx-0 lg:mt-0 lg:left-[52.2%] lg:top-[1.4%] lg:h-[671px] lg:w-[537px] lg:max-w-none"
      aria-labelledby="sale-heading"
    >
      <h2
        id="sale-heading"
        className="font-crypto font-twobit-only mb-5 text-center text-[26px] uppercase leading-none tracking-[0.16em] sm:text-[32px]"
      >
        $WTE Private Sale
      </h2>
      <div className="mx-auto mb-4 flex h-[94px] w-[94px] items-center justify-center rounded-[8px] border border-[#2ad4e8] bg-[rgba(16,23,40,0.6)] backdrop-blur-[2px]">
        <img src={Logo} alt="Logo" className="h-[52px] w-[52px] rounded-full" />
      </div>

      <div className="font-inter mb-1 text-center text-[24px] text-[rgba(244,254,255,0.9)]">
        <span>USDT Raised: 10,000/500,000</span>
      </div>
      <div
        className="mb-6 h-3 overflow-hidden rounded-full bg-[rgba(152,159,94,0.35)]"
        role="progressbar"
        aria-valuenow={2}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="h-full rounded-[inherit] bg-gradient-to-r from-[#5ffbf1] to-[#12b8cf]"
          style={{ width: '10%' }}
        />
      </div>

      <div className="font-crypto relative mb-6 text-center text-[25px] tracking-[0.06em] before:absolute before:left-0 before:right-[58%] before:top-1/2 before:z-0 before:h-px before:bg-[rgba(95,251,241,0.55)] after:absolute after:left-[58%] after:right-0 after:top-1/2 after:z-0 after:h-px after:bg-[rgba(95,251,241,0.55)]">
        <span className="relative z-10 px-3 text-[#d8f5ff]">
          1 WTE = 0.25 USDT
        </span>
      </div>

      <div className="mb-4 grid grid-cols-2 gap-2.5">
        <button
          type="button"
          className={`${toggleBase} ${payWith === 'bnb' ? toggleOn : toggleOff}`}
          onClick={() => setPayWith('bnb')}
        >
          BNB
        </button>
        <button
          type="button"
          className={`${toggleBase} ${payWith === 'usdt' ? toggleOn : toggleOff}`}
          onClick={() => setPayWith('usdt')}
        >
          USDT
        </button>
      </div>

      <div className="mb-6">
        <div className="mb-2 grid grid-cols-[1fr_auto_1fr] items-center gap-2">
          <span className="font-inter text-[11px] text-[rgba(244,254,255,0.75)]">
            {payWith === 'bnb' ? 'Enter BNB Amount' : 'Enter USDT Amount'}
          </span>
          <span />
          <span className="font-inter text-[11px] text-[rgba(244,254,255,0.75)]">WTE You Receive</span>
        </div>

        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
          <div className="flex h-11 items-center rounded-[5px] bg-[rgba(26,30,39,0.9)] px-2">
            <input
              className="font-inter w-full border-0 bg-transparent text-[15px] text-[#f4feff] outline-none"
              value={bnbAmount}
              onChange={(e) => setBnbAmount(e.target.value)}
              inputMode="decimal"
            />
            <span className="font-twobit-only pl-2 text-[12px] text-[#f4feff]">{payWith === 'bnb' ? 'BNB' : 'USDT'}</span>
          </div>

          <button
            type="button"
            className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-[4px] bg-gradient-to-b from-[#5ffbf1] to-[#2ad4e8] text-[#06121d]"
            aria-label="Swap amounts"
          >
            <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden>
              <path
                fill="currentColor"
                d="M7 7h10l-3-3 1.4-1.4L21.8 8l-6.4 5.4L14 12l3-3H7V7zm10 10H7l3 3-1.4 1.4L2.2 16l6.4-5.4L10 12l-3 3h10v2z"
              />
            </svg>
          </button>

          <div className="flex h-11 items-center rounded-[5px] bg-[rgba(26,30,39,0.9)] px-2">
            <input
              className="font-inter w-full border-0 bg-transparent text-[15px] text-[#f4feff] outline-none"
              readOnly
              value="0"
            />
            <img src={Logo} alt="WTE" className="h-5 w-5 rounded-full" />
          </div>
        </div>
      </div>

      <button
        type="button"
        className={`${btnPrimary} font-inter mb-5 h-12 w-full rounded-[5px] py-0 text-[14px]`}
      >
        Connect Wallet
      </button>

      <div className="flex flex-col gap-1.5">
        <span className="font-inter text-[11px] text-[rgba(244,254,255,0.82)]">
          Share your Referral link
        </span>
        <div className="flex gap-1.5">
          <input
            className="font-inter min-w-0 h-10 flex-1 rounded-[5px] border border-[rgba(242,242,254,0.15)] bg-[rgba(26,30,39,0.9)] px-3 text-[12px] text-[rgba(244,254,255,0.9)] backdrop-blur-[2px]"
            readOnly
            value={referral}
          />
          <button
            type="button"
            className={`${btnPrimary} h-10 shrink-0 rounded-[5px] px-5 py-0 text-[13px] font-medium`}
            onClick={copyReferral}
          >
            Copy
          </button>
        </div>
      </div>
    </aside>
  )
}
