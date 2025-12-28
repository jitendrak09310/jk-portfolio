import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import userIcon from "../../assets/images/icons/user.png";
import linkedinIcon from "../../assets/images/icons/linkedin.png";
import githubIcon from "../../assets/images/icons/github.png";
import emailIcon from "../../assets/images/icons/gmail.png";


function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">

                <div className="navbar-brand">
                    <img
                        src={userIcon}
                        alt="Profile"
                        className="navbar-avatar"
                    />
                    <span className="navbar-name">Jitendra</span>
                </div>

                <div className="navbar-links">
                    <NavLink to="/" className="nav-link">Home</NavLink>
                    <NavLink to="/projects" className="nav-link">Projects</NavLink>
                    <NavLink to="/resume" className="nav-link">Resume</NavLink>
                    <NavLink to="/bloglearnings" className="nav-link">Blog / Learnings</NavLink>
                    <NavLink to="/contact" className="nav-link">Contact</NavLink>

                </div>

                <div className="navbar-social">
                    <a href="https://www.linkedin.com/in/jitendra-74061a239" target="_blank"><img src={linkedinIcon} alt="LinkedIn" className="social-icon" /></a>
                    <a href="https://github.com/jitendrak09310" target="_blank"><img src={githubIcon} alt="GitHub" className="social-icon" /></a>
                    <a href="mailto:Jitendrak09310@gmail.com" target="_blank"><img src={emailIcon} alt="Email" className="social-icon" /></a>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;
