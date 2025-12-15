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
    <header style={{ width: "100%" }}>
      <div className="container" style={{ paddingBottom: 0 }}>
        <div
          className="card"
          style={{
            width: "100%",
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
              whiteSpace: "nowrap",
            }}
          >
            Cocina IA
          </Link>

          <nav
            style={{
              display: "flex",
              gap: "var(--space-4)",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <NavLink to="/" end style={linkStyle}>
              Inicio
            </NavLink>
            <NavLink to="/chat" style={linkStyle}>
              Asistente
            </NavLink>
            <NavLink to="/filosofia" style={linkStyle}>
              Filosofía
            </NavLink>
            <NavLink to="/despensa" style={linkStyle}>
              Despensa
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default SiteHeader;
