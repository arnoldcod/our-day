import { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { DarkModeProvider } from './context/DarkModeContext';
import SplashScreen from './components/SplashScreen';

// Lazy load route components for better code splitting
const HomePage = lazy(() => import('./components/HomePage'));
const OurStoryPage = lazy(() => import('./components/OurStoryPage'));
const RegistryPage = lazy(() => import('./components/RegistryPage'));
const RsvpPage = lazy(() => import('./components/RsvpPage'));
const AccommodationPage = lazy(() => import('./components/AccommodationPage'));
const TravelGuidePage = lazy(() => import('./components/TravelGuidePage'));
// const ItineraryPage = lazy(() => import('./components/ItineraryPage'));

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
    <DarkModeProvider>
      <AnimatePresence mode="wait">
        {isLoading && <SplashScreen key="splash" />}
      </AnimatePresence>

      {!isLoading && (
        <Router>
          <Suspense fallback={<div className="min-h-screen bg-white dark:bg-gray-900" />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/our-story" element={<OurStoryPage />} />
              <Route path="/registry" element={<RegistryPage />} />
              <Route path="/rsvp" element={<RsvpPage />} />
              <Route path="/accommodation" element={<AccommodationPage />} />
              <Route path="/travel-guide" element={<TravelGuidePage />} />
              {/* <Route path="/itinerary" element={<ItineraryPage />} /> */}
            </Routes>
          </Suspense>
        </Router>
      )}
    </DarkModeProvider>
  );
}

export default App;