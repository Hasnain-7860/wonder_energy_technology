function DigitCell({ digit }: { digit: string }) {
  return (
    <div className="box-border flex h-[52px] w-[40px] flex-col items-center justify-center gap-1 rounded-[5px] border border-[#5CE1E6] bg-[#232325] px-2 py-4 sm:h-[58px] sm:w-[45px] sm:gap-2 sm:px-3 sm:py-5 lg:h-[63px] lg:w-[49px] lg:gap-2.5 lg:px-[14px] lg:py-6">
      <span className="font-countdown-digit !text-[22px] !leading-none sm:!text-[26px] lg:!text-[30px] lg:!leading-[30px]">
        {digit}
      </span>
    </div>
  )
}

type CountdownUnitProps = {
  label: string
  value: string
}

export function CountdownUnit({ label, value }: CountdownUnitProps) {
  const pair = value.padStart(2, '0').slice(-2)
  const [d0, d1] = pair.split('')

  return (
    <div className="flex shrink-0 flex-col items-center gap-2 sm:gap-3">
      <div className="flex flex-row flex-nowrap items-center gap-1 sm:gap-1.5">
        <DigitCell digit={d0} />
        <DigitCell digit={d1} />
      </div>
      <span className="font-countdown-unit !text-[14px] !leading-[18px] sm:!text-[16px] sm:!leading-5 lg:!text-[18px] lg:!leading-[22px]">
        {label}
      </span>
    </div>
  )
}
