function Stars({ value = 0, max = 5 }) {
  const v = Math.max(0, Math.min(max, Number(value) || 0));
  const full = Math.round(v);
  return (
    <span aria-label={`Dificultad ${full} de ${max}`}>
      {Array.from({ length: max }).map((_, i) => (i < full ? "★" : "☆")).join("")}
    </span>
  );
}

export default Stars;
