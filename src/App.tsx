import { Routes, Route, Navigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import MainPage from "./domain/MainPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes goes here . . . */}
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
