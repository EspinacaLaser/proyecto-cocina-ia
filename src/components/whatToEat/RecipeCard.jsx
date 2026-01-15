import Stars from "./Stars";

function RecipeCard({ recipe, onCook }) {
  return (
    <article className="card" style={{ padding: "28px", display: "grid", gap: "20px", transition: "transform 0.2s, box-shadow 0.2s" }}>
      <header style={{ display: "grid", gap: "16px" }}>
        <h3 style={{ margin: "0 0 8px 0", fontSize: "22px", lineHeight: 1.4 }}>
          {recipe.title}{" "}
          <span style={{ color: "var(--muted)", fontWeight: 500, fontSize: "0.85em" }}>({recipe.timeMinutes} min)</span>
        </h3>
        <div style={{ color: "var(--muted)", fontSize: "14px", display: "flex", gap: "8px", alignItems: "center" }}>
          <Stars value={recipe.difficulty} />
          <span>Dificultad</span>
        </div>
      </header>

      <p style={{ margin: "12px 0", lineHeight: 1.8, color: "var(--text)", fontSize: "16px" }}>{recipe.summary}</p>

      <div style={{ marginTop: "16px" }}>
        <button className="btn btnPrimary" type="button" onClick={() => onCook(recipe)}>
          Cocinar
        </button>
      </div>
    </article>
  );
}

export default RecipeCard;
