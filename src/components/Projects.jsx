import { useEffect, useState } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { projects } from "../data/data";
import Container from "./Container";
import ProjectCard from "./ProjectCard";
import Title from "./Title";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const displayedProjects = projects;

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
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{displayedProjects.map((project, index) => <ProjectCard key={`${project.id || project.title}-${index}`} project={project} onView={setSelectedProject} />)}</div>
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
