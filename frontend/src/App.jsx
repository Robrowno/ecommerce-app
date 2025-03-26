import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./screens/Home.jsx";
import Products from "./screens/Products.jsx";
import NavBar from "./components/NavBar.jsx";
import About from "./screens/About.jsx";
import { CartProvider } from "./context/CartContext";
import Register from "./screens/Register.jsx";
import Login from "./screens/Login.jsx";
import { useAuth } from "./context/AuthContext";
import "./index.css";

const App = () => {
  const { user } = useAuth();

  return (
    <CartProvider>
      <NavBar />

      <Routes>
        <Route
          path="/"
          element={
            user ? <Home /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/products"
          element={
            user ? <Products /> : <Navigate to="/login" />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </CartProvider>
  );
};

export default App;
