import Stars from "./Stars";

function RecipeModal({ recipe, onClose }) {
  if (!recipe) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.45)",
        display: "grid",
        placeItems: "center",
        padding: "var(--space-6)",
        zIndex: 50,
      }}
    >
      <div
        className="card"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "min(900px, 100%)",
          maxHeight: "85vh",
          overflow: "auto",
          padding: "var(--space-8)",
          display: "grid",
          gap: "var(--space-6)",
        }}
      >
        <header style={{ display: "grid", gap: "var(--space-2)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "var(--space-4)", flexWrap: "wrap" }}>
            <h2 style={{ margin: 0, fontSize: "var(--text-2xl)" }}>{recipe.title}</h2>
            <button className="btn btnGhost" type="button" onClick={onClose}>
              Cerrar
            </button>
          </div>

          <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap", alignItems: "center" }}>
            <span className="badge">{recipe.timeMinutes} min</span>
            <span className="badge">
              <Stars value={recipe.difficulty} />{" "}
              <span style={{ marginLeft: 6 }}>dificultad</span>
            </span>
          </div>
        </header>

        {/* Imagen */}
        <div className="card" style={{ padding: 0, overflow: "hidden" }}>
          <img
            src={recipe.image}
            alt={recipe.title}
            style={{ width: "100%", height: 280, objectFit: "cover", display: "block" }}
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
          <div style={{ padding: "var(--space-5)" }}>
            <p style={{ margin: 0, color: "var(--muted)", lineHeight: 1.6 }}>{recipe.summary}</p>
          </div>
        </div>

        {/* Ingredientes */}
        <section style={{ display: "grid", gap: "var(--space-2)" }}>
          <h3 style={{ margin: 0, fontSize: "var(--text-xl)" }}>Ingredientes</h3>
          <ul style={{ margin: 0, paddingLeft: "1.2rem", display: "grid", gap: "0.35rem", lineHeight: 1.6 }}>
            {(recipe.ingredients || []).map((it, idx) => (
              <li key={idx}>{it}</li>
            ))}
          </ul>
        </section>

        {/* Pasos */}
        <section style={{ display: "grid", gap: "var(--space-2)" }}>
          <h3 style={{ margin: 0, fontSize: "var(--text-xl)" }}>Preparación</h3>
          <ol style={{ margin: 0, paddingLeft: "1.2rem", display: "grid", gap: "0.5rem", lineHeight: 1.6 }}>
            {(recipe.steps || []).map((s, idx) => (
              <li key={idx}>{s}</li>
            ))}
          </ol>
        </section>
      </div>
    </div>
  );
}

export default RecipeModal;
