import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import TodoPage from "./pages/TodoPage/TodoPage";
import InfoPage from "./pages/InfoPage/InfoPage";

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<TodoPage />} />
        <Route path="/info" element={<InfoPage />} />
      </Routes>
    </main>
  );
}

export default App;
