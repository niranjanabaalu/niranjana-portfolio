
import React, { useEffect, useState } from "react";
import profilePic from "./assets/Niranjana_B_Photo_goa.jpg";



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
    <div style={styles.container}>
      {/* Navbar */}
      <nav style={styles.navbar}>
        {["About", "Skills", "Projects", "Contact"].map((item) => (
          <button
            key={item}
            style={styles.navBtn}
            onClick={() => scrollToSection(item.toLowerCase())}
          >
            {item}
          </button>
        ))}
      </nav>

      {/* Hero Section */}
      <header style={styles.hero}>
        <div style={styles.heroText}>
          <h1 style={styles.name}>Niranjana Balasubramanian</h1>
          <p style={styles.tagline}>Software Developer in the Making | Driven to Build & Learn</p>
          <div style={styles.socialLinks}>
            <a href="https://github.com/niranjanabaalu" style={styles.link}>
              GitHub
            </a>
            <a href="https://leetcode.com/u/Niranjana_B/" style={styles.link}>
              LeetCode
            </a>
            <a href="https://auth.geeksforgeeks.org/user/niranjanabalazglw" style={styles.link}>
              GeeksforGeeks
            </a>
            <a href="https://linkedin.com/in/niranjana-balasubramanian-1ab0a4251" style={styles.link}>
              LinkedIn
            </a>
            <a
  href="/NIRANJANA_B_INTERNSHIP_RESUME.pdf"
  target="_blank"
  rel="noopener noreferrer"
  style={hover ? styles.resumeBtnHover : styles.resumeBtn}
  onMouseEnter={() => setHover(true)}
  onMouseLeave={() => setHover(false)}
>
  Resume
</a>
          </div>
        </div>
        <div style={styles.heroImage}>
          <img src={profilePic}
          alt="profile" 
          style={styles.profilePic} />

        </div>
      </header>

      {/* About Section */}
      <section id="about" style={styles.section}>
        <h2 style={styles.sectionTitle}>About Me</h2>
        <p style={styles.text}>
          I am currently pursuing my Master of Computer Applications (MCA) with a strong interest in web and software development. Skilled in Python, HTML, CSS, JavaScript, and Django, I enjoy building user-friendly applications and solving coding challenges. I’m a curious learner who is always exploring new technologies and looking for opportunities to apply my skills through real-world projects and internships. My goal is to grow as a developer while creating solutions that make an impact.
        </p>
      </section>

     {/* Skills Section */}
