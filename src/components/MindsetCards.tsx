import React, { useState } from "react";

type Mindset = {
  title: string;
  preview: string;
  content: string;
};

const mindsetData: Mindset[] = [
  {
    title: "I’m still learning",
    preview: "Learning never stops.",
    content: `I believe learning is a continuous process. I don’t see gaps in knowledge as limitations, but as opportunities to grow. Every project, concept, and challenge teaches me something new. Whether it’s understanding a new technology, improving an existing solution, or refining my approach, I’m always open to learning and evolving. This mindset helps me adapt, improve, and move forward with confidence.`,
  },
  {
    title: "Jack of all trades, master of none",
    preview: "Versatility over limitation.",
    content: `I work across multiple technologies and domains rather than limiting myself to a single area. I have explored frontend, backend, problem-solving, academic projects, and practical implementations. While I may not claim complete mastery in one specific field yet, I have the ability to learn quickly, connect ideas, and make things work. This versatility allows me to adapt to different requirements and build solutions by learning what is needed and applying it effectively.`,
  },
  {
    title: "Sincerity at its peak!",
    preview: "Genuine effort, no shortcuts.",
    content: `I approach my work with honesty and dedication. Every project, assignment, or idea I work on receives genuine effort and attention to detail. I focus on understanding concepts rather than blindly copying, and I strive to present my work in a clear and meaningful way. My sincerity reflects in how I learn, build, and improve — ensuring that whatever I create truly represents my effort and intent.`,
  },
];

const MindsetCards: React.FC = () => {
  const [active, setActive] = useState<Mindset | null>(null);

  return (
    <>
      <section className="container section">
        <h3>What Drives Me</h3>
        <p className="section-subtitle">
          Not just what I build — but how I think.
        </p>

        <div className="mindset-grid">
          {mindsetData.map((item, idx) => (
            <div
              key={idx}
              className="mindset-card"
              onClick={() => setActive(item)}
            >
              <h4>{item.title}</h4>
              <p>{item.preview}</p>
              <span className="read-more">Read more →</span>
            </div>
          ))}
        </div>
      </section>

      {active && (
        <div className="modal-overlay" onClick={() => setActive(null)}>
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >
            <h3>{active.title}</h3>
            <p>{active.content}</p>
            <button className="btn ghost" onClick={() => setActive(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default MindsetCards;
