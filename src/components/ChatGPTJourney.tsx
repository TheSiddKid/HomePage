import { motion } from "framer-motion";
import "../styles/ChatGPTJourney.css";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const ChatGPTJourney = () => {
  return (
    <section className="journey">

      {/* 1️⃣ QUOTE */}
      <motion.div
        className="journey-block"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <img src="/images/chatgpt-quote.png" alt="ChatGPT quote" />
        <div>
          <h3>The Beginning</h3>
          <p>
            A quiet evening with my code turned into something more.
            ChatGPT became a companion in thinking, building, and learning.
          </p>
        </div>
      </motion.div>

      {/* 2️⃣ ARCHETYPES */}
      <motion.div
        className="journey-block"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <img src="/images/chatgpt-archetypes.png" alt="Archetypes" />
        <div>
          <h3>Finding My Style</h3>
          <p>
            Exploring different archetypes helped me understand how I work best —
            balancing ideas, execution, and practical problem-solving.
          </p>
        </div>
      </motion.div>

      {/* 3️⃣ OPERATOR */}
      <motion.div
        className="journey-block"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <img src="/images/chatgpt-operator.png" alt="The Operator" />
        <div>
          <h3>The Operator</h3>
          <p>
            Execution-focused. I used ChatGPT as a precision tool to
            build, debug, and ship real-world projects efficiently.
          </p>
        </div>
      </motion.div>

      {/* 4️⃣ STILL LIFE */}
      <motion.div
        className="journey-block"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <img src="/images/chatgpt-still-life.png" alt="Building & Deploying" />
        <div>
          <h3>Building & Deploying</h3>
          <p>
            From writing React components to deploying on Vercel,
            ideas steadily transformed into working products.
          </p>
        </div>
      </motion.div>

      {/* 5️⃣ STATS */}
      <motion.div
        className="journey-block"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <img src="/images/chatgpt-stats.png" alt="ChatGPT stats" />
        <div>
          <h3>By the Numbers</h3>
          <p>
            Thousands of messages, hundreds of conversations,
            and countless iterations — all focused on learning and building.
          </p>
        </div>
      </motion.div>

      {/* 6️⃣ POEM */}
      <motion.div
        className="journey-block"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <img src="/images/chatgpt-poem.png" alt="Year in poetry" />
        <div>
          <h3>A Year in Reflection</h3>
          <p>
            From DeepFake detection to smooth React interfaces,
            this year was about growth, curiosity, and consistency.
          </p>
        </div>
      </motion.div>

    </section>
  );
};

export default ChatGPTJourney;
