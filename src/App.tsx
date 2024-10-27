import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Marquee from "./components/Marquee";
import DevelopmentNotice from "./components/DevelopmentNotice";
import AboutDev from "./pages/AboutDev";
import SupportUs from "./pages/SupportUs";
import SupportDeveloper from "./pages/SupportDeveloper";

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <DevelopmentNotice />
        <Marquee />
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about/developer" element={<AboutDev />} />
            <Route path="/about/developer" element={<AboutDev />} />
            <Route path="/about/developer" element={<AboutDev />} />
            <Route path="/support" element={<SupportUs />} />
            <Route path="/support/developer" element={<SupportDeveloper />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
