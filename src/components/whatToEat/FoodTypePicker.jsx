import { FOOD_CATEGORIES } from "../../data/whatToEat/categories";

function FoodTypePicker({ value, onChange }) {
  return (
    <div style={{ display: "grid", gap: "var(--space-5)" }}>
      <strong style={{ fontSize: "var(--text-base)", fontWeight: 600, letterSpacing: "0.02em" }}>¿Qué te apetece comer?</strong>

      <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap", rowGap: "var(--space-3)" }}>
        {FOOD_CATEGORIES.map((c) => {
          const active = value === c.id;
          return (
            <button
              key={c.id}
              type="button"
              onClick={() => onChange(c.id)}
              className={active ? "btn btnPrimary" : "btn btnGhost"}
              style={{ padding: "0.75rem 1.25rem", fontSize: "var(--text-sm)" }}
              title={c.hint}
            >
              {c.label}
            </button>
          );
        })}
      </div>

      <p style={{ margin: 0, marginTop: "var(--space-2)", color: "var(--muted)", fontSize: "var(--text-xs)", lineHeight: 1.5 }}>
        Consejo: esta sección es guiada (no es un chatbot libre). El objetivo es mantener coherencia y evitar resultados genéricos.
      </p>
    </div>
  );
}

export default FoodTypePicker;
