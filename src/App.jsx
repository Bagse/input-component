import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import PageSoon from "./components/PageSoon";
import ButtonPage from "./components/ButtonPage";
import InputPage from "./components/InputPage";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-row">
        <section>
          <Header />
        </section>

        <section>
          <Routes>
            <Route path="/" element={<InputPage />} />
            <Route path="/buttons" element={<ButtonPage />} />
            <Route path="/inputs" element={<InputPage />} />
            <Route path="/soon" element={<PageSoon />} />
          </Routes>
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
