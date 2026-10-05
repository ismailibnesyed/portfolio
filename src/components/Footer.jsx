import { profile, socials, skills } from "../data/data";
import Container from "./Container";

const footerLinks = [
  { label: "Home", to: "home" },
  { label: "Technologies & Skills", to: "tech" },
  { label: "Services", to: "service" },
  { label: "Projects", to: "project" },
  { label: "Certificates", to: "certificates" },
  { label: "Contact", to: "contact" },
];

export default function Footer() {
  return (
    <footer id="footer" className="border-t border-line">
      <Container className="grid grid-cols-1 gap-8 py-9 text-base text-mu min-[420px]:grid-cols-2 sm:gap-10 sm:py-12 sm:text-sm lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
        <div className="min-w-0 min-[420px]:col-span-2 lg:col-span-1">
          <b className="inline-flex items-center gap-2 text-lg text-ac">
            <img src="/images/favicon.png" alt="" className="h-8 w-8 object-contain" />
            {profile.name}
          </b>
          <p className="mt-3 wrap-break-word">{profile.role}</p>
        </div>
        <div className="min-w-0">
          <b className="mb-3 block text-base text-main sm:mb-2 sm:text-sm">Quick links</b>
          {footerLinks.map((link) => (
            <a key={link.to} href={`#${link.to}`} onClick={(event) => { event.preventDefault(); window.portfolioScrollTo?.(document.getElementById(link.to)); }} className="mb-1 block wrap-break-word hover:text-main">
              {link.label}
            </a>
          ))}
        </div>
        <div className="min-w-0">
          <b className="mb-3 block text-base text-main sm:mb-2 sm:text-sm">Skills</b>
          {[...skills.Backend.slice(0, 2), ...skills.Frontend.slice(0, 1)].map(([n]) => <span key={n} className="block mb-1">{n}</span>)}
          <span className="block mb-1">PostgreSQL · Docker</span>
          <span className="block mb-1">Exploring AI/ML</span>
        </div>
        <div className="min-w-0 min-[420px]:col-span-2 lg:col-span-1">
          <b className="mb-3 block text-base text-main sm:mb-2 sm:text-sm">Social media</b>
          <div className="mb-4 grid max-w-56 grid-cols-3 gap-3 sm:grid-cols-5 sm:gap-2">
            {socials.map((s) => (
              <a key={s.name} href={s.url} target={s.external ? "_blank" : undefined} rel={s.external ? "noreferrer" : undefined} aria-label={s.name}
                className="grid h-10 w-10 place-items-center rounded-full border border-line text-lg text-main transition-colors hover:border-ac hover:text-ac sm:h-9 sm:w-9 sm:text-base"><s.icon /></a>
            ))}
          </div>
          <a className="btn w-fit" href="#contact" onClick={(event) => { event.preventDefault(); window.portfolioScrollTo?.(document.getElementById("contact")); }}>Let's Connect</a>
        </div>
      </Container>
      <div className="border-t border-line text-xs text-mu">
        <Container className="flex flex-col gap-1 py-4 min-[420px]:flex-row min-[420px]:items-center min-[420px]:justify-between min-[420px]:gap-2">
          <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
          <span>Built with React</span>
        </Container>
      </div>
    </footer>
  );
}
