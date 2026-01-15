// src/data/whatToEat/recipes.js

// === IMPORTS DE IMÁGENES (desde src/assets) ===

// Carne
import polloLimon from "../../assets/ia/what-to-eat/pollo-limon.jpg";
import albondigasTomate from "../../assets/ia/what-to-eat/albondigas-tomate.jpg";

// Pescado
import salmonYogur from "../../assets/ia/what-to-eat/salmon-yogur.jpg";
import merluzaHorno from "../../assets/ia/what-to-eat/merluza-horno.jpg";

// Legumbres
import lentejasVerduras from "../../assets/ia/what-to-eat/lentejas-verduras.jpg";
import garbanzosEspinacas from "../../assets/ia/what-to-eat/garbanzos-espinacas.jpg";

// Pasta
import pastaAjoAceite from "../../assets/ia/what-to-eat/pasta-ajo-aceite.jpg";
import penneChampinon from "../../assets/ia/what-to-eat/penne-champiñon.jpg";

// Arroz
import arrozSalteado from "../../assets/ia/what-to-eat/arroz-salteado.jpg";
import arrozCaldosoTomate from "../../assets/ia/what-to-eat/arroz-caldoso-tomate.jpg";

// Verduras
import verdurasHorno from "../../assets/ia/what-to-eat/verduras-horno.jpg";
import salteadoVerde from "../../assets/ia/what-to-eat/salteado-verde.jpg";

// Repostería
import bizcochoYogur from "../../assets/ia/what-to-eat/bizcocho-yogur.jpg";
import vasosYogurFruta from "../../assets/ia/what-to-eat/vasos-yogur-fruta.jpg";

// Sopas
import cremaCalabaza from "../../assets/ia/what-to-eat/crema-calabaza.jpg";
import sopaTomate from "../../assets/ia/what-to-eat/sopa-tomate.jpg";

// Ensaladas
import bowlMediterraneo from "../../assets/ia/what-to-eat/bowl-mediterraneo.jpg";
import ensaladaArroz from "../../assets/ia/what-to-eat/ensalada-arroz.jpg";

// Desayunos
import tostadasTomate from "../../assets/ia/what-to-eat/tostadas-tomate.jpg";
import avenaFruta from "../../assets/ia/what-to-eat/avena-fruta.jpg";

// === RECETAS ===

