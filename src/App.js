import React, { useEffect, useState } from "react";
import profilePic from "./assets/Niranjana_B_Photo_goa.jpg";
import "./App.css"; // ✅ import external CSS

function App() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
  };

  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [error, setError] = useState("");

  // Handle form input change
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
  };

  // Handle form submission with mailto fallback
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Validate form
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError("Please fill in all fields");
      setLoading(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address");
      setLoading(false);
      return;
    }

    try {
      // Create mailto link as primary method
      const subject = `Portfolio Contact from ${formData.name}`;
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;
      const mailtoLink = `mailto:niranjanab005@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Try using mailto (works best on desktop with email client)
      window.location.href = mailtoLink;
      
      // Show success message
      setMessageSent(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setMessageSent(false), 4000);
      
      // Fallback: Also show alternative contact info
      setTimeout(() => {
        setError("💡 Tip: Your email client should open. If not, please email me directly at niranjanab005@gmail.com");
      }, 500);
    } catch (err) {
      setError("Please email me directly at niranjanab005@gmail.com with your message");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

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
        <div className="nav-left">
          <span className="brand">NB</span>
        </div>
        <div className="nav-right">
          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <button
              key={item}
              className="nav-btn"
              onClick={() => scrollToSection(item.toLowerCase())}
            >
              {item}
            </button>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-inner">
          <div className="hero-left">
            <h1 className="name">Niranjana<br />Balasubramanian</h1>
            <p className="tagline">
              Software Developer in the Making | Driven to Build & Learn
            </p>
            <div className="cta-row">
              <a
                href={process.env.PUBLIC_URL + "/NIRANJANA_B_INTERNSHIP_RESUME.pdf"}
                target="_blank"
                rel="noopener noreferrer"
                className="primary-cta"
              >
                Download Resume
              </a>
              <a href="#projects" className="secondary-cta">
                View Work
              </a>
            </div>
            <div className="social-links">
              <a href="https://github.com/niranjanabaalu" className="link" title="GitHub">
                GitHub
              </a>
              <a href="https://leetcode.com/u/Niranjana_B/" className="link" title="LeetCode">
                LeetCode
              </a>
              <a
                href="https://auth.geeksforgeeks.org/user/niranjanabalazglw"
                className="link"
                title="GeeksforGeeks"
              >
                GFG
              </a>
              <a
                href="https://linkedin.com/in/niranjana-balasubramanian-1ab0a4251"
                className="link"
                title="LinkedIn"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-card">
              <img src={profilePic} alt="Niranjana Balasubramanian" className="profile-pic" />
            </div>
          </div>
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
        <h2 className="section-title">Get In Touch</h2>
        <p className="text" style={{ marginBottom: "50px" }}>
          Have a question or want to collaborate? I'd love to hear from you. Reach out through the form below or contact me directly.
        </p>

        <div className="contact-container">
          {/* Contact Info */}
          <div className="contact-info-section">
            <div className="info-card">
              <div className="info-icon">✉️</div>
              <h3 className="info-title">Email</h3>
              <a href="mailto:niranjanab005@gmail.com" className="info-value" title="Send email">
                niranjanab005@gmail.com
              </a>
            </div>
            <div className="info-card">
              <div className="info-icon">📱</div>
              <h3 className="info-title">Phone</h3>
              <a href="tel:+919345011575" className="info-value" title="Call">
                +91 9345011575
              </a>
            </div>
            <div className="info-card">
              <div className="info-icon">📍</div>
              <h3 className="info-title">Location</h3>
              <p className="info-value">India</p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="contact-form" onSubmit={handleFormSubmit}>
            <h3 className="form-title">Send Me a Message</h3>
            
            <div className="form-group">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                placeholder="John Doe"
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                placeholder="john@example.com"
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleFormChange}
                placeholder="Write your message here..."
                className="form-textarea"
                rows="6"
                required
              />
            </div>

            {error && <div className="form-alert form-error">{error}</div>}
            {messageSent && <div className="form-alert form-success">✓ Thank you! Your message will be sent to my email.</div>}

            <button type="submit" className="form-button" disabled={loading}>
              {loading ? "Processing..." : "Send Message"}
            </button>
          </form>
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
