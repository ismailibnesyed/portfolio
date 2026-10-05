import { useEffect, useState } from "react";
import { services } from "../data/data";
import Container from "./Container";
import Title from "./Title";

export default function Services() {
  const [open, setOpen] = useState(null); // kon service-er modal khola
  useEffect(() => {
    if (!open) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setOpen(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <section id="service" className="section">
      <Container>
        <Title title="Services" sub="What I offer" />
        <div className="grid md:grid-cols-2 gap-5">
          {services.map((s) => (
            <div key={s.title} className="card p-0! flex overflow-hidden">
              <div className="grid w-20 shrink-0 place-items-center overflow-hidden bg-linear-to-br from-blue-900 to-emerald-800 text-4xl sm:w-28">
                {s.image ? <img src={s.image} alt="" loading="lazy" className="h-full w-full object-cover" /> : <s.icon aria-hidden="true" />}
              </div>
              <div className="min-w-0 p-3 sm:p-4">
                <h3 className="font-semibold">{s.title}</h3>
                <p className="text-mu text-sm my-2">{s.desc}</p>
                <button className="text-ac text-sm" onClick={() => setOpen(s)}>View more →</button>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {open && (
        <div className="fixed inset-0 z-60 grid place-items-center bg-black/70 p-4" onClick={() => setOpen(null)}>
          <div role="dialog" aria-modal="true" aria-labelledby="service-dialog-title" className="card max-w-sm w-full" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between mb-3"><b id="service-dialog-title">{open.title}</b><button onClick={() => setOpen(null)} aria-label="Close service details">✕</button></div>
            <ul className="space-y-2 text-sm text-mu list-disc pl-5">{open.points.map((p) => <li key={p}>{p}</li>)}</ul>
          </div>
        </div>
      )}
    </section>
  );
}
