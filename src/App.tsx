import { Routes, Route, Navigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./domain/HomePage";
import MainLayout from "./layouts/Main";
import CreateEvent from "./domain/CreateEvent";
import CheckList from "./domain/CheckList";




function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          {/* Routes goes here . . . */}
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreateEvent />} />
          <Route path="/checkList/:dataId" element={<CheckList />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
