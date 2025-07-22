import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Components
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import StarField from './components/StarField';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Technologies from './pages/Technologies';
import Services from './pages/Services';
import Media from './pages/Media';
import News from './pages/News';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-space-900 text-white relative overflow-hidden">
        {/* Animated star field background */}
        <StarField />
        
        {/* Navigation */}
        <Navigation />
        
        {/* Main content with route transitions */}
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/services" element={<Services />} />
            <Route path="/media" element={<Media />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
        
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
