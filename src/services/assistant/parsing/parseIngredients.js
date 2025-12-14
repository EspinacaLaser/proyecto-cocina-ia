// src/services/assistant/parsing/parseIngredients.js

import { guessIngredientKind, normalizeUnit, toBaseQuantity } from "./units";
import { parseLeadingQuantity } from "./parseFractions";

// Palabras que suelen aparecer y no deben formar parte del nombre
const STOPWORDS = new Set(["de", "del", "la", "el", "los", "las", "un", "una", "unos", "unas"]);

// Unidades y contenedores que esperamos como “token” después de la cantidad
const UNIT_TOKENS = new Set([
  "g", "gr", "gramo", "gramos", "kg", "kilo", "kilos",
  "ml", "mililitro", "mililitros", "l", "lt", "litro", "litros",
  "tsp", "cdta", "cucharadita", "cucharaditas",
  "tbsp", "cda", "cucharada", "cucharadas",
  "cup", "taza", "tazas",
  "ud", "uds", "unidad", "unidades", "pieza", "piezas",
  "pizca", "pizcas",
  "lata", "latas", "bote", "botes", "vaso", "vasos",
]);

function cleanName(rawName) {
  const tokens = rawName
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
    .filter((t) => !STOPWORDS.has(t));

  return tokens.join(" ").trim();
}

function splitUnitAndName(rest) {
  // rest empieza por unidad opcional: "g pasta" | "ml leche" | "pasta"
  const tokens = rest.trim().split(/\s+/).filter(Boolean);
  if (tokens.length === 0) return { unit: null, name: "" };

  const first = tokens[0].toLowerCase();
  if (UNIT_TOKENS.has(first)) {
    const unit = first;
    const name = tokens.slice(1).join(" ");
    return { unit, name };
  }
  return { unit: null, name: tokens.join(" ") };
}

export function parseIngredientItem(itemRaw) {
  // Devuelve un objeto ingrediente estructurado
  const raw = (itemRaw || "").trim();
  if (!raw) return null;

  // 1) Cantidad al inicio
  const { qty, rest } = parseLeadingQuantity(raw);

  // 2) Unidad opcional
  const { unit: unitRaw, name: nameRaw } = splitUnitAndName(rest || raw);

  const name = cleanName(nameRaw || rest || raw);
  const unit = normalizeUnit(unitRaw);

  // 3) Base qty/unit (si aplica)
  const base = qty != null ? toBaseQuantity(qty, unit) : { qty: null, unit, unitBase: null };

  // 4) Tipo (solid/liquid/spice/count)
  const kind = guessIngredientKind({ unit: base.unit, name });

  // 5) Confidence heurística
  const confidence =
    name.length >= 2 ? (qty != null ? 0.9 : 0.65) : 0.4;

  return {
    raw,
    name,
    qty: base.qty,
    unit: base.unitBase,        // normalizado a base (g/ml/...)
    unitOriginal: unit,         // unidad original normalizada (kg, tbsp...)
    kind,
    category: [],               // lo llenaremos luego con el lexicón
    confidence,
  };
}

export function parseIngredientsText(ingredientsText) {
  // Soporta coma y punto y coma
  const parts = String(ingredientsText || "")
    .split(/[;,]/)
    .map((s) => s.trim())
    .filter(Boolean);

  const items = parts
    .map(parseIngredientItem)
    .filter(Boolean);

  return items;
}
