import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import Apply from './pages/Apply';
import Mission from './pages/Mission';
import Pricing from './pages/Pricing';
import Team from './pages/Team';
import Testimonials from './pages/Testimonials';

// Service Pages
import DesignStudio from './pages/DesignStudio';
import WebDevelopment from './pages/WebDevelopment';
import MediaProduction from './pages/MediaProduction';
import EventManagement from './pages/EventManagement';
import MarketingConsulting from './pages/MarketingConsulting';

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-black text-white pb-20" style={{ backgroundColor: '#0B0B0B', color: '#ffffff' }}>
      <Navbar />
      <main className="relative">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/design" element={<DesignStudio />} />
            <Route path="/services/development" element={<WebDevelopment />} />
            <Route path="/services/media" element={<MediaProduction />} />
            <Route path="/services/events" element={<EventManagement />} />
            <Route path="/services/marketing" element={<MarketingConsulting />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/team" element={<Team />} />
            <Route path="/testimonials" element={<Testimonials />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

// Higher-order component for page transitions
function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWithRouter;
