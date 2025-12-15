import { useEffect, useMemo, useRef, useState } from "react";

// Ajusta nombres/rutas a tus archivos reales
import img1 from "../../assets/ia/chatbot/img2.png";
import img2 from "../../assets/ia/chatbot/img3.png";
import img3 from "../../assets/ia/chatbot/img4.png";
import img4 from "../../assets/ia/chatbot/img5.png";
import img5 from "../../assets/ia/chatbot/img6.png";

function clampIndex(i, n) {
  return (i + n) % n;
}

function PopularDishesSlider() {
  const items = useMemo(
    () => [
      { src: img1, title: "Pasta mediterránea" },
      { src: img2, title: "Guiso reconfortante" },
      { src: img3, title: "Bowl vegetal" },
      { src: img4, title: "Salteado rápido" },
      { src: img5, title: "Ensalada templada" },
    ],
    []
  );

  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  const go = (next) => setIdx((cur) => clampIndex(next, items.length));
  const next = () => setIdx((cur) => clampIndex(cur + 1, items.length));
  const prev = () => setIdx((cur) => clampIndex(cur - 1, items.length));

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => {
      setIdx((cur) => clampIndex(cur + 1, items.length));
    }, 3500);

    return () => clearInterval(timerRef.current);
  }, [paused, items.length]);

  return (
    <div
      className="card"
      style={{
        padding: "var(--space-6)",
        overflow: "hidden",
        borderRadius: "var(--radius-lg)",
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        style={{
          position: "relative",
          borderRadius: "var(--radius-lg)",
          overflow: "hidden",
        }}
      >
        <img
          src={items[idx].src}
          alt={items[idx].title}
          style={{ width: "100%", height: 260, objectFit: "cover", display: "block" }}
        />

        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            padding: "var(--space-6)",
            background: "linear-gradient(to top, rgba(0,0,0,0.55), rgba(0,0,0,0))",
            color: "white",
          }}
        >
          <strong style={{ display: "block", fontSize: "var(--text-lg)", lineHeight: 1.2 }}>
            {items[idx].title}
          </strong>
          <span style={{ opacity: 0.9, fontSize: "var(--text-sm)" }}>
            {idx + 1} / {items.length}
          </span>
        </div>

        {/* Controles */}
        <button
          type="button"
          className="btn btnGhost"
          onClick={prev}
          aria-label="Anterior"
          style={{
            position: "absolute",
            left: "var(--space-3)",
            top: "50%",
            transform: "translateY(-50%)",
            background: "rgba(255,255,255,0.85)",
          }}
        >
          ←
        </button>

        <button
          type="button"
          className="btn btnGhost"
          onClick={next}
          aria-label="Siguiente"
          style={{
            position: "absolute",
            right: "var(--space-3)",
            top: "50%",
            transform: "translateY(-50%)",
            background: "rgba(255,255,255,0.85)",
          }}
        >
          →
        </button>
      </div>

      {/* Dots */}
      <div
        style={{
          marginTop: "var(--space-3)",
          display: "flex",
          justifyContent: "center",
          gap: "var(--space-2)",
          flexWrap: "wrap",
        }}
      >
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => go(i)}
            aria-label={`Ir a slide ${i + 1}`}
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              border: "1px solid var(--border)",
              background: i === idx ? "var(--accent)" : "transparent",
              cursor: "pointer",
            }}
          />
        ))}
      </div>

      <p style={{ margin: "var(--space-3) 0 0", color: "var(--muted)", fontSize: "var(--text-sm)", textAlign: "center" }}>
        Autoplay + control manual. Pausa al pasar el cursor.
      </p>
    </div>
  );
}

export default PopularDishesSlider;
