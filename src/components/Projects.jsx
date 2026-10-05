import { useEffect, useState } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { projects } from "../data/data";
import Container from "./Container";
import Title from "./Title";

function ProjectCard({ p, onView }) {
  const isProfileLink = p.github?.replace(/\/+$/, "") === "https://github.com/ismailibnesyed";

  return (
    <article className="card flex flex-col transition-transform duration-200 hover:-translate-y-1 hover:border-ac/50">
      {p.image
        ? <img src={p.image} alt={`${p.title} preview`} loading="lazy" className="h-32 w-full object-cover rounded-xl mb-3" />
        : <div className={`h-32 rounded-xl mb-3 grid place-items-center font-bold text-lg bg-linear-to-br ${p.gradient || "from-indigo-500 to-sky-500"}`}>{p.title.split(" ")[0]}</div>}
      <b>{p.title}</b>
      <p className="text-mu text-sm my-2 flex-1">{p.description || p.desc}</p>
      <div className="flex flex-wrap gap-1 mb-4">
        {(p.tags || []).map((t) => <span key={t} className="text-[11px] bg-line rounded-md px-2 py-0.5">{t}</span>)}
      </div>
      <div className="flex flex-wrap gap-2">
        <button type="button" className="btn" onClick={() => onView(p)}>View Project</button>
        {p.github && <a className="btn btn-o" href={p.github} target="_blank" rel="noreferrer"><FiGithub /> {isProfileLink ? "GitHub Profile" : "GitHub"}</a>}
        {p.live && <a className="btn" href={p.live} target="_blank" rel="noreferrer"><FiExternalLink /> Live Demo</a>}
        {p.apiDocs && <a className="btn btn-o" href={p.apiDocs} target="_blank" rel="noreferrer"><FiExternalLink /> API Docs</a>}
      </div>
    </article>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const displayedProjects = projects.length > 0 && projects.length < 6
    ? Array.from({ length: 6 }, (_, index) => projects[index % projects.length])
    : projects;

  useEffect(() => {
    if (!selectedProject) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [selectedProject]);

  return (
    <section id="project" className="section">
      <Container>
        <Title title="Projects" sub="Recent projects" />
        {displayedProjects.length ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">{displayedProjects.map((p, index) => <ProjectCard key={`${p.id || p.title}-${index}`} p={p} onView={setSelectedProject} />)}</div>
        ) : (
          <p className="text-center text-mu text-sm">Projects will appear here soon.</p>
        )}
      </Container>
      {selectedProject && (
        <div className="fixed inset-0 z-60 grid place-items-center bg-black/70 p-4" onClick={() => setSelectedProject(null)}>
          <div role="dialog" aria-modal="true" aria-labelledby="project-dialog-title" className="card w-full max-w-lg" onClick={(event) => event.stopPropagation()}>
            <div className="mb-4 flex items-start justify-between gap-4">
              <h3 id="project-dialog-title" className="text-lg font-semibold text-main">{selectedProject.title}</h3>
              <button type="button" onClick={() => setSelectedProject(null)} aria-label="Close project details" className="text-mu hover:text-main">✕</button>
            </div>
            <p className="text-sm leading-relaxed text-mu">{selectedProject.description || selectedProject.desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {(selectedProject.tags || []).map((tag) => <span key={tag} className="chip">{tag}</span>)}
            </div>
            {(selectedProject.github || selectedProject.live || selectedProject.apiDocs) && (
              <div className="mt-5 flex flex-wrap gap-3">
                {selectedProject.github && <a className="btn btn-o" href={selectedProject.github} target="_blank" rel="noreferrer"><FiGithub /> GitHub</a>}
                {selectedProject.live && <a className="btn" href={selectedProject.live} target="_blank" rel="noreferrer"><FiExternalLink /> Live Demo</a>}
                {selectedProject.apiDocs && <a className="btn btn-o" href={selectedProject.apiDocs} target="_blank" rel="noreferrer"><FiExternalLink /> API Docs</a>}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
