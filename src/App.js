import React, { useEffect, useState, useRef } from 'react';
import profilePic from './assets/Portfolio_Photo1.jpeg';
import './App.css';

// Icon components
const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const LeetCodeIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 14l2 2 4-4"></path>
    <path d="M12 2a10 10 0 1 1-7.07 2.93A10 10 0 0 1 12 2"></path>
  </svg>
);

const CodeIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

const GeeksforGeeksIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/>
    <path d="M9 12l1.5 1.5L13.5 9"/>
  </svg>
);

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const cursorRef = useRef(null);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'projects', 'skills', 'internship', 'contact'];
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }

      const revealElements = document.querySelectorAll('.reveal');
      revealElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Custom cursor effect
  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animateCursor = () => {
      cursorX += (mouseX - cursorX) * 0.1;
      cursorY += (mouseY - cursorY) * 0.1;
      cursor.style.left = `${cursorX}px`;
      cursor.style.top = `${cursorY}px`;
      requestAnimationFrame(animateCursor);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animateCursor();

    const interactiveElements = document.querySelectorAll('a, button, .about-card, .skills-category, .project-case-study, .education-card, .internship-card');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.classList.add('hover');
      });
      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
      });
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="app-container">
      {/* Custom Cursor */}
      <div className="custom-cursor" ref={cursorRef}>
        <div className="cursor-dot"></div>
        <div className="cursor-ring"></div>
      </div>

      {/* Background Shapes */}
      <div className="bg-shapes">
        <div className="bg-shape-1"></div>
        <div className="bg-shape-2"></div>
      </div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="navbar-inner">
          <div className="brand" onClick={() => scrollToSection('home')}>NB</div>
          <div className="nav-links">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'education', label: 'Education' },
              { id: 'projects', label: 'Projects' },
              { id: 'skills', label: 'Skills' },
              { id: 'internship', label: 'Internship' },
              { id: 'contact', label: 'Contact' },
            ].map((item) => (
              <button
                key={item.id}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-inner">
            <div className="hero-left reveal">
              <h1 className="hero-title">
                Hi, I'm <span className="gradient-text">Niranjana</span>
              </h1>
              <h2 className="hero-subtitle">Full Stack Developer • Mobile App Developer • AI Enthusiast</h2>
              <p className="hero-description">
                Building responsive web applications using React, Django, Python, and MySQL while continuously improving problem-solving and development skills.
              </p>
              <div className="hero-cta">
                <a
                  href={process.env.PUBLIC_URL + '/NIRANJANA_B_INTERNSHIP_RESUME.pdf'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Download Resume
                </a>
                <button className="btn-secondary" onClick={() => scrollToSection('projects')}>
                  View Projects
                </button>
              </div>
              <div className="social-links">
                <a href="https://github.com/niranjanabaalu" className="social-link" title="GitHub" target="_blank" rel="noopener noreferrer">
                  <GitHubIcon />
                </a>
                <a href="https://linkedin.com/in/niranjana-balasubramanian-1ab0a4251" className="social-link" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <LinkedInIcon />
                </a>
                <a href="https://leetcode.com/u/Niranjana_B/" className="social-link" title="LeetCode" target="_blank" rel="noopener noreferrer">
                  <LeetCodeIcon />
                </a>
                <a href="https://www.codingame.com" className="social-link" title="CodinGame" target="_blank" rel="noopener noreferrer">
                  <CodeIcon />
                </a>
                <a href="https://auth.geeksforgeeks.org/user/niranjanabalazglw" className="social-link" title="GeeksforGeeks" target="_blank" rel="noopener noreferrer">
                  <GeeksforGeeksIcon />
                </a>
              </div>
            </div>
            <div className="hero-right reveal">
              <div className="profile-card">
                <div className="profile-image-wrapper">
                  <div className="profile-image-ring"></div>
                  <img src={profilePic} alt="Niranjana Balasubramanian" className="profile-pic" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">Get to know me better</p>
          </div>
          <div className="about-grid">
            <div className="about-card reveal">
              <div className="about-icon"><CodeIcon /></div>
              <h3 className="about-title">Who I Am</h3>
              <p className="about-text">
                A passionate Full Stack Developer currently pursuing my Master of Computer Applications (MCA). I love building web applications and solving complex problems.
              </p>
            </div>
            <div className="about-card reveal">
              <div className="about-icon"><CodeIcon /></div>
              <h3 className="about-title">What I Do</h3>
              <p className="about-text">
                I develop responsive web applications using React, Django, Python, and MySQL. I'm always eager to learn new technologies and improve my skills.
              </p>
            </div>
            <div className="about-card reveal">
              <div className="about-icon"><CodeIcon /></div>
              <h3 className="about-title">Career Goal</h3>
              <p className="about-text">
                To grow as a developer and create impactful solutions that make a difference. I'm actively seeking internship opportunities to apply my knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Education</h2>
            <p className="section-subtitle">My academic journey</p>
          </div>
          <div className="education-grid">
            <div className="education-card reveal">
              <div className="education-icon"><CodeIcon /></div>
              <h3 className="education-degree">Master of Computer Applications (MCA)</h3>
              <p className="education-college">University of Madras (Full Time)</p>
              <p className="education-year">2025 - 2027</p>
              <p className="education-details">Currently Pursuing</p>
            </div>
            <div className="education-card reveal">
              <div className="education-icon"><CodeIcon /></div>
              <h3 className="education-degree">Bachelor of Computer Applications (BCA)</h3>
              <p className="education-college">Ethiraj College for Women</p>
              <p className="education-year">2022 - 2025</p>
              <p className="education-details">Percentage: 85.82%</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Projects</h2>
            <p className="section-subtitle">Featured work</p>
          </div>
          
          {/* Art Vault Auctions */}
          <div className="project-case-study reveal">
            <div className="project-header">
              <h3 className="project-name">Art Vault Auctions</h3>
              <p className="project-tagline">Django-based online auction platform for art pieces</p>
              <div className="project-tech-stack">
                <span className="tech-badge">Django</span>
                <span className="tech-badge">Python</span>
                <span className="tech-badge">MySQL</span>
                <span className="tech-badge">HTML/CSS</span>
              </div>
            </div>
            <div className="project-content">
              <div className="project-sections">
                <div className="project-section">
                  <h4 className="project-section-title">Problem</h4>
                  <p className="project-section-text">
                    Art enthusiasts needed an accessible platform to participate in art auctions from anywhere, with secure bidding and authentication.
                  </p>
                </div>
                <div className="project-section">
                  <h4 className="project-section-title">Solution</h4>
                  <p className="project-section-text">
                    Built a complete auction platform using Django that allows users to browse art pieces, place bids, and manage their accounts securely.
                  </p>
                </div>
                <div className="project-section">
                  <h4 className="project-section-title">Challenges</h4>
                  <p className="project-section-text">
                    Implemented real-time bidding functionality, secure user authentication, and proper database management for auction items.
                  </p>
                </div>
              </div>
              <div className="project-sections">
                <div className="project-section">
                  <h4 className="project-section-title">Key Features</h4>
                  <div className="project-features">
                    <div className="feature-item">User Authentication</div>
                    <div className="feature-item">Secure Bidding</div>
                    <div className="feature-item">Art Listings</div>
                    <div className="feature-item">User Profiles</div>
                  </div>
                </div>
                <div className="project-section">
                  <h4 className="project-section-title">Outcome</h4>
                  <p className="project-section-text">
                    Successfully created an interactive platform that makes art auctions accessible to a wider audience, with a clean and intuitive interface.
                  </p>
                </div>
              </div>
            </div>
            <div className="project-actions">
              <a
                href="https://github.com/niranjanabaalu/art-vault-auctions"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                View on GitHub
              </a>
            </div>
          </div>

          {/* Face Recognition Attendance System */}
          <div className="project-case-study reveal">
            <div className="project-header">
              <h3 className="project-name">Face Recognition Attendance System</h3>
              <p className="project-tagline">Automated student attendance tracking using facial recognition (Team Project)</p>
              <div className="project-tech-stack">
                <span className="tech-badge">Django</span>
                <span className="tech-badge">Python</span>
                <span className="tech-badge">OpenCV</span>
                <span className="tech-badge">Face Recognition</span>
                <span className="tech-badge">SQLite</span>
                <span className="tech-badge">REST Framework</span>
              </div>
            </div>
            <div className="project-content">
              <div className="project-sections">
                <div className="project-section">
                  <h4 className="project-section-title">Problem</h4>
                  <p className="project-section-text">
                    Replaced manual attendance taking in classroom settings with an automated system using facial recognition.
                  </p>
                </div>
                <div className="project-section">
                  <h4 className="project-section-title">Solution</h4>
                  <p className="project-section-text">
                    Built a Django-based web application that uses webcam and face recognition to identify students and record attendance automatically during scheduled class periods.
                  </p>
                </div>
                <div className="project-section">
                  <h4 className="project-section-title">My Contribution</h4>
                  <p className="project-section-text">
                    Team project - contributed to Django app structure, models, face recognition attendance flow, and management commands.
                  </p>
                </div>
              </div>
              <div className="project-sections">
                <div className="project-section">
                  <h4 className="project-section-title">Key Features</h4>
                  <div className="project-features">
                    <div className="feature-item">User Registration & Login</div>
                    <div className="feature-item">Student Management with Photos</div>
                    <div className="feature-item">Subject & Timetable Management</div>
                    <div className="feature-item">Automated Face Encoding</div>
                    <div className="feature-item">Webcam-based Attendance</div>
                    <div className="feature-item">Attendance Reports</div>
                  </div>
                </div>
                <div className="project-section">
                  <h4 className="project-section-title">Challenges Solved</h4>
                  <p className="project-section-text">
                    Integrated OpenCV for real-time face detection, optimized encoding storage, built timetable-driven attendance logic, and prevented duplicate entries.
                  </p>
                </div>
              </div>
            </div>
            <div className="project-actions">
              <a
                href="https://github.com/niranjanabaalu"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                View on GitHub
              </a>
            </div>
          </div>

          {/* Cultural Etiquette Advisor AI */}
          <div className="project-case-study reveal">
            <div className="project-header">
              <h3 className="project-name">Cultural Etiquette Advisor AI</h3>
              <p className="project-tagline">AI-powered cultural advice with database + LLM architecture</p>
              <div className="project-tech-stack">
                <span className="tech-badge">Django</span>
                <span className="tech-badge">Python</span>
                <span className="tech-badge">NVIDIA API</span>
                <span className="tech-badge">Llama 3.1</span>
                <span className="tech-badge">spaCy</span>
                <span className="tech-badge">SQLite</span>
              </div>
            </div>
            <div className="project-content">
              <div className="project-sections">
                <div className="project-section">
                  <h4 className="project-section-title">Problem</h4>
                  <p className="project-section-text">
                    Users traveling or doing business internationally faced scattered info, context-insensitive advice, and no personalization.
                  </p>
                </div>
                <div className="project-section">
                  <h4 className="project-section-title">Solution</h4>
                  <p className="project-section-text">
                    Built a hybrid database + LLM system that combines 80+ countries of cultural data with Llama 3.1 for intelligent, context-aware advice.
                  </p>
                </div>
                <div className="project-section">
                  <h4 className="project-section-title">Challenges Solved</h4>
                  <p className="project-section-text">
                    Location detection accuracy, API reliability with exponential backoff, LLM context relevance, and multi-turn conversation memory.
                  </p>
                </div>
              </div>
              <div className="project-sections">
                <div className="project-section">
                  <h4 className="project-section-title">Key Features</h4>
                  <div className="project-features">
                    <div className="feature-item">Contextual AI Chat</div>
                    <div className="feature-item">Auto Location Detection</div>
                    <div className="feature-item">Persistent Chat History</div>
                    <div className="feature-item">Multi-User Support</div>
                    <div className="feature-item">API Monitoring</div>
                    <div className="feature-item">Intent Detection</div>
                  </div>
                </div>
                <div className="project-section">
                  <h4 className="project-section-title">Future Enhancements</h4>
                  <p className="project-section-text">
                    Gemini fallback activation, better NLP with fuzzy matching, frontend improvements, and containerization for cloud deployment.
                  </p>
                </div>
              </div>
            </div>
            <div className="project-actions">
              <a
                href="https://github.com/niranjanabaalu/cultural-etiquette-advisor-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Skills</h2>
            <p className="section-subtitle">Technologies I work with</p>
          </div>
          <div className="skills-categories">
            <div className="skills-category reveal">
              <h3 className="category-title">Frontend</h3>
              <div className="skills-list">
                <span className="skill-tag">HTML</span>
                <span className="skill-tag">CSS</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">React</span>
              </div>
            </div>
            <div className="skills-category reveal">
              <h3 className="category-title">Backend</h3>
              <div className="skills-list">
                <span className="skill-tag">Python</span>
                <span className="skill-tag">Django</span>
              </div>
            </div>
            <div className="skills-category reveal">
              <h3 className="category-title">Database</h3>
              <div className="skills-list">
                <span className="skill-tag">MySQL</span>
              </div>
            </div>
            <div className="skills-category reveal">
              <h3 className="category-title">Tools</h3>
              <div className="skills-list">
                <span className="skill-tag">Git</span>
                <span className="skill-tag">GitHub</span>
                <span className="skill-tag">VS Code</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internship Section */}
      <section id="internship" className="section">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Internship</h2>
            <p className="section-subtitle">Professional experience</p>
          </div>
          <div className="internship-card reveal">
            <div className="internship-icon"><CodeIcon /></div>
            <h3 className="internship-company">Devazo Software Solutions Pvt. Ltd.</h3>
            <h4 className="internship-role">Application Developer Intern</h4>
            <p className="internship-duration">May 2026 – June 2026 (45 Days)</p>
            <div className="internship-highlights">
              <h5>Key Contributions:</h5>
              <ul>
                <li>Flutter UI Development</li>
                <li>REST API Integration</li>
                <li>Laravel Backend Integration</li>
                <li>Order Management Module</li>
                <li>Dashboard Improvements</li>
                <li>Business Workflow Implementation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Let's Connect</h2>
            <p className="section-subtitle">Get in touch</p>
          </div>
          <div className="contact-wrapper">
            <div className="contact-info-grid reveal">
              <a href="mailto:niranjanab005@gmail.com" className="contact-info-card">
                <div className="contact-icon"><CodeIcon /></div>
                <div>
                  <h4 className="contact-details-title">Email</h4>
                  <p className="contact-details-value">niranjanab005@gmail.com</p>
                </div>
              </a>
              <a href="tel:+919345011575" className="contact-info-card">
                <div className="contact-icon"><CodeIcon /></div>
                <div>
                  <h4 className="contact-details-title">Phone</h4>
                  <p className="contact-details-value">+91 9345011575</p>
                </div>
              </a>
              <div className="contact-info-card">
                <div className="contact-icon"><CodeIcon /></div>
                <div>
                  <h4 className="contact-details-title">Location</h4>
                  <p className="contact-details-value">Chennai, India</p>
                </div>
              </div>
            </div>
            <div className="contact-socials reveal">
              <div className="social-links">
                <a href="https://github.com/niranjanabaalu" className="social-link" title="GitHub" target="_blank" rel="noopener noreferrer">
                  <GitHubIcon />
                </a>
                <a href="https://linkedin.com/in/niranjana-balasubramanian-1ab0a4251" className="social-link" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <LinkedInIcon />
                </a>
                <a href="https://leetcode.com/u/Niranjana_B/" className="social-link" title="LeetCode" target="_blank" rel="noopener noreferrer">
                  <LeetCodeIcon />
                </a>
                <a href="https://www.codingame.com" className="social-link" title="CodinGame" target="_blank" rel="noopener noreferrer">
                  <CodeIcon />
                </a>
                <a href="https://auth.geeksforgeeks.org/user/niranjanabalazglw" className="social-link" title="GeeksforGeeks" target="_blank" rel="noopener noreferrer">
                  <GeeksforGeeksIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div>
              <h3 className="footer-brand-name">Niranjana Balasubramanian</h3>
              <p className="footer-brand-desc">Full Stack Developer</p>
            </div>
            <div>
              <h4 className="footer-section-title">Quick Links</h4>
              <ul className="footer-links-list">
                {['Home', 'About', 'Education', 'Projects', 'Skills', 'Internship', 'Contact'].map((item) => (
                  <li key={item} className="footer-link-item">
                    <button className="footer-link" onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}>
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="footer-section-title">Connect</h4>
              <ul className="footer-links-list">
                <li className="footer-link-item">
                  <a href="mailto:niranjanab005@gmail.com" className="footer-link">Email Me</a>
                </li>
                <li className="footer-link-item">
                  <a href={process.env.PUBLIC_URL + '/NIRANJANA_B_INTERNSHIP_RESUME.pdf'} target="_blank" rel="noopener noreferrer" className="footer-link">Resume</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="footer-copyright">© 2026 Niranjana Balasubramanian. All rights reserved.</p>
            <button className="back-to-top" onClick={() => scrollToSection('home')}>
              ↑
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
