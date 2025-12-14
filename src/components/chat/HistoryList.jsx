function HistoryList({ items, onSelect, onClear }) {
  return (
    <div style={{ display: "grid", gap: "var(--space-3)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
        <h3 style={{ fontSize: "var(--text-lg)" }}>Historial</h3>
        <button className="btn btnGhost" type="button" onClick={onClear}>
          Borrar
        </button>
      </div>

      {items.length === 0 ? (
        <p>No hay generaciones todavía.</p>
      ) : (
        <div style={{ display: "grid", gap: "var(--space-2)" }}>
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              className="btn"
              onClick={() => onSelect(item)}
              style={{ justifyContent: "space-between", width: "100%", textAlign: "left" }}
            >
              <span style={{ fontWeight: 700 }}>{item.title}</span>
              <span style={{ color: "var(--muted)", fontSize: "var(--text-sm)" }}>
                {new Date(item.createdAt).toLocaleString()}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default HistoryList;
