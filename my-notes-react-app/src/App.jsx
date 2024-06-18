import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/Navbar';
import HomeApp from './Home';
import FormContact from './pages/ContactUs';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeApp />} />
        <Route path="/contact" element={<FormContact />} />
      </Routes>
    </Router>
  );
};

export default App;
