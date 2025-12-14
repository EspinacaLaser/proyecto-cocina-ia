import { Link, NavLink } from "react-router-dom";

const linkStyle = ({ isActive }) => ({
  fontWeight: 700,
  fontSize: "var(--text-sm)",
  textDecoration: isActive ? "underline" : "none",
  textUnderlineOffset: "6px",
  color: isActive ? "var(--accent)" : "inherit",
});

function SiteHeader() {
  return (
    <header className="container" style={{ paddingBottom: 0 }}>
      <div
        className="card"
        style={{
          padding: "var(--space-4)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "var(--space-4)",
          flexWrap: "wrap",
        }}
      >
        <Link
          to="/"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "var(--text-xl)",
            letterSpacing: "0.2px",
          }}
        >
          Cocina IA
        </Link>

        <nav style={{ display: "flex", gap: "var(--space-4)", flexWrap: "wrap" }}>
          <NavLink to="/" end style={linkStyle}>
            Inicio
          </NavLink>
          <NavLink to="/chat" style={linkStyle}>
            Asistente
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default SiteHeader;
