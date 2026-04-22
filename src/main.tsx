import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Web3Provider } from './components/Web3Context.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Web3Provider>   {/* ✅ ADD THIS */}
      <App />
    </Web3Provider>
  </StrictMode>,
)