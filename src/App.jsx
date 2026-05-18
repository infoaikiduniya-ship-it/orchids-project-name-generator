import { useState, useEffect, lazy, Suspense } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import StickyBottomBar from './components/StickyBottomBar'
import WhatsAppWidget from './components/WhatsAppWidget'
import DemoPopup from './components/DemoPopup'

const VideoTestimonials = lazy(() => import('./components/VideoTestimonials'))
const Services = lazy(() => import('./components/Services'))
const WhyChooseUs = lazy(() => import('./components/WhyChooseUs'))
const TrustSection = lazy(() => import('./components/TrustSection'))
const StudentResults = lazy(() => import('./components/StudentResults'))

export default function App() {
  const [demoOpen, setDemoOpen] = useState(false)

  useEffect(() => {
    const isMobile = window.innerWidth < 768
    const delay = isMobile ? 10000 : 8000
    // const timer = setTimeout(() => {
    //   setDemoOpen(true)
    // }, delay)
    // return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Header onOpenDemo={() => setDemoOpen(true)} />
      <Hero onOpenDemo={() => setDemoOpen(true)} />

      <Suspense fallback={<div className="py-8" />}>
        <Services />
      </Suspense>

      <Suspense fallback={<div className="py-8" />}>
        <StudentResults />
      </Suspense>

      <Suspense fallback={<div className="py-8" />}>
        <VideoTestimonials />
      </Suspense>

      <Suspense fallback={<div className="py-8" />}>
        <TrustSection />
      </Suspense>

      <Suspense fallback={<div className="py-8" />}>
        <WhyChooseUs />
      </Suspense>

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
