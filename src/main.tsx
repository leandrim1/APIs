import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/App.css'
import App from './App.tsx'
import Header from './components/Header.tsx'
import Home from './components/Home.tsx'
import Footer from './components/Footer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <Home />
    <Footer />
    <App />
  </StrictMode>,
)
