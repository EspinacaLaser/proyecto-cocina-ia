import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { generateSuggestion } from "../services/chatEngine";

const MODES = [
  { key: "recipe", label: "Receta" },
  { key: "substitute", label: "Sustitución" },
  { key: "remix", label: "Reinterpretación" },
];

const RESTRICTIONS = ["vegetariano", "vegano", "sin gluten"];

const STORAGE_KEY = "cocinaIA_history_v1";

function loadHistory() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveHistory(items) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // si el storage falla, no bloqueamos la app
  }
}

function Chat() {
  const [mode, setMode] = useState("recipe");
  const [ingredientsText, setIngredientsText] = useState("");
  const [time, setTime] = useState("15");
  const [restrictions, setRestrictions] = useState([]);

  const [history, setHistory] = useState(() => loadHistory());
  const [result, setResult] = useState(() => history?.[0] ?? null);

  // Mantener un resultado visible (si hay historial)
  useEffect(() => {
    if (!result && history.length > 0) setResult(history[0]);
  }, [history, result]);

  const isGenerateDisabled = useMemo(() => {
    // Permitimos generar aunque no haya ingredientes (el engine lo soporta),
    // pero podemos exigir algo mínimo en modo sustitución para que tenga sentido.
    if (mode === "substitute") {
      return ingredientsText.trim().length === 0;
    }
    return false;
  }, [mode, ingredientsText]);

  function toggleRestriction(value) {
    setRestrictions((prev) =>
      prev.includes(value) ? prev.filter((x) => x !== value) : [...prev, value]
    );
  }

  function onGenerate() {
    const payload = {
      mode,
      ingredientsText,
      time: Number(time),
      restrictions,
    };

    const suggestion = generateSuggestion(payload);
    setResult(suggestion);

    const nextHistory = [suggestion, ...history].slice(0, 10);
    setHistory(nextHistory);
    saveHistory(nextHistory);
  }

  function onReset() {
    setMode("recipe");
    setIngredientsText("");
    setTime("15");
    setRestrictions([]);
    setResult(null);
  }

  function onClearHistory() {
    setHistory([]);
    setResult(null);
    saveHistory([]);
  }

  return (
    <div style={{ display: "grid", gap: "var(--space-8)" }}>
      {/* Intro */}
      <section className="card" style={{ padding: "var(--space-8)" }}>
        <div className="reading" style={{ display: "grid", gap: "var(--space-3)" }}>
          <h1 style={{ fontSize: "var(--text-2xl)" }}>Asistente culinario</h1>
          <p style={{ fontSize: "var(--text-md)" }}>
            Prototipo guiado: eliges un modo y parámetros. El asistente genera una propuesta
            estructurada y activa un recurso visual coherente.
          </p>

          <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap" }}>
            <span className="badge">Sin base de datos</span>
            <span className="badge">Control humano</span>
            <span className="badge">Respuestas estructuradas</span>
          </div>
        </div>
      </section>

      <section className="grid2">
        {/* Panel de entrada */}
        <div className="card" style={{ padding: "var(--space-6)" }}>
          <h2 style={{ fontSize: "var(--text-xl)" }}>Parámetros</h2>
          <p style={{ marginTop: "var(--space-2)" }}>
            Evitamos prompts genéricos: el sistema trabaja con entradas concretas y coherentes.
          </p>

          {/* Modo */}
          <div style={{ marginTop: "var(--space-6)", display: "grid", gap: "var(--space-3)" }}>
            <label style={{ fontWeight: 700, fontSize: "var(--text-sm)" }}>Modo</label>
            <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap" }}>
              {MODES.map((m) => {
                const active = mode === m.key;
                return (
                  <button
                    key={m.key}
                    type="button"
                    className={`btn ${active ? "btnPrimary" : ""}`}
                    onClick={() => setMode(m.key)}
                  >
                    {m.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Ingredientes */}
          <div style={{ marginTop: "var(--space-6)", display: "grid", gap: "var(--space-2)" }}>
            <label style={{ fontWeight: 700, fontSize: "var(--text-sm)" }}>
              Ingredientes{" "}
              <span style={{ color: "var(--muted)", fontWeight: 600 }}>
                {mode === "substitute" ? "(obligatorio)" : "(opcional)"}
              </span>
            </label>

            <input
              value={ingredientsText}
              onChange={(e) => setIngredientsText(e.target.value)}
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

          {/* Tiempo */}
          <div style={{ marginTop: "var(--space-6)", display: "grid", gap: "var(--space-2)" }}>
            <label style={{ fontWeight: 700, fontSize: "var(--text-sm)" }}>Tiempo</label>
            <select
              value={time}
              onChange={(e) => setTime(e.target.value)}
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

          {/* Restricciones */}
          <div style={{ marginTop: "var(--space-6)", display: "grid", gap: "var(--space-2)" }}>
            <label style={{ fontWeight: 700, fontSize: "var(--text-sm)" }}>Restricciones</label>
            <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap" }}>
              {RESTRICTIONS.map((r) => {
                const active = restrictions.includes(r);
                return (
                  <button
                    key={r}
                    type="button"
                    className={`btn ${active ? "btnPrimary" : ""}`}
                    onClick={() => toggleRestriction(r)}
                  >
                    {r}
                  </button>
                );
              })}
            </div>

            {restrictions.includes("vegano") && restrictions.includes("vegetariano") && (
              <p style={{ marginTop: "var(--space-2)" }}>
                Nota: “vegano” ya implica “vegetariano”. Puedes dejar ambos o quedarte con “vegano”.
              </p>
            )}
          </div>

          {/* Acciones */}
          <div
            style={{
              marginTop: "var(--space-8)",
              display: "flex",
              gap: "var(--space-3)",
              flexWrap: "wrap",
            }}
          >
            <button
              className="btn btnPrimary"
              type="button"
              onClick={onGenerate}
              disabled={isGenerateDisabled}
              style={isGenerateDisabled ? { opacity: 0.6, cursor: "not-allowed" } : undefined}
            >
              Generar propuesta
            </button>

            <button className="btn btnGhost" type="button" onClick={onReset}>
              Reiniciar
            </button>

            <button className="btn" type="button" onClick={onClearHistory}>
              Borrar historial
            </button>

            <Link to="/" className="btn btnGhost">
              Volver a inicio
            </Link>
          </div>

          {/* Historial */}
          <div style={{ marginTop: "var(--space-8)", display: "grid", gap: "var(--space-3)" }}>
            <h3 style={{ fontSize: "var(--text-lg)" }}>Historial</h3>
            {history.length === 0 ? (
              <p>No hay generaciones todavía. Crea una propuesta para verla aquí.</p>
            ) : (
              <div style={{ display: "grid", gap: "var(--space-2)" }}>
                {history.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className="btn"
                    onClick={() => setResult(item)}
                    style={{
                      justifyContent: "space-between",
                      width: "100%",
                      textAlign: "left",
                    }}
                  >
                    <span style={{ fontWeight: 700 }}>{item.title}</span>
                    <span style={{ color: "var(--muted)", fontSize: "var(--text-sm)" }}>
                      {new Date(item.createdAt).toLocaleString()}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Panel de salida */}
        <div className="card" style={{ padding: "var(--space-6)" }}>
          <h2 style={{ fontSize: "var(--text-xl)" }}>Resultado</h2>
          <p style={{ marginTop: "var(--space-2)" }}>
            Respuesta estructurada + recurso visual asociado al modo.
          </p>

          <div style={{ marginTop: "var(--space-6)" }}>
            {!result ? (
              <div className="card" style={{ padding: "var(--space-6)", boxShadow: "none" }}>
                <h3 style={{ fontSize: "var(--text-xl)" }}>Sin resultado todavía</h3>
                <p style={{ marginTop: "var(--space-2)" }}>
                  Selecciona parámetros y pulsa <strong>Generar propuesta</strong>.
                </p>
              </div>
            ) : (
              <div className="card" style={{ overflow: "hidden", boxShadow: "none" }}>
                {/* Imagen */}
                <div style={{ borderBottom: "1px solid var(--border)" }}>
                  <img
                    src={result.image?.imageUrl}
                    alt={result.image?.alt || "Imagen asociada"}
                    style={{ width: "100%", height: "220px", objectFit: "cover" }}
                  />
                </div>

                <div style={{ padding: "var(--space-6)", display: "grid", gap: "var(--space-4)" }}>
                  <div style={{ display: "grid", gap: "var(--space-2)" }}>
                    <h3 style={{ fontSize: "var(--text-2xl)" }}>{result.title}</h3>

                    <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap" }}>
                      {result.tags?.map((t) => (
                        <span key={t} className="badge">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Ingredientes si hay */}
                  {Array.isArray(result.ingredients) && result.ingredients.length > 0 && (
                    <div className="card" style={{ padding: "var(--space-4)", boxShadow: "none" }}>
                      <h4 style={{ fontFamily: "var(--font-serif)", margin: 0 }}>Ingredientes</h4>
                      <ul style={{ margin: "var(--space-3) 0 0", paddingLeft: "1.2rem" }}>
                        {result.ingredients.map((ing) => (
                          <li key={ing} style={{ color: "var(--muted)" }}>
                            {ing}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Pasos */}
                  {Array.isArray(result.steps) && result.steps.length > 0 && (
                    <div className="card" style={{ padding: "var(--space-4)", boxShadow: "none" }}>
                      <h4 style={{ fontFamily: "var(--font-serif)", margin: 0 }}>Pasos</h4>
                      <ol style={{ margin: "var(--space-3) 0 0", paddingLeft: "1.2rem" }}>
                        {result.steps.map((s, idx) => (
                          <li key={idx} style={{ color: "var(--muted)", marginBottom: "0.4rem" }}>
                            {s}
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}

                  {/* Nota final */}
                  {result.notes && (
                    <div style={{ display: "grid", gap: "var(--space-2)" }}>
                      <span className="badge" style={{ width: "fit-content" }}>
                        Nota del asistente
                      </span>
                      <p style={{ color: "var(--muted)" }}>{result.notes}</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Chat;
