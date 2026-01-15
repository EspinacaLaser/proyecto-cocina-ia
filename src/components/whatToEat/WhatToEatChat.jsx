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
        padding: "0 8px",
      }}
    >
      <div
        className="card"
        style={{
          padding: "20px",
          maxWidth: "min(70ch, 90%)",
          background: isUser
            ? "rgba(255,255,255,0.95)"
            : "rgba(255,255,255,0.75)",
          border: "1px solid var(--border)",
          borderRadius: "var(--radius-md)",
        }}
      >
        <p style={{ margin: 0, lineHeight: 1.8, fontSize: "16px" }}>{children}</p>
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
        padding: "32px",
        display: "grid",
        gap: "32px",
      }}
    >
      <h2 style={{ fontSize: "24px", margin: 0, fontWeight: 600 }}>
        Conversación
      </h2>

      {/* Mensajes */}
      <div style={{ display: "grid", gap: "24px", minHeight: "200px" }}>
        {messages.map((m, idx) => (
          <Bubble key={idx} role={m.role}>
            {m.text}
          </Bubble>
        ))}
      </div>

      {/* Selector guiado */}
      <div style={{ display: "grid", gap: "28px", borderTop: "1px solid var(--border)", paddingTop: "28px" }}>
        <FoodTypePicker
          value={categoryId}
          onChange={onSelectCategory}
        />

        <div
          style={{
            display: "flex",
            gap: "16px",
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
