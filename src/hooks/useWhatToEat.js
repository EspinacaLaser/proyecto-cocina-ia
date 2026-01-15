import { useMemo, useState } from "react";
import { FOOD_CATEGORIES } from "../data/whatToEat/categories";
import { matchRecipes } from "../data/whatToEat/matchRecipes";

function labelFor(categoryId) {
  return FOOD_CATEGORIES.find((c) => c.id === categoryId)?.label ?? categoryId;
}

export function useWhatToEat() {
  const [categoryId, setCategoryId] = useState(null);

  const [messages, setMessages] = useState(() => [
    {
      role: "assistant",
      text: "Dime qué te apetece comer. Elige una categoría y te propondré recetas claras y ejecutables.",
    },
  ]);

  const [suggestions, setSuggestions] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  function sendChoice(nextCategoryId) {
    setCategoryId(nextCategoryId);

    // “Mensaje usuario”
    setMessages((prev) => [
      ...prev,
      { role: "user", text: `Me apetece: ${labelFor(nextCategoryId)}.` },
      {
        role: "assistant",
        text: "Perfecto. Aquí tienes varias propuestas. Elige una y pulsa “Cocinar” para ver la receta completa.",
      },
    ]);

    const hits = matchRecipes({ categoryId: nextCategoryId, limit: 5 });
    setSuggestions(hits);
  }

  function openRecipe(recipe) {
    setSelectedRecipe(recipe);
  }

  function closeRecipe() {
    setSelectedRecipe(null);
  }

  function reset() {
    setCategoryId(null);
    setSuggestions([]);
    setSelectedRecipe(null);
    setMessages([
      {
        role: "assistant",
        text: "Dime qué te apetece comer. Elige una categoría y te propondré recetas claras y ejecutables.",
      },
    ]);
  }

  const selectedLabel = useMemo(() => (categoryId ? labelFor(categoryId) : null), [categoryId]);

  return {
    categoryId,
    selectedLabel,
    messages,
    suggestions,
    selectedRecipe,
    sendChoice,
    openRecipe,
    closeRecipe,
    reset,
  };
}
