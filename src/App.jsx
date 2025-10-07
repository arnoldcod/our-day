import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import OurStoryPage from './components/OurStoryPage';
import RegistryPage from './components/RegistryPage';
import RsvpPage from './components/RsvpPage';
// import ItineraryPage from './components/ItineraryPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/our-story" element={<OurStoryPage />} />
        <Route path="/registry" element={<RegistryPage />} />
        <Route path="/rsvp" element={<RsvpPage />} />
        {/* <Route path="/itinerary" element={<ItineraryPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;