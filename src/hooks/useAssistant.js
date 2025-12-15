import { useEffect, useMemo, useState } from "react";
import { generateSuggestion } from "../services/assistant";

const STORAGE_KEY = "cocinaIA_history_v3";

function loadHistory() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveHistory(items) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // ignore
  }
}

export function useAssistant() {
  const [ingredientsText, setIngredientsText] = useState("");
  const [time, setTime] = useState("20");
  const [servings, setServings] = useState("2");

  const [history, setHistory] = useState(() => loadHistory());
  const [result, setResult] = useState(() => history?.[0] ?? null);

  useEffect(() => {
    if (!result && history.length > 0) setResult(history[0]);
  }, [history, result]);

  const isGenerateDisabled = useMemo(() => {
    return ingredientsText.trim().length === 0;
  }, [ingredientsText]);

  function generate() {
    const payload = {
      ingredientsText,
      time: Number(time),
      servings: Number(servings),
    };

    const suggestion = generateSuggestion(payload);
    setResult(suggestion);

    const nextHistory = [suggestion, ...history].slice(0, 12);
    setHistory(nextHistory);
    saveHistory(nextHistory);
  }

  function selectFromHistory(item) {
    setResult(item);
  }

  function reset() {
    setIngredientsText("");
    setTime("20");
    setServings("2");
    setResult(null);
  }

  function clearHistory() {
    setHistory([]);
    setResult(null);
    saveHistory([]);
  }

  return {
    ingredientsText,
    setIngredientsText,
    time,
    setTime,
    servings,
    setServings,
    history,
    result,
    isGenerateDisabled,
    generate,
    selectFromHistory,
    reset,
    clearHistory,
  };
}