<section id="skills" style={styles.section}>
  <h2 style={styles.sectionTitle}>Skills</h2>
  <div style={styles.skillGrid}>
    {skills.map((skill) => (
      <div key={skill.name} style={styles.skillBox}>
        <p style={styles.skillName}>{skill.name}</p>
        <div style={styles.progressBar}>
          <div
            style={{
              ...styles.progressFill,
              width: visible ? `${skill.level}%` : "0%",
            }}
          >
            <span style={styles.progressText}>
              {visible ? `${skill.level}%` : ""}
            </span>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>




{/* Projects Section */}
<section id="projects" style={styles.section}>
  <h2 style={styles.sectionTitle}>Projects</h2>
  <div style={styles.grid}>
    <div 
      style={styles.projectCard} 
      onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.projectCardHover)}
      onMouseLeave={(e) => Object.assign(e.currentTarget.style, styles.projectCard)}
    >
      <h3 style={styles.projectTitle}>Art Vault Auctions</h3>
      <p style={styles.projectDesc}>
        Django-based online auction platform for art pieces with secure bidding 
        and user authentication. Designed to make art auctions accessible and 
        interactive.
      </p>
      <a 
        href="https://github.com/niranjanabaalu/art-vault-auctions" 
        target="_blank" 
        rel="noopener noreferrer" 
        style={styles.projectLink}
        onMouseEnter={(e) => Object.assign(e.target.style, styles.projectLinkHover)}
        onMouseLeave={(e) => Object.assign(e.target.style, styles.projectLink)}
      >
        View Project Details On Github
      </a>
    </div>
  </div>
</section>

      {/* Contact Section */}
<section id="contact" style={styles.section}>
  <h2 style={styles.sectionTitle}>Contact</h2>
  <div style={styles.contactCard}>
    <p>
      Email:{" "}
      <a href="mailto:niranjanab005@gmail.com" style={styles.contactLink}>
        niranjanab005@gmail.com
      </a>
    </p>
    <p>Phone: +91 9345011575</p>
  </div>
</section>


      {/* Footer */}
      <footer style={styles.footer}>
        <p>© 2025 Niranjana Balasubramanian | Built with ❤️ using React</p>
      </footer>
    </div>
  );
}
// Styles
const styles = {
  container: {
    fontFamily: "Poppins, sans-serif",
    margin: 0,
    padding: 0,
    scrollBehavior: "smooth",
    backgroundColor: "#f4faff", // light background with blue tint
    color: "#1a1a1a",
  },

  // Navbar
  navbar: {
    position: "fixed",
    top: 0,
    width: "100%",
    background: "#0a2540", // deep navy
    boxShadow: "0 2px 8px rgba(0,0,0,0.4)",
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    padding: "15px",
    zIndex: 1000,
  },
  navBtn: {
    background: "transparent",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#fff",
    transition: "0.3s",
  },

  // Hero Section
  hero: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "100px 10%",
    minHeight: "90vh",
    background: "linear-gradient(135deg, #0f4c75, #3282b8)", // blue gradient
    color: "#fff",
    flexwrap: "wrap",
  },
  heroText: { maxWidth: "50%", flex: "1 1 300px", },
  name: { fontSize: "42px", marginBottom: "10px", fontWeight: "700" },
  tagline: { fontSize: "20px", marginBottom: "20px", color: "#e0f7ff" },
  socialLinks: { display: "flex", gap: "15px", marginTop: "15px" },
  link: {
    textDecoration: "none",
    color: "#fff",
    background: "rgba(255,255,255,0.15)",
    padding: "8px 12px",
    borderRadius: "6px",
    transition: "0.3s",
  },
  linkHover: { background: "#fff", color: "#0a2540" },
  heroImage: { 
    maxWidth: "40%",
    flex: "1 1 250px", 
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
   },
  profilePic: {
    width: "100%",
    maxWidth: "250px",
    height: "auto",
    borderRadius: "50%",
    boxShadow: "0 4px 15px rgba(0,0,0,0.5)",
    objectFit: "cover",
  },

  // Section
  section: { padding: "80px 10%", textAlign: "center" },
  sectionTitle: { fontSize: "28px", marginBottom: "20px", color: "#0f4c75" },
  text: { fontSize: "18px", color: "#333", maxWidth: "700px", margin: "auto" },

  contactCard: {
    background: "#3282b8",
    padding: "25px",
    borderRadius: "12px",
    maxWidth: "420px",
    margin: "20px auto",
    boxShadow: "0 6px 14px rgba(0,0,0,0.2)",
    textAlign: "left",
    color: "#fff",
  },

  // Project Cards
  projectCard: {
    background: "#bbe1fa", // soft light blue
    color: "#0a2540",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 6px 14px rgba(0,0,0,0.2)",
    transition: "transform 0.3s, box-shadow 0.3s",
    textAlign: "left",
  },
  projectCardHover: {
    transform: "translateY(-8px)",
    boxShadow: "0 10px 20px rgba(0,0,0,0.4)",
  },
  projectTitle: {
    fontSize: "20px",
    fontWeight: "700",
    marginBottom: "10px",
    color: "#0f4c75", // navy highlight
  },
  projectDesc: {
    fontSize: "16px",
    lineHeight: "1.6",
    marginBottom: "15px",
    color: "#1a1a1a",
  },
  projectLink: {
    display: "inline-block",
    padding: "10px 18px",
    borderRadius: "6px",
    background: "linear-gradient(90deg, #00b4d8, #48cae4)",
    color: "#fff",
    fontWeight: "600",
    textDecoration: "none",
    transition: "0.3s",
  },
  projectLinkHover: {
    background: "linear-gradient(90deg, #48cae4, #00b4d8)",
    transform: "scale(1.05)",
  },

  contactLink: {
    color: "#00b4d8",
    textDecoration: "none",
    fontWeight: "600",
  },
  contactLinkHover: {
    color: "#48cae4",
    textDecoration: "underline",
  },

  // Skills Section
  skillContainer: {
    maxWidth: "700px",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "25px",
  },
  skillGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "25px 40px",
    maxWidth: "800px",
    margin: "auto",
  },
  skillBox: { textAlign: "left" },
  skillName: { fontSize: "16px", fontWeight: "600", marginBottom: "6px" },
  progressBar: {
    background: "#ddd",
    borderRadius: "10px",
    overflow: "hidden",
    height: "12px",
    boxShadow: "inset 0 2px 6px rgba(0,0,0,0.2)",
  },
  progressFill: {
    height: "100%",
    background: "linear-gradient(90deg, #00b4d8, #48cae4)", // cyan-teal
    borderRadius: "10px",
    transition: "width 1.5s ease-in-out",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingRight: "6px",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "11px",
  },
  progressText: { fontSize: "11px" },

  // Resume Button
  resumeBtn: {
    textDecoration: "none",
    color: "#fff",
    background: "#0f4c75",
    padding: "10px 16px",
    borderRadius: "6px",
    transition: "0.3s",
    fontWeight: "500",
    display: "inline-block",
  },
  resumeBtnHover: {
    textDecoration: "none",
    color: "#fff",
    background: "#3282b8",
    padding: "10px 16px",
    borderRadius: "6px",
    transition: "0.3s",
    fontWeight: "500",
    display: "inline-block",
  },

  // Projects Section Grid
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    marginTop: "30px",
  },
  card: {
    background: "#eaf4f9",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
    transition: "transform 0.3s",
    color: "#0a2540",
  },

  // Footer
  footer: {
    background: "#0a2540",
    color: "#bbd9f7",
    padding: "20px",
    textAlign: "center",
    marginTop: "50px",
  },
};

export default App;
