import Stars from "./Stars";

function RecipeCard({ recipe, onCook }) {
  return (
    <article className="card" style={{ padding: "var(--space-6)", display: "grid", gap: "var(--space-4)", transition: "transform 0.2s, box-shadow 0.2s" }}>
      <header style={{ display: "grid", gap: "var(--space-3)" }}>
        <h3 style={{ margin: 0, fontSize: "clamp(var(--text-lg), 5vw, var(--text-xl))", lineHeight: 1.3 }}>
          {recipe.title}{" "}
          <span style={{ color: "var(--muted)", fontWeight: 500, fontSize: "0.85em" }}>({recipe.timeMinutes} min)</span>
        </h3>
        <div style={{ color: "var(--muted)", fontSize: "var(--text-sm)", display: "flex", gap: "var(--space-2)", alignItems: "center" }}>
          <Stars value={recipe.difficulty} />
          <span>Dificultad</span>
        </div>
      </header>

      <p style={{ margin: 0, lineHeight: 1.7, color: "var(--text)" }}>{recipe.summary}</p>

      <div style={{ marginTop: "var(--space-2)" }}>
        <button className="btn btnPrimary" type="button" onClick={() => onCook(recipe)}>
          Cocinar
        </button>
      </div>
    </article>
  );
}

export default RecipeCard;
