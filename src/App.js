import { BrowserRouter, Routes, Route } from "react-router-dom";
import Planets from "./components/planets";
import PlanetDetails from "./components/planetDetails";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Planetry Bodies</h1>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Planets />}>
              <Route path="/:planet" element={<PlanetDetails />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
