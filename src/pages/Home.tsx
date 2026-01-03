import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import '../styles/index.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  useEffect(() => {
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear().toString();

    const themeBtn = document.getElementById('themeToggle');
    const root = document.documentElement;

    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        root.classList.toggle('light-mode');
        if (root.classList.contains('light-mode')) {
          localStorage.setItem('theme', 'light');
        } else {
          localStorage.removeItem('theme');
        }
      });
    }

    if (localStorage.getItem('theme') === 'light') {
      root.classList.add('light-mode');
    }

    const profile = {
      name: "Junaid Siddiqui",
      location: "India",
      college: "Anjuman-I-Islam’s M. H. Saboo Siddik College of Engineering",
      projects: [
        "DeepFake Detection (images & video)",
        "Health Chatbot (React + Gemini API)",
        "AES symmetric encryption + Chatbot",
        "E-Way Bill UI clone (HTML/CSS/JS + PHP + MySQL)",
        "Computer Graphics experiments (Bezier, Bresenham, Mid-point algorithms)"
      ],
      skills: ["Java", "C", "C++", "Python", "JavaScript", "PHP", "SQL", "HTML", "CSS", "React"],
      tools: ["VS Code", "Chrome", "Turbo C++", "MySQL", "Git"],
      notes: [
        "Works on academic experiments: stacks (linked-list), BST, circular queue, line clipping algorithms",
        "Preparing presentations, PPT & viva for projects",
        "Creating small GUI apps & games (Java, Snake game enhancements)"
      ],
      devices: { laptop: "Lenovo", phone: "Samsung Guru" },
    };

    const copyBtn = document.getElementById('copyProfile');
    const downloadBtn = document.getElementById('downloadBtn');

    if (copyBtn) {
      copyBtn.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(JSON.stringify(profile, null, 2));
          copyBtn.textContent = 'Copied!';
          setTimeout(() => (copyBtn.textContent = 'Copy Summary JSON'), 1500);
        } catch (err) {
          copyBtn.textContent = 'Copy failed';
        }
      });
    }

    if (downloadBtn) {
      downloadBtn.addEventListener('click', () => {
        const blob = new Blob([JSON.stringify(profile, null, 2)], {
          type: 'application/json',
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'junaid_profile.json';
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      });
    }

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'Tab') root.classList.add('show-focus');
    };
    document.body.addEventListener('keyup', handleKeyUp);

    return () => {
      document.body.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <>
      <Header />

      <main>
        <section id="hero" className="hero">
          <div className="container hero-inner">
            <div>
              <h2>Computer Engineering Student • Developer</h2>
              <p>
                Hi — I'm <strong>Junaid Siddiqui</strong>. I build projects (DeepFake
                detection, health chatbots, encryption tools), learn new tech, and
                prepare presentations & experiments for college courses at Mumbai
                University.
              </p>
              <div className="cta-row">
                <Link to="/projects" className="btn">View Projects</Link>


                <a className="btn ghost" href="#contact">Get in touch</a>
              </div>
            </div>
            <div className="hero-meta">
              <ul>
                <li><strong>Location:</strong> India</li>
                <li><strong>College:</strong> Anjuman-I-Islam’s M. H. Saboo Siddik College of Engineering</li>
                <li><strong>Devices:</strong> Lenovo laptop (dev)</li>
                <li><strong>Workflows:</strong> VS Code, Chrome, Turbo C++ (legacy)</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="about" className="container section">
          <h3>About</h3>
          <p>
            I'm studying Computer Engineering (Mumbai University curriculum) and working on academic and mini-projects: DeepFake Detection (images & video), a Health Chatbot integrated with the Gemini API, AES-based symmetric encryption with a medical-help chatbot, recreating web apps (E-Way Bill site clone with PHP + MySQL), and projects for Computer Graphics.
          </p>
          <p>
            I practice Java, C/C++, Python, JavaScript/React, HTML/CSS and have used MySQL, PHP and various tools to build projects and presentations.
          </p>
        </section>

        <section id="projects" className="container section">
          <h3>Selected Projects</h3>
          <div className="grid">
<article className="card">
  <h4>Projects Subdomain</h4>
  <p>
    Check out all my projects online:{" "}
    <a
      href="https://projects.thesiddkid.com"
      className="btn"
      target="_blank"
      rel="noopener noreferrer"
    >
      View Projects
    </a>
  </p>
</article>

            <article className="card">
              <h4>DeepFake Detection</h4>
              <p>Detects deepfakes in images & videos with model + GUI.</p>
            </article>

            <article className="card">
              <h4>Health Chatbot (React + Gemini API)</h4>
              <p>Medical assistant chatbot with symptom follow-up, hospital suggestions.</p>
            </article>

            <article className="card">
              <h4>Symmetric Encryption (AES) + Medical Chatbot</h4>
              <p>Combines AES secure messaging with chatbot interface for patient help.</p>
            </article>

            <article className="card">
              <h4>E-Way Bill Website Clone</h4>
              <p>Recreated Indian govt. portal UI with backend + PDF ideas.</p>
            </article>

            <article className="card">
              <h4>Computer Graphics Experiments</h4>
              <p>Bezier curves, Bresenham, ellipse/circle drawing, line clipping.</p>
            </article>
          </div>
        </section>

        <section id="skills" className="container section">
          <h3>Skills & Tools</h3>
          <ul className="skills">
            <li>Languages: Java, C, C++, Python, JavaScript, PHP, SQL</li>
            <li>Frontend: HTML, CSS, React (projects & presentations)</li>
            <li>ML & CV: DeepFake detection workflows, dataset handling</li>
            <li>Tools: VS Code, Chrome, Turbo C++ (education), Git (version control experiments)</li>
          </ul>
        </section>

        <section id="profile" className="container section">
          <h3>Full profile (notes from past work & study)</h3>
          <ul>
            <li>Student under Mumbai University curriculum; prepares experiments and reports for Computer Graphics, Data Structures, Algorithms, Microprocessors.</li>
            <li>Worked on: Stack using singly linked-list, Tower of Hanoi, BST, Circular queue, Mid-point & Bresenham algorithms, Line clipping algorithms.</li>
            <li>Project topics: Hospital Management with Git, Smart Attendance, DeepFake Detection, AES Chatbot.</li>
            <li>Made Java GUIs, improved Snake game, edited surprise videos (family use).</li>
            <li>Knows Tailwind-like styling, MySQL + PDF gen.</li>
          </ul>
        </section>

        <section id="contact" className="container section">
          <h3>Contact</h3>
          <div className="contact-grid">
            <div>
              <p><strong>Email:</strong> <span id="email">thesiddkid@gmail.com</span></p>
              <p><strong>Location:</strong> India</p>
            </div>
            <div>
              <button id="copyProfile" className="btn">Copy Summary JSON</button>
              <button id="downloadBtn" className="btn ghost">Download Profile JSON</button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;
