import { visualAssets } from "../data/visualAssets";

function normalizeList(text) {
  return text
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)
    .slice(0, 8);
}

function pickTags({ time, restrictions, mode }) {
  const tags = [];
  if (time) tags.push(`${time} min`);
  if (mode === "recipe") tags.push("mediterránea");
  if (mode === "substitute") tags.push("práctica");
  if (mode === "remix") tags.push("creativa");
  restrictions.forEach((r) => tags.push(r));
  return tags.slice(0, 6);
}

function buildRecipe({ ingredients, time, restrictions }) {
  const base = ingredients.length ? ingredients : ["ingredientes de despensa"];
  const isVegan = restrictions.includes("vegano");
  const isVeg = restrictions.includes("vegetariano") || isVegan;

  const proteinHint = isVegan
    ? "tofu o garbanzos"
    : isVeg
      ? "huevo o legumbres"
      : "pollo o atún";

  const title = `Plato rápido con ${base[0]}`;

  const finalIngredients = [
    ...base,
    "aceite de oliva",
    "sal",
    "pimienta",
    proteinHint,
  ].slice(0, 8);

  const steps = [
    `Prepara los ingredientes: lava, corta y organiza (2–3 min).`,
    `Calienta una sartén con aceite de oliva y marca el ingrediente principal (${Math.max(3, Math.floor(time / 6))} min).`,
    `Añade el resto de ingredientes y ajusta sal/pimienta. Cocina a fuego medio (${Math.max(4, Math.floor(time / 4))} min).`,
    `Termina con un toque de acidez (limón o vinagre suave) y sirve.`,
  ];

  const notes = isVegan
    ? "Si quieres más umami, añade soja o miso suave en poca cantidad."
    : "Si buscas un resultado más ligero, prioriza verduras y reduce el aceite."

  return { title, ingredients: finalIngredients, steps, notes };
}

function buildSubstitution({ ingredients, restrictions }) {
  const target = ingredients[0] || "un ingrediente";
  const isVegan = restrictions.includes("vegano");

  const suggestions = isVegan
    ? [
        `Si quieres sustituir ${target}, prueba con champiñón (umami) o berenjena (cuerpo).`,
        `Para aportar cremosidad sin lácteos: crema de anacardos o bebida vegetal reducida.`,
      ]
    : [
        `Para sustituir ${target}, piensa en su función: textura, grasa, aroma.`,
        `Alternativas comunes: yogur por nata, pavo por pollo, limón por vinagre suave.`,
      ];

  return {
    title: `Sustituciones para ${target}`,
    ingredients: [],
    steps: suggestions,
    notes: "Consejo: prueba en pequeñas cantidades y ajusta al final.",
  };
}

function buildRemix({ ingredients, time, restrictions }) {
  const base = ingredients[0] || "tu receta";
  const isVegan = restrictions.includes("vegano");

  const title = `Reinterpretación mediterránea de ${base}`;
  const steps = [
    `Mantén el núcleo: identifica qué hace “reconocible” a ${base}.`,
    `Cambia el acento: usa aceite de oliva, hierbas (orégano/romero) y un toque cítrico.`,
    `Textura: añade crujiente (frutos secos) o cremoso (hummus/queso) según restricción.`,
    `Ajusta el tiempo: versión rápida en ${time} min con preparaciones simples.`,
  ];

  const notes = isVegan
    ? "Versión vegetal: prioriza legumbres, verduras asadas y salsas emulsionadas sin lácteos."
    : "Versión completa: añade proteína ligera y termina con un toque fresco (perejil)."

  return { title, ingredients: [], steps, notes };
}

export function generateSuggestion({ mode, ingredientsText, time, restrictions }) {
  const ingredients = normalizeList(ingredientsText);
  const asset = visualAssets[mode] || visualAssets.recipe;

  let result;
  if (mode === "substitute") {
    result = buildSubstitution({ ingredients, restrictions });
  } else if (mode === "remix") {
    result = buildRemix({ ingredients, time, restrictions });
  } else {
    result = buildRecipe({ ingredients, time, restrictions });
  }

  return {
    id: crypto.randomUUID(),
    mode,
    tags: pickTags({ time, restrictions, mode }),
    ...result,
    image: asset,
    createdAt: new Date().toISOString(),
  };
}
