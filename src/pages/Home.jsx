import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ display: "grid", gap: "var(--space-10)" }}>
      {/* HERO */}
      <section className="card" style={{ padding: "var(--space-10)" }}>
        <div className="reading" style={{ display: "grid", gap: "var(--space-4)" }}>
          <span className="badge">Cocina lenta · Diseño consciente</span>

          <h1 style={{ fontSize: "var(--text-3xl)" }}>
            Cocinar puede ser bonito, simple y creativo.
          </h1>

          <p style={{ fontSize: "var(--text-lg)" }}>
            Un prototipo culinario donde la “inteligencia” se diseña: entradas guiadas,
            criterio humano y respuestas estructuradas para transformar ingredientes reales
            en una receta clara.
          </p>
        </div>
      </section>

      {/* QUÉ PUEDES HACER */}
      <section id="como-funciona" style={{ display: "grid", gap: "var(--space-4)" }}>
        <h2 style={{ fontSize: "var(--text-2xl)" }}>Qué puedes hacer aquí</h2>

        <div className="grid2">
          <div className="card" style={{ padding: "var(--space-6)" }}>
            <h3 style={{ fontSize: "var(--text-xl)" }}>Generar una receta con lo que tienes</h3>
            <p style={{ marginTop: "var(--space-2)" }}>
              Indica ingredientes, tiempo y porciones. Obtendrás una propuesta estructurada:
              título, ingredientes, pasos y notas de cocina. Menos ruido, más claridad.
            </p>

            <div style={{ marginTop: "var(--space-5)" }}>
              <Link to="/chat" className="btn btnPrimary">
                Probar el asistente
              </Link>
            </div>
          </div>

          <div className="card" style={{ padding: "var(--space-6)" }}>
            <h3 style={{ fontSize: "var(--text-xl)" }}>Consultar la Despensa</h3>
            <p style={{ marginTop: "var(--space-2)" }}>
              Una biblioteca curada de ingredientes (muestra inicial) con combinaciones y
              valores nutricionales por 100 g. Pensada como base para una futura base de datos
              y endpoints.
            </p>

            <div style={{ marginTop: "var(--space-5)" }}>
              <Link to="/despensa" className="btn btnGhost">
                Abrir Despensa
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* EDITORIAL / ÉTICA */}
      <section className="card" style={{ padding: "var(--space-8)" }}>
        <div className="grid2">
          <div style={{ display: "grid", gap: "var(--space-3)" }}>
            <h2 style={{ fontSize: "var(--text-2xl)" }}>IA, pero con criterio</h2>
            <p style={{ margin: 0 }}>
              Este proyecto entiende la IA como asistente: apoya la creación de contenidos y la exploración,
              pero las decisiones se toman de forma humana. El foco está en diseñar prompts, iterar,
              revisar resultados y documentar el proceso.
            </p>

            <div style={{ marginTop: "var(--space-4)", display: "flex", gap: "var(--space-3)", flexWrap: "wrap" }}>
              <Link to="/filosofia" className="btn btnGhost">
                Leer la filosofía
              </Link>
            </div>
          </div>

          <div className="card" style={{ padding: "var(--space-6)", boxShadow: "none" }}>
            <h3 style={{ fontSize: "var(--text-xl)" }}>Qué verás en el asistente</h3>
            <p style={{ marginTop: "var(--space-2)" }}>
              Respuestas estructuradas y consistentes. El objetivo es que cualquier resultado sea legible,
              ejecutable y estéticamente claro, incluso siendo un prototipo.
            </p>

            <div style={{ marginTop: "var(--space-4)", display: "flex", gap: "var(--space-3)", flexWrap: "wrap" }}>
              <Link to="/chat" className="btn btnPrimary">
                Probar ahora
              </Link>
              <Link to="/despensa" className="btn btnGhost">
                Inspirarme con ingredientes
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
