function ResultCard({ result }) {
  if (!result) {
    return (
      <div className="card" style={{ padding: "var(--space-8)" }}>
        <p style={{ margin: 0, color: "var(--muted)", lineHeight: 1.7 }}>
          Aún no hay resultados. Introduce ingredientes y pulsa “Generar receta”.
        </p>
      </div>
    );
  }

  return (
    <article className="card" style={{ padding: "var(--space-8)" }}>
      <div style={{ display: "grid", gap: "var(--space-6)" }}>
        <h3 style={{ margin: 0, fontSize: "var(--text-xl)" }}>{result.title}</h3>

        <section>
          <strong style={{ display: "block", marginBottom: "var(--space-3)" }}>Ingredientes</strong>
          <ul style={{ margin: 0, paddingLeft: "1.1rem", display: "grid", gap: "0.35rem", lineHeight: 1.6 }}>
            {(result.ingredients || []).map((it, idx) => (
              <li key={idx}>{typeof it === "string" ? it : it?.text ?? JSON.stringify(it)}</li>
            ))}
          </ul>
        </section>

        <section>
          <strong style={{ display: "block", marginBottom: "var(--space-3)" }}>Pasos</strong>
          <ol style={{ margin: 0, paddingLeft: "1.1rem", display: "grid", gap: "0.5rem", lineHeight: 1.6 }}>
            {(result.steps || []).map((s, idx) => (
              <li key={idx}>{s}</li>
            ))}
          </ol>
        </section>

        {(result.notes && result.notes.length > 0) ? (
          <section>
            <strong style={{ display: "block", marginBottom: "var(--space-3)" }}>Notas</strong>
            <ul style={{ margin: 0, paddingLeft: "1.1rem", display: "grid", gap: "0.35rem", lineHeight: 1.6 }}>
              {result.notes.map((n, idx) => <li key={idx}>{n}</li>)}
            </ul>
          </section>
        ) : null}

        {(result.warnings && result.warnings.length > 0) ? (
          <section>
            <strong style={{ display: "block", marginBottom: "var(--space-3)" }}>Avisos</strong>
            <ul style={{ margin: 0, paddingLeft: "1.1rem", display: "grid", gap: "0.35rem", lineHeight: 1.6 }}>
              {result.warnings.map((w, idx) => <li key={idx}>{w}</li>)}
            </ul>
          </section>
        ) : null}
      </div>
    </article>
  );
}

export default ResultCard;
