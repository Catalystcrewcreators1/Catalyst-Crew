import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

// Define types for PWA install prompt
interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
}

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
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallPopup, setShowInstallPopup] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShowInstallPopup(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult: { outcome: 'accepted' | 'dismissed'; platform: string }) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        }
        setDeferredPrompt(null);
        setShowInstallPopup(false);
      });
    }
  };

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

      {/* Install Popup */}
      {showInstallPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-black max-w-sm mx-4">
            <h2 className="text-xl font-bold mb-4">Install Catalyst Crew App</h2>
            <p className="mb-4">Install our app for a better experience on your device!</p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowInstallPopup(false)}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleInstallClick}
                className="px-4 py-2 bg-red-600 text-white rounded"
              >
                Install
              </button>
            </div>
          </div>
        </div>
      )}
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
