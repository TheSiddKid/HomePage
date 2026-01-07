import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/index.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ChatGPTJourney from "../components/ChatGPTJourney";

/* =========================
   STEP 1: MINDSET DATA
========================= */
type Mindset = {
  title: string;
  preview: string;
  content: string;
};

const mindsetData: Mindset[] = [
  {
    title: "I’m still learning",
    preview: "Learning never stops.",
    content:
      "I believe learning is a continuous process. I don’t see gaps in knowledge as limitations, but as opportunities to grow. Every project, concept, and challenge teaches me something new. Whether it’s understanding a new technology, improving an existing solution, or refining my approach, I’m always open to learning and evolving. This mindset helps me adapt, improve, and move forward with confidence.",
  },
  {
    title: "Jack of all trades, master of none",
    preview: "Versatility over limitation.",
    content:
      "I work across multiple technologies and domains rather than limiting myself to a single area. I have explored frontend, backend, problem-solving, academic projects, and practical implementations. While I may not claim complete mastery in one specific field yet, I have the ability to learn quickly, connect ideas, and make things work. This versatility allows me to adapt to different requirements and build solutions by learning what is needed and applying it effectively.",
  },
  {
    title: "Sincerity at its peak!",
    preview: "Genuine effort, no shortcuts.",
    content:
      "I approach my work with honesty and dedication. Every project, assignment, or idea I work on receives genuine effort and attention to detail. I focus on understanding concepts rather than blindly copying, and I strive to present my work in a clear and meaningful way. My sincerity reflects in how I learn, build, and improve — ensuring that whatever I create truly represents my effort and intent.",
  },
];

const Home: React.FC = () => {
  /* =========================
     STEP 2: MODAL STATE
  ========================= */
  const [activeMindset, setActiveMindset] = useState<Mindset | null>(null);

  /* =========================
     THEME + ESC HANDLING
  ========================= */
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

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveMindset(null);
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
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
                <li><strong>Location:</strong> India</li>
                <li>
                  <strong>College:</strong> Anjuman-I-Islam’s M. H. Saboo Siddik
                  College of Engineering
                </li>
                <li><strong>Workflows:</strong> VS Code, Chrome, Turbo C++</li>
              </ul>
            </div>
          </div>
        </section>

        {/* =========================
           MINDSET CARDS
        ========================= */}
        <section className="container section">
          <h3>What Drives Me</h3>
          <p className="section-subtitle">
            Not just what I build — but how I think.
          </p>

          <div className="mindset-grid">
            {mindsetData.map((item, index) => (
              <motion.div
                key={index}
                className="mindset-card"
                onClick={() => setActiveMindset(item)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.03 }}
              >
                <h4>{item.title}</h4>
                <p>{item.preview}</p>
                <span className="read-more">Read more →</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="container section">
          <h3>About</h3>
          <p>
            I'm studying Computer Engineering under Mumbai University and
            working on academic and mini-projects including DeepFake Detection,
            Health Chatbots, AES-based secure systems, and web application clones.
          </p>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="container section">
          <h3>Selected Projects</h3>
          <div className="grid">
            <article className="card">
              <h4>DeepFake Detection</h4>
              <p>Detects deepfakes in images & videos.</p>
            </article>
            <article className="card">
              <h4>Health Chatbot</h4>
              <p>React + Gemini API based medical assistant.</p>
            </article>
            <article className="card">
              <h4>AES Encryption + Chatbot</h4>
              <p>Secure messaging with chatbot interface.</p>
            </article>
          </div>
        </section>

        {/* =========================
           CHATGPT JOURNEY (NEW)
        ========================= */}
        <ChatGPTJourney />

        {/* CONTACT */}
        <section id="contact" className="container section">
          <h3>Contact</h3>
          <p><strong>Email:</strong> thesiddkid@gmail.com</p>
          <p><strong>Location:</strong> India</p>
        </section>

        {/* =========================
           MODAL (Animated)
        ========================= */}
        <AnimatePresence>
          {activeMindset && (
            <motion.div
              className="modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveMindset(null)}
            >
              <motion.div
                className="modal"
                initial={{ y: 30, opacity: 0, scale: 0.95 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 20, opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                onClick={(e) => e.stopPropagation()}
              >
                <h3>{activeMindset.title}</h3>
                <p>{activeMindset.content}</p>
                <button
                  className="btn ghost"
                  onClick={() => setActiveMindset(null)}
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </>
  );
};

export default Home;
