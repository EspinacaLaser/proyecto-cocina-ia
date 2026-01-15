import { Link } from "react-router-dom";
import FoodTypePicker from "../components/whatToEat/FoodTypePicker";
import RecipeCard from "../components/whatToEat/RecipeCard";
import RecipeModal from "../components/whatToEat/RecipeModal";
import WhatToEatChat from "../components/whatToEat/WhatToEatChat";
import { useWhatToEat } from "../hooks/useWhatToEat";

function Bubble({ role, children }) {
  const isUser = role === "user";
  return (
    <div style={{ display: "flex", justifyContent: isUser ? "flex-end" : "flex-start" }}>
      <div
        className="card"
        style={{
          padding: "var(--space-4)",
          maxWidth: "70ch",
          background: isUser ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.75)",
          border: "1px solid var(--border)",
        }}
      >
        {children}
      </div>
    </div>
  );
}

function QueComer() {
  const w = useWhatToEat();

  return (
    <div style={{ display: "grid", gap: "var(--space-8)" }}>
      <section className="card" style={{ padding: "var(--space-8)" }}>
        <div className="reading" style={{ display: "grid", gap: "var(--space-3)" }}>
          <h1 style={{ fontSize: "var(--text-2xl)" }}>¿Qué te apetece comer?</h1>
          <p style={{ fontSize: "var(--text-md)" }}>
            Interacción guiada por intención. Elige un tipo de comida y el sistema te propone recetas
            claras (cards) con dificultad, tiempo y una vista completa en modal.
          </p>
          <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap" }}>
            <span className="badge">Guiado (no libre)</span>
            <span className="badge">Recetas estructuradas</span>
            <span className="badge">Imágenes IA curadas</span>
          </div>
        </div>
      </section>

      <section className="grid2">
        {/* CHAT */}
        <WhatToEatChat
          messages={w.messages}
          categoryId={w.categoryId}
          onSelectCategory={w.sendChoice}
          onReset={w.reset}
        />

        {/* CARDS */}
        <div style={{ display: "grid", gap: "var(--space-4)" }}>
          <div className="card" style={{ padding: "var(--space-6)" }}>
            <h2 style={{ fontSize: "var(--text-xl)", margin: 0 }}>
              Propuestas
            </h2>
            <p
              style={{
                marginTop: "var(--space-2)",
                color: "var(--muted)",
              }}
            >
              {w.selectedLabel
                ? `Resultados para: ${w.selectedLabel}`
                : "Elige una categoría para ver propuestas."}
            </p>
          </div>

          <div style={{ display: "grid", gap: "var(--space-4)" }}>
            {w.suggestions.map((r) => (
              <RecipeCard
                key={r.id}
                recipe={r}
                onCook={w.openRecipe}
              />
            ))}
          </div>
        </div>
      </section>

      <RecipeModal recipe={w.selectedRecipe} onClose={w.closeRecipe} />
    </div>
  );
}

export default QueComer;
