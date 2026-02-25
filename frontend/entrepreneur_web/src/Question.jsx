import { useState, useEffect, useRef } from "react";

const QUESTIONS = [
  {
    text: "What is React?",
    options: ["Library", "Framework", "Language", "Database"],
  },
  {
    text: "Which hook manages local state in React?",
    options: ["useEffect", "useContext", "useState", "useRef"],
  },
  {
    text: "What does JSX stand for?",
    options: ["JavaScript XML", "Java Syntax Extension", "JSON XML", "JavaScript Extra"],
  },
  {
    text: "Which company maintains React?",
    options: ["Google", "Microsoft", "Meta", "Apple"],
  },
  {
    text: "What is the virtual DOM used for?",
    options: ["Styling", "Routing", "Performance optimisation", "State management"],
  },
];

const INTERVAL = 10; // seconds

// Circular SVG countdown loader
function CountdownLoader({ seconds, total }) {
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const progress = seconds / total;
  const dashoffset = circumference * (1 - progress);

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
      <svg width="52" height="52" viewBox="0 0 52 52">
        {/* track */}
        <circle
          cx="26" cy="26" r={radius}
          fill="none"
          stroke="#e2e8f0"
          strokeWidth="4"
        />
        {/* progress arc */}
        <circle
          cx="26" cy="26" r={radius}
          fill="none"
          stroke="#4f46e5"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={dashoffset}
          transform="rotate(-90 26 26)"
          style={{ transition: "stroke-dashoffset 1s linear" }}
        />
        <text
          x="26" y="26"
          textAnchor="middle"
          dominantBaseline="central"
          fontSize="13"
          fontWeight="600"
          fill="#1a202c"
        >
          {seconds}s
        </text>
      </svg>
      <span style={{ fontSize: "0.85rem", color: "#6b7280" }}>Next question in {seconds}s</span>
    </div>
  );
}

function App() {
  const [qIndex, setQIndex] = useState(0);
  const [selected, setSelected] = useState("");
  const [timeLeft, setTimeLeft] = useState(INTERVAL);
  const timerRef = useRef(null);

  // Advance to next question
  const nextQuestion = () => {
    setQIndex((prev) => (prev + 1) % QUESTIONS.length);
    setSelected("");
    setTimeLeft(INTERVAL);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          nextQuestion();
          return INTERVAL;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, []);

  const question = QUESTIONS[qIndex];

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      backgroundColor: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    }}>
      <div style={{
        background: "#ffffff",
        border: "1.5px solid #d1d9e0",
        borderRadius: "12px",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08)",
        padding: "2rem 2.5rem",
        minWidth: "320px",
        maxWidth: "480px",
        width: "100%",
      }}>

        {/* Countdown loader */}
        <CountdownLoader seconds={timeLeft} total={INTERVAL} />

        {/* Question number badge */}
        <p style={{ fontSize: "0.8rem", color: "#6b7280", marginBottom: "0.4rem" }}>
          Question {qIndex + 1} / {QUESTIONS.length}
        </p>

        <h2 style={{ marginBottom: "1.25rem", color: "#1a202c" }}>{question.text}</h2>

        {question.options.map((option, index) => (
          <div key={index} style={{ marginBottom: "0.75rem" }}>
            <input
              type="radio"
              name="answer"
              value={option}
              checked={selected === option}
              onChange={() => setSelected(option)}
              style={{ marginRight: "0.5rem", accentColor: "#4f46e5" }}
            />
            <label style={{ fontSize: "1rem", color: "#374151" }}>{option}</label>
          </div>
        ))}

        <h3 style={{ marginTop: "1.25rem", color: "#4f46e5" }}>Selected: {selected}</h3>
      </div>
    </div>
  );
}

export default App;