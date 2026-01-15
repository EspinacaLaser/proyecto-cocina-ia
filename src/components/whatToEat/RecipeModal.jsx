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
        background: "rgba(0,0,0,0.5)",
        display: "grid",
        placeItems: "center",
        padding: "20px",
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
          padding: "40px",
          display: "grid",
          gap: "32px",
          borderRadius: "var(--radius-lg)",
        }}
      >
        <header style={{ display: "grid", gap: "20px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "20px", flexWrap: "wrap", alignItems: "flex-start" }}>
            <h2 style={{ margin: "0 0 8px 0", fontSize: "28px", lineHeight: 1.2, flex: 1, minWidth: "200px" }}>{recipe.title}</h2>
            <button className="btn btnGhost" type="button" onClick={onClose}>
              Cerrar
            </button>
          </div>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }}>
            <span className="badge" style={{ padding: "8px 16px", fontSize: "14px" }}>{recipe.timeMinutes} min</span>
            <span className="badge" style={{ padding: "8px 16px", fontSize: "14px", display: "flex", gap: "8px", alignItems: "center" }}>
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
            style={{ width: "100%", height: "280px", objectFit: "cover", display: "block" }}
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
          <div style={{ padding: "28px" }}>
            <p style={{ margin: 0, color: "var(--muted)", lineHeight: 1.8, fontSize: "16px" }}>{recipe.summary}</p>
          </div>
        </div>

        {/* Ingredientes */}
        <section style={{ display: "grid", gap: "20px" }}>
          <h3 style={{ margin: "8px 0 12px 0", fontSize: "20px", fontWeight: 600, letterSpacing: "0.01em" }}>Ingredientes</h3>
          <ul style={{ margin: 0, paddingLeft: "24px", display: "grid", gap: "16px", lineHeight: 1.9, fontSize: "16px" }}>
            {(recipe.ingredients || []).map((it, idx) => (
              <li key={idx}>{it}</li>
            ))}
          </ul>
        </section>

        {/* Pasos */}
        <section style={{ display: "grid", gap: "20px" }}>
          <h3 style={{ margin: "8px 0 12px 0", fontSize: "20px", fontWeight: 600, letterSpacing: "0.01em" }}>Preparación</h3>
          <ol style={{ margin: 0, paddingLeft: "24px", display: "grid", gap: "20px", lineHeight: 1.9, fontSize: "16px" }}>
            {(recipe.steps || []).map((s, idx) => (
              <li key={idx} style={{ marginBottom: "8px" }}>{s}</li>
            ))}
          </ol>
        </section>
      </div>
    </div>
  );
}

export default RecipeModal;
