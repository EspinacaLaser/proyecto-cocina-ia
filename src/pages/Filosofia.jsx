import { Link } from "react-router-dom";

function Filosofia() {
  return (
    <div style={{ display: "grid", gap: "var(--space-8)" }}>
      <section className="card" style={{ padding: "var(--space-8)" }}>
        <h1 style={{ fontSize: "var(--text-2xl)" }}>Filosofía</h1>
        <p style={{ marginTop: "var(--space-3)", color: "var(--muted)" }}>
          Cocina IA nace para recuperar el lado bello de cocinar: una práctica creativa, sensorial y humana,
          donde la tecnología acompaña sin sustituir el criterio.
        </p>
      </section>

      <section className="grid2">
        <div className="card" style={{ padding: "var(--space-6)" }}>
          <h2 style={{ fontSize: "var(--text-xl)" }}>IA como asistente, no como piloto</h2>
          <p style={{ marginTop: "var(--space-3)" }}>
            El sistema guía la conversación con entradas concretas (ingredientes, tiempo, porciones) para evitar
            prompts genéricos. La “inteligencia” se diseña: reglas culinarias, compatibilidad y técnica.
          </p>
          <ul style={{ marginTop: "var(--space-4)", paddingLeft: "1.2rem", display: "grid", gap: "0.4rem" }}>
            <li>Transparencia: el sistema muestra avisos cuando algo no encaja.</li>
            <li>Control humano: tú decides, ajustas y validas el resultado.</li>
            <li>Coherencia: la receta se construye con intención (base, técnica, acabado).</li>
          </ul>
        </div>

        <div className="card" style={{ padding: "var(--space-6)" }}>
          <h2 style={{ fontSize: "var(--text-xl)" }}>Estética y cuidado</h2>
          <p style={{ marginTop: "var(--space-3)" }}>
            La interfaz prioriza claridad: jerarquía tipográfica, espacios respirables y una lectura agradable.
            Próximamente añadiremos recursos visuales generados con IA para reforzar la atmósfera culinaria.
          </p>

          <div style={{ marginTop: "var(--space-5)", display: "flex", gap: "var(--space-3)", flexWrap: "wrap" }}>
            <Link className="btn btnPrimary" to="/chat">Ir al asistente</Link>
            <Link className="btn btnGhost" to="/#">Volver al inicio</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Filosofia;
