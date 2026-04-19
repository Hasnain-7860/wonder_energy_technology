import wteLogo from '../assets/WTE.png'
import TokenomicsWithLabels from './TokenomicsWithLabels'

export default function Tokenomics() {
  return (
    <section
      id="tokenomics"
      className="relative mx-auto w-full overflow-hidden py-10 text-white sm:py-14 lg:py-16"
    >
      <div className="relative mx-auto w-full px-4 sm:px-6">

        <p className="mb-3 text-center text-[16px] tracking-[0.36em] text-transparent bg-gradient-to-b from-[#5CE1E6] to-[#35A0A4] bg-clip-text ">
          ALLOCATION OF FUND
        </p>

        <h2 className="mb-10 text-center text-[40px] tracking-[0.2em] font-twobit-only">
          TOKENOMICS
        </h2>
        <div className="relative flex items-center justify-center my-50 lg:my-60">

          <TokenomicsWithLabels />
          <img
            src={wteLogo}
            alt=""
            className="absolute w-[220px]"
          />

        </div>

      </div>
    </section>
  )
}