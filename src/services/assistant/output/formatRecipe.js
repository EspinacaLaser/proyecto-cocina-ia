// src/services/assistant/output/formatRecipe.js

function roundQty(q) {
  if (!Number.isFinite(q)) return null;
  if (q >= 100) return Math.round(q);
  if (q >= 10) return Math.round(q * 10) / 10;
  return Math.round(q * 100) / 100;
}

function formatIngredient(it) {
  const qty = roundQty(it.qty);
  const unit = it.unit ? it.unit : "";
  const prefix = qty != null ? `${qty}${unit ? " " + unit : ""}` : "";
  return `${prefix} ${it.name}`.trim();
}

export function formatRecipe({ title, ingredients, steps, notes, warnings, time, servings }) {
  return {
    title,
    ingredients: ingredients.map(formatIngredient),
    steps,
    notes,
    warnings,
    meta: { time, servings },
  };
}
