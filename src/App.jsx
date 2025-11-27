import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import ScrollToTop from './components/ScrollToTop';

// Pages
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import TeamPage from './pages/TeamPage';
import ContactPage from './pages/ContactPage';
import PDRKnowledge from './components/PDRKnowledge';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-50 font-sans antialiased">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/pdr-knowledge" element={<PDRKnowledge />} />
          </Routes>
        </main>
        <Footer />
        <CookieBanner />
      </div>
    </Router>
  );
}

export default App;


