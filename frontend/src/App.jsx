import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./screens/Home.jsx";
import Products from "./screens/Products.jsx";
import ProductDetail from "./screens/ProductDetail.jsx";
import About from "./screens/About.jsx";
import Register from "./screens/Register.jsx";
import Login from "./screens/Login.jsx";
import NavBar from "./components/NavBar.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { useAuth } from "./context/AuthContext.jsx";
import "./index.css";

const App = () => {
  const { user } = useAuth();

  return (
    <CartProvider>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={user ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/products"
          element={user ? <Products /> : <Navigate to="/login" />}
        />
        <Route
          path="/product/:id"
          element={user ? <ProductDetail /> : <Navigate to="/login" />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </CartProvider>
  );
};

export default App;
