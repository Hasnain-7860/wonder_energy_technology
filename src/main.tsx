import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './index.css'
import App from './App.tsx'
import { Web3Provider } from './components/Web3Context.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
        <Web3Provider>   {/* ✅ ADD THIS */}
      <App />
      <ToastContainer position="top-right" autoClose={3000} />
    </Web3Provider>
  </StrictMode>,
)