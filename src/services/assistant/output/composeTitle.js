// src/services/assistant/output/composeTitle.js

import { CATEGORIES } from "../knowledge/lexicon";

function findFirst(items, cat) {
  return items.find((x) => Array.isArray(x.category) && x.category.includes(cat))?.name || null;
}

export function composeTitle({ items, technique, dishChoice, time, servings }) {
  const main =
    findFirst(items, CATEGORIES.FISH) ||
    findFirst(items, CATEGORIES.MEAT) ||
    findFirst(items, CATEGORIES.EGG) ||
    findFirst(items, CATEGORIES.LEGUME) ||
    findFirst(items, CATEGORIES.CARB) ||
    findFirst(items, CATEGORIES.VEG) ||
    "tu despensa";

  const style =
    technique === "roast" ? "asado" :
    technique === "stew" ? "guiso" :
    technique === "emulsion" ? "jugoso y ligado" :
    technique === "stir-fry" ? "salteado" :
    technique === "saute-and-finish" ? "a la sartén" :
    "a la sartén";

  const base =
    dishChoice?.dish?.includes("carb") ? "Plato principal" :
    dishChoice?.dish?.includes("salad") ? "Ensalada templada" :
    dishChoice?.dish?.includes("stew") ? "Cuchara rápida" :
    "Receta guiada";

  return `${base} ${style} con ${main} · ${servings} raciones · ${time} min`;
}
