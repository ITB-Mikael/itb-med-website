import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Science from './pages/Science'
import Team from './pages/Team'
import Pipeline from './pages/Pipeline'
import Zelarion from './pages/Zelarion'
import ExpandedAccess from './pages/ExpandedAccess'
import Contact from './pages/Contact'
import Legal from './pages/Legal'
import NotFound from './pages/NotFound'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <ScrollToTop />
      <Header />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/science" element={<Science />} />
          <Route path="/team" element={<Team />} />
          <Route path="/pipeline" element={<Pipeline />} />
          <Route path="/zelarion" element={<Zelarion />} />
          <Route path="/expanded-access" element={<ExpandedAccess />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
