import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen.jsx";
import NavBar from "./components/NavBar.jsx";
import "./index.css";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </>

  );
};

export default App;
