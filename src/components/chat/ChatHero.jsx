import PopularDishesSlider from "./PopularDishesSlider";

function ChatHero() {
  return (
    <section className="card" style={{ padding: "var(--space-8)" }}>
      <div style={{ display: "grid", gap: "var(--space-4)" }}>
        <div style={{ display: "grid", gap: "var(--space-2)" }}>
          <span className="badge">Platos destacados</span>
          <h2 style={{ fontSize: "var(--text-2xl)", margin: 0 }}>Ideas populares para inspirarte</h2>
          <p style={{ margin: 0, color: "var(--muted)", lineHeight: 1.7 }}>
            Un carrusel editorial con 5 platos frecuentes. No dependen del prompt: sirven como referencia visual
            y mantienen una estética consistente en el prototipo.
          </p>
        </div>

        <PopularDishesSlider />
      </div>
    </section>
  );
}

export default ChatHero;
