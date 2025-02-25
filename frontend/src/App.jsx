import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen.jsx"; // Correct path now

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
    </Routes>
  );
};

export default App;
