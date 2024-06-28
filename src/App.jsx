import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutShort from "./components/AboutShort";
import CuisineShort from "./components/CuisineShort";
import EventShort from "./components/EventShort";
import Feedback from "./components/Feedback";
import ContactShort from "./components/ContactShort";
import AboutPage from "./pages/AboutPage";
import CuisinePage from "./pages/CuisinePage";
import EventsPage from "./pages/EventsPage";
import ContactPage from "./pages/ContactPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <AboutShort />
            <CuisineShort />
            <EventShort />
            <Feedback />
            <ContactShort />
          </>
        } />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/cuisine" element={<CuisinePage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
};

export default App;