export const WTE_RECIPES = [
  // =====================
  // CARNE
  // =====================
  {
    id: "carne-1",
    categoryId: "carne",
    title: "Pollo al limón con verduras",
    timeMinutes: 25,
    difficulty: 2,
    summary: "Pollo jugoso con toque cítrico y verdura salteada.",
    image: polloLimon,
    ingredients: [
      "2 pechugas de pollo",
      "1 calabacín",
      "1 zanahoria",
      "1 diente de ajo",
      "1 limón",
      "Aceite de oliva, sal y pimienta",
    ],
    steps: [
      "Corta las verduras en tiras finas.",
      "Dora el pollo salpimentado a fuego medio-alto.",
      "Retira el pollo y saltea las verduras con el ajo.",
      "Vuelve a añadir el pollo y ralla limón por encima.",
      "Cocina unos minutos más y ajusta de sal.",
    ],
  },
  {
    id: "carne-2",
    categoryId: "carne",
    title: "Albóndigas rápidas en salsa de tomate",
    timeMinutes: 30,
    difficulty: 3,
    summary: "Clásico casero con salsa sencilla y sabrosa.",
    image: albondigasTomate,
    ingredients: [
      "300 g carne picada",
      "1 huevo",
      "2 cdas pan rallado",
      "400 g tomate triturado",
      "1 diente de ajo",
      "Aceite, sal y pimienta",
    ],
    steps: [
      "Mezcla la carne con huevo, ajo y pan rallado.",
      "Forma albóndigas y dóralas.",
      "Añade el tomate y cocina 15 minutos.",
      "Rectifica de sal y sirve.",
    ],
  },

  // =====================
  // PESCADO
  // =====================
  {
    id: "pescado-1",
    categoryId: "pescado",
    title: "Salmón a la plancha con yogur",
    timeMinutes: 15,
    difficulty: 2,
    summary: "Salmón dorado con salsa fresca y ligera.",
    image: salmonYogur,
    ingredients: [
      "2 lomos de salmón",
      "1 yogur natural",
      "Limón",
      "Eneldo o perejil",
      "Sal y pimienta",
    ],
    steps: [
      "Salpimenta el salmón.",
      "Cocínalo a la plancha 3–4 min por lado.",
      "Mezcla yogur, limón y hierbas.",
      "Sirve el salmón con la salsa.",
    ],
  },
  {
    id: "pescado-2",
    categoryId: "pescado",
    title: "Merluza al horno con patata",
    timeMinutes: 35,
    difficulty: 2,
    summary: "Pescado tierno sobre base de patata.",
    image: merluzaHorno,
    ingredients: [
      "2 lomos de merluza",
      "2 patatas",
      "1/2 cebolla",
      "Aceite, sal y pimentón",
    ],
    steps: [
      "Hornea patatas y cebolla 20 min.",
      "Añade la merluza y hornea 10 min más.",
      "Riega con aceite y pimentón.",
    ],
  },

  // =====================
  // LEGUMBRES
  // =====================
  {
    id: "legumbres-1",
    categoryId: "legumbres",
    title: "Lentejas con verduras",
    timeMinutes: 35,
    difficulty: 3,
    summary: "Estofado vegetal nutritivo y reconfortante.",
    image: lentejasVerduras,
    ingredients: [
      "200 g lentejas",
      "Zanahoria",
      "Cebolla",
      "Ajo",
      "Laurel",
      "Aceite y sal",
    ],
    steps: [
      "Sofríe las verduras.",
      "Añade lentejas y agua.",
      "Cocina 30 minutos.",
    ],
  },
  {
    id: "legumbres-2",
    categoryId: "legumbres",
    title: "Garbanzos con espinacas",
    timeMinutes: 15,
    difficulty: 2,
    summary: "Salteado rápido con especias suaves.",
    image: garbanzosEspinacas,
    ingredients: [
      "Garbanzos cocidos",
      "Espinacas",
      "Ajo",
      "Comino",
      "Aceite y sal",
    ],
    steps: [
      "Saltea el ajo.",
      "Añade garbanzos y especias.",
      "Incorpora espinacas y cocina 2 min.",
    ],
  },

  // =====================
  // PASTA
  // =====================
  {
    id: "pasta-1",
    categoryId: "pasta",
    title: "Pasta ajo y aceite",
    timeMinutes: 20,
    difficulty: 1,
    summary: "Minimalismo italiano con tomate fresco.",
    image: pastaAjoAceite,
    ingredients: [
      "200 g pasta",
      "Ajo",
      "Aceite de oliva",
      "Tomate",
      "Sal",
    ],
    steps: [
      "Cuece la pasta.",
      "Dora el ajo.",
      "Añade tomate y mezcla con la pasta.",
    ],
  },
  {
    id: "pasta-2",
    categoryId: "pasta",
    title: "Penne con champiñones",
    timeMinutes: 25,
    difficulty: 2,
    summary: "Cremoso y reconfortante.",
    image: penneChampinon,
    ingredients: [
      "Penne",
      "Champiñones",
      "Ajo",
      "Nata o queso",
      "Sal y pimienta",
    ],
    steps: [
      "Cuece la pasta.",
      "Saltea champiñones y ajo.",
      "Añade nata y mezcla con la pasta.",
    ],
  },

  // =====================
  // ARROZ
  // =====================
  {
    id: "arroz-1",
    categoryId: "arroz",
    title: "Arroz salteado con huevo",
    timeMinutes: 20,
    difficulty: 2,
    summary: "Aprovechamiento rápido y sabroso.",
    image: arrozSalteado,
    ingredients: [
      "Arroz cocido",
      "Huevo",
      "Verduras",
      "Aceite y sal",
    ],
    steps: [
      "Saltea verduras.",
      "Añade huevo y remueve.",
      "Incorpora arroz y saltea.",
    ],
  },
  {
    id: "arroz-2",
    categoryId: "arroz",
    title: "Arroz caldoso de tomate",
    timeMinutes: 30,
    difficulty: 3,
    summary: "Reconfortante y aromático.",
    image: arrozCaldosoTomate,
    ingredients: [
      "Arroz",
      "Tomate triturado",
      "Caldo",
      "Aceite y sal",
    ],
    steps: [
      "Sofríe tomate.",
      "Añade arroz y caldo.",
      "Cocina hasta punto caldoso.",
    ],
  },

  // =====================
  // VERDURAS
  // =====================
  {
    id: "verduras-1",
    categoryId: "verduras",
    title: "Verduras al horno",
    timeMinutes: 35,
    difficulty: 2,
    summary: "Color y sabor con mínima intervención.",
    image: verdurasHorno,
    ingredients: [
      "Verduras variadas",
      "Aceite",
      "Especias",
      "Sal",
    ],
    steps: [
      "Mezcla verduras con aceite y especias.",
      "Hornea 30 minutos.",
    ],
  },
  {
    id: "verduras-2",
    categoryId: "verduras",
    title: "Salteado verde",
    timeMinutes: 15,
    difficulty: 1,
    summary: "Ligero, rápido y fresco.",
    image: salteadoVerde,
    ingredients: [
      "Verdura verde",
      "Ajo",
      "Aceite",
      "Limón",
    ],
    steps: [
      "Saltea ajo.",
      "Añade verdura y cocina.",
      "Termina con limón.",
    ],
  },

  // =====================
  // REPOSTERÍA
  // =====================
  {
    id: "reposteria-1",
    categoryId: "reposteria",
    title: "Bizcocho de yogur",
    timeMinutes: 45,
    difficulty: 2,
    summary: "Clásico esponjoso y fácil.",
    image: bizcochoYogur,
    ingredients: [
      "Yogur",
      "Harina",
      "Azúcar",
      "Huevos",
      "Aceite",
    ],
    steps: [
      "Mezcla ingredientes.",
      "Hornea 35 minutos.",
    ],
  },
  {
    id: "reposteria-2",
    categoryId: "reposteria",
    title: "Vasos de yogur y fruta",
    timeMinutes: 10,
    difficulty: 1,
    summary: "Postre rápido y fresco.",
    image: vasosYogurFruta,
    ingredients: [
      "Yogur",
      "Fruta",
      "Granola",
    ],
    steps: [
      "Monta capas en vaso.",
    ],
  },

  // =====================
  // SOPAS
  // =====================
  {
    id: "sopas-1",
    categoryId: "sopas",
    title: "Crema de calabaza",
    timeMinutes: 35,
    difficulty: 2,
    summary: "Suave y reconfortante.",
    image: cremaCalabaza,
    ingredients: [
      "Calabaza",
      "Cebolla",
      "Patata",
      "Caldo",
    ],
    steps: [
      "Cuece ingredientes.",
      "Tritura y sirve.",
    ],
  },
  {
    id: "sopas-2",
    categoryId: "sopas",
    title: "Sopa de tomate",
    timeMinutes: 20,
    difficulty: 1,
    summary: "Simple e intensa.",
    image: sopaTomate,
    ingredients: [
      "Tomate",
      "Ajo",
      "Caldo",
    ],
    steps: [
      "Cuece todo y ajusta sal.",
    ],
  },

  // =====================
  // ENSALADAS
  // =====================
  {
    id: "ensaladas-1",
    categoryId: "ensaladas",
    title: "Bowl mediterráneo",
    timeMinutes: 15,
    difficulty: 1,
    summary: "Fresco, completo y vegetal.",
    image: bowlMediterraneo,
    ingredients: [
      "Garbanzos",
      "Tomate",
      "Pepino",
      "Aceite y limón",
    ],
    steps: [
      "Mezcla todos los ingredientes.",
    ],
  },
  {
    id: "ensaladas-2",
    categoryId: "ensaladas",
    title: "Ensalada de arroz",
    timeMinutes: 20,
    difficulty: 2,
    summary: "Ideal para tupper.",
    image: ensaladaArroz,
    ingredients: [
      "Arroz",
      "Verduras",
      "Aliño",
    ],
    steps: [
      "Mezcla arroz y verduras.",
    ],
  },

  // =====================
  // DESAYUNOS
  // =====================
  {
    id: "desayunos-1",
    categoryId: "desayunos",
    title: "Tostadas con tomate",
    timeMinutes: 8,
    difficulty: 0,
    summary: "Mediterráneo puro.",
    image: tostadasTomate,
    ingredients: [
      "Pan",
      "Tomate",
      "Aceite",
      "Sal",
    ],
    steps: [
      "Tuesta el pan.",
      "Añade tomate y aceite.",
    ],
  },
  {
    id: "desayunos-2",
    categoryId: "desayunos",
    title: "Avena con fruta",
    timeMinutes: 12,
    difficulty: 1,
    summary: "Energía para empezar el día.",
    image: avenaFruta,
    ingredients: [
      "Avena",
      "Leche",
      "Fruta",
    ],
    steps: [
      "Cuece la avena.",
      "Añade fruta.",
    ],
  },
];
