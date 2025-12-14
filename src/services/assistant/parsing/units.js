// src/services/assistant/parsing/units.js

// Unidades base internas:
// - masa: g
// - volumen: ml
// - count: unit (unidades)
// Algunas unidades son aproximaciones (cup, taza, vaso, lata...). Está bien para prototipo.

export const UNIT_KIND = {
  MASS: "mass",
  VOLUME: "volume",
  COUNT: "count",
  OTHER: "other",
};

export const ING_KIND = {
  SOLID: "solid",
  LIQUID: "liquid",
  SPICE: "spice",
  COUNT: "count",
  UNKNOWN: "unknown",
};

// Alias -> unidad canónica
export const UNIT_ALIASES = new Map([
  // Masa
  ["g", "g"],
  ["gr", "g"],
  ["gramo", "g"],
  ["gramos", "g"],
  ["kg", "kg"],
  ["kilo", "kg"],
  ["kilos", "kg"],

  // Volumen
  ["ml", "ml"],
  ["mililitro", "ml"],
  ["mililitros", "ml"],
  ["l", "l"],
  ["lt", "l"],
  ["litro", "l"],
  ["litros", "l"],

  // Cucharas y tazas (aprox.)
  ["tsp", "tsp"],
  ["teaspoon", "tsp"],
  ["cdta", "tsp"],
  ["cdita", "tsp"],
  ["cucharadita", "tsp"],
  ["cucharaditas", "tsp"],

  ["tbsp", "tbsp"],
  ["tablespoon", "tbsp"],
  ["cda", "tbsp"],
  ["cucharada", "tbsp"],
  ["cucharadas", "tbsp"],

  ["cup", "cup"],
  ["taza", "cup"],
  ["tazas", "cup"],

  // Unidades/cuentas
  ["ud", "unit"],
  ["uds", "unit"],
  ["unidad", "unit"],
  ["unidades", "unit"],
  ["pieza", "unit"],
  ["piezas", "unit"],

  // “Pinch” / pizca
  ["pizca", "pinch"],
  ["pizcas", "pinch"],

  // Contenedores aproximados
  ["lata", "can"],
  ["latas", "can"],
  ["bote", "jar"],
  ["botes", "jar"],
  ["vaso", "glass"],
  ["vasos", "glass"],
]);

export function normalizeUnit(unitRaw) {
  if (!unitRaw) return null;
  const u = unitRaw.trim().toLowerCase();
  return UNIT_ALIASES.get(u) || u;
}

export function unitKind(unit) {
  if (!unit) return UNIT_KIND.OTHER;
  const u = normalizeUnit(unit);

  if (u === "g" || u === "kg") return UNIT_KIND.MASS;
  if (u === "ml" || u === "l" || u === "tsp" || u === "tbsp" || u === "cup") return UNIT_KIND.VOLUME;
  if (u === "unit" || u === "pinch" || u === "can" || u === "jar" || u === "glass") return UNIT_KIND.COUNT;

  return UNIT_KIND.OTHER;
}

// Conversión a base
export function toBaseQuantity(qty, unit) {
  const u = normalizeUnit(unit);
  const k = unitKind(u);

  if (!Number.isFinite(qty)) return { qty: null, unit: u, unitBase: null };

  if (k === UNIT_KIND.MASS) {
    if (u === "kg") return { qty: qty * 1000, unit: u, unitBase: "g" };
    return { qty, unit: u, unitBase: "g" };
  }

  if (k === UNIT_KIND.VOLUME) {
    if (u === "l") return { qty: qty * 1000, unit: u, unitBase: "ml" };
    // Aproximaciones culinarias comunes:
    if (u === "tsp") return { qty: qty * 5, unit: u, unitBase: "ml" };
    if (u === "tbsp") return { qty: qty * 15, unit: u, unitBase: "ml" };
    if (u === "cup") return { qty: qty * 240, unit: u, unitBase: "ml" };
    return { qty, unit: u, unitBase: "ml" };
  }

  // COUNT u otros: no convertimos
  return { qty, unit: u, unitBase: u };
}

export function guessIngredientKind({ unit, name, categoryHints = [] }) {
  // Heurísticas simples. Luego lo refinaremos con el lexicón de ingredientes.
  const u = normalizeUnit(unit);
  const k = unitKind(u);

  if (k === UNIT_KIND.VOLUME) return ING_KIND.LIQUID;
  if (u === "pinch") return ING_KIND.SPICE;
  if (k === UNIT_KIND.COUNT) return ING_KIND.COUNT;

  // Si el lexicón marca "spice" o similar
  if (categoryHints.includes("spice")) return ING_KIND.SPICE;
  if (categoryHints.includes("liquid")) return ING_KIND.LIQUID;

  if (k === UNIT_KIND.MASS) return ING_KIND.SOLID;

  // Por nombre (mínimo, para prototipo)
  const n = (name || "").toLowerCase();
  if (/(aceite|agua|caldo|leche|vino|vinagre|zumo|salsa)/.test(n)) return ING_KIND.LIQUID;
  if (/(pimentón|comino|curry|canela|pimienta|sal|azúcar|cacao)/.test(n)) return ING_KIND.SPICE;

  return ING_KIND.UNKNOWN;
}
