import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import HomePage from './components/HomePage';
import OurStoryPage from './components/OurStoryPage';
import RegistryPage from './components/RegistryPage';
import RsvpPage from './components/RsvpPage';
import AccommodationPage from './components/AccommodationPage';
import TravelGuidePage from './components/TravelGuidePage';
import SplashScreen from './components/SplashScreen';
// import ItineraryPage from './components/ItineraryPage';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { i18n } = useTranslation();

  useEffect(() => {
    // Ensure splash screen shows for minimum duration for better UX
    const minimumLoadTime = 2500; // 2.5 seconds
    const startTime = Date.now();

    const initializeApp = async () => {
      try {
        // Wait for i18n to be ready
        await i18n.loadNamespaces('translation');

        // Calculate remaining time to meet minimum load time
        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(0, minimumLoadTime - elapsedTime);

        // Wait for remaining time if needed
        if (remainingTime > 0) {
          await new Promise(resolve => setTimeout(resolve, remainingTime));
        }

        // Fade out splash screen
        setIsLoading(false);
      } catch (error) {
        console.error('Error initializing app:', error);
        // Show app even if there's an error after minimum time
        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(0, minimumLoadTime - elapsedTime);
        setTimeout(() => setIsLoading(false), remainingTime);
      }
    };

    initializeApp();
  }, [i18n]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <SplashScreen key="splash" />}
      </AnimatePresence>

      {!isLoading && (
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/our-story" element={<OurStoryPage />} />
            <Route path="/registry" element={<RegistryPage />} />
            <Route path="/rsvp" element={<RsvpPage />} />
            <Route path="/accommodation" element={<AccommodationPage />} />
            <Route path="/travel-guide" element={<TravelGuidePage />} />
            {/* <Route path="/itinerary" element={<ItineraryPage />} /> */}
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;