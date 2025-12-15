// src/services/assistant/planning/estimateTimes.js

import { CATEGORIES } from "../knowledge/lexicon";

function has(items, cat) {
  return items.some((x) => x.category?.includes(cat));
}

export function estimateTimes({ technique, items, totalMinutes }) {
  const total = Math.max(10, Math.min(90, Math.round(Number(totalMinutes || 20))));

  const hasCarb = has(items, CATEGORIES.CARB);
  const hasProtein = has(items, CATEGORIES.MEAT) || has(items, CATEGORIES.FISH) || has(items, CATEGORIES.EGG);
  const hasVeg = has(items, CATEGORIES.VEG);
  const hasLegume = has(items, CATEGORIES.LEGUME);

  // Bloques base
  let prep = 4;
  let base = 6;
  let main = 10;
  let finish = 2;

  if (technique === "roast") {
    prep = 6;
    base = 3;
    main = Math.max(12, total - 10);
    finish = 2;
  } else if (technique === "stew") {
    prep = 5;
    base = 6;
    main = Math.max(10, total - 11);
    finish = 2;
  } else if (technique === "emulsion") {
    prep = 4;
    base = 5;
    main = Math.max(6, total - 9);
    finish = 2;
  } else if (technique === "stir-fry") {
    prep = 4;
    base = 4;
    main = Math.max(6, total - 8);
    finish = 2;
  }

  // Ajustes por contenido
  if (hasCarb) main += 2;
  if (hasProtein) main += 2;
  if (hasVeg) base += 1;
  if (hasLegume) main += 1;

  // Normaliza para no pasarnos
  const sum = prep + base + main + finish;
  const scale = total / sum;

  return {
    total,
    prep: Math.max(2, Math.round(prep * scale)),
    base: Math.max(2, Math.round(base * scale)),
    main: Math.max(4, Math.round(main * scale)),
    finish: Math.max(1, Math.round(finish * scale)),
  };
}
