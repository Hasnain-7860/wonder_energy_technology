import { useState } from 'react'
import { btnPrimary } from '../constants/buttonClasses'
import Logo from '../assets/logo.png'
import usdt from '../assets/usdt.svg'
import { FaEthereum } from "react-icons/fa";
import { toast } from 'react-toastify';

import { useWeb3 } from './Web3Context';
import { approveUSDT, buyWithETH, buyWithUSDT } from "../../utils/web3";



declare global {
  interface Window {
    ethereum?: any
  }
}

type Props = {
  timeLeft: {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
    isEnded: boolean;
  };
};

export function PrivateSaleCard({ timeLeft }: Props) {
  const { isConnected, loginHandler} = useWeb3();

const [payWith, setPayWith] = useState<'eth' | 'usdt'>('eth')
  const [bnbAmount, setBnbAmount] = useState('0.0')


async function handleBuy() {
  try {
    if (timeLeft.isEnded) {
      toast.error("Sale has ended");
      return;
    }
    if (!bnbAmount || Number(bnbAmount) <= 0) {
      toast.error("Enter valid amount");
      return;
    }

    if (payWith === "eth") {
      await buyWithETH(bnbAmount);
    } else {
      await approveUSDT(bnbAmount);
      await buyWithUSDT(bnbAmount);
    }

    toast.success("Purchase successful");
  } catch (err: any) {
    console.error(err);
    toast.error(err?.reason || "Transaction failed");
  }
}
const calculateWTE = () => {
  const amount = Number(bnbAmount || 0);

  if (payWith === "usdt") {
    return amount * 5; 
  } else {
    return amount * 10000; 
  }
};



  const toggleBase =
    'font-twobit-only cursor-pointer rounded-[5px] border px-2 py-2.5 text-[11px] tracking-[0.05em] transition-[background,border-color,color] sm:text-[12px] '
  const toggleOff =
    'border-[rgba(242,242,254,0.22)] bg-[rgba(242,242,254,0.06)] text-[rgba(244,254,255,0.9)]'
  const toggleOn =
    'border-transparent bg-gradient-to-r from-[#5ffbf1] to-[#2ad4e8] text-[#001018]'

  return (
    <aside
      className="box-border relative z-10 mx-auto mt-6 flex h-auto min-h-0 w-full max-w-[537px] flex-col overflow-y-auto rounded-[20px] border border-[rgba(242,242,254,0.18)] bg-[rgba(242,242,254,0.1)] px-4 pb-5 pt-6 backdrop-blur-[3.5px] [box-shadow:0_24px_60px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.06)] sm:mt-8 sm:px-7 sm:pt-8 lg:absolute lg:mt-0 lg:left-auto lg:right-0 lg:top-0 lg:min-h-[560px] lg:max-h-[min(671px,calc(100vh-5rem))] lg:w-[min(537px,calc(100%-1.5rem))] lg:max-w-none lg:shrink-0"
      aria-labelledby="sale-heading"
    >
      <h2
        id="sale-heading"
        className="font-crypto font-twobit-only mb-5 text-center text-[26px] uppercase leading-none tracking-[0.16em] sm:text-[32px]"
      >
        $WTE Private Sale
      </h2>
      <div className="mx-auto mb-4 flex h-[95px] w-[95px] items-center justify-center rounded-[8px] border border-[#2ad4e8] bg-[rgba(16,23,40,0.6)] backdrop-blur-[2px]">
        <img src={Logo} alt="Logo" className="h-[76px] w-[76px] rounded-full" />
      </div>

      <div className="font-inter mb-1 px-1 text-center text-[15px] leading-snug text-[rgba(244,254,255,0.9)] sm:text-[19px] md:text-[22px] lg:text-[24px]">
        <span className="inline-block max-w-full text-[16px]">USDT Raised: 10,000/500,000</span>
      </div>
      <div
        className="mb-6 h-[17px] overflow-hidden rounded-[5px] bg-[rgba(152,159,94,0.35)]"
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

      <div className="font-crypto relative mb-6 px-2 text-center text-[16px] tracking-[0.05em] before:absolute before:left-0 before:right-[67%] before:top-1/2 before:z-0 before:h-px before:bg-[rgba(95,251,241,0.55)] after:absolute after:left-[67%] after:right-0 after:top-1/2 after:z-0 after:h-px after:bg-[rgba(95,251,241,0.55)] sm:text-[21px] sm:tracking-[0.06em] lg:text-[15px]">
        <span className="relative z-10 block text-[15px] px-2 text-[#d8f5ff] sm:inline sm:px-3">
          1 WTE = 0.20 USDT
        </span>
      </div>

  <div className="mb-4 grid grid-cols-2 gap-2.5">
  <button
    type="button"
    onClick={() => setPayWith('eth')}
    className={`cursor-pointer flex justify-center items-center gap-3 ${toggleBase} ${payWith === 'eth' ? toggleOn : toggleOff}`}
  >
    <FaEthereum className="w-[16px] h-[16px]" />
    <span className="text-[15px]">ETH</span>
  </button>

  
  <button
    type="button"
    onClick={() => setPayWith('usdt')}
    className={`flex justify-center items-center gap-3 ${toggleBase} ${payWith === 'usdt' ? toggleOn : toggleOff}`}
  >
  <img
  src={usdt}
  alt="USDT"
  className={`w-[16px] h-[16px] rounded-full p-[2px] 
    ${payWith === 'usdt' ? 'bg-black' : ''}`}/>
    <span className="text-[15px]">USDT</span>
  </button> 

</div>

      <div className="mb-6">
        <div className="mb-2 grid grid-cols-[1fr_auto_1fr] items-center gap-2">
          <span className="font-inter text-[11px] text-[rgba(244,254,255,0.75)]">
            {payWith === 'eth' ? 'Enter ETH Amount' : 'Enter USDT Amount'}
          </span>
          <span />
          <span className="font-inter text-[11px] text-[rgba(244,254,255,0.75)]">WTE You Receive</span>
        </div>

        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
          <div className="flex h-11 items-center rounded-[5px] bg-[rgba(26,30,39,0.9)] px-2">
           <input
  className="font-inter w-full border-0 bg-transparent text-[15px] text-[#f4feff] outline-none"
  value={bnbAmount}
  onChange={(e) => setBnbAmount(e.target.value.replace(/[^0-9.]/g, ""))}
  inputMode="decimal"
  placeholder={payWith === 'eth' ? "0.0 ETH" : "0.0 USDT"}
/>
            <span className="font-twobit-only pl-2 text-[12px] text-[#f4feff]">{payWith === 'eth' ? 'ETH' : 'USDT'}</span>
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
              value={calculateWTE()}
            />
            <img src={Logo} alt="WTE" className="h-5 w-5 rounded-full" />
          </div>
        </div>
      </div>
    

<button
  disabled={isConnected && timeLeft.isEnded}
  className={`${btnPrimary} font-inter mb-5 h-12 w-full rounded-[5px] py-0 text-[14px] 
    ${isConnected && timeLeft.isEnded ? "opacity-50 cursor-not-allowed" : ""}`}
  onClick={isConnected ? handleBuy : loginHandler}
>
  {timeLeft.isEnded
    ? isConnected
      ? "Sale Ended"
      : "Connect Wallet"
    : isConnected
    ? "Buy Now"
    : "Connect Wallet"}
</button>
      <div className="flex flex-col gap-1.5">
        <span className="font-inter text-[11px] text-[rgba(244,254,255,0.82)]">
          Share your Referral link
        </span>
        <div className="flex gap-1.5">
          <input
            className="font-inter min-w-0 h-10 flex-1 rounded-[5px] border border-[rgba(242,242,254,0.15)] bg-[rgba(26,30,39,0.9)] px-3 text-[12px] text-[rgba(244,254,255,0.9)] backdrop-blur-[2px]"
            readOnly
          />
          <button
            type="button"
            className={`${btnPrimary} h-10 shrink-0 rounded-[5px] px-5 py-0 text-[13px] font-medium`}
          >
            Copy
          </button>
        </div>
      </div>
    </aside>
  )
}
