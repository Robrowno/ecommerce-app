import { Routes, Route } from "react-router-dom";
import Home from "./screens/Home.jsx";
import Products from "./screens/Products.jsx";
import Computers from "./screens/Computers.jsx";
import Mobiles from "./screens/Mobiles.jsx";
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
				<Route path="/category/computers" element={<Computers />} />
				<Route path="/category/mobiles" element={<Mobiles />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</>
	);
};

export default App;
