import { Link } from "react-router-dom";
import ModeSelector from "../components/chat/ModeSelector";
import RestrictionSelector from "../components/chat/RestrictionSelector";
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
            <span className="badge">Coherencia visual</span>
          </div>
        </div>
      </section>

      <section className="grid2">
        <div className="card" style={{ padding: "var(--space-6)" }}>
          <h2 style={{ fontSize: "var(--text-xl)" }}>Parámetros</h2>
          <p style={{ marginTop: "var(--space-2)" }}>
            Evitamos prompts genéricos: el sistema responde a criterios concretos.
          </p>

          <div style={{ marginTop: "var(--space-6)", display: "grid", gap: "var(--space-6)" }}>
            <ModeSelector value={a.mode} onChange={a.setMode} />

            <div style={{ display: "grid", gap: "var(--space-2)" }}>
              <label style={{ fontWeight: 700, fontSize: "var(--text-sm)" }}>
                Ingredientes <span style={{ color: "var(--muted)", fontWeight: 600 }}>
                  {a.mode === "substitute" ? "(obligatorio)" : "(opcional)"}
                </span>
              </label>
              <input
                value={a.ingredientsText}
                onChange={(e) => a.setIngredientsText(e.target.value)}
                placeholder="Ej. tomate, pasta, ajo"
                style={{
                  padding: "var(--space-3)",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid var(--border)",
                  fontSize: "var(--text-md)",
                  background: "white",
                }}
              />
              <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap" }}>
                <span className="badge">despensa</span>
                <span className="badge">estacional</span>
                <span className="badge">simple</span>
              </div>
            </div>

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
                <option value="30">30 min</option>
                <option value="45">45 min</option>
              </select>
            </div>

            <RestrictionSelector values={a.restrictions} onToggle={a.toggleRestriction} />

            <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap" }}>
              <button
                className="btn btnPrimary"
                type="button"
                onClick={a.generate}
                disabled={a.isGenerateDisabled}
                style={a.isGenerateDisabled ? { opacity: 0.6, cursor: "not-allowed" } : undefined}
              >
                Generar propuesta
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
            Propuesta estructurada con variabilidad real según ingredientes, tiempo y restricciones.
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
