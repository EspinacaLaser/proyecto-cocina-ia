// src/services/assistant/knowledge/lexicon.js


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
    // --- Carbohidratos / bases ---
  ["fideos", [CATEGORIES.CARB, CATEGORIES.ALLERGEN_GLUTEN]],
  ["espaguetis", [CATEGORIES.CARB, CATEGORIES.ALLERGEN_GLUTEN]],
  ["macarrones", [CATEGORIES.CARB, CATEGORIES.ALLERGEN_GLUTEN]],
  ["noodles", [CATEGORIES.CARB, CATEGORIES.ALLERGEN_GLUTEN]],
  ["arroz basmati", [CATEGORIES.CARB]],
  ["arroz integral", [CATEGORIES.CARB]],
  ["pan rallado", [CATEGORIES.CARB, CATEGORIES.ALLERGEN_GLUTEN]],
  ["tortilla", [CATEGORIES.CARB]],
  ["tortitas", [CATEGORIES.CARB]],
  ["avena", [CATEGORIES.CARB]],

  // --- Verduras y hortalizas ---
  ["brócoli", [CATEGORIES.VEG]],
  ["brocoli", [CATEGORIES.VEG]],
  ["coliflor", [CATEGORIES.VEG]],
  ["judía verde", [CATEGORIES.VEG]],
  ["judías verdes", [CATEGORIES.VEG]],
  ["calabaza", [CATEGORIES.VEG]],
  ["pepino", [CATEGORIES.VEG]],
  ["lechuga", [CATEGORIES.VEG]],
  ["rúcula", [CATEGORIES.VEG]],
  ["rucula", [CATEGORIES.VEG]],
  ["col", [CATEGORIES.VEG]],
  ["repollo", [CATEGORIES.VEG]],
  ["apio", [CATEGORIES.VEG, CATEGORIES.AROMATIC]],
  ["maíz", [CATEGORIES.VEG, CATEGORIES.CARB]],
  ["maiz", [CATEGORIES.VEG, CATEGORIES.CARB]],
  ["guisantes", [CATEGORIES.VEG]],
  ["guistantes", [CATEGORIES.VEG]],

  // --- Frutas (como contraste / acidez / dulzor) ---
  ["manzana", [CATEGORIES.SWEET, CATEGORIES.ACID]],
  ["pera", [CATEGORIES.SWEET]],
  ["naranja", [CATEGORIES.ACID, CATEGORIES.SWEET]],
  ["piña", [CATEGORIES.ACID, CATEGORIES.SWEET]],
  ["pasa", [CATEGORIES.SWEET]],
  ["pasas", [CATEGORIES.SWEET]],

  // --- Legumbres (más variedad) ---
  ["alubia", [CATEGORIES.LEGUME]],
  ["alubias blancas", [CATEGORIES.LEGUME]],
  ["alubias rojas", [CATEGORIES.LEGUME]],
  ["frijoles", [CATEGORIES.LEGUME]],
  ["soja", [CATEGORIES.LEGUME]],
  ["edamame", [CATEGORIES.LEGUME]],

  // --- Proteínas: pescado y mar ---
  ["merluza", [CATEGORIES.FISH]],
  ["bacalao", [CATEGORIES.FISH]],
  ["sardina", [CATEGORIES.FISH]],
  ["sardinas", [CATEGORIES.FISH]],
  ["anchoa", [CATEGORIES.FISH, CATEGORIES.UMAMI]],
  ["anchoas", [CATEGORIES.FISH, CATEGORIES.UMAMI]],
  ["gamba", [CATEGORIES.FISH]],
  ["gambas", [CATEGORIES.FISH]],
  ["langostinos", [CATEGORIES.FISH]],
  ["pulpo", [CATEGORIES.FISH]],

  // --- Proteínas: carnes ---
  ["pavo", [CATEGORIES.MEAT]],
  ["conejo", [CATEGORIES.MEAT]],
  ["jamón", [CATEGORIES.MEAT, CATEGORIES.UMAMI]],
  ["jamon", [CATEGORIES.MEAT, CATEGORIES.UMAMI]],
  ["bacon", [CATEGORIES.MEAT, CATEGORIES.UMAMI]],

  // --- Proteínas: alternativas vegetales ---
  ["tofu", [CATEGORIES.UMAMI]],
  ["tempeh", [CATEGORIES.UMAMI]],
  ["seitán", [CATEGORIES.UMAMI, CATEGORIES.ALLERGEN_GLUTEN]],
  ["seitan", [CATEGORIES.UMAMI, CATEGORIES.ALLERGEN_GLUTEN]],

  // --- Umami / fondos / salsas ---
  ["tomate concentrado", [CATEGORIES.UMAMI]],
  ["concentrado de tomate", [CATEGORIES.UMAMI]],
  ["soja", [CATEGORIES.SAUCE, CATEGORIES.UMAMI, CATEGORIES.LIQUID]],
  ["salsa soja", [CATEGORIES.SAUCE, CATEGORIES.UMAMI, CATEGORIES.LIQUID]],
  ["miso", [CATEGORIES.UMAMI]],
  ["mostaza", [CATEGORIES.ACID]],
  ["mayonesa", [CATEGORIES.FAT]],
  ["ketchup", [CATEGORIES.SWEET, CATEGORIES.ACID]],
  ["salsa", [CATEGORIES.SAUCE]],
  ["salsa de tomate", [CATEGORIES.SAUCE, CATEGORIES.ACID]],

  // --- Lácteos (más detalle) ---
  ["parmesano", [CATEGORIES.DAIRY, CATEGORIES.UMAMI]],
  ["mozzarella", [CATEGORIES.DAIRY]],
  ["ricotta", [CATEGORIES.DAIRY]],
  ["requesón", [CATEGORIES.DAIRY]],
  ["requeson", [CATEGORIES.DAIRY]],

  // --- Grasas ---
  ["aceite de girasol", [CATEGORIES.FAT, CATEGORIES.LIQUID]],
  ["aceite vegetal", [CATEGORIES.FAT, CATEGORIES.LIQUID]],

  // --- Ácidos y frescor ---
  ["yogur", [CATEGORIES.DAIRY, CATEGORIES.ACID]],
  ["yogurt", [CATEGORIES.DAIRY, CATEGORIES.ACID]],
  ["perejil fresco", [CATEGORIES.HERB]],
  ["menta", [CATEGORIES.HERB]],
  ["cebollino", [CATEGORIES.HERB]],

  // --- Especias / condimentos ---
  ["cayena", [CATEGORIES.SPICE]],
  ["chile", [CATEGORIES.SPICE]],
  ["ají", [CATEGORIES.SPICE]],
  ["ajo en polvo", [CATEGORIES.SPICE]],
  ["cebolla en polvo", [CATEGORIES.SPICE]],
  ["nuez moscada", [CATEGORIES.SPICE]],
  ["clavo", [CATEGORIES.SPICE]],
  ["orégano seco", [CATEGORIES.HERB]],
  ["oregano seco", [CATEGORIES.HERB]],

  // --- Frutos secos (alérgeno) ---
  ["almendra", [CATEGORIES.ALLERGEN_NUTS]],
  ["almendras", [CATEGORIES.ALLERGEN_NUTS]],
  ["nuez", [CATEGORIES.ALLERGEN_NUTS]],
  ["nueces", [CATEGORIES.ALLERGEN_NUTS]],
  ["avellana", [CATEGORIES.ALLERGEN_NUTS]],
  ["avellanas", [CATEGORIES.ALLERGEN_NUTS]],
  ["cacahuete", [CATEGORIES.ALLERGEN_NUTS]],
  ["cacahuetes", [CATEGORIES.ALLERGEN_NUTS]],
  ["pistacho", [CATEGORIES.ALLERGEN_NUTS]],
  ["pistachos", [CATEGORIES.ALLERGEN_NUTS]],
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
    { re: /\bqueso\b/, cats: [CATEGORIES.DAIRY, CATEGORIES.UMAMI] },
  { re: /\bseta(s)?\b|\bchampiñ(o|ó)n(es)?\b/, cats: [CATEGORIES.VEG, CATEGORIES.UMAMI] },
  { re: /\btomate\b/, cats: [CATEGORIES.VEG, CATEGORIES.ACID] },
  { re: /\bcaldo\b/, cats: [CATEGORIES.LIQUID, CATEGORIES.UMAMI] },

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
