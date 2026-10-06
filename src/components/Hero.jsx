import { useState } from "react";
import { FaPython, FaReact } from "react-icons/fa";
import { SiFastapi, SiPostgresql } from "react-icons/si";

import { profile, heroStats } from "../data/data";
import Container from "./Container";

export default function Hero() {
  const [photoFailed, setPhotoFailed] = useState(false);

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-(--bg-page) text-main"
    >
      {/* ================= BACKGROUND GLOW ================= */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-ac/10 blur-[100px]" />

      <div className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-ac2/10 blur-[110px]" />

      {/* ================= DECORATIVE RINGS ================= */}
      <div className="pointer-events-none absolute left-0 top-0 h-28 w-28 opacity-30">
        <div className="absolute -left-8 -top-8 h-28 w-28 rounded-full border border-ac2/30" />

        <div className="absolute -left-12 -top-12 h-36 w-36 rounded-full border border-ac2/20" />

        <div className="absolute -left-16 -top-16 h-44 w-44 rounded-full border border-ac2/10" />
      </div>

      <Container>
        <div className="grid min-h-[calc(100svh-70px)] items-center gap-2 py-8 sm:gap-8 sm:py-10 md:grid-cols-2 md:gap-6 lg:gap-10">

          {/* =====================================================
              LEFT SIDE
          ====================================================== */}
          <div className="relative z-10 order-1 min-w-0 pt-4 sm:pt-8 lg:pt-12">

            {/* ================= AVAILABLE BADGE ================= */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-ac/30 bg-ac/5 px-3 py-1.5 text-xs text-ac backdrop-blur-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-ac" />

              Available for work
            </div>

            {/* ================= HEADING ================= */}
            <h1 className="max-w-2xl text-[clamp(2.25rem,9vw,3.375rem)] font-bold leading-[1.05] tracking-tight">
              Hi, I'm

              <span className="mt-2 block bg-(--hero-gradient) bg-clip-text text-transparent">
                {profile.name}
              </span>
            </h1>

            {/* ================= ROLE ================= */}
            <h2 className="mt-4 text-base font-semibold text-main sm:text-xl">
              Python Developer

              <span className="mx-2 text-ac">
                |
              </span>

              Full Stack Developer
            </h2>

            {/* ================= INTRO ================= */}
            <p className="mt-4 max-w-xl text-sm leading-6 text-mu sm:text-base">
              {profile.intro}
            </p>

            {/* ================= STATS ================= */}
            <div className="my-6 flex flex-wrap gap-x-8 gap-y-4">
              {heroStats.map(([number, label]) => (
                <div key={label}>
                  <b className="block text-xl font-bold text-main sm:text-2xl">
                    {number}
                  </b>

                  <span className="text-xs text-mu sm:text-sm">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* ================= BUTTONS ================= */}
            <div className="flex flex-wrap gap-3">

              {/* Download Resume */}
              <a
                className="group inline-flex min-h-11 items-center gap-2 rounded-xl bg-ac px-5 py-2.5 text-sm font-semibold text-active shadow-lg shadow-ac/20 transition duration-300 hover:-translate-y-1 hover:brightness-110"
                href={profile.resumeUrl}
                download="Resume of Ismail.pdf"
              >
                <span>
                  Download Resume
                </span>

                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14"
                  />
                </svg>
              </a>

              {/* Contact */}
              <a
                className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-line bg-card px-5 py-2.5 text-sm font-semibold text-main backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-ac hover:text-ac"
                href={`mailto:${profile.email}`}
              >
                Contact Me

                <span className="text-base">
                  →
                </span>
              </a>

            </div>
          </div>

          {/* =====================================================
              RIGHT SIDE
          ====================================================== */}
          <div className="relative order-2 flex min-h-[290px] items-center justify-center px-0 pb-2 sm:min-h-[450px] sm:px-0 sm:pb-0">

            {/* ================= OUTER RING ================= */}
            <div className="absolute h-[285px] w-[285px] rounded-full border border-ac2/20 sm:h-[420px] sm:w-[420px] lg:h-[480px] lg:w-[480px]" />

            {/* ================= MIDDLE RING ================= */}
            <div className="absolute h-[250px] w-[250px] rounded-full border border-ac/20 sm:h-[370px] sm:w-[370px] lg:h-[425px] lg:w-[425px]" />

            {/* ================= INNER GLOW ================= */}
            <div className="absolute h-[225px] w-[225px] rounded-full bg-ac/10 blur-2xl sm:h-[340px] sm:w-[340px]" />

            {/* =================================================
                PORTRAIT
            ================================================== */}
            <div className="relative z-10 h-[240px] w-[240px] p-2 sm:h-[360px] sm:w-[360px] sm:p-3 lg:h-[410px] lg:w-[410px]">

              {/* Gradient Border */}
              <div className="absolute inset-0 rounded-full bg-(--hero-gradient) p-[4px]">

                {/* Circular Image Container */}
                <div className="hero-image-shell relative h-full w-full overflow-hidden rounded-full bg-shell">

                  {/* Inner Glow */}
                  <div className="pointer-events-none absolute inset-0 z-10 rounded-full bg-gradient-to-br from-ac/10 via-ac2/5 to-transparent" />

                  {/* Profile Image */}
                  {profile.photo && !photoFailed ? (
                    <img
                      src={profile.photo}
                      alt={profile.name}
                      onError={() => setPhotoFailed(true)}
                      className="hero-photo absolute inset-0 z-0 h-full w-full object-cover object-top"
                    />
                  ) : (
                    <div className="absolute inset-0 z-20 flex items-center justify-center">
                      <div className="grid h-32 w-32 place-items-center rounded-full border border-ac/30 bg-ac/10 text-4xl font-bold text-ac">
                        {profile.name
                          .split(" ")
                          .map((part) => part[0])
                          .join("")}
                      </div>
                    </div>
                  )}

                  {/* Bottom Gradient */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-24 bg-gradient-to-t from-shell/70 to-transparent" />
                </div>
              </div>
            </div>

            {/* =================================================
                FLOATING TECH CARDS
            ================================================== */}

            {/* Python */}
            <div className="absolute left-[2%] top-[20%] z-30 grid h-14 w-14 place-items-center rounded-2xl border border-ac2/30 bg-card text-3xl text-ac2 shadow-xl backdrop-blur-md sm:left-[5%] sm:h-16 sm:w-16">
              <FaPython aria-label="Python" />
            </div>

            {/* Main logo */}
            <div className="absolute bottom-[18%] left-[1%] z-30 grid h-14 w-14 place-items-center rounded-2xl border border-ac/30 bg-card p-2 shadow-xl backdrop-blur-md sm:bottom-[20%] sm:left-[2%] sm:h-16 sm:w-16">
              <img src="/images/favicon.png" alt="Ismail Hossain logo" className="h-full w-full object-contain" />
            </div>

            {/* Code Card */}
            <div className="absolute right-[0%] top-[5%] z-30 hidden w-40 rotate-2 rounded-xl border border-line bg-card p-3 shadow-2xl backdrop-blur-md sm:block lg:w-44">

              <div className="mb-2 flex items-center gap-2">
                <span className="text-sm text-ac">
                  &lt;/&gt;
                </span>

                <span className="text-[10px] text-mu">
                  backend.py
                </span>
              </div>

              <div className="space-y-1.5">
                <div className="h-1 w-12 rounded bg-ac/70" />

                <div className="h-1 w-20 rounded bg-ac2/50" />

                <div className="h-1 w-16 rounded bg-ac/60" />

                <div className="h-1 w-24 rounded bg-slate-600" />
              </div>
            </div>

            {/* React */}
            <div className="absolute right-[0%] top-[44%] z-30 grid h-14 w-14 place-items-center rounded-2xl border border-ac/30 bg-card text-3xl text-ac shadow-xl backdrop-blur-md sm:right-[2%] sm:h-16 sm:w-16">
              <FaReact aria-label="React" />
            </div>

            {/* FastAPI */}
            <div className="absolute bottom-[10%] left-[7%] z-30 grid h-14 w-14 place-items-center rounded-2xl border border-ac/30 bg-card text-2xl text-ac shadow-xl backdrop-blur-md sm:h-16 sm:w-16">
              <SiFastapi aria-label="FastAPI" />
            </div>

            {/* PostgreSQL */}
            <div className="absolute bottom-[5%] right-[8%] z-30 grid h-14 w-14 place-items-center rounded-2xl border border-ac2/30 bg-card text-2xl text-ac2 shadow-xl backdrop-blur-md sm:h-16 sm:w-16">
              <SiPostgresql aria-label="PostgreSQL" />
            </div>

            {/* ================= ORBIT DOTS ================= */}

            <span className="absolute left-[18%] top-[48%] z-20 h-2.5 w-2.5 rounded-full bg-ac shadow-lg shadow-ac/70" />

            <span className="absolute bottom-[14%] left-[40%] z-20 h-2.5 w-2.5 rounded-full bg-ac shadow-lg shadow-ac/70" />

            <span className="absolute right-[20%] top-[22%] z-20 h-2 w-2 rounded-full bg-ac2 shadow-lg shadow-ac2/70" />

          </div>
        </div>
      </Container>
    </section>
  );
}