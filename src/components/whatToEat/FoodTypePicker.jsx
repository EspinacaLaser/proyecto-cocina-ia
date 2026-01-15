import { FOOD_CATEGORIES } from "../../data/whatToEat/categories";

function FoodTypePicker({ value, onChange }) {
  return (
    <div style={{ display: "grid", gap: "24px" }}>
      <strong style={{ fontSize: "18px", fontWeight: 700, letterSpacing: "0.02em", marginBottom: "8px" }}>¿Qué te apetece comer?</strong>

      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", rowGap: "16px" }}>
        {FOOD_CATEGORIES.map((c) => {
          const active = value === c.id;
          return (
            <button
              key={c.id}
              type="button"
              onClick={() => onChange(c.id)}
              className={active ? "btn btnPrimary" : "btn btnGhost"}
              style={{ padding: "12px 20px", fontSize: "14px" }}
              title={c.hint}
            >
              {c.label}
            </button>
          );
        })}
      </div>

      <p style={{ margin: 0, marginTop: "16px", color: "var(--muted)", fontSize: "12px", lineHeight: 1.6 }}>
        Consejo: esta sección es guiada (no es un chatbot libre). El objetivo es mantener coherencia y evitar resultados genéricos.
      </p>
    </div>
  );
}

export default FoodTypePicker;
