// src/services/assistant/knowledge/pairings.js

import { CATEGORIES } from "./lexicon";

// Reglas compactas para subir/bajar compatibilidad más adelante.
// Por ahora son utilidades que podrás integrar dentro de compatibilityScore si quieres.
export const CLASH_RULES = [
  { a: CATEGORIES.FISH, b: CATEGORIES.COCOA, penalty: 45, label: "pescado+cacao" },
  { a: CATEGORIES.MEAT, b: CATEGORIES.COCOA, penalty: 25, label: "carne+cacao" },
];

export const SYNERGY_RULES = [
  { a: CATEGORIES.AROMATIC, b: CATEGORIES.FAT, bonus: 6, label: "aromático+grasa" },
  { a: CATEGORIES.ACID, b: CATEGORIES.FAT, bonus: 6, label: "ácido+grasa" },
  { a: CATEGORIES.UMAMI, b: CATEGORIES.ACID, bonus: 5, label: "umami+ácido" },
];
