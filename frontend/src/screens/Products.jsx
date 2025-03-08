import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SearchFilterBar from "../components/SearchFilterBar";

const HomeScreen = () => {
	const [products, setProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [groupByBrand, setGroupByBrand] = useState(false);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const { data } = await axios.get("http://localhost:5001/api/products");
				setProducts(data);
				setFilteredProducts(data);
			} catch (error) {
				console.error("Error fetching products:", error);
			}
		};

		fetchProducts();
	}, []);

	// Search Function
	const handleSearch = (searchTerm) => {
		const filtered = products.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
		setFilteredProducts(filtered);
	};

	// Sort by Price Function
	const handleSort = (order) => {
		const sortedProducts = [...filteredProducts].sort((a, b) =>
			order === "asc" ? a.price - b.price : b.price - a.price
		);
		setFilteredProducts(sortedProducts);
	};

	// Group by Brand Function
	const handleGroupByBrand = (isGrouped) => {
		setGroupByBrand(isGrouped);
		if (isGrouped) {
			// Group products by brand
			const groupedProducts = products.reduce((acc, product) => {
				if (!acc[product.brand]) acc[product.brand] = [];
				acc[product.brand].push(product);
				return acc;
			}, {});

			// Flatten grouped results
			const sortedByBrand = Object.values(groupedProducts).flat();
			setFilteredProducts(sortedByBrand);
		} else {
			setFilteredProducts(products);
		}
	};

	return (
		<>
			<div className="h-100 flex bg-gray-100 border shadow-md justify-between">
				<h1 className="text-3xl font-bold md:mb-5 md:mt-5 md:ps-7 justify-start md:w-1/3 hidden md:flex whitespace-nowrap">
					All Products
				</h1>
				<SearchFilterBar onSearch={handleSearch} onSort={handleSort} onGroupByBrand={handleGroupByBrand} />
			</div>

			<div className="container mx-auto p-5">
				<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
					{filteredProducts.map((product) => (
						<div key={product._id} className="p-4 border rounded-lg shadow-md">
							<Link to={`/product/${product._id}`} className="block">
								<img
									src={`http://localhost:5001${product.image}`}
									alt={product.name}
									className="w-full h-48 object-cover rounded"
								/>
								<h2 className="text-lg font-semibold mt-2">{product.name}</h2>
							</Link>
							<p className="text-blue-500 text-xs font-medium">{product.category}</p>
							<p className="text-green-600 font-bold">£{product.price}</p>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default HomeScreen;
