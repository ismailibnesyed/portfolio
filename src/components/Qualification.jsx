import { useState } from "react";
import { education, experience } from "../data/data";
import Container from "./Container";
import Title from "./Title";

export default function Qualification() {
  const [tab, setTab] = useState("Education");
  const list = tab === "Education" ? education : experience;
  return (
    <section id="qualification" className="section">
      <Container>
        <Title title="Education" sub="My academic journey" />
        <div className="flex justify-center gap-2">
          {["Education", "Experience"].map((t) => (
            <button key={t} onClick={() => setTab(t)} className={`btn ${tab === t ? "" : "btn-o"}`}>{t}</button>
          ))}
        </div>
        <ol className="relative mx-auto mt-10 max-w-3xl space-y-5 before:absolute before:bottom-8 before:left-4 before:top-8 before:w-px before:bg-line sm:before:left-5">
          {list.map((item) => (
            <li key={item.title} className="relative pl-12 sm:pl-16">
              <span className="absolute left-2.75 top-6 z-10 h-3 w-3 rounded-full bg-ac ring-4 ring-(--bg-page) sm:left-3.75" />
              <article className="card flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ac">{item.date}</p>
                  <h3 className="mt-1 text-lg font-semibold text-main">{item.title}</h3>
                  <p className="mt-1 text-sm text-mu">{item.place}</p>
                </div>
                {item.gpa && <span className="w-fit rounded-full border border-ac/30 bg-ac/10 px-3 py-1 text-sm font-semibold text-ac">GPA: {item.gpa}</span>}
              </article>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
