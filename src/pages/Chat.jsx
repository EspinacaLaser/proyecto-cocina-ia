import { Link } from "react-router-dom";
import HistoryList from "../components/chat/HistoryList";
import ResultCard from "../components/chat/ResultCard";
import { useAssistant } from "../hooks/useAssistant";

function Chat() {
  const a = useAssistant();

  return (
    <div style={{ display: "grid", gap: "var(--space-8)" }}>
      <section className="card" style={{ padding: "var(--space-8)" }}>
        <div className="reading" style={{ display: "grid", gap: "var(--space-3)" }}>
          <h1 style={{ fontSize: "var(--text-2xl)" }}>Asistente culinario</h1>
          <p style={{ fontSize: "var(--text-md)" }}>
            Prototipo híbrido: entradas guiadas + motor culinario con reglas y plantillas.
            Control humano, coherencia y límites explícitos.
          </p>
          <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap" }}>
            <span className="badge">Sin base de datos</span>
            <span className="badge">Respuestas estructuradas</span>
            <span className="badge">Escalable</span>
          </div>
        </div>
      </section>

      <section className="grid2">
        <div className="card" style={{ padding: "var(--space-6)" }}>
          <h2 style={{ fontSize: "var(--text-xl)" }}>Parámetros</h2>
          <p style={{ marginTop: "var(--space-2)" }}>
            Escribe ingredientes (mejor si incluyes cantidades) y ajusta tiempo/porciones.
          </p>

          <div style={{ marginTop: "var(--space-6)", display: "grid", gap: "var(--space-6)" }}>
            <div style={{ display: "grid", gap: "var(--space-2)" }}>
              <label style={{ fontWeight: 700, fontSize: "var(--text-sm)" }}>
                Ingredientes <span style={{ color: "var(--muted)", fontWeight: 600 }}>(obligatorio)</span>
              </label>
              <input
                value={a.ingredientsText}
                onChange={(e) => a.setIngredientsText(e.target.value)}
                placeholder="Ej. 200 g pasta, 1/2 cebolla, 2 cdas aceite, tomate"
                style={{
                  padding: "var(--space-3)",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid var(--border)",
                  fontSize: "var(--text-md)",
                  background: "white",
                }}
              />
              <p style={{ marginTop: "var(--space-1)", color: "var(--muted)", fontSize: "var(--text-sm)" }}>
                Consejo: añade cantidades y unidades para resultados más precisos.
              </p>
            </div>

            <div className="grid2" style={{ gap: "var(--space-4)" }}>
              <div style={{ display: "grid", gap: "var(--space-2)" }}>
                <label style={{ fontWeight: 700, fontSize: "var(--text-sm)" }}>Tiempo</label>
                <select
                  value={a.time}
                  onChange={(e) => a.setTime(e.target.value)}
                  style={{
                    padding: "var(--space-3)",
                    borderRadius: "var(--radius-md)",
                    border: "1px solid var(--border)",
                    fontSize: "var(--text-md)",
                    background: "white",
                  }}
                >
                  <option value="10">10 min</option>
                  <option value="15">15 min</option>
                  <option value="20">20 min</option>
                  <option value="30">30 min</option>
                  <option value="45">45 min</option>
                </select>
              </div>

              <div style={{ display: "grid", gap: "var(--space-2)" }}>
                <label style={{ fontWeight: 700, fontSize: "var(--text-sm)" }}>Porciones</label>
                <select
                  value={a.servings}
                  onChange={(e) => a.setServings(e.target.value)}
                  style={{
                    padding: "var(--space-3)",
                    borderRadius: "var(--radius-md)",
                    border: "1px solid var(--border)",
                    fontSize: "var(--text-md)",
                    background: "white",
                  }}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
              </div>
            </div>

            <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap" }}>
              <button
                className="btn btnPrimary"
                type="button"
                onClick={a.generate}
                disabled={a.isGenerateDisabled}
                style={a.isGenerateDisabled ? { opacity: 0.6, cursor: "not-allowed" } : undefined}
              >
                Generar receta
              </button>
              <button className="btn btnGhost" type="button" onClick={a.reset}>
                Reiniciar
              </button>
              <Link to="/" className="btn btnGhost">
                Volver a inicio
              </Link>
            </div>

            <HistoryList items={a.history} onSelect={a.selectFromHistory} onClear={a.clearHistory} />
          </div>
        </div>

        <div className="card" style={{ padding: "var(--space-6)" }}>
          <h2 style={{ fontSize: "var(--text-xl)" }}>Resultado</h2>
          <p style={{ marginTop: "var(--space-2)" }}>
            Receta estructurada que varía según ingredientes, tiempo y porciones.
          </p>
          <div style={{ marginTop: "var(--space-6)" }}>
            <ResultCard result={a.result} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Chat;
