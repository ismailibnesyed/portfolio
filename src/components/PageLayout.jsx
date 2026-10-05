import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import ToggleBar from "./ToggleBar";
import Footer from "./Footer";

export default function PageLayout({ children }) {
  const location = useLocation();

  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    if (location.hash) {
      requestAnimationFrame(() => {
        const target = document.getElementById(location.hash.slice(1));
        if (target) window.portfolioScrollTo?.(target);
      });
    } else {
      const resetHomePosition = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        window.portfolioScrollTo?.(0);
      };
      resetHomePosition();
      const firstFrame = requestAnimationFrame(() => {
        resetHomePosition();
        requestAnimationFrame(resetHomePosition);
      });
      const resetTimer = window.setTimeout(resetHomePosition, 100);
      return () => {
        cancelAnimationFrame(firstFrame);
        window.clearTimeout(resetTimer);
      };
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
