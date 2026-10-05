import { useState } from "react";
import { profile, heroStats } from "../data/data";
import Container from "./Container";

export default function Hero() {
  const [photoFailed, setPhotoFailed] = useState(false);
  return (
    <section id="home" className="section hero-section min-h-screen">
      <Container>
        <div className="grid min-w-0 items-center gap-8 md:grid-cols-2 md:gap-10">
          <div className="order-1 min-w-0">
            <span className="inline-block text-xs border border-ac/40 text-ac rounded-full px-3 py-1 mb-4">● Available for work</span>
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">Hi, I'm {profile.name} — {profile.role}</h1>
            <p className="text-mu mt-4 max-w-md">{profile.intro}</p>
            <div className="my-6 flex flex-wrap gap-x-5 gap-y-3 sm:gap-x-8">
              {heroStats.map(([n, l]) => (
                <div key={l}>
                  <b className="text-2xl block">{n}</b>
                  <span className="text-xs text-mu">{l}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                className="btn"
                href={`https://drive.google.com/uc?export=download&id=${new URL(profile.resumeUrl).pathname.match(/\/d\/([^/]+)/)?.[1] || ""}`}
                download
              >
                Download Resume
              </a>
              <a className="btn btn-o" href={`mailto:${profile.email}`}>Contact Me</a>
            </div>
          </div>

          <div className="order-2 mx-auto w-full max-w-72 sm:max-w-80 md:max-w-md">
            <div className="hero-portrait relative aspect-square overflow-hidden rounded-full border border-line">
              <div aria-hidden="true" className="pointer-events-none absolute inset-[5%] z-10 rounded-full border border-ac2/25" />
              <div aria-hidden="true" className="pointer-events-none absolute inset-[12%] z-10 rounded-full border border-ac/15" />
              {profile.photo && !photoFailed ? (
                <img src={profile.photo} alt={profile.name} onError={() => setPhotoFailed(true)} className="absolute inset-0 z-0 h-full w-full rounded-full object-contain object-bottom" />
              ) : (
                <div role="img" aria-label={`${profile.name} profile image placeholder`} className="absolute inset-0 z-0 flex flex-col items-center justify-center text-center">
                  <div className="grid h-36 w-36 place-items-center rounded-full border border-ac/40 bg-ac/10 text-5xl font-bold text-ac shadow-[0_0_90px_rgba(34,197,94,0.18)] sm:h-44 sm:w-44 sm:text-6xl">
                    {profile.name.split(" ").map((part) => part[0]).join("")}
                  </div>
                  <p className="mt-6 text-sm font-medium text-main">{profile.role}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
