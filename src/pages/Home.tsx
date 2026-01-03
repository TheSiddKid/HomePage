import React, { useEffect } from "react";
import "../styles/index.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  useEffect(() => {
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear().toString();

    const themeBtn = document.getElementById("themeToggle");
    const root = document.documentElement;

    if (themeBtn) {
      themeBtn.addEventListener("click", () => {
        root.classList.toggle("light-mode");
        if (root.classList.contains("light-mode")) {
          localStorage.setItem("theme", "light");
        } else {
          localStorage.removeItem("theme");
        }
      });
    }

    if (localStorage.getItem("theme") === "light") {
      root.classList.add("light-mode");
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
      ],
      skills: [
        "Java",
        "C",
        "C++",
        "Python",
        "JavaScript",
        "PHP",
        "SQL",
        "HTML",
        "CSS",
        "React",
      ],
      tools: ["VS Code", "Chrome", "Turbo C++", "MySQL", "Git"],
      notes: ["Creating small GUI apps & games (Java, Snake game enhancements)"],
    };

    const copyBtn = document.getElementById("copyProfile");
    const downloadBtn = document.getElementById("downloadBtn");

    if (copyBtn) {
      copyBtn.addEventListener("click", async () => {
        try {
          await navigator.clipboard.writeText(
            JSON.stringify(profile, null, 2)
          );
          copyBtn.textContent = "Copied!";
          setTimeout(
            () => (copyBtn.textContent = "Copy Summary JSON"),
            1500
          );
        } catch {
          copyBtn.textContent = "Copy failed";
        }
      });
    }

    if (downloadBtn) {
      downloadBtn.addEventListener("click", () => {
        const blob = new Blob([JSON.stringify(profile, null, 2)], {
          type: "application/json",
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "junaid_profile.json";
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      });
    }

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === "Tab") root.classList.add("show-focus");
    };
    document.body.addEventListener("keyup", handleKeyUp);

    return () => {
      document.body.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <>
      <Header />

      <main>
        {/* HERO */}
        <section id="hero" className="hero">
          <div className="container hero-inner">
            <div>
              <h2>Computer Engineering Student • Developer</h2>
              <p>
                Hi — I'm <strong>Junaid Siddiqui</strong>. I build projects
                (DeepFake detection, health chatbots, encryption tools) and
                learn new tech at Mumbai University.
              </p>

              <div className="cta-row">
                <a
                  href="https://projects.thesiddkid.com"
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Projects
                </a>

                <a className="btn ghost" href="#contact">
                  Get in touch
                </a>
              </div>
            </div>

            <div className="hero-meta">
              <ul>
                <li>
                  <strong>Location:</strong> India
                </li>
                <li>
                  <strong>College:</strong> Anjuman-I-Islam’s M. H. Saboo Siddik
                  College of Engineering
                </li>
                <li>
                  <strong>Devices:</strong> Lenovo laptop (dev)
                </li>
                <li>
                  <strong>Workflows:</strong> VS Code, Chrome, Turbo C++ (legacy)
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="container section">
          <h3>About</h3>
          <p>
            I'm studying Computer Engineering (Mumbai University curriculum) and
            working on academic and mini-projects including DeepFake Detection,
            Health Chatbots, AES-based secure systems, and web application clones.
          </p>
          <p>
            I practice Java, C/C++, Python, JavaScript/React, HTML/CSS and use
            MySQL, PHP and modern dev tools to build projects and presentations.
          </p>
        </section>

        {/* PROJECTS */}
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
              <p>
                Medical assistant chatbot with symptom follow-up and hospital
                suggestions.
              </p>
            </article>

            <article className="card">
              <h4>Symmetric Encryption (AES) + Medical Chatbot</h4>
              <p>
                Combines AES secure messaging with a chatbot interface for
                patient help.
              </p>
            </article>

            <article className="card">
              <h4>E-Way Bill Website Clone</h4>
              <p>Recreated Indian govt. portal UI with backend concepts.</p>
            </article>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="container section">
          <h3>Skills & Tools</h3>
          <ul className="skills">
            <li>Languages: Java, C, C++, Python, JavaScript, PHP, SQL</li>
            <li>Frontend: HTML, CSS, React</li>
            <li>ML & CV: DeepFake detection workflows</li>
            <li>Tools: VS Code, Chrome, Turbo C++, Git</li>
          </ul>
        </section>

        {/* PROFILE */}
        <section id="profile" className="container section">
          <h3>Full profile</h3>
          <ul>
            <li>Student under Mumbai University curriculum.</li>
            <li>
              Project topics: Hospital Management, Smart Attendance, DeepFake
              Detection, AES Chatbot.
            </li>
            <li>Built Java GUIs and improved Snake game.</li>
            <li>Comfortable with Tailwind-like styling and MySQL + PDF gen.</li>
          </ul>
        </section>

        {/* CONTACT */}
        <section id="contact" className="container section">
          <h3>Contact</h3>
          <div className="contact-grid">
            <div>
              <p>
                <strong>Email:</strong>{" "}
                <span id="email">thesiddkid@gmail.com</span>
              </p>
              <p>
                <strong>Location:</strong> India
              </p>
            </div>
            <div>
              <button id="copyProfile" className="btn">
                Copy Summary JSON
              </button>
              <button id="downloadBtn" className="btn ghost">
                Download Profile JSON
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;
