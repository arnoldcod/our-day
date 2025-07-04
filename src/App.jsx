import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import OurStoryPage from './components/OurStoryPage';
import RsvpPage from './components/RsvpPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/our-story" element={<OurStoryPage />} />
        <Route path="/rsvp" element={<RsvpPage />} />
      </Routes>
    </Router>
  );
}

export default App;