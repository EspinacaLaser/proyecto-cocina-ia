// src/services/assistant/output/composeWarnings.js

export function composeWarnings({ compat }) {
  const out = [];
  if (compat?.warnings?.length) out.push(...compat.warnings);

  if (compat?.level === "baja" || compat?.level === "muy baja") {
    out.push("Si el resultado no te convence, añade acidez (limón/vinagre) o umami (setas/caldo) para construir coherencia.");
  }

  return out.slice(0, 5);
}
