import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Filosofia from "./pages/Filosofia";
import Despensa from "./pages/Despensa";
import QueComer from "./pages/QueComer";
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
          <Route path="/despensa" element={<Despensa />} />
          <Route path="/que-comer" element={<QueComer />} />
        </Routes>
      </main>

      <SiteFooter />
    </div>
  );
}

export default App;
