
import {
  ArrowUpRight,
  ExternalLink,
  Github,
  BarChart3,
  Code2,
  FileText
} from "lucide-react";

import SectionTitle from "./SectionTitle";
import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section className="section" id="projects">
      <SectionTitle
        eyebrow="Selected work"
        title="Featured Projects"
        description="A selection of analytics dashboards and development projects."
      />

      <div className="project-grid">
        {projects.map((project, index) => (
          <article
            className={`project-card reveal ${project.featured ? "featured" : ""}`}
            key={project.title}
          >
            <div className="project-top">
              <div className="project-icon">
                {project.category === "Power BI" ? (
                  <BarChart3 size={21} />
                ) : (
                  <Code2 size={21} />
                )}
              </div>

              <span className="project-category">
                {project.category}
              </span>
            </div>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="tag-list">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <div className="project-links">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={15} />
                  Source code
                  <ArrowUpRight size={13} />
                </a>
              )}

              {project.pdf && (
                <a
                  href={project.pdf}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FileText size={15} />
                  View Dashboard PDF
                  <ArrowUpRight size={13} />
                </a>
              )}

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ExternalLink size={15} />
                  Live demo
                  <ArrowUpRight size={13} />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
