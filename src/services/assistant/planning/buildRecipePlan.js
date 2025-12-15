// src/services/assistant/planning/buildRecipePlan.js

import { CATEGORIES } from "../knowledge/lexicon";

function has(items, cat) {
  return items.some((x) => Array.isArray(x.category) && x.category.includes(cat));
}

function pick(items, predicate) {
  return items.filter(predicate);
}

function cats(i) {
  return Array.isArray(i?.category) ? i.category : [];
}

export function buildRecipePlan({ dishChoice, technique, timing, items, time, compat }) {
  const t = Number(time || 20);

  const aromatics = pick(items, (i) => cats(i).includes(CATEGORIES.AROMATIC));
  const herbs = pick(items, (i) => cats(i).includes(CATEGORIES.HERB));
  const acids = pick(items, (i) => cats(i).includes(CATEGORIES.ACID));
  const fats = pick(items, (i) => cats(i).includes(CATEGORIES.FAT) || String(i?.name || "").includes("aceite"));
  const carbs = pick(items, (i) => cats(i).includes(CATEGORIES.CARB));
  const vegs = pick(items, (i) => cats(i).includes(CATEGORIES.VEG));
  const legumes = pick(items, (i) => cats(i).includes(CATEGORIES.LEGUME));
  const proteins = pick(items, (i) =>
    cats(i).includes(CATEGORIES.MEAT) ||
    cats(i).includes(CATEGORIES.FISH) ||
    cats(i).includes(CATEGORIES.EGG)
  );
  const spices = pick(items, (i) => cats(i).includes(CATEGORIES.SPICE));
  const dairy = pick(items, (i) => cats(i).includes(CATEGORIES.DAIRY));

  // Técnica final: la decide chooseTechnique; si no viene, fallback por dishChoice+tiempo
  const tech =
    technique ||
    (() => {
      if (dishChoice?.dish === "quick-carb") return "emulsion";
      if (dishChoice?.dish === "carb-bowl") return t >= 30 ? "saute-and-finish" : "emulsion";
      if (dishChoice?.dish === "legume-stew") return "stew";
      if (dishChoice?.dish === "legume-salad") return "warm-salad";
      if (dishChoice?.dish === "stir-fry") return "stir-fry";
      if (dishChoice?.dish === "veg-roast" || dishChoice?.dish === "roast-pan") return "roast";
      if (dishChoice?.dish === "veg-skillet") return "saute";
      return t <= 20 ? "saute" : "saute-and-finish";
    })();

  // Intención narrativa (sin restrictions)
  const intention = (() => {
    if (compat?.level === "baja" || compat?.level === "muy baja") return "reconducir";
    if (has(items, CATEGORIES.UMAMI)) return "profundidad";
    if ((carbs.length || legumes.length) && (acids.length || herbs.length)) return "equilibrio";
    return "claridad";
  })();

  return {
    technique: tech,
    timing: timing || null,
    intention,
    groups: {
      aromatics,
      herbs,
      acids,
      fats,
      carbs,
      vegs,
      legumes,
      proteins,
      spices,
      dairy,
    },
    decisions: {
      finishWithAcid: acids.length > 0,
      finishWithHerbs: herbs.length > 0,
      useDairy: dairy.length > 0,
      prioritizeVeg: vegs.length > 0 && proteins.length === 0,
    },
  };
}
