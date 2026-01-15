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
          maxHeight: "90vh",
          overflow: "auto",
          padding: "clamp(var(--space-6), 5vw, var(--space-10))",
          display: "grid",
          gap: "var(--space-7)",
          borderRadius: "var(--radius-lg)",
        }}
      >
        <header style={{ display: "grid", gap: "var(--space-4)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "var(--space-4)", flexWrap: "wrap", alignItems: "flex-start" }}>
            <h2 style={{ margin: 0, fontSize: "clamp(var(--text-xl), 6vw, var(--text-2xl))", lineHeight: 1.2, flex: 1, minWidth: "200px" }}>{recipe.title}</h2>
            <button className="btn btnGhost" type="button" onClick={onClose}>
              Cerrar
            </button>
          </div>

          <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap", alignItems: "center" }}>
            <span className="badge" style={{ padding: "0.5rem 1rem", fontSize: "var(--text-sm)" }}>{recipe.timeMinutes} min</span>
            <span className="badge" style={{ padding: "0.5rem 1rem", fontSize: "var(--text-sm)", display: "flex", gap: "var(--space-2)", alignItems: "center" }}>
              <Stars value={recipe.difficulty} />
              <span>dificultad</span>
            </span>
          </div>
        </header>

        {/* Imagen */}
        <div className="card" style={{ padding: 0, overflow: "hidden" }}>
          <img
            src={recipe.image}
            alt={recipe.title}
            style={{ width: "100%", height: "clamp(200px, 40vw, 350px)", objectFit: "cover", display: "block" }}
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
          <div style={{ padding: "var(--space-6)" }}>
            <p style={{ margin: 0, color: "var(--muted)", lineHeight: 1.7, fontSize: "var(--text-base)" }}>{recipe.summary}</p>
          </div>
        </div>

        {/* Ingredientes */}
        <section style={{ display: "grid", gap: "var(--space-4)" }}>
          <h3 style={{ margin: 0, fontSize: "clamp(var(--text-lg), 4vw, var(--text-xl))", fontWeight: 600, letterSpacing: "0.01em" }}>Ingredientes</h3>
          <ul style={{ margin: 0, paddingLeft: "1.5rem", display: "grid", gap: "var(--space-3)", lineHeight: 1.8, fontSize: "var(--text-base)" }}>
            {(recipe.ingredients || []).map((it, idx) => (
              <li key={idx}>{it}</li>
            ))}
          </ul>
        </section>

        {/* Pasos */}
        <section style={{ display: "grid", gap: "var(--space-4)" }}>
          <h3 style={{ margin: 0, fontSize: "clamp(var(--text-lg), 4vw, var(--text-xl))", fontWeight: 600, letterSpacing: "0.01em" }}>Preparación</h3>
          <ol style={{ margin: 0, paddingLeft: "1.5rem", display: "grid", gap: "var(--space-4)", lineHeight: 1.8, fontSize: "var(--text-base)" }}>
            {(recipe.steps || []).map((s, idx) => (
              <li key={idx} style={{ marginBottom: "var(--space-2)" }}>{s}</li>
            ))}
          </ol>
        </section>
      </div>
    </div>
  );
}

export default RecipeModal;
