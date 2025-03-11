import { Routes, Route } from "react-router-dom";
import Home from "./screens/Home.jsx";
import Products from "./screens/Products.jsx";
import NavBar from "./components/NavBar.jsx";
import About from "./screens/About.jsx";
import "./index.css";

const App = () => {
	return (
		<>
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/products" element={<Products />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</>
	);
};

export default App;
