import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "@pages/MainPage/MainPage";
import CharactersPage from "@pages/CharactersPage/CharactersPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/characters/:type" element={<CharactersPage />} />
      </Routes>
    </Router>
  );
}

export default App;
