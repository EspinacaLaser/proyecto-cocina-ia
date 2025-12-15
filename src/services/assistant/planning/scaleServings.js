// src/services/assistant/planning/scaleServings.js

import { CATEGORIES } from "../knowledge/lexicon";

// Defaults por ración (orientativos y razonables para prototipo)
const DEFAULTS_PER_SERVING = {
  carb_g: 90,          // pasta/arroz/quinoa...
  veg_g: 150,          // verduras
  protein_g: 140,      // carne/pescado
  legume_g: 120,       // legumbre cocida (aprox)
  fat_ml: 10,          // aceite (ml)
  dairy_ml: 60,        // leche/nata (ml)
  aromatic_g: 40,      // cebolla/ajo (g aprox)
  acid_ml: 8,          // vinagre/limón (ml aprox)
  spice_ml: 2,         // especias "ml equivalentes" (tsp/pizca aproximado)
};

function hasCat(item, cat) {
  return Array.isArray(item.category) && item.category.includes(cat);
}

function clampServings(n) {
  const x = Number(n);
  if (!Number.isFinite(x)) return 2;
  return Math.max(1, Math.min(8, Math.round(x)));
}

function sumQty(items, predicate) {
  return items
    .filter(predicate)
    .reduce((acc, it) => (Number.isFinite(it.qty) ? acc + it.qty : acc), 0);
}

function ensureQty(item, targetQty, unit = "g") {
  if (Number.isFinite(item.qty)) return item;
  return { ...item, qty: targetQty, unit, unitOriginal: unit };
}

// Convierte items parseados/taggeados en cantidades orientativas coherentes.
// - Respeta cantidades dadas por el usuario
// - Rellena las que faltan según categorías y porciones
export function scaleServings(taggedIngredients, servingsInput) {
  const servings = clampServings(servingsInput);
  const items = taggedIngredients.map((x) => ({ ...x }));

  // Objetivos por categoría
  const targetCarb = DEFAULTS_PER_SERVING.carb_g * servings;
  const targetVeg = DEFAULTS_PER_SERVING.veg_g * servings;
  const targetProtein = DEFAULTS_PER_SERVING.protein_g * servings;
  const targetLegume = DEFAULTS_PER_SERVING.legume_g * servings;

  // Sumas actuales (solo si el usuario dio qty)
  const curCarb = sumQty(items, (i) => hasCat(i, CATEGORIES.CARB) && i.unit === "g");
  const curVeg = sumQty(items, (i) => hasCat(i, CATEGORIES.VEG) && i.unit === "g");
  const curMeat = sumQty(items, (i) => hasCat(i, CATEGORIES.MEAT) && i.unit === "g");
  const curFish = sumQty(items, (i) => hasCat(i, CATEGORIES.FISH) && i.unit === "g");
  const curLegume = sumQty(items, (i) => hasCat(i, CATEGORIES.LEGUME) && i.unit === "g");

  // Rellena carbos si hay y faltan cantidades
  const carbItems = items.filter((i) => hasCat(i, CATEGORIES.CARB));
  if (carbItems.length) {
    const missing = carbItems.filter((i) => !Number.isFinite(i.qty));
    if (missing.length) {
      const need = Math.max(0, targetCarb - curCarb);
      const perItem = need > 0 ? Math.round(need / missing.length) : Math.round(targetCarb / carbItems.length);
      for (const it of missing) Object.assign(it, ensureQty(it, perItem, "g"));
    }
  }

  // Verduras
  const vegItems = items.filter((i) => hasCat(i, CATEGORIES.VEG));
  if (vegItems.length) {
    const missing = vegItems.filter((i) => !Number.isFinite(i.qty));
    if (missing.length) {
      const need = Math.max(0, targetVeg - curVeg);
      const perItem = need > 0 ? Math.round(need / missing.length) : Math.round(targetVeg / vegItems.length);
      for (const it of missing) Object.assign(it, ensureQty(it, perItem, "g"));
    }
  }

  // Proteína
  const proteinItems = items.filter((i) => hasCat(i, CATEGORIES.MEAT) || hasCat(i, CATEGORIES.FISH));
  if (proteinItems.length) {
    const missing = proteinItems.filter((i) => !Number.isFinite(i.qty));
    if (missing.length) {
      const curProt = curMeat + curFish;
      const need = Math.max(0, targetProtein - curProt);
      const perItem = need > 0 ? Math.round(need / missing.length) : Math.round(targetProtein / proteinItems.length);
      for (const it of missing) Object.assign(it, ensureQty(it, perItem, "g"));
    }
  }

  // Legumbre
  const legumeItems = items.filter((i) => hasCat(i, CATEGORIES.LEGUME));
  if (legumeItems.length) {
    const missing = legumeItems.filter((i) => !Number.isFinite(i.qty));
    if (missing.length) {
      const need = Math.max(0, targetLegume - curLegume);
      const perItem = need > 0 ? Math.round(need / missing.length) : Math.round(targetLegume / legumeItems.length);
      for (const it of missing) Object.assign(it, ensureQty(it, perItem, "g"));
    }
  }

  // Aromáticos (si existen pero sin qty)
  const aromatics = items.filter((i) => hasCat(i, CATEGORIES.AROMATIC));
  for (const it of aromatics) {
    if (!Number.isFinite(it.qty)) Object.assign(it, ensureQty(it, Math.round(DEFAULTS_PER_SERVING.aromatic_g * servings), "g"));
  }

  // Grasas (aceite) si están y no tienen qty: ml
  const fats = items.filter((i) => hasCat(i, CATEGORIES.FAT) || i.name.includes("aceite"));
  for (const it of fats) {
    if (!Number.isFinite(it.qty)) Object.assign(it, ensureQty(it, Math.round(DEFAULTS_PER_SERVING.fat_ml * servings), "ml"));
  }

  // Ácidos (limón/vinagre) si están y no tienen qty: ml
  const acids = items.filter((i) => hasCat(i, CATEGORIES.ACID));
  for (const it of acids) {
    if (!Number.isFinite(it.qty)) Object.assign(it, ensureQty(it, Math.round(DEFAULTS_PER_SERVING.acid_ml * servings), "ml"));
  }

  // Especias si están y no tienen qty: ml-equivalente (tsp aproximado)
  const spices = items.filter((i) => hasCat(i, CATEGORIES.SPICE));
  for (const it of spices) {
    if (!Number.isFinite(it.qty)) Object.assign(it, ensureQty(it, Math.round(DEFAULTS_PER_SERVING.spice_ml * servings), "ml"));
  }

  return { servings, items };
}
