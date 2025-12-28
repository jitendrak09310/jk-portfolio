import "../Resume/Resume.css";

function Resume() {
    return (
        <section id="resume" className="resume">
            <div className="resume-container">

                {/* HEADER */}
                <div className="resume-header">
                    <h2>Resume</h2>

                    <a
                        href="/pdf/Jitendra_Resume.pdf"
                        download
                        className="resume-download"
                    >
                        Download Resume
                    </a>
                </div>

                {/* PDF VIEWER */}
                <div className="resume-viewer">
                    <iframe
                        src="/pdf/Jitendra_Resume.pdf"
                        title="Jitendra Resume"
                        frameBorder="0"
                    />
                </div>

            </div>
        </section>
    );
}

export default Resume;
