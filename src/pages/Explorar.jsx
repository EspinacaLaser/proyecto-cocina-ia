import { Link } from "react-router-dom";

const moods = [
  {
    title: "Mediterráneo luminoso",
    desc: "Aceite de oliva, limón, hierbas frescas y verduras.",
    example: "tomate, calabacín, ajo, limón, aceite de oliva",
  },
  {
    title: "Umami reconfortante",
    desc: "Setas, salsa de soja, tomate concentrado, caldo.",
    example: "champiñones, cebolla, salsa de soja, arroz",
  },
  {
    title: "Vegetal con contraste",
    desc: "Verdura + ácido + crujiente (semillas/frutos secos si hay).",
    example: "brócoli, pepino, yogur, limón, comino",
  },
  {
    title: "Cuchara rápida",
    desc: "Legumbre, base aromática y un final ácido.",
    example: "garbanzos, espinaca, comino, limón, cebolla",
  },
];

function Explorar() {
  return (
    <div style={{ display: "grid", gap: "var(--space-8)" }}>
      <section className="card" style={{ padding: "var(--space-8)" }}>
        <h1 style={{ fontSize: "var(--text-2xl)" }}>Explorar</h1>
        <p style={{ marginTop: "var(--space-3)", color: "var(--muted)" }}>
          Ideas prácticas para probar el asistente. No es una “IA genérica”: cuanto más concreto seas,
          mejor cocina contigo.
        </p>
      </section>

      <section className="grid2">
        {moods.map((m) => (
          <div key={m.title} className="card" style={{ padding: "var(--space-6)" }}>
            <h2 style={{ fontSize: "var(--text-xl)" }}>{m.title}</h2>
            <p style={{ marginTop: "var(--space-2)" }}>{m.desc}</p>

            <div style={{ marginTop: "var(--space-4)" }}>
              <div style={{ color: "var(--muted)", fontSize: "var(--text-sm)", fontWeight: 700 }}>
                Ejemplo de ingredientes
              </div>
              <div style={{ marginTop: "var(--space-2)" }} className="card">
                <div style={{ padding: "var(--space-4)" }}>
                  <code style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-sm)" }}>
                    {m.example}
                  </code>
                </div>
              </div>
            </div>

            <div style={{ marginTop: "var(--space-5)", display: "flex", gap: "var(--space-3)", flexWrap: "wrap" }}>
              <Link className="btn btnPrimary" to="/chat">Probar en el asistente</Link>
              <Link className="btn btnGhost" to="/filosofia">Ver filosofía</Link>
            </div>
          </div>
        ))}
      </section>

      <section className="card" style={{ padding: "var(--space-6)" }}>
        <h2 style={{ fontSize: "var(--text-xl)" }}>Consejos para mejores resultados</h2>
        <ul style={{ marginTop: "var(--space-3)", paddingLeft: "1.2rem", display: "grid", gap: "0.4rem" }}>
          <li>Incluye cantidades y unidades si puedes (g, ml, cdas).</li>
          <li>Si sale algo raro, añade un “puente”: ácido (limón) o umami (setas/caldo).</li>
          <li>Para recetas rápidas, prioriza salteados y acabados en frío.</li>
        </ul>
      </section>
    </div>
  );
}

export default Explorar;
