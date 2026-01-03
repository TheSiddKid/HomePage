import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";

// Import your screenshots
import DeepfakeImg from "../assets/projects/deepfake.png";
import ChatbotImg from "../assets/projects/health-chatbot.png";
import EncryptionImg from "../assets/projects/aes-chatbot.png";
import EwayImg from "../assets/projects/eway-bill.png";
import GraphicsImg from "../assets/projects/graphics.png";

export default function Projects() {
  const projects = [
    {
      title: "DeepFake Detection",
      description: "AI-powered detection of deepfakes in images & video (dataset prep, modeling, and GUI).",
      imageSrc: DeepfakeImg,
      href: "https://projects.thesiddkid.com",
    },
    {
      title: "Health Chatbot (React + Gemini)",
      description: "Medical help chatbot using React and Google’s Gemini API for symptoms, follow-ups, and suggestions.",
      imageSrc: ChatbotImg,
      href: "https://projects.thesiddkid.com",
    },
    {
      title: "AES Encryption + Chatbot",
      description: "Symmetric AES encryption combined with a secure chatbot interface for handling medical data.",
      imageSrc: EncryptionImg,
      href: "https://projects.thesiddkid.com",
    },
    {
      title: "E-Way Bill Site Clone",
      description: "Recreation of India’s E-Way Bill site UI (HTML/CSS/JS) with PHP+MySQL backend and PDF dashboard ideas.",
      imageSrc: EwayImg,
      href: "https://projects.thesiddkid.com",
    },
    {
      title: "Computer Graphics Experiments",
      description: "Algorithms like Bezier curves, Bresenham line, Midpoint circle/ellipse, and line clipping (coursework demos).",
      imageSrc: GraphicsImg,
      href: "https://projects.thesiddkid.com",
    },
  ];

  return (
    <section className="py-16 bg-gray-900 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold text-white mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, index) => (
            <ProjectCard
              key={index}
              title={proj.title}
              description={proj.description}
              imageSrc={proj.imageSrc}
              href={proj.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
