// src/services/assistant/parsing/parseFractions.js

const UNICODE_FRACTIONS = new Map([
  ["¼", 1 / 4],
  ["½", 1 / 2],
  ["¾", 3 / 4],
  ["⅓", 1 / 3],
  ["⅔", 2 / 3],
  ["⅛", 1 / 8],
  ["⅜", 3 / 8],
  ["⅝", 5 / 8],
  ["⅞", 7 / 8],
]);

export function parseFractionToken(token) {
  if (!token) return null;

  const t = token.trim();

  // Unicode fractions
  if (UNICODE_FRACTIONS.has(t)) return UNICODE_FRACTIONS.get(t);

  // "1/2"
  if (/^\d+\s*\/\s*\d+$/.test(t)) {
    const [a, b] = t.split("/").map((x) => Number(x.trim()));
    if (Number.isFinite(a) && Number.isFinite(b) && b !== 0) return a / b;
  }

  // "1 1/2"
  if (/^\d+\s+\d+\s*\/\s*\d+$/.test(t)) {
    const parts = t.split(/\s+/);
    const whole = Number(parts[0]);
    const frac = parseFractionToken(parts.slice(1).join(" "));
    if (Number.isFinite(whole) && Number.isFinite(frac)) return whole + frac;
  }

  // Decimal "2.5" or "2,5"
  if (/^\d+([.,]\d+)?$/.test(t)) {
    const normalized = t.replace(",", ".");
    const num = Number(normalized);
    if (Number.isFinite(num)) return num;
  }

  return null;
}

export function parseLeadingQuantity(str) {
  // Devuelve { qty, rest } si encuentra cantidad al inicio
  // Ej: "1/2 cebolla" -> qty=0.5, rest="cebolla"
  // Ej: "2.5 ml aceite" -> qty=2.5, rest="ml aceite"
  if (!str) return { qty: null, rest: str };

  const s = str.trim();

  // Captura "1 1/2" | "1/2" | "2.5" | "2,5" | "½"
  const m = s.match(/^(\d+\s+\d+\s*\/\s*\d+|\d+\s*\/\s*\d+|\d+([.,]\d+)?|[¼½¾⅓⅔⅛⅜⅝⅞])\s+(.*)$/);
  if (!m) return { qty: null, rest: s };

  const qty = parseFractionToken(m[1]);
  const rest = (m[3] || "").trim();

  return { qty: Number.isFinite(qty) ? qty : null, rest };
}
