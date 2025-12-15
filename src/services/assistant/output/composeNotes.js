// src/services/assistant/output/composeNotes.js

export function composeNotes({ technique, timing, compat }) {
  const hook =
    "Cocinar con amor no es complicar: es decidir un sabor final y construirlo con intención.";

  const t =
    timing
      ? `Reparto del tiempo: preparación ${timing.prep}’, base ${timing.base}’, cocción ${timing.main}’, acabado ${timing.finish}’.`
      : "";

  const crit =
    compat?.level === "alta"
      ? "La combinación tiene buena lógica: remata con ácido o hierbas para que brille."
      : compat?.level === "media"
      ? "Base sólida: si queda plano, sube contraste (ácido) o profundidad (umami)."
      : "Creatividad guiada: prueba, ajusta sal y usa un ‘puente’ (ácido/umami) para dar coherencia.";

  const tech =
    technique === "emulsion"
      ? "Truco: un poco de líquido caliente liga y deja la salsa sedosa."
      : technique === "stew"
      ? "Truco: aplasta una parte para espesar sin harinas."
      : technique === "roast"
      ? "Truco: el sabor nace del dorado; no tengas miedo al tostado ligero."
      : "Truco: deja dorar sin mover demasiado para ganar sabor.";

  return [hook, t, crit, tech].filter(Boolean).join(" ");
}
