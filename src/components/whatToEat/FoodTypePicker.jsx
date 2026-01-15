import { FOOD_CATEGORIES } from "../../data/whatToEat/categories";

function FoodTypePicker({ value, onChange }) {
  return (
    <div style={{ display: "grid", gap: "var(--space-3)" }}>
      <strong style={{ fontSize: "var(--text-sm)" }}>¿Qué te apetece comer?</strong>

      <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap" }}>
        {FOOD_CATEGORIES.map((c) => {
          const active = value === c.id;
          return (
            <button
              key={c.id}
              type="button"
              onClick={() => onChange(c.id)}
              className={active ? "btn btnPrimary" : "btn btnGhost"}
              style={{ padding: "0.55rem 0.85rem" }}
              title={c.hint}
            >
              {c.label}
            </button>
          );
        })}
      </div>

      <p style={{ margin: 0, color: "var(--muted)", fontSize: "var(--text-sm)" }}>
        Consejo: esta sección es guiada (no es un chatbot libre). El objetivo es mantener coherencia y evitar resultados genéricos.
      </p>
    </div>
  );
}

export default FoodTypePicker;
