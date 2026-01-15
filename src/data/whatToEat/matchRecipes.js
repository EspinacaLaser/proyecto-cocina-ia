import { WTE_RECIPES } from "./recipes";

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function matchRecipes({ categoryId, limit = 5 }) {
  const pool = WTE_RECIPES.filter((r) => r.categoryId === categoryId);
  return shuffle(pool).slice(0, Math.min(limit, pool.length));
}
