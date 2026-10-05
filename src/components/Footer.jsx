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
      <Container className="grid grid-cols-1 gap-7 py-10 text-sm text-mu min-[420px]:grid-cols-2 sm:gap-8 sm:py-12 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
        <div className="min-w-0 min-[420px]:col-span-2 lg:col-span-1">
          <b className="inline-flex items-center gap-2 text-lg text-ac">
            <img src="/images/favicon.png" alt="" className="h-8 w-8 object-contain" />
            {profile.name}
          </b>
          <p className="mt-3 wrap-break-word">{profile.role}</p>
        </div>
        <div>
          <b className="mb-2 block text-main">Quick links</b>
          {footerLinks.map((link) => (
            <a key={link.to} href={`#${link.to}`} onClick={(event) => { event.preventDefault(); window.portfolioScrollTo?.(document.getElementById(link.to)); }} className="mb-1 block wrap-break-word hover:text-main">
              {link.label}
            </a>
          ))}
        </div>
        <div>
          <b className="text-main block mb-2">Skills</b>
          {[...skills.Backend.slice(0, 2), ...skills.Frontend.slice(0, 1)].map(([n]) => <span key={n} className="block mb-1">{n}</span>)}
          <span className="block mb-1">PostgreSQL · Docker</span>
          <span className="block mb-1">Exploring AI/ML</span>
        </div>
        <div>
          <b className="text-main block mb-2">Social media</b>
          <div className="mb-3 grid w-fit grid-cols-3 gap-2">
            {socials.map((s) => (
              <a key={s.name} href={s.url} target={s.external ? "_blank" : undefined} rel={s.external ? "noreferrer" : undefined} aria-label={s.name}
                className="w-9 h-9 rounded-full grid place-items-center border border-line hover:border-ac text-main"><s.icon /></a>
            ))}
          </div>
          <a className="btn" href="#contact" onClick={(event) => { event.preventDefault(); window.portfolioScrollTo?.(document.getElementById("contact")); }}>Let's Connect</a>
        </div>
      </Container>
      <div className="border-t border-line text-xs text-mu">
        <Container className="flex flex-wrap justify-between gap-2 py-4">
          <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
          <span>Built with React</span>
        </Container>
      </div>
    </footer>
  );
}
