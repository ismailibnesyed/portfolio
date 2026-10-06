import { FiExternalLink, FiGithub } from "react-icons/fi";

export default function ProjectCard({ project, onView }) {
  const isProfileLink = project.github?.replace(/\/+$/, "") === "https://github.com/ismailibnesyed";

  return (
    <article className="card flex flex-col transition-transform duration-200 hover:-translate-y-1 hover:border-ac/50">
      {project.image
        ? <img src={project.image} alt={`${project.title} preview`} loading="lazy" decoding="async" width="900" height="386" className="mb-3 h-32 w-full rounded-xl object-cover" />
        : <div className={`mb-3 grid h-32 place-items-center rounded-xl text-lg font-bold bg-linear-to-br ${project.gradient || "from-indigo-500 to-sky-500"}`}>{project.title.split(" ")[0]}</div>}
      <b>{project.title}</b>
      <p className="my-2 flex-1 text-sm text-mu">{project.description || project.desc}</p>
      <div className="mb-4 flex flex-wrap gap-1">
        {(project.tags || []).map((tag) => <span key={tag} className="rounded-md bg-line px-2 py-0.5 text-[11px]">{tag}</span>)}
      </div>
      <div className="flex flex-wrap gap-2">
        <button type="button" className="btn" onClick={() => onView(project)}>View Project</button>
        {project.github && <a className="btn btn-o" href={project.github} target="_blank" rel="noreferrer"><FiGithub /> {isProfileLink ? "GitHub Profile" : "GitHub"}</a>}
        {project.live && <a className="btn" href={project.live} target="_blank" rel="noreferrer"><FiExternalLink /> Live Demo</a>}
        {project.apiDocs && <a className="btn btn-o" href={project.apiDocs} target="_blank" rel="noreferrer"><FiExternalLink /> API Docs</a>}
      </div>
    </article>
  );
}
