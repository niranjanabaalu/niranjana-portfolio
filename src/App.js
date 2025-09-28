import React, { useEffect, useState } from "react";
import profilePic from "./assets/Niranjana_B_Photo_goa.jpg";
import "./App.css"; // ✅ import external CSS

function App() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
  };

  const [visible, setVisible] = useState(false);
  const [hover, setHover] = useState(false);

  const skills = [
    { name: "C++", level: 60 },
    { name: "Python", level: 80 },
    { name: "HTML", level: 85 },
    { name: "CSS", level: 75 },
    { name: "JavaScript", level: 50 },
    { name: "React", level: 30 },
    { name: "Django", level: 40 },
    { name: "MySQL", level: 70 },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("skills");
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        {["About", "Skills", "Projects", "Contact"].map((item) => (
          <button
            key={item}
            className="nav-btn"
            onClick={() => scrollToSection(item.toLowerCase())}
          >
            {item}
          </button>
        ))}
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-text">
          <h1 className="name">Niranjana Balasubramanian</h1>
          <p className="typing" >
            Software Developer in the Making | Driven to Build & Learn
          </p>
          <div className="social-links">
            <a href="https://github.com/niranjanabaalu" className="link">
              GitHub
            </a>
            <a href="https://leetcode.com/u/Niranjana_B/" className="link">
              LeetCode
            </a>
            <a
              href="https://auth.geeksforgeeks.org/user/niranjanabalazglw"
              className="link"
            >
              GeeksforGeeks
            </a>
            <a
              href="https://linkedin.com/in/niranjana-balasubramanian-1ab0a4251"
              className="link"
            >
              LinkedIn
            </a>
            <a
  href={process.env.PUBLIC_URL + "/NIRANJANA_B_INTERNSHIP_RESUME.pdf"}
  target="_blank"
  rel="noopener noreferrer"
  className={hover ? "resume-btn hover" : "resume-btn"}
  onMouseEnter={() => setHover(true)}
  onMouseLeave={() => setHover(false)}
>
  Resume
</a>

          </div>
        </div>
        
        <div className="hero-image">
          <img src={profilePic} alt="profile" className="profile-pic" />
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="section">
        <h2 className="section-title">About Me</h2>
        <p className="text">
          I am currently pursuing my Master of Computer Applications (MCA) with
          a strong interest in web and software development. Skilled in Python,
          HTML, CSS, JavaScript, and Django, I enjoy building user-friendly
          applications and solving coding challenges. I’m a curious learner who
          is always exploring new technologies and looking for opportunities to
          apply my skills through real-world projects and internships. My goal
          is to grow as a developer while creating solutions that make an
          impact.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <h2 className="section-title">Skills</h2>
        <div className="skill-grid">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-box">
              <p className="skill-name">{skill.name}</p>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: visible ? `${skill.level}%` : "0%" }}
                >
                  <span className="progress-text">
                    {visible ? `${skill.level}%` : ""}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h2 className="section-title">Projects</h2>
        <div className="grid">
          <div className="project-card">
            <h3 className="project-title">Art Vault Auctions</h3>
            <p className="project-desc">
              Django-based online auction platform for art pieces with secure
              bidding and user authentication. Designed to make art auctions
              accessible and interactive.
            </p>
            <a
              href="https://github.com/niranjanabaalu/art-vault-auctions"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project Details On Github
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <h2 className="section-title">Contact</h2>
        <div className="contact-card">
          <p>
            Email:{" "}
            <a href="mailto:niranjanab005@gmail.com" className="contact-link">
              niranjanab005@gmail.com
            </a>
          </p>
          <p>Phone: +91 9345011575</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Niranjana Balasubramanian | Built with ❤️ using React</p>
      </footer>
    </div>
  );
}

export default App;
