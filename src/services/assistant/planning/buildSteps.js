// src/services/assistant/planning/buildSteps.js

function r(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function listNames(items, fallback) {
  const names = items.map((x) => x.name).filter(Boolean);
  return names.length ? names.join(", ") : fallback;
}

export function buildSteps({ plan, time, servings, dishChoice, compat }) {
  const t = Number(time || 15);
  const g = plan.groups;

  const steps = [];

  // Apertura (amor por la cocina / intención)
  steps.push(
    r([
      "Respira un segundo: cocina con calma. Prepara todo antes de encender el fuego.",
      "Mise en place rápido: una tabla, un cuchillo y los ingredientes visibles. Ya estás cocinando.",
      "Antes de empezar: decide el sabor final (ácido, hierbas, o ambos). Eso guía el plato.",
    ])
  );

  // Si compatibilidad baja: reconduce de forma explícita
  if (compat.level === "baja" || compat.level === "muy baja") {
    steps.push(
      "Nota de criterio: la combinación elegida es arriesgada. Mantén sabores separados o busca un puente (ácido/umami) para que tenga sentido."
    );
  }

  // Aromáticos base
  if (g.aromatics.length) {
    steps.push(`Sofríe ${listNames(g.aromatics, "los aromáticos")} con un poco de grasa a fuego medio, 4–6 min, sin prisas.`);
  } else {
    steps.push("Empieza con una base neutra: aceite caliente suave y un toque de sal para despertar el sabor.");
  }

  // Técnica principal
  switch (plan.technique) {
    case "emulsion": {
      steps.push(
        `Si hay ${listNames(g.carbs, "carbohidrato")}, cuécelo/al dente y reserva un poco de agua de cocción (sirve para ligar).`
      );
      if (g.vegs.length) {
        steps.push(`Saltea ${listNames(g.vegs, "verduras")} a fuego vivo 4–6 min para dorar sin perder textura.`);
      }
      if (g.proteins.length) {
        steps.push(`Marca ${listNames(g.proteins, "proteína")} aparte para que dore y no suelte agua; luego integra.`);
      }
      steps.push("Mezcla todo y emulsiona: añade grasa + un poco de agua de cocción hasta que quede jugoso y ligado.");
      break;
    }
    case "stew": {
      steps.push(`Añade ${listNames(g.legumes, "legumbre")} y rehoga 1–2 min con especias si las hay.`);
      steps.push("Cubre ligeramente con líquido (agua/caldo) y cocina 10–20 min. Aplasta una parte para dar cuerpo.");
      break;
    }
    case "warm-salad": {
      steps.push(`Saltea ${listNames(g.legumes, "legumbre")} 3–4 min con aromáticos y especias suaves.`);
      steps.push("Apaga el fuego y monta la ensalada templada: ácido + grasa + hierbas. Busca contraste.");
      break;
    }
    case "stir-fry": {
      steps.push("Fuego alto. Saltea primero la proteína 2–4 min; retira.");
      steps.push(`Saltea ${listNames(g.vegs, "verduras")} 3–5 min; reintroduce la proteína.`);
      steps.push("Ajusta con salsa/ácido al final. Que sea rápido y con textura.");
      break;
    }
    case "roast": {
      steps.push("Precalienta horno (200–220°C). Corta piezas similares para que todo se haga a la vez.");
      steps.push(`Asa ${listNames(g.vegs, "verduras")} (y proteína si hay) con grasa y sal, 15–35 min según tamaño.`);
      steps.push("Da la vuelta a mitad de cocción para dorado uniforme.");
      break;
    }
    case "saute":
    default: {
      if (g.vegs.length) steps.push(`Saltea ${listNames(g.vegs, "verduras")} 6–10 min buscando dorado parcial.`);
      if (g.proteins.length) steps.push(`Añade ${listNames(g.proteins, "proteína")} y cocina hasta punto (sin secar).`);
      if (g.legumes.length) steps.push(`Incorpora ${listNames(g.legumes, "legumbre")} y liga con un toque de líquido si hace falta.`);
      break;
    }
  }

  // Cierre (acidez/hierbas)
  if (plan.decisions.finishWithAcid) {
    steps.push("Finaliza con un toque ácido (limón/vinagre) fuera del fuego. Es el gesto que ilumina el plato.");
  } else {
    steps.push("Si el sabor queda plano, añade un toque ácido aunque sea mínimo: cambia la percepción por completo.");
  }

  if (plan.decisions.finishWithHerbs) {
    steps.push("Termina con hierbas frescas. No las cuezas: deben oler a fresco.");
  }

  // Ajuste por tiempo: recortar si era muy corto
  const maxSteps = t <= 15 ? 7 : 8;
  return steps.slice(0, maxSteps);
}
