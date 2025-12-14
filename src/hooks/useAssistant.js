import { useEffect, useMemo, useState } from "react";
import { generateSuggestion } from "../services/chatEngine";

const STORAGE_KEY = "cocinaIA_history_v2";

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
  const [mode, setMode] = useState("recipe");
  const [ingredientsText, setIngredientsText] = useState("");
  const [time, setTime] = useState("15");
  const [restrictions, setRestrictions] = useState([]);

  const [history, setHistory] = useState(() => loadHistory());
  const [result, setResult] = useState(() => history?.[0] ?? null);

  useEffect(() => {
    if (!result && history.length > 0) setResult(history[0]);
  }, [history, result]);

  const isGenerateDisabled = useMemo(() => {
    if (mode === "substitute") return ingredientsText.trim().length === 0;
    return false;
  }, [mode, ingredientsText]);

  function toggleRestriction(value) {
    setRestrictions((prev) =>
      prev.includes(value) ? prev.filter((x) => x !== value) : [...prev, value]
    );
  }

  function generate() {
    const payload = {
      mode,
      ingredientsText,
      time: Number(time),
      restrictions,
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
    setMode("recipe");
    setIngredientsText("");
    setTime("15");
    setRestrictions([]);
    setResult(null);
  }

  function clearHistory() {
    setHistory([]);
    setResult(null);
    saveHistory([]);
  }

  return {
    mode,
    setMode,
    ingredientsText,
    setIngredientsText,
    time,
    setTime,
    restrictions,
    toggleRestriction,
    history,
    result,
    isGenerateDisabled,
    generate,
    selectFromHistory,
    reset,
    clearHistory,
  };
}
