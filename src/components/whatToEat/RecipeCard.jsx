import Stars from "./Stars";

function RecipeCard({ recipe, onCook }) {
  return (
    <article className="card" style={{ padding: "var(--space-6)", display: "grid", gap: "var(--space-3)" }}>
      <header style={{ display: "grid", gap: "var(--space-2)" }}>
        <h3 style={{ margin: 0, fontSize: "var(--text-xl)" }}>
          {recipe.title} <span style={{ color: "var(--muted)", fontWeight: 600 }}>({recipe.timeMinutes} min)</span>
        </h3>
        <div style={{ color: "var(--muted)", fontSize: "var(--text-sm)" }}>
          <Stars value={recipe.difficulty} />{" "}
          <span style={{ marginLeft: "var(--space-2)" }}>Dificultad</span>
        </div>
      </header>

      <p style={{ margin: 0, lineHeight: 1.6 }}>{recipe.summary}</p>

      <div style={{ marginTop: "var(--space-2)" }}>
        <button className="btn btnPrimary" type="button" onClick={() => onCook(recipe)}>
          Cocinar
        </button>
      </div>
    </article>
  );
}

export default RecipeCard;
