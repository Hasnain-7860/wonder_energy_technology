import TokenomicsChart from './TokenomicsChart'

function LineBox({
  label,
  angle = 0,
  lineClass = '',
  labelClass = '',
}: any) {
  return (
    <div className="relative flex flex-col items-center justify-center font-twobit-only">
      <div
        className={`origin-bottom ${lineClass}`}
        style={{ transform: `rotate(${angle}deg)` }}
      />
      <div className={labelClass}>
        {label}
      </div>
    </div>
  )
}

export default function TokenomicsWithLabels() {
  return (
    <div className="relative flex items-center justify-center w-[1000px] h-[600px]">
      <TokenomicsChart />
      <div className="absolute h-[300px] w-[300px] rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="hidden lg:block">
      <div className="absolute top-[-140px] left-54">
        <LineBox
          label="Ecosystem"
          angle={145}
          lineClass="w-[2px] h-[94px] bg-cyan-300 "
         labelClass="relative mt-[-44px] right-9 px-10 py-3 rounded-xl text-white text-[18px] tracking-widest 
bg-[#2AA6AD]
shadow-[8px_10px_25px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.2)]
hover:scale-105 hover:shadow-[10px_14px_30px_rgba(0,0,0,0.35)] transition-all duration-300"
        />
      </div>

      <div className="absolute top-[-142px] left-150">
        <LineBox
          label="Marketing"
          angle={210}
          lineClass="w-[2px] h-[94px] bg-cyan-300"
          labelClass="relative mt-[-50px] left-10 px-10 py-3 rounded-xl text-white text-[18px] tracking-widest bg-[#2AA6AD]
          shadow-[8px_10px_25px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.2)]
          hover:scale-105 hover:shadow-[10px_14px_30px_rgba(0,0,0,0.35)] transition-all duration-300"/>
      </div>

      <div className="absolute top-[-101px] right-13">
        <LineBox
          label="Secured Fund"
          angle={230}
          lineClass="w-[2px] h-[140px] bg-cyan-300"
          labelClass="relative mt-[-42px] left-22 px-10 py-3 rounded-xl text-white text-[18px] tracking-widest bg-[#2AA6AD]
          shadow-[8px_10px_25px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.2)]
          hover:scale-105 hover:shadow-[10px_14px_30px_rgba(0,0,0,0.35)] transition-all duration-300"/>
      </div>

      <div className="absolute right-[-27px] top-[220px] -translate-y-1/2">
        <LineBox
          label="Partnership"
          angle={270}
          lineClass="w-[2px] h-[140px] bg-cyan-300"
           labelClass="relative mt-[-25px] left-20 px-10 py-3 rounded-xl text-white text-[18px] tracking-widest bg-[#2AA6AD]
          shadow-[8px_10px_25px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.2)]
          hover:scale-105 hover:shadow-[10px_14px_30px_rgba(0,0,0,0.35)] transition-all duration-300"/>
      </div>

      <div className="absolute bottom-1 right-9.5">
        <LineBox
          label="Team & Advisors"
          angle={320}
          lineClass="w-[2px] h-[140px] bg-cyan-300"
           labelClass="relative mt-[-2px] left-24 px-10 py-3 rounded-xl text-white text-[18px] tracking-widest bg-[#2AA6AD]
          shadow-[8px_10px_25px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.2)]
          hover:scale-105 hover:shadow-[10px_14px_30px_rgba(0,0,0,0.35)] transition-all duration-300"/>
      </div>

      <div className="absolute bottom-[-116px] left-1/2 -translate-x-1/2">
        <LineBox
          label="Treasure"
          angle={0}
          lineClass="w-[2px] h-[107px] bg-cyan-300"
           labelClass="relative mt-[-40px] left-2 top-10 px-10 py-3 rounded-xl text-white text-[18px] tracking-widest bg-[#2AA6AD]
          shadow-[8px_10px_25px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.2)]
          hover:scale-105 hover:shadow-[10px_14px_30px_rgba(0,0,0,0.35)] transition-all duration-300"/>
      </div>

      <div className="absolute bottom-[-51px] left-53">
        <LineBox
          label="Private Sale"
          angle={30}
          lineClass="w-[2px] h-[100px] bg-cyan-300"
           labelClass="relative mt-[-42px] left-[-80px] top-10 px-10 py-3 rounded-xl text-white text-[18px] tracking-widest bg-[#2AA6AD]
          shadow-[8px_10px_25px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.2)]
          hover:scale-105 hover:shadow-[10px_14px_30px_rgba(0,0,0,0.35)] transition-all duration-300"/>
      </div>

      <div className="absolute left-9.5 bottom-17">
        <LineBox
          label="Community"
          angle={90}
          lineClass="w-[2px] h-[180px] bg-cyan-300"
           labelClass="relative mt-[-42px] left-[-80px] top-[10px] px-10 py-3 rounded-xl text-white text-[18px] tracking-widest bg-[#2AA6AD]
          shadow-[8px_10px_25px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.2)]
          hover:scale-105 hover:shadow-[10px_14px_30px_rgba(0,0,0,0.35)] transition-all duration-300"/>
      </div>
      <div className="absolute left-[-22px] bottom-60">
        <LineBox
          label="Exchange & Liquidity"
          angle={90}
          lineClass="w-[2px] h-[100px] bg-cyan-300"
           labelClass="relative mt-[-4px] left-[-120px] top-[-17px] px-10 py-3 rounded-xl text-white text-[18px] tracking-widest bg-[#2AA6AD]
          shadow-[8px_10px_25px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.2)]
          hover:scale-105 hover:shadow-[10px_14px_30px_rgba(0,0,0,0.35)] transition-all duration-300"/>
      </div>
     

      
       </div>

    </div>
  )
}