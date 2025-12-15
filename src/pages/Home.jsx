import { Link } from "react-router-dom";

import heroWide from "../assets/ia/home/img9.png";
import familyVertical from "../assets/ia/home/img7.png";

function Home() {
  return (
    <div style={{ display: "grid", gap: "var(--space-10)" }}>
      {/* HERO */}
      <section className="card" style={{ padding: "var(--space-10)" }}>
        <div className="grid2" style={{ alignItems: "center", gap: "var(--space-8)" }}>
          <div className="reading" style={{ display: "grid", gap: "var(--space-4)" }}>
            <span className="badge">Cocina lenta · Diseño consciente</span>

            <h1 style={{ fontSize: "var(--text-3xl)", margin: 0 }}>
              Cocinar puede ser bonito, simple y creativo.
            </h1>

            <p style={{ fontSize: "var(--text-lg)", margin: 0, color: "var(--muted)", lineHeight: 1.7 }}>
              Cocinar es un gesto íntimo. Un diálogo silencioso entre lo que sientes y lo que creas con las manos.
              No busca resultados perfectos, sino presencia, curiosidad y disfrute.

              Este espacio está pensado para volver ahí: al placer de imaginar, probar y transformar sin miedo. Para cocinar desde lo que eres hoy, con lo que tienes ahora, dejando que la intuición marque el ritmo.
              Aquí la creatividad no se fuerza: se cuida.

              Porque cuando cocinas con calma, algo más que un plato toma forma.
              Recuperas el gusto por crear, por jugar, por habitar la cocina como un lugar propio.
            </p>

            <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap", marginTop: "var(--space-2)" }}>
              <Link to="/chat" className="btn btnPrimary">
                Abrir el asistente
              </Link>
              <Link to="/despensa" className="btn btnGhost">
                Ver la despensa
              </Link>
              <a href="#como-funciona" className="btn btnGhost">
                Ver cómo funciona
              </a>
            </div>
          </div>

          {/* Bloque visual */}
          <div style={{ display: "grid", gap: "var(--space-4)" }}>
            <div className="card" style={{ padding: 0, overflow: "hidden", borderRadius: "var(--radius-lg)" }}>
              <img
                src={heroWide}
                alt="Persona cocinando mientras consulta un asistente en una tablet"
                style={{ width: "100%", height: 220, objectFit: "cover", display: "block" }}
              />
            </div>

            <div
              className="card"
              style={{
                padding: 0,
                overflow: "hidden",
                borderRadius: "var(--radius-lg)",
                maxWidth: 420,
                justifySelf: "end",
              }}
            >
              <img
                src={familyVertical}
                alt="Familia comiendo en la mesa"
                style={{ width: "100%", height: 260, objectFit: "cover", display: "block" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* QUÉ PUEDES HACER */}
      <section id="como-funciona" style={{ display: "grid", gap: "var(--space-5)" }}>
        <h2 style={{ fontSize: "var(--text-2xl)", margin: 0 }}>Qué puedes hacer aquí</h2>

        <div className="grid2" style={{ alignItems: "stretch", gap: "var(--space-6)" }}>
          <div className="card" style={{ padding: "var(--space-7)", height: "100%" }}>
            <div style={{ display: "grid", gap: "var(--space-4)", height: "100%" }}>
              <div style={{ display: "grid", gap: "var(--space-2)" }}>
                <h3 style={{ fontSize: "var(--text-xl)", margin: 0 }}>Generar una receta con lo que tienes</h3>
                <p style={{ margin: 0, color: "var(--muted)", lineHeight: 1.7 }}>
                  Indica ingredientes, tiempo y porciones. Obtendrás una propuesta estructurada:
                  título, ingredientes, pasos y notas de cocina.
                </p>
              </div>

              <div style={{ marginTop: "auto" }}>
                <Link to="/chat" className="btn btnPrimary">
                  Probar el asistente
                </Link>
              </div>
            </div>
          </div>

          <div className="card" style={{ padding: "var(--space-7)", height: "100%" }}>
            <div style={{ display: "grid", gap: "var(--space-4)", height: "100%" }}>
              <div style={{ display: "grid", gap: "var(--space-2)" }}>
                <h3 style={{ fontSize: "var(--text-xl)", margin: 0 }}>Consultar la Despensa</h3>
                <p style={{ margin: 0, color: "var(--muted)", lineHeight: 1.7 }}>
                  Biblioteca curada de ingredientes con combinaciones habituales y valores nutricionales
                  orientativos por 100 g. Base para futuras fases con endpoints.
                </p>
              </div>

              <div style={{ marginTop: "auto" }}>
                <Link to="/despensa" className="btn btnGhost">
                  Abrir Despensa
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EDITORIAL / ÉTICA */}
      <section className="card" style={{ padding: "var(--space-8)" }}>
        <div className="grid2" style={{ alignItems: "stretch", gap: "var(--space-6)" }}>
          <div style={{ display: "grid", gap: "var(--space-4)" }}>
            <h2 style={{ fontSize: "var(--text-2xl)", margin: 0 }}>IA, pero con criterio</h2>
            <p style={{ margin: 0, color: "var(--muted)", lineHeight: 1.7 }}>
              Este proyecto entiende la IA como asistente: apoya la creación de contenidos y la exploración,
              pero las decisiones se toman de forma humana. El foco está en diseñar prompts, iterar,
              revisar resultados y documentar el proceso.
            </p>

            <div style={{ marginTop: "auto", display: "flex", gap: "var(--space-3)", flexWrap: "wrap" }}>
              <Link to="/filosofia" className="btn btnGhost">
                Leer la filosofía
              </Link>
            </div>
          </div>

          <div className="card" style={{ padding: "var(--space-7)", boxShadow: "none", height: "100%" }}>
            <div style={{ display: "grid", gap: "var(--space-4)", height: "100%" }}>
              <div style={{ display: "grid", gap: "var(--space-2)" }}>
                <h3 style={{ fontSize: "var(--text-xl)", margin: 0 }}>Qué verás en el asistente</h3>
                <p style={{ margin: 0, color: "var(--muted)", lineHeight: 1.7 }}>
                  Respuestas estructuradas y consistentes. El objetivo es que el resultado sea legible,
                  ejecutable y estéticamente claro, incluso siendo un prototipo.
                </p>
              </div>

              <div style={{ marginTop: "auto", display: "flex", gap: "var(--space-3)", flexWrap: "wrap" }}>
                <Link to="/chat" className="btn btnPrimary">
                  Probar ahora
                </Link>
                <Link to="/despensa" className="btn btnGhost">
                  Inspirarme con ingredientes
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
