// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Home from './pages/Home';
import VideoPlayer from './pages/VideoPlayer'; // <-- new page
import './App.css';

function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

function MainLayout() {
  const location = useLocation();


  const hideNavbar = location.pathname.startsWith('/video/');

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video/:id" element={<VideoPlayer />} />
      </Routes>
    </>
  );
}

export default App;
