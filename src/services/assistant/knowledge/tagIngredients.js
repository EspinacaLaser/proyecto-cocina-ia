import { lookupCategories } from "./lexicon";
import { guessIngredientKind } from "../parsing/units";

// Enriquecemos ingredientes parseados:
// - category[]
// - kind refinado usando categorías
export function tagIngredients(items) {
  return items.map((it) => {
    const cats = lookupCategories(it.name);
    const kind = guessIngredientKind({
      unit: it.unitOriginal,
      name: it.name,
      categoryHints: cats,
    });

    return {
      ...it,
      category: cats,
      kind,
      confidence: Math.min(1, (it.confidence ?? 0.6) + (cats.length ? 0.2 : 0)),
    };
  });
}
