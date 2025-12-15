import { Link } from "react-router-dom";
import filosofiaImg from "../assets/ia/filosofia/img1.png";

function Filosofia() {
  return (
    <div style={{ display: "grid", gap: "var(--space-8)" }}>
      <section className="card" style={{ padding: "var(--space-8)" }}>
        <h1 style={{ fontSize: "var(--text-2xl)", margin: 0 }}>Filosofía</h1>
        <p style={{ marginTop: "var(--space-3)", color: "var(--muted)", lineHeight: 1.7 }}>
          Cocina IA nace para recuperar el lado bello de cocinar: una práctica creativa, sensorial y humana,
          donde la tecnología acompaña sin sustituir el criterio.
        </p>
      </section>

      <section className="grid2" style={{ gap: "var(--space-6)", alignItems: "stretch" }}>
        <div className="card" style={{ padding: "var(--space-7)", height: "100%" }}>
          <div style={{ display: "grid", gap: "var(--space-4)", height: "100%" }}>
            <div style={{ display: "grid", gap: "var(--space-2)" }}>
              <h2 style={{ fontSize: "var(--text-xl)", margin: 0 }}>IA como asistente, no como piloto</h2>
              <p style={{ margin: 0, color: "var(--muted)", lineHeight: 1.7 }}>
                El sistema guía la interacción con entradas concretas (ingredientes, tiempo, porciones) para evitar
                prompts genéricos. La “inteligencia” se diseña: reglas culinarias, compatibilidad y técnica.
              </p>
            </div>

            <ul style={{ margin: 0, paddingLeft: "1.2rem", display: "grid", gap: "0.45rem", lineHeight: 1.6 }}>
              <li>Transparencia: el sistema muestra avisos cuando algo no encaja.</li>
              <li>Control humano: tú decides, ajustas y validas el resultado.</li>
              <li>Coherencia: la receta se construye con intención (base, técnica, acabado).</li>
            </ul>

            <div style={{ marginTop: "auto", display: "flex", gap: "var(--space-3)", flexWrap: "wrap" }}>
              <Link className="btn btnPrimary" to="/chat">Ir al asistente</Link>
              <Link className="btn btnGhost" to="/">Volver al inicio</Link>
            </div>
          </div>
        </div>

        <div className="card" style={{ padding: "var(--space-7)", height: "100%" }}>
          <div style={{ display: "grid", gap: "var(--space-5)", height: "100%" }}>
            <div style={{ display: "grid", gap: "var(--space-2)" }}>
              <h2 style={{ fontSize: "var(--text-xl)", margin: 0 }}>Estética y cuidado</h2>
              <p style={{ margin: 0, color: "var(--muted)", lineHeight: 1.7 }}>
                La interfaz prioriza claridad: jerarquía tipográfica, espacios respirables y una lectura agradable.
                Los recursos visuales son editoriales: refuerzan atmósfera y coherencia, sin “automatizar” la creatividad.
              </p>
            </div>

            <div className="card" style={{ padding: 0, overflow: "hidden", borderRadius: "var(--radius-lg)" }}>
              <img
                src={filosofiaImg}
                alt="Imagen editorial sobre cocina y tecnología"
                style={{ width: "100%", aspectRatio: "1 / 1", objectFit: "cover", display: "block" }}
              />
            </div>

            <p style={{ margin: 0, color: "var(--muted)", fontSize: "var(--text-sm)", lineHeight: 1.6 }}>
              Nota: los contenidos visuales se curan y se revisan manualmente para mantener coherencia y evitar sesgos estéticos.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Filosofia;
