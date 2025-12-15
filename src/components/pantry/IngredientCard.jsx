function fmt(n) {
  if (n == null) return "—";
  const v = Number(n);
  if (!Number.isFinite(v)) return "—";
  return v.toFixed(1).replace(".0", "");
}

function Row({ label, value }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", gap: "var(--space-4)" }}>
      <span style={{ color: "var(--muted)" }}>{label}</span>
      <span style={{ fontWeight: 700 }}>{value}</span>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div
      style={{
        paddingTop: "var(--space-5)",
        borderTop: "1px solid var(--border)",
      }}
    >
      {title ? (
        <strong style={{ display: "block", marginBottom: "var(--space-3)" }}>{title}</strong>
      ) : null}
      {children}
    </div>
  );
}

function IngredientCard({ item }) {
  const n = item.nutrition || {};

  return (
    <article
      className="card"
      style={{
        padding: "var(--space-6)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* HEADER */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "var(--space-4)",
          alignItems: "baseline",
          paddingBottom: "var(--space-4)",
        }}
      >
        <h3 style={{ fontSize: "var(--text-xl)", margin: 0, lineHeight: 1.15 }}>{item.name}</h3>
        <span className="badge">{item.category}</span>
      </div>

      {/* SUMMARY (sin caja extra para que respire) */}
      <p
        style={{
          margin: 0,
          color: "var(--muted)",
          fontSize: "var(--text-md)",
          lineHeight: 1.6,
        }}
      >
        {item.summary}
      </p>

      {/* NUTRICIÓN */}
      <Section title="Nutrición (por 100 g)">
        <div style={{ display: "grid", gap: "0.6rem", fontSize: "var(--text-sm)" }}>
          <Row label="Kcal" value={fmt(n.kcal)} />
          <Row label="Proteína (g)" value={fmt(n.protein_g)} />
          <Row label="Carbohidratos (g)" value={fmt(n.carbs_g)} />
          <Row label="Grasa (g)" value={fmt(n.fat_g)} />
          <Row label="Fibra (g)" value={fmt(n.fiber_g)} />
          <Row label="Sal (g)" value={fmt(n.salt_g)} />
        </div>
      </Section>

      {/* BLOQUE FINAL ANCLADO ABAJO */}
      <div style={{ marginTop: "auto" }}>
        <Section title="Combina con">
          <p style={{ margin: 0, color: "var(--muted)", lineHeight: 1.6 }}>
            {(item.pairsWellWith || []).slice(0, 6).join(", ")}
          </p>
        </Section>

        <Section title="Cuándo vigilar">
          <p style={{ margin: 0, color: "var(--muted)", lineHeight: 1.6 }}>
            {item.watchOut}
          </p>
        </Section>
      </div>
    </article>
  );
}

export default IngredientCard;
