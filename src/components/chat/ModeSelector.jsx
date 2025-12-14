const MODES = [
  { key: "recipe", label: "Receta" },
  { key: "substitute", label: "Sustitución" },
  { key: "remix", label: "Reinterpretación" },
];

function ModeSelector({ value, onChange }) {
  return (
    <div style={{ display: "grid", gap: "var(--space-3)" }}>
      <label style={{ fontWeight: 700, fontSize: "var(--text-sm)" }}>Modo</label>
      <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap" }}>
        {MODES.map((m) => {
          const active = value === m.key;
          return (
            <button
              key={m.key}
              type="button"
              className={`btn ${active ? "btnPrimary" : ""}`}
              onClick={() => onChange(m.key)}
            >
              {m.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default ModeSelector;
