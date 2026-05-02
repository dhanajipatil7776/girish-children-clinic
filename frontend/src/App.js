import React from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";

import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import Services from "./components/Services";
import AboutDoctor from "./components/AboutDoctor";
import ClinicEnvironment from "./components/ClinicEnvironment";
import Testimonials from "./components/Testimonials";
import Timings from "./components/Timings";
import Contact from "./components/Contact";
import MobileStickyBar from "./components/MobileStickyBar";
import Footer from "./components/Footer";

const Landing = () => (
  <div className="App pb-24 md:pb-0" data-testid="landing-page">
    <Header />
    <main>
      <Hero />
      <TrustStrip />
      <Services />
      <AboutDoctor />
      <ClinicEnvironment />
      <Testimonials />
      <Timings />
      <Contact />
    </main>
    <Footer />
    <MobileStickyBar />
  </div>
);

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-center" richColors closeButton />
    </>
  );
}

export default App;
