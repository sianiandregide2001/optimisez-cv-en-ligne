import React from "react";
import {Routes, Route, Link } from "react-router-dom";
import ProfileViewer from './pages/ProfileViewer';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Legal from './pages/Legal';
import Header from './pages/Header';
import Footer from './pages/Footer';

export default function App() {
  return (
    <div className="App">
      <ProfileViewer />
      <Header />
      <nav>
        <Link to="/Home">Accueil</Link>
        <Link to="/Services">Services</Link>
        <Link to="/Portfolio">Portfolio</Link>
        <Link to="/Blog">Blog</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Legal">Legal</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Legal" element={<Legal />} />
      </Routes>
      <Footer />
    </div>
  );
}
