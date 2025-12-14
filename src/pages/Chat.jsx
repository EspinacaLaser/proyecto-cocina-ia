import { Link } from "react-router-dom";

function Chat() {
  return (
    <div style={{ display: "grid", gap: "var(--space-8)" }}>
      <section className="card" style={{ padding: "var(--space-8)" }}>
        <div className="reading" style={{ display: "grid", gap: "var(--space-3)" }}>
          <h1 style={{ fontSize: "var(--text-2xl)" }}>Asistente culinario</h1>
          <p style={{ fontSize: "var(--text-md)" }}>
            Prototipo guiado: selecciona un modo y define parámetros. En la siguiente fase
            construiremos el flujo de conversación y la generación de resultados.
          </p>

          <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap" }}>
            <span className="badge">Receta</span>
            <span className="badge">Sustitución</span>
            <span className="badge">Reinterpretación</span>
          </div>
        </div>
      </section>

      <section className="grid2">
        {/* Panel de entrada */}
        <div className="card" style={{ padding: "var(--space-6)" }}>
          <h2 style={{ fontSize: "var(--text-xl)" }}>Parámetros</h2>
          <p style={{ marginTop: "var(--space-2)" }}>
            Esta interfaz está pensada para evitar prompts “mega” y mantener control creativo.
          </p>

          <div style={{ marginTop: "var(--space-6)", display: "grid", gap: "var(--space-4)" }}>
            <div style={{ display: "grid", gap: "var(--space-2)" }}>
              <label style={{ fontWeight: 700, fontSize: "var(--text-sm)" }}>Ingredientes</label>
              <input
                placeholder="Ej. tomate, pasta, ajo"
                style={{
                  padding: "var(--space-3)",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid var(--border)",
                  fontSize: "var(--text-md)",
                }}
              />
              <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap" }}>
                <span className="badge">rápido</span>
                <span className="badge">despensa</span>
                <span className="badge">estacional</span>
              </div>
            </div>

            <div style={{ display: "grid", gap: "var(--space-2)" }}>
              <label style={{ fontWeight: 700, fontSize: "var(--text-sm)" }}>Tiempo</label>
              <select
                style={{
                  padding: "var(--space-3)",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid var(--border)",
                  fontSize: "var(--text-md)",
                  background: "white",
                }}
                defaultValue="15"
              >
                <option value="10">10 min</option>
                <option value="15">15 min</option>
                <option value="30">30 min</option>
                <option value="45">45 min</option>
              </select>
            </div>

            <div style={{ display: "grid", gap: "var(--space-2)" }}>
              <label style={{ fontWeight: 700, fontSize: "var(--text-sm)" }}>Restricciones</label>
              <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap" }}>
                <span className="badge">vegetariano</span>
                <span className="badge">vegano</span>
                <span className="badge">sin gluten</span>
              </div>
            </div>

            <button className="btn btnPrimary" type="button">
              Generar propuesta
            </button>
          </div>
        </div>

        {/* Panel de salida (mock) */}
        <div className="card" style={{ padding: "var(--space-6)" }}>
          <h2 style={{ fontSize: "var(--text-xl)" }}>Vista previa</h2>
          <p style={{ marginTop: "var(--space-2)" }}>
            Aquí aparecerá la respuesta estructurada del asistente (título, ingredientes y pasos).
          </p>

          <div style={{ marginTop: "var(--space-6)", display: "grid", gap: "var(--space-4)" }}>
            <div className="card" style={{ padding: "var(--space-6)", boxShadow: "none" }}>
              <h3 style={{ fontSize: "var(--text-xl)" }}>Pasta al ajo con tomate confitado</h3>
              <div style={{ marginTop: "var(--space-3)", display: "flex", gap: "var(--space-2)", flexWrap: "wrap" }}>
                <span className="badge">15 min</span>
                <span className="badge">mediterránea</span>
                <span className="badge" style={{ color: "var(--accent-2)" }}>
                  vegetal
                </span>
              </div>

              <hr />

              <p style={{ color: "var(--muted)" }}>
                En la siguiente fase, esta tarjeta se generará dinámicamente a partir de los parámetros.
              </p>
            </div>

            <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap" }}>
              <Link to="/" className="btn btnGhost">
                Volver a inicio
              </Link>
              <button className="btn" type="button">
                Guardar (próximamente)
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Chat;
