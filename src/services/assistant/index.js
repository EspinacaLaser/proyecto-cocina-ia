// src/services/assistant/index.js

import { parseIngredientsText } from "./parsing/parseIngredients";
import { tagIngredients } from "./knowledge/tagIngredients";
import { scoreCompatibility } from "./planning/compatibilityScore";
import { chooseDish } from "./planning/chooseDish";
import { scaleServings } from "./planning/scaleServings";

import { chooseTechnique } from "./planning/chooseTechnique";
import { estimateTimes } from "./planning/estimateTimes";
import { buildRecipePlan } from "./planning/buildRecipePlan";
import { buildSteps } from "./planning/buildSteps";

import { composeTitle } from "./output/composeTitle";
import { composeNotes } from "./output/composeNotes";
import { composeWarnings } from "./output/composeWarnings";
import { formatRecipe } from "./output/formatRecipe";

export function generateSuggestion(params) {
  const ingredientsText = params?.ingredientsText ?? "";
  const time = Number(params?.time ?? 20);
  const servings = Number(params?.servings ?? 2);

  const parsed = parseIngredientsText(ingredientsText);
  const tagged = tagIngredients(parsed);

  const compat = scoreCompatibility(tagged);
  const dishChoice = chooseDish(tagged, { time });

  const scaled = scaleServings(tagged, servings);

  const technique = chooseTechnique({ dishChoice, items: scaled.items, time });
  const timing = estimateTimes({ technique, items: scaled.items, totalMinutes: time });

  const plan = buildRecipePlan({
    dishChoice,
    technique,
    timing,
    items: scaled.items,
    time,
    compat,
  });

  const steps = buildSteps({
    plan,
    time,
    servings: scaled.servings,
    dishChoice,
    compat,
  });

  const title = composeTitle({
    items: scaled.items,
    technique: plan.technique,
    dishChoice,
    time,
    servings: scaled.servings,
  });

  const warnings = composeWarnings({ compat, items: scaled.items });
  const notes = composeNotes({ items: scaled.items, technique: plan.technique, dishChoice, time, compat, timing });

  const formatted = formatRecipe({
    title,
    ingredients: scaled.items,
    steps,
    notes,
    warnings,
    time,
    servings: scaled.servings,
  });

  return {
    id: crypto.randomUUID(),
    title: formatted.title,
    ingredients: formatted.ingredients,
    steps: formatted.steps,
    notes: formatted.notes,
    warnings: formatted.warnings,
    createdAt: new Date().toISOString(),
  };
}
