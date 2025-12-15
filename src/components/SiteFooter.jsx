function SiteFooter() {
  return (
    <footer style={{ width: "100%" }}>
      <div className="container" style={{ paddingTop: 0 }}>
        <div
          className="card"
          style={{
            width: "100%",
            padding: "var(--space-4)",
            display: "flex",
            gap: "var(--space-4)",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "grid", gap: "var(--space-1)" }}>
            <strong style={{ fontFamily: "var(--font-serif)" }}>Cocina IA</strong>
            <span style={{ color: "var(--muted)", fontSize: "var(--text-sm)" }}>
              Prototipo académico · IA generativa en entorno multimedia
            </span>
          </div>

          <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap" }}>
            <span className="badge">Human-in-the-loop</span>
            <span className="badge">Diseño guiado</span>
            <span className="badge">Prototipo navegable</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
