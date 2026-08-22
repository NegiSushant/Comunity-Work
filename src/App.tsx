import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Marquee from "./components/Marquee";
import DevelopmentNotice from "./components/DevelopmentNotice";
import AboutDev from "./pages/AboutDev";
import SupportDeveloper from "./pages/SupportDeveloper";
import AboutCommunity from "./pages/AboutCommunity";
import AboutVillage from "./pages/AboutVillage";
import SupportCommunity from "./pages/SupportCommunity";
import OrganizingEvents from "./pages/OrganizingEvents";
import { LanguageProvider } from "./context/LanguageContext";

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <DevelopmentNotice />
          <Marquee />
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/about/developer" element={<AboutDev />} />
              <Route path="/about/community" element={<AboutCommunity />} />
              <Route path="/about/village" element={<AboutVillage />} />
              <Route path="/support/Community" element={<SupportCommunity />} />
              <Route path="/support/developer" element={<SupportDeveloper />} />
              <Route path="/support/events" element={<OrganizingEvents />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
};

export default App;
