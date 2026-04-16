import backgroundArt from './assets/background.png'
import { PageBackground } from './components/PageBackground'
import { Header } from './components/Header'
import { Hero } from './pages/Hero'

const App = () => {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-black text-[#f4feff]">
      <PageBackground textureUrl={backgroundArt} />

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 pt-5 pb-14 sm:px-6 sm:pt-6 lg:px-10 lg:pt-7">
        <Header />

        <main id="top">
          <Hero />
        </main>
      </div>
    </div>
  )
}

export default App
