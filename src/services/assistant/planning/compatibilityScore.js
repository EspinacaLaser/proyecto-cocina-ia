// src/services/assistant/planning/compatibilityScore.js

import { CATEGORIES } from "../knowledge/lexicon";

// Utilidad
function hasCat(item, cat) {
  return Array.isArray(item.category) && item.category.includes(cat);
}

function anyHas(items, cat) {
  return items.some((it) => hasCat(it, cat));
}

function listNames(items, predicate, limit = 6) {
  return items.filter(predicate).map((x) => x.name).slice(0, limit);
}

// Reglas de compatibilidad (prototipo): scoring por “choques” y “sinergias”.
// No pretende ser culinaria universal: pretende tener criterio y explicarlo.
export function scoreCompatibility(taggedIngredients) {
  const items = taggedIngredients || [];

  const ctx = {
    hasFish: anyHas(items, CATEGORIES.FISH),
    hasMeat: anyHas(items, CATEGORIES.MEAT),
    hasCocoa: anyHas(items, CATEGORIES.COCOA),
    hasSweet: anyHas(items, CATEGORIES.SWEET),
    hasDairy: anyHas(items, CATEGORIES.DAIRY),
    hasAcid: anyHas(items, CATEGORIES.ACID),
    hasHerb: anyHas(items, CATEGORIES.HERB),
    hasAromatic: anyHas(items, CATEGORIES.AROMATIC),
    hasUmami: anyHas(items, CATEGORIES.UMAMI),
    hasCarb: anyHas(items, CATEGORIES.CARB),
    hasLegume: anyHas(items, CATEGORIES.LEGUME),
    hasSpice: anyHas(items, CATEGORIES.SPICE),
  };

  let score = 100;
  const warnings = [];
  const suggestions = [];

  // --- Choques fuertes ---
  if (ctx.hasFish && ctx.hasCocoa) {
    score -= 45;
    const fish = listNames(items, (x) => hasCat(x, CATEGORIES.FISH)).join(", ");
    const cocoa = listNames(items, (x) => hasCat(x, CATEGORIES.COCOA)).join(", ");
    warnings.push(
      `Compatibilidad baja: combinar pescado (${fish || "pescado"}) con cacao/chocolate (${cocoa || "cacao"}) suele funcionar mal en cocina cotidiana.`
    );
    suggestions.push(
      "Reconducción: separa en dos preparaciones (plato salado + postre) o cambia el cacao por pimentón/umami (tomate concentrado, setas)."
    );
  }

  if ((ctx.hasMeat || ctx.hasFish) && ctx.hasSweet && !ctx.hasAcid) {
    score -= 20;
    warnings.push(
      "Atención: hay perfil dulce con proteína sin un contrapunto ácido. Suele resultar pesado o extraño."
    );
    suggestions.push(
      "Reconducción: añade acidez (limón/vinagre) o convierte lo dulce en un glaseado equilibrado con ácido."
    );
  }

  // --- Coherencia mínima de plato ---
  if (!ctx.hasAromatic && !ctx.hasHerb && !ctx.hasSpice) {
    score -= 12;
    warnings.push("La base aromática es débil: faltan aromáticos/hierbas/especias que den identidad al plato.");
    suggestions.push("Sugerencia: añade ajo o cebolla y una hierba fresca (perejil/albahaca) o una especia suave.");
  }

  if (ctx.hasCarb && !ctx.hasAcid && !ctx.hasUmami) {
    score -= 10;
    warnings.push("Carbohidrato sin acidez ni umami: el resultado puede quedar plano.");
    suggestions.push("Sugerencia: incorpora tomate, limón, vinagre suave o un elemento umami (setas, caldo, soja).");
  }

  // --- Sinergias (sube score ligeramente) ---
  if (ctx.hasAromatic) score += 4;
  if (ctx.hasAcid) score += 4;
  if (ctx.hasHerb) score += 3;
  if (ctx.hasUmami) score += 4;
  if (ctx.hasSpice) score += 2;

  // Normaliza
  score = Math.max(0, Math.min(100, score));

  // Nivel interpretativo (para UI / narrativa)
  const level =
    score >= 80 ? "alta" :
    score >= 60 ? "media" :
    score >= 40 ? "baja" : "muy baja";

  return { score, level, warnings, suggestions, ctx };
}
