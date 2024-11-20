import Labs from "./Labs";
import Kanbas from "./Kanbas";
import Landing from "./Landing";
import { HashRouter, Route, Routes } from "react-router-dom";
import store from "./Kanbas/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <HashRouter>
      <Provider store={store}>
        <div>
          <Routes>
            <Route path="/Labs/*" element={<Labs />} />
            <Route path="/Kanbas/*" element={<Kanbas />} />
            <Route path="/" element={<Landing />} />
          </Routes>
        </div>
      </Provider>
    </HashRouter>
  );
}

