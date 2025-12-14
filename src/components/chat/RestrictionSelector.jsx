const RESTRICTIONS = ["vegetariano", "vegano", "sin gluten", "sin lactosa", "sin frutos secos"];

function RestrictionSelector({ values, onToggle }) {
  return (
    <div style={{ display: "grid", gap: "var(--space-2)" }}>
      <label style={{ fontWeight: 700, fontSize: "var(--text-sm)" }}>Restricciones</label>
      <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap" }}>
        {RESTRICTIONS.map((r) => {
          const active = values.includes(r);
          return (
            <button
              key={r}
              type="button"
              className={`btn ${active ? "btnPrimary" : ""}`}
              onClick={() => onToggle(r)}
            >
              {r}
            </button>
          );
        })}
      </div>
      {values.includes("vegano") && values.includes("vegetariano") && (
        <p style={{ marginTop: "var(--space-2)" }}>
          Nota: “vegano” ya implica “vegetariano”.
        </p>
      )}
    </div>
  );
}

export default RestrictionSelector;
