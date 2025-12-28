import { useNavigate } from "react-router-dom";
import { projects } from "../../data/Projects";
import "./Projects.css";

function Projects() {
  const navigate = useNavigate();

  return (
    <section className="projects-section">
      <h2 className="projects-heading">Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            className="project-card fade-in"
            style={{ animationDelay: `${index * 0.15}s` }}
            key={project.slug}
          >
            <span className="project-accent" />

            <h3 className="project-title">{project.title}</h3>
            <p className="project-domain">{project.domain}</p>
            <p className="project-desc">{project.description}</p>

            <button
              className="project-btn"
              onClick={() => navigate(`/projects/${project.slug}`)}
            >
              View Details →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

