import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../../data/Projects";
import "./ProjectDetails.css";

function ProjectDetails() {
    const { slug } = useParams();
    const navigate = useNavigate();

    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return <h2>Project not found</h2>;
    }

    return (
        <section className="project-case">
            {/* LEFT PANEL */}
            <aside className="project-aside">
                <button className="back-btn" onClick={() => navigate(-1)}>
                    ← All Projects
                </button>

                <h1 className="project-title">{project.title}</h1>
                <p className="project-domain">{project.domain}</p>

                <div className="project-highlight">
                    Enterprise-grade system focused on scalability,
                    security, and real-world production reliability.
                </div>
            </aside>

            {/* RIGHT CONTENT */}
            <main className="project-content">
                <section className="content-block">
                    <h3>Overview</h3>
                    <p>{project.description}</p>
                </section>

                <section className="content-block">
                    <h3>What I Worked On</h3>
                    <ul className="bullet-list">
                        <li>Designed and implemented backend REST APIs</li>
                        <li>Worked on secure authentication & authorization</li>
                        <li>Improved performance and production stability</li>
                        <li>Collaborated with cross-functional teams</li>
                    </ul>
                </section>

                <section className="content-block">
                    <h3>Tech Stack</h3>
                    <div className="tech-timeline">
                        {project.techStack.map((tech, idx) => (
                            <span key={idx} className="tech-node">
                                {tech}
                            </span>
                        ))}
                    </div>
                </section>
            </main>
        </section>
    );
}

export default ProjectDetails;
