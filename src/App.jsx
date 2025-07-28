import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Context
import { ThemeProvider } from './contexts/ThemeContext';

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
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-space-900 text-gray-900 dark:text-white relative overflow-hidden transition-colors duration-300">
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
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
        
        {/* Footer */}
        <Footer />
      </div>
    </Router>
    </ThemeProvider>
  );
}

export default App;
