function DigitCell({ digit }: { digit: string }) {
  return (
    <div
      className="box-border flex h-[63px] w-[49px] flex-col items-center justify-center gap-2.5 rounded-[5px] border border-[#5CE1E6] bg-[#232325] px-[14px] py-6"
    >
      <span className="font-countdown-digit leading-[30px]">{digit}</span>
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
    <div className="flex shrink-0 flex-col items-center gap-3">
      <div className="flex flex-row flex-nowrap items-center gap-1.5">
        <DigitCell digit={d0} />
        <DigitCell digit={d1} />
      </div>
      <span className="font-countdown-unit">{label}</span>
    </div>
  )
}
