import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import TrustSection from './components/TrustSection'
import WhyChooseUs from './components/WhyChooseUs'
import Footer from './components/Footer'
import StickyBottomBar from './components/StickyBottomBar'
import WhatsAppWidget from './components/WhatsAppWidget'
import DemoPopup from './components/DemoPopup'

export default function App() {
  const [demoOpen, setDemoOpen] = useState(false)

  useEffect(() => {
    const isMobile = window.innerWidth < 768
    const delay = isMobile ? 8000 : 6000
    const timer = setTimeout(() => {
      setDemoOpen(true)
    }, delay)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Header onOpenDemo={() => setDemoOpen(true)} />
      <Hero onOpenDemo={() => setDemoOpen(true)} />
      <Services />
      <TrustSection />
      <WhyChooseUs />

      <span id="book-demo" aria-hidden="true" />

      <Footer onOpenDemo={() => setDemoOpen(true)} />

      {/* Extra bottom padding on mobile so sticky bar never hides content */}
      <div className="block md:hidden" style={{ height: 68 }} aria-hidden="true" />

      {/* Conversion widgets */}
      <StickyBottomBar onOpenDemo={() => setDemoOpen(true)} />
      <WhatsAppWidget />

      {/* Popup — rendered at root so it overlays everything */}
      <DemoPopup isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
    </div>
  )
}
