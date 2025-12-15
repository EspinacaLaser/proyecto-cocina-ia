// src/services/assistant/planning/chooseDish.js

import { CATEGORIES } from "../knowledge/lexicon";

function has(items, cat) {
  return items.some((x) => Array.isArray(x.category) && x.category.includes(cat));
}

export function chooseDish(taggedIngredients, { time }) {
  const items = taggedIngredients || [];
  const t = Number(time || 20);

  const hasCarb = has(items, CATEGORIES.CARB);
  const hasLegume = has(items, CATEGORIES.LEGUME);
  const hasVeg = has(items, CATEGORIES.VEG);
  const hasProtein = has(items, CATEGORIES.FISH) || has(items, CATEGORIES.MEAT) || has(items, CATEGORIES.EGG);

  if (hasLegume) {
    if (t <= 15) return { dish: "legume-salad", rationale: "Legumbre + poco tiempo -> ensalada templada" };
    return { dish: "legume-stew", rationale: "Legumbre -> guiso rápido / ligado" };
  }

  if (hasCarb) {
    if (t <= 15) return { dish: "quick-carb", rationale: "Carbo + tiempo corto -> emulsión/salteado rápido" };
    return { dish: "carb-bowl", rationale: "Carbo + tiempo medio -> base + salsa + acabado" };
  }

  if (hasVeg && hasProtein) {
    if (t <= 20) return { dish: "stir-fry", rationale: "Verduras + proteína + rápido -> salteado" };
    return { dish: "roast-pan", rationale: "Verduras + proteína + más tiempo -> horno/plancha" };
  }

  if (hasVeg) {
    if (t <= 20) return { dish: "veg-skillet", rationale: "Verduras -> sartén, contraste y acabado" };
    return { dish: "veg-roast", rationale: "Verduras -> asado y acabado ácido" };
  }

  return { dish: "simple-plate", rationale: "Sin patrón claro -> plato simple guiado por técnica" };
}
