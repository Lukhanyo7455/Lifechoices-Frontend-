import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Toaster } from "./components/ui/sonner";
import Home from "./pages/Home";
import About from "./pages/About";
import Interventions from "./pages/Interventions";
import Programme from "./pages/Programme";
import Impact from "./pages/Impact";
import Stories from "./pages/Stories";
import Contact from "./pages/Contact";
import GetInvolved from "./pages/GetInvolved";

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 60);
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [pathname, hash]);
  return null;
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollManager />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/interventions" element={<Interventions />} />
            <Route path="/interventions/:slug" element={<Programme />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-involved" element={<GetInvolved />} />
          </Routes>
        </main>
        <Footer />
        <Toaster position="top-center" richColors />
      </BrowserRouter>
    </div>
  );
}

export default App;
