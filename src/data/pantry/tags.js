export const TAGS = {
  high_fiber: { label: "Alto en fibra", tone: "good" },
  high_protein: { label: "Alto en proteína", tone: "good" },
  high_iron: { label: "Rico en hierro", tone: "good" },
  high_magnesium: { label: "Rico en magnesio", tone: "good" },
  high_water: { label: "Alto contenido de agua", tone: "neutral" },
  antioxidant: { label: "Antioxidantes", tone: "good" },

  energy_dense: { label: "Denso calóricamente", tone: "neutral" },

  high_salt: { label: "Alto en sal", tone: "bad" },
  high_sat_fat: { label: "Alto en grasa saturada", tone: "bad" },
  ultra_processed: { label: "Ultraprocesado", tone: "bad" },
  low_micronutrients: { label: "Baja densidad de micronutrientes", tone: "bad" },
};

export function getTag(id) {
  return TAGS[id] || { label: id, tone: "neutral" };
}
