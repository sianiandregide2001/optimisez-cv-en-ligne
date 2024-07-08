import React from "react";
import { Routes, Route,} from 'react-router-dom';
import ProfileViewer from './pages/ProfileViewer';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Legal from './pages/Legal';
import Header from './pages/Header';
import Footer from './pages/Footer';
import BackToTop from './pages/BackToTop';


export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/ProfileViewer" element={<ProfileViewer/>}/>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Legal" element={<Legal />} />
      </Routes>
      <Footer />
      <BackToTop />
    </div>
  );
}