import { technologies } from "../data/data";
import Container from "./Container";
import Title from "./Title";

export default function Technologies() {
  const half = Math.ceil(technologies.length / 2);
  const rows = [technologies.slice(0, half), technologies.slice(half)];

  return (
    <section id="tech" className="section overflow-hidden">
      <Container>
        <Title title="Technologies" sub="My Tech Stack" />
        <div className="space-y-3 overflow-hidden">
          {rows.map((row, i) => (
            <div key={i} className="overflow-hidden">
              <div className={`marquee ${i ? "rev" : ""}`}>
                {[...row, ...row, ...row, ...row].map((t, k) => <span key={k} className="chip">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
