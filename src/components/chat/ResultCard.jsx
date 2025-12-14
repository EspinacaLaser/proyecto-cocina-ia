function ResultCard({ result }) {
  if (!result) {
    return (
      <div className="card" style={{ padding: "var(--space-6)", boxShadow: "none" }}>
        <h3 style={{ fontSize: "var(--text-xl)" }}>Sin resultado todavía</h3>
        <p style={{ marginTop: "var(--space-2)" }}>
          Selecciona parámetros y pulsa <strong>Generar propuesta</strong>.
        </p>
      </div>
    );
  }

  return (
    <div className="card" style={{ overflow: "hidden", boxShadow: "none" }}>
      <div style={{ borderBottom: "1px solid var(--border)" }}>
        <img
          src={result.image?.imageUrl}
          alt={result.image?.alt || "Imagen asociada"}
          style={{ width: "100%", height: "220px", objectFit: "cover" }}
        />
      </div>

      <div style={{ padding: "var(--space-6)", display: "grid", gap: "var(--space-4)" }}>
        <div style={{ display: "grid", gap: "var(--space-2)" }}>
          <h3 style={{ fontSize: "var(--text-2xl)" }}>{result.title}</h3>
          <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap" }}>
            {result.tags?.map((t) => (
              <span key={t} className="badge">
                {t}
              </span>
            ))}
          </div>
        </div>

        {Array.isArray(result.warnings) && result.warnings.length > 0 && (
          <div className="card" style={{ padding: "var(--space-4)", boxShadow: "none" }}>
            <h4 style={{ fontFamily: "var(--font-serif)", margin: 0 }}>Avisos</h4>
            <ul style={{ margin: "var(--space-3) 0 0", paddingLeft: "1.2rem" }}>
              {result.warnings.map((w, idx) => (
                <li key={idx} style={{ color: "var(--muted)" }}>
                  {w}
                </li>
              ))}
            </ul>
          </div>
        )}

        {Array.isArray(result.ingredients) && result.ingredients.length > 0 && (
          <div className="card" style={{ padding: "var(--space-4)", boxShadow: "none" }}>
            <h4 style={{ fontFamily: "var(--font-serif)", margin: 0 }}>Ingredientes</h4>
            <ul style={{ margin: "var(--space-3) 0 0", paddingLeft: "1.2rem" }}>
              {result.ingredients.map((ing) => (
                <li key={ing} style={{ color: "var(--muted)" }}>
                  {ing}
                </li>
              ))}
            </ul>
          </div>
        )}

        {Array.isArray(result.steps) && result.steps.length > 0 && (
          <div className="card" style={{ padding: "var(--space-4)", boxShadow: "none" }}>
            <h4 style={{ fontFamily: "var(--font-serif)", margin: 0 }}>Pasos</h4>
            <ol style={{ margin: "var(--space-3) 0 0", paddingLeft: "1.2rem" }}>
              {result.steps.map((s, idx) => (
                <li key={idx} style={{ color: "var(--muted)", marginBottom: "0.4rem" }}>
                  {s}
                </li>
              ))}
            </ol>
          </div>
        )}

        {result.notes && (
          <div style={{ display: "grid", gap: "var(--space-2)" }}>
            <span className="badge" style={{ width: "fit-content" }}>
              Nota del asistente
            </span>
            <p style={{ color: "var(--muted)" }}>{result.notes}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ResultCard;
