// src/services/assistant/planning/chooseTechnique.js

import { CATEGORIES } from "../knowledge/lexicon";

function has(items, cat) {
  return items.some((x) => x.category?.includes(cat));
}

export function chooseTechnique({ dishChoice, items, time }) {
  const t = Number(time || 20);

  const hasCarb = has(items, CATEGORIES.CARB);
  const hasLegume = has(items, CATEGORIES.LEGUME);
  const hasProtein = has(items, CATEGORIES.MEAT) || has(items, CATEGORIES.FISH) || has(items, CATEGORIES.EGG);
  const hasVeg = has(items, CATEGORIES.VEG);

  // Si el dishChoice ya trae intención fuerte
  if (dishChoice?.dish === "legume-stew") return "stew";
  if (dishChoice?.dish === "legume-salad") return "warm-salad";
  if (dishChoice?.dish === "stir-fry") return "stir-fry";
  if (dishChoice?.dish === "veg-roast" || dishChoice?.dish === "roast-pan") return "roast";
  if (dishChoice?.dish === "quick-carb") return "emulsion";

  // Heurística por tiempo
  if (t <= 15) {
    if (hasCarb) return "emulsion";
    return "stir-fry";
  }

  if (t <= 25) {
    if (hasLegume) return "stew";
    if (hasProtein && hasVeg) return "stir-fry";
    return "saute";
  }

  // Más tiempo
  if (hasVeg && !hasCarb) return "roast";
  if (hasCarb) return "saute-and-finish";

  return "saute-and-finish";
}
