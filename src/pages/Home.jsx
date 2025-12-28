import Skills from "../components/Skills/Skills";
import "../styles/Home.css";
import profileImg from "../assets/images/profile/profile.jpg";

function Home() {
  return (
    <>
      {/* PROFILE SECTION */}
      <section className="profile">
        <div className="profile-container">

          {/* LEFT SIDE – TEXT */}
          <div className="profile-left">
            <h1 className="profile-title">
              Hi, I am <br />
              <span>Jitendra</span>
            </h1>

            <h2 className="profile-role">Software Engineer</h2>

            <p className="profile-description">
              Java Backend Engineer with hands-on experience in Spring Boot,
              Microservices, REST APIs, and React-based UI development.
            </p>

            <a href="/resume" className="profile-button">
              View Resume
            </a>

          </div>

          {/* RIGHT SIDE – IMAGE */}
          <div className="profile-right">
            <img src={profileImg} alt="Jitendra profile" />
          </div>

        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="profile-skills">
        <div className="app-container">
          <Skills />
        </div>
      </section>
    </>
  );
}

export default Home;
