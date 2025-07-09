import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import WaitlistPage from './pages/WaitlistPage';
import CommunityLoginPage from './pages/CommunityLoginPage';
import FoundingAdvisorsPage from './pages/FoundingAdvisorsPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/join-waitlist" element={<WaitlistPage />} />
          <Route path="/community-login" element={<CommunityLoginPage />} />
          <Route path="/founding-advisors" element={<FoundingAdvisorsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;