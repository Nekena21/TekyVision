import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import TechBackground from './components/layout/TechBackground'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Products = lazy(() => import('./pages/Products'))
const Team = lazy(() => import('./pages/Team'))
const TeamMember = lazy(() => import('./pages/TeamMember'))
const Publications = lazy(() => import('./pages/Publications'))
const Contact = lazy(() => import('./pages/Contact'))
const ThankYou = lazy(() => import('./pages/ThankYou'))

function PageLoader() {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      minHeight: '60vh', fontSize: '0.875rem', color: 'var(--text-muted)'
    }}>
      <div style={{
        width: 40, height: 40, border: '3px solid var(--border)',
        borderTopColor: 'var(--yellow)', borderRadius: '50%',
        animation: 'rotate 0.8s linear infinite'
      }} />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter basename="/TekyVision">
      <TechBackground />
      <div className="tech-bg" aria-hidden="true" />
      <div className="page-wrapper">
        <Header />
        <main style={{ paddingTop: '72px' }}>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/team" element={<Team />} />
              <Route path="/team/:slug" element={<TeamMember />} />
              <Route path="/publications" element={<Publications />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/thank-you" element={<ThankYou />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
