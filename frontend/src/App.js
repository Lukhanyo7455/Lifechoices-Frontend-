import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation, useParams, Navigate } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Toaster } from "./components/ui/sonner";
import StandardPage from "./templates/StandardPage";
import InitiativePage from "./templates/InitiativePage";
import { getContent } from "./content/contentMap";
import Home from "./pages/Home";
import About from "./pages/About";
import Interventions from "./pages/Interventions";
import Programme from "./pages/Programme";
import Impact from "./pages/Impact";
import Stories from "./pages/Stories";
import StoryDetail from "./pages/StoryDetail";
import Contact from "./pages/Contact";
import GetInvolved from "./pages/GetInvolved";
import WPTest from "./pages/WPTest";
import Sustainability from "./pages/Sustainability";
import Donors from "./pages/Donors";
import Team from "./pages/Team";

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

// Subtle cursor-follow tilt on depth cards (desktop, fine pointer only).
function useCardTilt() {
  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    let active = null;
    const reset = (el) => {
      el.style.transition = "";
      el.style.transform = "";
    };
    const onMove = (e) => {
      const card = e.target.closest(".card-3d");
      if (active && active !== card) {
        reset(active);
        active = null;
      }
      if (!card) return;
      active = card;
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      const max = 4.5;
      card.style.transition = "transform 0.12s ease-out";
      card.style.transform = `perspective(1000px) rotateX(${(-py * max).toFixed(2)}deg) rotateY(${(px * max).toFixed(2)}deg) translateY(-6px)`;
    };
    const onLeave = () => {
      if (active) {
        reset(active);
        active = null;
      }
    };
    document.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("blur", onLeave);
    return () => {
      document.removeEventListener("pointermove", onMove);
      window.removeEventListener("blur", onLeave);
      if (active) reset(active);
    };
  }, []);
  return null;
}

function ContentRoute() {
  const { slug } = useParams();
  const data = getContent(slug);
  if (!data) return <Navigate to="/" replace />;
  return data.template === "initiative" ? <InitiativePage /> : <StandardPage />;
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <div key={location.pathname} className="page-transition">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/interventions" element={<Interventions />} />
        <Route path="/interventions/:slug" element={<Programme />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/donors" element={<Donors />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/stories/:slug" element={<StoryDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/wp-test" element={<WPTest />} />
        <Route path="/:slug" element={<ContentRoute />} />
      </Routes>
    </div>
  );
}

function App() {
  useCardTilt();
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollManager />
        <Header />
        <main>
          <AnimatedRoutes />
        </main>
        <Footer />
        <Toaster position="top-center" richColors />
      </BrowserRouter>
      <div className="grain-overlay" aria-hidden="true" />
    </div>
  );
}

export default App;
