import Labs from "./Labs";
import Kanbas from "./Kanbas";
import Landing from "./Landing";
import { HashRouter, Route, Routes } from "react-router-dom";
export default function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

