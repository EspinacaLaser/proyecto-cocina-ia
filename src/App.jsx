import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Filosofia from "./pages/Filosofia";
import Explorar from "./pages/Explorar";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

function App() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <SiteHeader />

      <main className="container" style={{ paddingTop: "var(--space-8)", flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/filosofia" element={<Filosofia />} />
          <Route path="/explorar" element={<Explorar />} />
        </Routes>
      </main>

      <SiteFooter />
    </div>
  );
}

export default App;
