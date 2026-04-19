import  coingeckoImg from '../assets/cry.svg'
import cryptoComImg from '../assets/kida.svg'

export default function TrackerStrip() {

  const links = [ 
    {
      name: "CoinGecko",
      url: "https://www.coingecko.com",
      icon: cryptoComImg
    },
    {
      name: "CoinMarketCap",
      url: "https://coinmarketcap.com",
      icon: "https://cdn.simpleicons.org/coinmarketcap/ffffff"
    },
    {
      name: "Crypto.com",
      url: "https://crypto.com",
      icon: coingeckoImg
    }
  ]

  return (
    <div className="w-full text-center py-6 ">
      <p className="text-[#5CE1E6] text-[16px] tracking-[0.2em]">
        WTE TRACKER
      </p>

      <h2 className="mb-10 text-center text-[40px] tracking-[0.2em] font-twobit-only text-white">
        TRACKER
      </h2>

      
      <div className="flex justify-center items-center flex-wrap gap-5 py-25">

        {links.map((item, index) => (
          <div key={item.name} className="flex items-center gap-5">

           
            <a
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-[25px] text-white no-underline"
            >
             {item.name === "CoinGecko" ? (
  <div className="relative flex items-center justify-center">
    <div className="absolute w-12 h-12 rounded-full bg-[#8DC63F]" />
    <div className="absolute w-10 h-10 rounded-full bg-[#F9E988]" />
    <img
      src={item.icon}
      alt={item.name}
      className="w-8 h-8 object-contain relative z-10"
    />
  </div>

) : item.name === "Crypto.com" ? (
  <div className="relative flex items-center justify-center">
    <div className="absolute w-15 h-15 rounded-full bg-white" />
    <img
      src={item.icon}
      alt={item.name}
      className="w-18 h-18 object-contain relative z-10"
    />
  </div>

) : (
  <img
    src={item.icon}
    alt={item.name}
    className="w-9 h-9 object-contain"
  />
)}

              <span className="text-[50px] font-semibold">
                {item.name}
              </span>

            </a>

            {index !== links.length - 1 && (
              <div className="h-20 w-[2px] bg-white mx-18" />
            )}

          </div>
        ))}

      </div>
    </div>
  )
}