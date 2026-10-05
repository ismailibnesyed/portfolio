import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import { profile } from "../data/data";
import Container from "./Container";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "service", label: "Services" },
  { id: "project", label: "Project" },
  { id: "contact", label: "Contact" },
  { id: "about", label: "About Me" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [activeSection, setActiveSection] = useState("/");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const sectionIds = navLinks.map(({ id }) => id);
    const updateNavigation = () => {
      setAtTop(window.scrollY <= 2);
      if (location.pathname !== "/") {
        setActiveSection("home");
        return;
      }

      const activationLine = window.innerHeight * 0.38;
      const currentSection = sectionIds
        .map((id) => document.getElementById(id))
        .filter(Boolean)
        .filter((section) => section.getBoundingClientRect().top <= activationLine)
        .at(-1);
      setActiveSection(currentSection?.id || "home");
    };

    updateNavigation();
    window.addEventListener("scroll", updateNavigation, { passive: true });
    window.addEventListener("resize", updateNavigation);
    return () => {
      window.removeEventListener("scroll", updateNavigation);
      window.removeEventListener("resize", updateNavigation);
    };
  }, [location.hash, location.pathname]);

  const navigateTo = (id) => {
    setMenuOpen(false);
    if (location.pathname === "/") {
      if (id === "home") {
        navigate("/");
        window.portfolioScrollTo?.(0);
        return;
      }
      navigate(`/#${id}`, { replace: location.hash === `#${id}` });
      if (location.hash === `#${id}`) {
        window.portfolioScrollTo?.(document.getElementById(id));
      }
      return;
    }
    navigate(id === "home" ? "/" : `/#${id}`);
  };

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed top-3 left-0 z-40 w-full transition-[transform,opacity] duration-300 ${atTop ? "translate-y-0 opacity-100" : "-translate-y-[calc(100%+16px)] pointer-events-none opacity-0"}`}
    >
      <Container className="rounded-2xl border border-line bg-shell px-4 py-2 backdrop-blur sm:rounded-full">
        <div className="flex items-center justify-between gap-3">
        <button onClick={() => navigateTo("home")} aria-label={`${profile.name} — home`} className="flex h-10 w-10 shrink-0 items-center justify-center">
          <img src="/images/favicon.png" alt="" className="h-9 w-9 object-contain" />
        </button>
        <div className="hidden items-center gap-1 text-sm text-mu lg:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => navigateTo(link.id)}
              aria-current={activeSection === link.id ? "location" : undefined}
              className={`whitespace-nowrap rounded-full px-2 py-2 transition-colors hover:bg-line hover:text-main ${activeSection === link.id ? "text-ac" : ""}`}
            >
              {link.label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button className="btn px-4! py-2!" onClick={() => navigateTo("contact")}>Let's Talk</button>
          <button
            className="grid h-10 w-10 place-items-center rounded-full border border-line text-main lg:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
        </div>
        {menuOpen && (
          <div id="mobile-navigation" className="grid grid-cols-2 gap-2 pt-3 pb-1 lg:hidden">
            {navLinks.map((link) => (
              <button key={link.id} onClick={() => navigateTo(link.id)} aria-current={activeSection === link.id ? "location" : undefined} className={`rounded-xl px-3 py-2 text-left text-sm transition-colors hover:bg-line hover:text-main ${activeSection === link.id ? "text-ac" : "text-mu"}`}>
                {link.label}
              </button>
            ))}
          </div>
        )}
      </Container>
    </nav>
  );
}
