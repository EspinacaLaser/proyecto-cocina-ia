import { useMemo, useState } from "react";
import { INGREDIENTS } from "../data/pantry/ingredients";
import IngredientCard from "../components/pantry/IngredientCard";

function Despensa() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("Todas");

  const categories = useMemo(() => {
    const set = new Set(INGREDIENTS.map((x) => x.category));
    return ["Todas", ...Array.from(set).sort()];
  }, []);

const filtered = useMemo(() => {
  const query = q.trim().toLowerCase();

  return INGREDIENTS.filter((x) => {
    const okCat = cat === "Todas" ? true : x.category === cat;
    if (!okCat) return false;

    if (!query) return true;

    // Búsqueda estricta: SOLO NOMBRE
    return x.name.toLowerCase().includes(query);
  });
}, [q, cat]);


  return (
    <div style={{ display: "grid", gap: "var(--space-8)" }}>
      <section className="card" style={{ padding: "var(--space-8)" }}>
        <h1 style={{ fontSize: "var(--text-2xl)" }}>Despensa</h1>
        <p style={{ marginTop: "var(--space-3)", color: "var(--muted)" }}>
          Biblioteca curada (20 ingredientes) con combinaciones y nutrición por 100 g. En futuras fases,
          esta información podrá venir de una base de datos vía endpoints.
        </p>

        <div style={{ marginTop: "var(--space-6)", display: "grid", gap: "var(--space-4)" }}>
          <div className="grid2" style={{ gap: "var(--space-4)" }}>
            <div style={{ display: "grid", gap: "var(--space-2)" }}>
              <label style={{ fontWeight: 700, fontSize: "var(--text-sm)" }}>Buscar</label>
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Busca por nombre (ej. cebolla, tomate, comino)…"
                style={{
                  padding: "var(--space-3)",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid var(--border)",
                  fontSize: "var(--text-md)",
                  background: "white",
                }}
              />
            </div>

            <div style={{ display: "grid", gap: "var(--space-2)" }}>
              <label style={{ fontWeight: 700, fontSize: "var(--text-sm)" }}>Categoría</label>
              <select
                value={cat}
                onChange={(e) => setCat(e.target.value)}
                style={{
                  padding: "var(--space-3)",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid var(--border)",
                  fontSize: "var(--text-md)",
                  background: "white",
                }}
              >
                {categories.map((c) => (
                  <option key={c} value={c}
                  >{c}</option>
                  
                ))}
              </select>
            </div>
          </div>

          <p style={{ margin: 0, color: "var(--muted)", fontSize: "var(--text-sm)" }}>
  Nota: valores nutricionales orientativos por 100 g (varían según variedad y preparación). Basado en referencias tipo USDA/BEDCA.
</p>

        </div>
      </section>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "var(--space-6)",
        }}
      >
        {filtered.map((it) => (
  <IngredientCard key={it.id} item={it} />
))}

      </section>
    </div>
  );
}

export default Despensa;
