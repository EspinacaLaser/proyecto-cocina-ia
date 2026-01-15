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
        padding: "0 var(--space-2)",
      }}
    >
      <div
        className="card"
        style={{
          padding: "var(--space-5)",
          maxWidth: "min(70ch, 90%)",
          background: isUser
            ? "rgba(255,255,255,0.95)"
            : "rgba(255,255,255,0.75)",
          border: "1px solid var(--border)",
          borderRadius: "var(--radius-md)",
        }}
      >
        <p style={{ margin: 0, lineHeight: 1.7, fontSize: "var(--text-base)" }}>{children}</p>
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
        padding: "clamp(var(--space-5), 5vw, var(--space-8))",
        display: "grid",
        gap: "var(--space-8)",
      }}
    >
      <h2 style={{ fontSize: "clamp(var(--text-lg), 5vw, var(--text-2xl))", margin: 0, fontWeight: 600 }}>
        Conversación
      </h2>

      {/* Mensajes */}
      <div style={{ display: "grid", gap: "var(--space-5)", minHeight: "200px" }}>
        {messages.map((m, idx) => (
          <Bubble key={idx} role={m.role}>
            {m.text}
          </Bubble>
        ))}
      </div>

      {/* Selector guiado */}
      <div style={{ display: "grid", gap: "var(--space-6)", borderTop: "1px solid var(--border)", paddingTop: "var(--space-6)" }}>
        <FoodTypePicker
          value={categoryId}
          onChange={onSelectCategory}
        />

        <div
          style={{
            display: "flex",
            gap: "var(--space-4)",
            flexWrap: "wrap",
            justifyContent: "flex-start",
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
