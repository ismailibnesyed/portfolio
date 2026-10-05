import { useState } from "react";
import { skills, exploring } from "../data/data";
import Container from "./Container";
import Title from "./Title";

function Ring({ name, level }) {
  return (
    <div className="text-center text-sm">
      <div className="w-24 h-24 rounded-full grid place-items-center mx-auto mb-2"
        style={{ background: `conic-gradient(#22c55e ${level}%, #18223c 0)` }}>
        <div className="w-[76px] h-[76px] rounded-full bg-card grid place-items-center font-semibold">{level}%</div>
      </div>
      {name}
    </div>
  );
}

export default function Skills() {
  const tabs = [...Object.keys(skills), "Exploring AI/ML"];
  const [tab, setTab] = useState("Backend");

  return (
    <section id="skill" className="section">
      <Container>
        <Title title="Skills" sub="Technical level" />
        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          {tabs.map((t) => <button key={t} onClick={() => setTab(t)} className={`btn ${tab === t ? "" : "btn-o"}`}>{t}</button>)}
        </div>
        {skills[tab] ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {skills[tab].map(([n, l]) => <Ring key={n} name={n} level={l} />)}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-ac/50 p-8 text-center">
            <b>Exploring AI / ML</b>
            <p className="text-mu text-sm my-2">Currently learning — no skill level yet</p>
            <div className="flex gap-2 justify-center flex-wrap">{exploring.map((e) => <span key={e} className="chip">{e}</span>)}</div>
          </div>
        )}
      </Container>
    </section>
  );
}
