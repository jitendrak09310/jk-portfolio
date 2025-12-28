import "./BlogLearnings.css";

function BlogLearnings() {
    return (
        <section className="grimoire">
            <header className="grimoire-header">
                <h1>Blogs & Learnings</h1>
                <p>
                    Engineering stories whispered by production systems,
                    learned under pressure, logs, and late-night deployments.
                </p>
            </header>

            {/* BLOGS */}
            <div className="chapter">
                <h2>📜 Engineering Chronicles</h2>

                <article className="spell-card">
                    <h3>Designing Scalable Loyalty Systems for Banking</h3>
                    <span className="sigil">Banking · Backend Architecture</span>

                    <p>
                        The system had a rule: cashback points must never lie.
                        Under high concurrency, even a single duplicated reward
                        could break trust.
                    </p>

                    <p>
                        Idempotent APIs, transactional boundaries, and async
                        event processing became the spells that kept the system stable
                        while traffic surged.
                    </p>

                    <blockquote>
                        “In financial systems, correctness matters more than speed.”
                    </blockquote>
                </article>

                <article className="spell-card">
                    <h3>Microservices That Fail in Silence</h3>
                    <span className="sigil">Insurance · Distributed Systems</span>

                    <p>
                        A single slow service once brought the entire system
                        to its knees — without throwing a single exception.
                    </p>

                    <p>
                        Correlation IDs, deep logs, and tracing exposed the invisible
                        bottlenecks hiding between services.
                    </p>

                    <blockquote>
                        “If you can’t observe it, you can’t fix it.”
                    </blockquote>
                </article>

                <article className="spell-card">
                    <h3>The Curse of Software Licensing</h3>
                    <span className="sigil">SaaS · Security & Compliance</span>

                    <p>
                        Licenses expire. Servers go offline. Timezones betray you.
                        Enforcement must be strict — yet invisible.
                    </p>

                    <p>
                        The real challenge wasn’t validation, but designing trust
                        without punishing legitimate users.
                    </p>

                    <blockquote>
                        “Security should be felt only when it’s missing.”
                    </blockquote>
                </article>
            </div>

            {/* LEARNINGS */}
            <div className="chapter">
                <h2>🧠 Lessons Etched in Memory</h2>

                <ul className="runes">
                    <li>Production bugs are the best teachers.</li>
                    <li>Logs tell the truth when people can’t.</li>
                    <li>Databases remember every bad decision.</li>
                    <li>Simple systems survive longer than clever ones.</li>
                    <li>Observability is a form of foresight.</li>
                </ul>
            </div>
        </section>
    );
}

export default BlogLearnings;
