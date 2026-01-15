// src/components/whatToEat/WhatToEatChat.jsx
import FoodTypePicker from "./FoodTypePicker";
import { Link } from "react-router-dom";

function Bubble({ role, children }) {
  const isUser = role === "user";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: isUser ? "flex-end" : "flex-start",
      }}
    >
      <div
        className="card"
        style={{
          padding: "var(--space-4)",
          maxWidth: "70ch",
          background: isUser
            ? "rgba(255,255,255,0.95)"
            : "rgba(255,255,255,0.75)",
          border: "1px solid var(--border)",
        }}
      >
        <p style={{ margin: 0, lineHeight: 1.6 }}>{children}</p>
      </div>
    </div>
  );
}

function WhatToEatChat({
  messages,
  categoryId,
  onSelectCategory,
  onReset,
}) {
  return (
    <div
      className="card"
      style={{
        padding: "var(--space-6)",
        display: "grid",
        gap: "var(--space-6)",
      }}
    >
      <h2 style={{ fontSize: "var(--text-xl)", margin: 0 }}>
        Conversación
      </h2>

      {/* Mensajes */}
      <div style={{ display: "grid", gap: "var(--space-4)" }}>
        {messages.map((m, idx) => (
          <Bubble key={idx} role={m.role}>
            {m.text}
          </Bubble>
        ))}
      </div>

      {/* Selector guiado */}
      <div style={{ display: "grid", gap: "var(--space-5)" }}>
        <FoodTypePicker
          value={categoryId}
          onChange={onSelectCategory}
        />

        <div
          style={{
            display: "flex",
            gap: "var(--space-3)",
            flexWrap: "wrap",
          }}
        >
          <button
            className="btn btnGhost"
            type="button"
            onClick={onReset}
          >
            Reiniciar
          </button>

          <Link to="/chat" className="btn btnGhost">
            Asistente por ingredientes
          </Link>

          <Link to="/" className="btn btnGhost">
            Volver a inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

export default WhatToEatChat;
