// src/services/assistant/knowledge/lexicon.js

// Lexicón simple pero extensible: mapea "nombre" -> categorías.
// Consejo: mantenlo humano y realista. No hace falta cubrir TODO; basta con cubrir lo frecuente
// y permitir "fallback" por heurísticas.

export const CATEGORIES = {
  AROMATIC: "aromatic",
  HERB: "herb",
  ACID: "acid",
  FAT: "fat",
  CARB: "carb",
  VEG: "veg",
  LEGUME: "legume",
  FISH: "fish",
  MEAT: "meat",
  EGG: "egg",
  DAIRY: "dairy",
  SWEET: "sweet",
  COCOA: "cocoa",
  SPICE: "spice",
  SAUCE: "sauce",
  UMAMI: "umami",
  ALLERGEN_GLUTEN: "gluten",
  ALLERGEN_NUTS: "nuts",
  LIQUID: "liquid",
};

// Entradas: key normalizada (minúsculas) -> array de categorías
export const LEXICON = new Map([
  // Aromáticos
  ["ajo", [CATEGORIES.AROMATIC]],
  ["cebolla", [CATEGORIES.AROMATIC]],
  ["puerro", [CATEGORIES.AROMATIC]],
  ["chalota", [CATEGORIES.AROMATIC]],
  ["jengibre", [CATEGORIES.AROMATIC]],

  // Hierbas
  ["perejil", [CATEGORIES.HERB]],
  ["albahaca", [CATEGORIES.HERB]],
  ["cilantro", [CATEGORIES.HERB]],
  ["romero", [CATEGORIES.HERB]],
  ["tomillo", [CATEGORIES.HERB]],
  ["orégano", [CATEGORIES.HERB]],

  // Ácidos
  ["limón", [CATEGORIES.ACID]],
  ["lima", [CATEGORIES.ACID]],
  ["vinagre", [CATEGORIES.ACID, CATEGORIES.LIQUID]],
  ["tomate", [CATEGORIES.ACID, CATEGORIES.VEG]],

  // Grasas
  ["aceite", [CATEGORIES.FAT, CATEGORIES.LIQUID]],
  ["aceite de oliva", [CATEGORIES.FAT, CATEGORIES.LIQUID]],
  ["mantequilla", [CATEGORIES.FAT, CATEGORIES.DAIRY]],
  ["nata", [CATEGORIES.DAIRY]],
  ["crema", [CATEGORIES.DAIRY]],

  // Carbohidratos
  ["pasta", [CATEGORIES.CARB, CATEGORIES.ALLERGEN_GLUTEN]],
  ["arroz", [CATEGORIES.CARB]],
  ["pan", [CATEGORIES.CARB, CATEGORIES.ALLERGEN_GLUTEN]],
  ["harina", [CATEGORIES.CARB, CATEGORIES.ALLERGEN_GLUTEN]],
  ["patata", [CATEGORIES.CARB]],
  ["quinoa", [CATEGORIES.CARB]],
  ["cuscús", [CATEGORIES.CARB, CATEGORIES.ALLERGEN_GLUTEN]],

  // Verduras
  ["calabacín", [CATEGORIES.VEG]],
  ["berenjena", [CATEGORIES.VEG]],
  ["pimiento", [CATEGORIES.VEG]],
  ["zanahoria", [CATEGORIES.VEG]],
  ["espinaca", [CATEGORIES.VEG]],
  ["champiñón", [CATEGORIES.VEG, CATEGORIES.UMAMI]],
  ["setas", [CATEGORIES.VEG, CATEGORIES.UMAMI]],

  // Legumbres
  ["garbanzos", [CATEGORIES.LEGUME]],
  ["lentejas", [CATEGORIES.LEGUME]],
  ["alubias", [CATEGORIES.LEGUME]],
  ["judías", [CATEGORIES.LEGUME]],

  // Proteínas animales
  ["pollo", [CATEGORIES.MEAT]],
  ["ternera", [CATEGORIES.MEAT]],
  ["cerdo", [CATEGORIES.MEAT]],
  ["atún", [CATEGORIES.FISH]],
  ["salmón", [CATEGORIES.FISH]],
  ["pescado", [CATEGORIES.FISH]],
  ["huevo", [CATEGORIES.EGG]],

  // Lácteos
  ["leche", [CATEGORIES.DAIRY, CATEGORIES.LIQUID]],
  ["queso", [CATEGORIES.DAIRY]],
  ["yogur", [CATEGORIES.DAIRY]],

  // Especias y básicos
  ["sal", [CATEGORIES.SPICE]],
  ["pimienta", [CATEGORIES.SPICE]],
  ["comino", [CATEGORIES.SPICE]],
  ["pimentón", [CATEGORIES.SPICE]],
  ["curry", [CATEGORIES.SPICE]],
  ["cúrcuma", [CATEGORIES.SPICE]],
  ["canela", [CATEGORIES.SPICE]],
  ["cacao", [CATEGORIES.COCOA]],
  ["chocolate", [CATEGORIES.SWEET, CATEGORIES.COCOA]],

  // Líquidos frecuentes
  ["agua", [CATEGORIES.LIQUID]],
  ["caldo", [CATEGORIES.LIQUID, CATEGORIES.UMAMI]],
  ["vino", [CATEGORIES.LIQUID, CATEGORIES.ACID]],
  ["salsa de soja", [CATEGORIES.SAUCE, CATEGORIES.UMAMI, CATEGORIES.LIQUID]],
]);

// Heurísticas de “contiene” para ingredientes compuestos
const CONTAINS_RULES = [
  { re: /\baceite\b/, cats: [CATEGORIES.FAT, CATEGORIES.LIQUID] },
  { re: /\bvinagre\b/, cats: [CATEGORIES.ACID, CATEGORIES.LIQUID] },
  { re: /\bleche\b/, cats: [CATEGORIES.DAIRY, CATEGORIES.LIQUID] },
  { re: /\bqueso\b/, cats: [CATEGORIES.DAIRY] },
  { re: /\bhuevo\b/, cats: [CATEGORIES.EGG] },
  { re: /\bharina\b/, cats: [CATEGORIES.CARB, CATEGORIES.ALLERGEN_GLUTEN] },
  { re: /\bpasta\b/, cats: [CATEGORIES.CARB, CATEGORIES.ALLERGEN_GLUTEN] },
  { re: /\bchocolate\b/, cats: [CATEGORIES.SWEET, CATEGORIES.COCOA] },
  { re: /\bcacao\b/, cats: [CATEGORIES.COCOA] },
];

export function lookupCategories(name) {
  const n = String(name || "").trim().toLowerCase();
  if (!n) return [];

  // Exact match
  if (LEXICON.has(n)) return [...LEXICON.get(n)];

  // Contains rules
  const cats = [];
  for (const rule of CONTAINS_RULES) {
    if (rule.re.test(n)) cats.push(...rule.cats);
  }

  // Dedup
  return Array.from(new Set(cats));
}
