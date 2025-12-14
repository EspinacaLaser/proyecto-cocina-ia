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
            Un asistente culinario que te acompaña con sugerencias claras y estéticas:
            recetas con lo que tienes, sustituciones inteligentes y reinterpretaciones con
            intención.
          </p>

          <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap" }}>
            <Link to="/chat" className="btn btnPrimary">
              Abrir el asistente
            </Link>
            <a href="#como-funciona" className="btn btnGhost">
              Ver cómo funciona
            </a>
          </div>

          <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap" }}>
            <span className="badge">Sin base de datos</span>
            <span className="badge">Prototipo navegable</span>
            <span className="badge">IA como apoyo creativo</span>
          </div>
        </div>
      </section>

      {/* CAPACIDADES */}
      <section id="como-funciona" style={{ display: "grid", gap: "var(--space-4)" }}>
        <h2 style={{ fontSize: "var(--text-2xl)" }}>Qué puedes hacer aquí</h2>

        <div className="grid3">
          <div className="card" style={{ padding: "var(--space-6)" }}>
            <h3 style={{ fontSize: "var(--text-xl)" }}>Cocina con lo que tienes</h3>
            <p style={{ marginTop: "var(--space-2)" }}>
              Indica ingredientes y tiempo disponible. Obtendrás una receta clara, con pasos
              y una propuesta cuidada.
            </p>
            <div style={{ marginTop: "var(--space-4)" }}>
              <span className="badge">Modo guiado</span>
            </div>
          </div>

          <div className="card" style={{ padding: "var(--space-6)" }}>
            <h3 style={{ fontSize: "var(--text-xl)" }}>Sustituciones inteligentes</h3>
            <p style={{ marginTop: "var(--space-2)" }}>
              ¿Falta un ingrediente? Te proponemos alternativas razonables según textura,
              sabor y función culinaria.
            </p>
            <div style={{ marginTop: "var(--space-4)", display: "flex", gap: "var(--space-2)", flexWrap: "wrap" }}>
              <span className="badge">Alergias</span>
              <span className="badge">Despensa</span>
            </div>
          </div>

          <div className="card" style={{ padding: "var(--space-6)" }}>
            <h3 style={{ fontSize: "var(--text-xl)" }}>Reinterpretación creativa</h3>
            <p style={{ marginTop: "var(--space-2)" }}>
              Convierte una idea en una versión mediterránea, vegetal o más ligera, sin
              perder el espíritu del plato.
            </p>
            <div style={{ marginTop: "var(--space-4)" }}>
              <span className="badge" style={{ color: "var(--accent-2)" }}>
                Creatividad
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* EDITORIAL */}
      <section className="card" style={{ padding: "var(--space-8)" }}>
        <div className="grid2">
          <div style={{ display: "grid", gap: "var(--space-3)" }}>
            <h2 style={{ fontSize: "var(--text-2xl)" }}>IA, pero con criterio</h2>
            <p>
              Este proyecto entiende la IA como asistente. Las decisiones creativas se
              toman de forma humana, documentando prompts, iteraciones y correcciones para
              mantener control y coherencia.
            </p>
            <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap" }}>
              <span className="badge">Transparencia</span>
              <span className="badge">Revisión humana</span>
              <span className="badge">Coherencia visual</span>
            </div>
          </div>

          <div className="card" style={{ padding: "var(--space-6)", boxShadow: "none" }}>
            <h3 style={{ fontSize: "var(--text-xl)" }}>Lo que verás en el asistente</h3>
            <p style={{ marginTop: "var(--space-2)" }}>
              Respuestas estructuradas: título, ingredientes, pasos, tiempo estimado y una
              recomendación final. Menos ruido, más cocina.
            </p>
            <div style={{ marginTop: "var(--space-4)" }}>
              <Link to="/chat" className="btn btnPrimary">
                Probar ahora
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
