import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiBriefcase, FiDownload, FiHome, FiMail, FiMoon, FiSun, FiTool, FiZap } from "react-icons/fi";
import { profile, socials } from "../data/data";

const items = [
  { label: "Home", to: "/", icon: FiHome },
  { label: "Technologies & Skills", to: "/#tech", icon: FiZap },
  { label: "Services", to: "/#service", icon: FiTool },
  { label: "Projects", to: "/#project", icon: FiBriefcase },
  { label: "Contact", to: "/#contact", icon: FiMail },
  { label: "Resume", to: profile.resumeUrl || null, icon: FiDownload, download: true },
  { label: "GitHub", to: socials.find((social) => social.name === "GitHub").url, icon: FaGithub, external: true },
  { label: "LinkedIn", to: socials.find((social) => social.name === "LinkedIn").url, icon: FaLinkedinIn, external: true },
];

export default function ToggleBar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("/");
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";
    const savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme) return savedTheme;
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  });
  const location = useLocation();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    const isHome = location.pathname === "/";
    if (!isHome) {
      setActive(location.pathname);
    }

    const sectionIds = ["home", "tech", "skill", "service", "qualification", "certificates", "project", "review", "contact"];
    const sectionRoutes = {
      home: "/",
      tech: "/#tech",
      skill: "/#tech",
      service: "/#service",
      qualification: null,
      certificates: null,
      project: "/#project",
      review: null,
      contact: "/#contact",
    };
    const updateFromScroll = () => {
      setScrolled(window.scrollY > 2);
      if (!isHome) return;
      const activationLine = window.innerHeight * 0.38;
      const passedSections = sectionIds
        .map((id) => document.getElementById(id))
        .filter(Boolean)
        .filter((section) => section.getBoundingClientRect().top <= activationLine);
      const currentSection = passedSections.reverse().find((section) => sectionRoutes[section.id]);
      setActive(currentSection ? sectionRoutes[currentSection.id] : "/");
    };

    updateFromScroll();
    window.addEventListener("scroll", updateFromScroll, { passive: true });
    window.addEventListener("resize", updateFromScroll);
    return () => {
      window.removeEventListener("scroll", updateFromScroll);
      window.removeEventListener("resize", updateFromScroll);
    };
  }, [location.pathname]);

  const visible = scrolled;

  const nextTheme = theme === "dark" ? "light" : "dark";
  const ThemeIcon = theme === "dark" ? FiSun : FiMoon;

  return (
    <aside
      aria-label="Portfolio navigation"
      className={`toggle-bar fixed bottom-3 left-1/2 z-50 grid w-[calc(100%-24px)] max-w-sm -translate-x-1/2 grid-cols-5 justify-items-center gap-1 overflow-hidden rounded-2xl border border-line bg-shell/95 p-2 shadow-xl backdrop-blur transition-[width,transform] duration-300 md:bottom-3 md:left-0 md:top-3 md:max-h-[calc(100vh-24px)] md:max-w-none md:flex md:w-13 md:flex-col md:justify-start md:gap-1 md:rounded-r-2xl md:rounded-l-none md:overflow-x-hidden md:overflow-y-auto md:hover:w-56 md:focus-within:w-56 ${visible ? "translate-y-0 md:translate-x-0" : "translate-y-[calc(100%+16px)] md:-translate-x-full md:translate-y-0"}`}
    >
      {items.map(({ label, to, icon: Icon, external, download }) => {
        const isActive = !external && active === to;
        const className = `group relative flex h-10 w-10 shrink-0 items-center justify-center gap-3 rounded-xl px-0 text-left text-sm whitespace-nowrap transition-colors md:w-full md:justify-start md:px-2 ${isActive ? "bg-ac text-active" : "text-mu hover:bg-line hover:text-main"}`;
        const content = (
          <>
            <Icon className="w-5 shrink-0 text-lg" aria-hidden="true" />
            <span className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 rounded bg-card px-2 py-1 text-xs opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 md:static md:mb-0 md:translate-x-0 md:rounded-none md:bg-transparent md:px-0 md:py-0 md:text-sm md:shadow-none">
              {label}
            </span>
          </>
        );

        if (external) {
          return (
            <a key={label} href={to} target="_blank" rel="noreferrer" aria-label={label} title={label} className={className}>
              {content}
            </a>
          );
        }

        if (download) {
          const resumeUrl = to ? new URL(to, window.location.origin) : null;
          const driveId = to?.match(/\/file\/d\/([^/]+)/)?.[1]
            || (resumeUrl?.hostname.endsWith("drive.google.com") ? resumeUrl.searchParams.get("id") : null);
          const downloadUrl = driveId
            ? `https://drive.google.com/uc?export=download&id=${driveId}`
            : to;
          return to ? (
            <a key={label} href={downloadUrl} download target={driveId ? "_blank" : undefined} rel={driveId ? "noreferrer" : undefined} aria-label={label} title={label} className={className}>
              {content}
            </a>
          ) : (
            <button key={label} type="button" disabled aria-label="Resume PDF will be available soon" title="Add a PDF or Google Drive link in data.jsx" className={`${className} cursor-not-allowed opacity-50`}>
              {content}
            </button>
          );
        }

        return (
          <Link
            key={label}
            to={to}
            aria-label={label}
            aria-current={isActive ? "page" : undefined}
            title={label}
            className={className}
            onClick={() => {
              if (location.pathname !== "/") return;
              if (to === "/") window.portfolioScrollTo?.(0);
              else if (location.hash === to.slice(1)) window.portfolioScrollTo?.(document.getElementById(to.slice(3)));
            }}
          >
            {content}
          </Link>
        );
      })}

      <button
        type="button"
        onClick={() => setTheme(nextTheme)}
        aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        title={theme === "dark" ? "Light mode" : "Dark mode"}
        className="group relative flex h-10 w-10 shrink-0 items-center justify-center gap-3 rounded-xl px-0 text-left text-sm whitespace-nowrap transition-colors text-mu hover:bg-line hover:text-main md:w-full md:justify-start md:px-2"
      >
        <ThemeIcon className="w-5 shrink-0 text-lg" aria-hidden="true" />
        <span className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 rounded bg-card px-2 py-1 text-xs opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 md:static md:mb-0 md:translate-x-0 md:rounded-none md:bg-transparent md:px-0 md:py-0 md:text-sm md:shadow-none">
          {theme === "dark" ? "Light" : "Dark"}
        </span>
      </button>
    </aside>
  );
}
