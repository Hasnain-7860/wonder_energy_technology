import About from './components/About'
import Faq from './components/Faq'
import Footer from './components/Footer'
import GreenPaperAudit from './components/GreenPaperAudit'
import { Header } from './components/Header'
import { PageBackground } from './components/PageBackground'
import Projects from './components/Projects'
import Roadmap from './components/Roadmap'
import Tokenomics from './components/Tokenomics'
import TrackerStrip from './components/TrackerStrip'
import WhatWeDo from './components/WhatWeDo'
import { Hero } from './pages/Hero'
import backgroundArt from './assets/background.png'

const App = () => {
  return (
    <div id="top" className="relative min-h-screen overflow-x-clip bg-black text-[#f4feff]">
      <main>
       
        
        <div className="relative z-10 w-full pb-8 sm:pb-10 lg:pb-12">
          <PageBackground textureUrl={backgroundArt} scope="section" />
          <div className="relative z-[2] w-full px-4 pt-4 sm:px-6 sm:pt-5 md:px-8 lg:px-12 lg:pt-6 xl:px-16 2xl:px-20">
            <Header />
          </div>
          <div className="relative z-[1]  mx-auto w-full max-w-[1920px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-50 lg:mt-30">
            <Hero />
          </div>
        </div>
        <div className="relative z-10 mx-auto w-full max-w-[1920px] px-4  sm:px-6  md:px-8 lg:px-12  xl:px-16 2xl:px-1">
          <About />
        </div>
        <WhatWeDo />
        <GreenPaperAudit />
       <div style={{background: "linear-gradient(90deg, #1E1E1E 0%, #1E1E1E 8%, #0F2D2F 22%, #163D3E 40%, #163D3E 50%, #163D3E 60%, #0F2D2F 78%, #1E1E1E 92%, #1E1E1E 100%)" }} >
        <Tokenomics />
         <TrackerStrip />
        <Roadmap />
        <Projects />
        </div>
        <div
  style={{
    background: `
      radial-gradient(circle at center, #163D3E 0%, #0F2D2F 10%, #1E1E1E 80%),
      linear-gradient(180deg, transparent 10%, #1E1E1E 100%)
    `
  }}
>
        <Faq />
        </div>
        
        <Footer />
      </main>
    </div>
  )
}

export default App
