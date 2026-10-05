import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import ToggleBar from "./ToggleBar";
import Footer from "./Footer";

export default function PageLayout({ children }) {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      requestAnimationFrame(() => {
        const target = document.getElementById(location.hash.slice(1));
        if (target) window.portfolioScrollTo?.(target);
      });
    } else {
      window.portfolioScrollTo?.(0);
    }
  }, [location.hash, location.pathname]);

  return (
    <>
      <Navbar />
      <ToggleBar />
      <div id="main-content">{children}</div>
      <Footer />
    </>
  );
}
