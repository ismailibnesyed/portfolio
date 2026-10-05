import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

gsap.registerPlugin(ScrollTrigger);

export default function MotionEffects() {
  const { pathname } = useLocation();

  useEffect(() => {
    const lenis = new Lenis({ smoothWheel: true, syncTouch: false });
    const updateLenis = (time) => lenis.raf(time * 1000);
    const updateScrollTrigger = () => ScrollTrigger.update();

    window.portfolioScrollTo = (target) => lenis.scrollTo(target, { duration: 1.1, offset: -24 });
    lenis.on("scroll", updateScrollTrigger);
    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    return () => {
      delete window.portfolioScrollTo;
      lenis.off("scroll", updateScrollTrigger);
      gsap.ticker.remove(updateLenis);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const sections = gsap.utils.toArray(".section");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(sections, { clearProps: "all" });
      return undefined;
    }

    const context = gsap.context(() => {
      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { autoAlpha: 0, y: 24 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: { trigger: section, start: "top 92%", once: true },
          }
        );
      });
    });

    requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => context.revert();
  }, [pathname]);

  return null;
}
