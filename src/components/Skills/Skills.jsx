import skills from "../../data/skills";
import "./Skills.css";

function Skills() {
    return (
        <section className="skills-section">
            <h2 className="skills-heading">Technical Skills</h2>

            <div className="skills-grid">
                {skills.map((skill, index) => {
                    const Icon = skill.icon;

                    // category → class mapping
                    const categoryClass =
                        skill.title.toLowerCase().includes("backend")
                            ? "backend"
                            : skill.title.toLowerCase().includes("frontend")
                                ? "frontend"
                                : skill.title.toLowerCase().includes("database")
                                    ? "database"
                                    : skill.title.toLowerCase().includes("devops")
                                        ? "devops"
                                        : skill.title.toLowerCase().includes("tools")
                                            ? "tools"
                                            : "cloud";

                    return (
                        <div className={`skill-card ${categoryClass}`} key={index}>
                            <div className="skill-icon">
                                <Icon />
                            </div>

                            <h3 className="skill-title">{skill.title}</h3>

                            <ul className="skill-list">
                                {skill.items.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Skills;
