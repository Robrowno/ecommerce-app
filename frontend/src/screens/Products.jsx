import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { Link, useSearchParams } from "react-router-dom";
import SearchFilterBar from "../components/SearchFilterBar";
import { useCart } from "../context/CartContext";

const Products = () => {
	const [products, setProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [sortConfig, setSortConfig] = useState({ price: null, name: null });
	const [searchParams] = useSearchParams();
	const productCategory = searchParams.get("category");
	const { addToCart } = useCart();

	const applySorting = useCallback(
		(items) => {
			return [...items].sort((a, b) => {
				if (sortConfig.price) {
					const priceCompare = sortConfig.price === "asc" ? a.price - b.price : b.price - a.price;
					if (priceCompare !== 0) return priceCompare;
				}

				if (sortConfig.name) {
					const nameA = a.name.toLowerCase();
					const nameB = b.name.toLowerCase();
					return sortConfig.name === "asc" ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
				}

				return 0;
			});
		},
		[sortConfig]
	);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				let { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/products`);
				if (productCategory) {
					data = data.filter((item) => item.category == productCategory);
				}
				setProducts(data);
				setFilteredProducts(applySorting(data));
			} catch (error) {
				console.error("Error fetching products:", error);
			}
		};

		fetchProducts();
	}, [applySorting, productCategory, searchParams, sortConfig]);

	const handleSearch = (searchTerm) => {
		const filtered = products.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
		setFilteredProducts(applySorting(filtered));
	};

	const handleSort = (field, order) => {
		setSortConfig((prev) => ({ ...prev, [field]: order }));
	};

	const handleGroupByBrand = (isGrouped) => {
		if (isGrouped) {
			const groupedProducts = products.reduce((acc, product) => {
				if (!acc[product.brand]) acc[product.brand] = [];
				acc[product.brand].push(product);
				return acc;
			}, {});
			const sortedByBrand = applySorting(Object.values(groupedProducts).flat());
			setFilteredProducts(sortedByBrand);
		} else {
			setFilteredProducts(applySorting(products));
		}
	};

	const handleAddToCart = (product) => {
		addToCart(product);
	};

	return (
		<>
			<div className="h-100 flex bg-gray-100 border shadow-md justify-center">
				<div className="w-full max-w-[82rem] flex justify-between items-center px-4">
					<h1 className="text-3xl font-bold md:mb-5 md:mt-5 md:ps-7 justify-start md:w-1/3 hidden md:flex whitespace-nowrap">
						{productCategory || "All Products"}
					</h1>
					<SearchFilterBar
						onSearch={handleSearch}
						onSort={handleSort}
						onGroupByBrand={handleGroupByBrand}
						sortConfig={sortConfig}
					/>
				</div>
			</div>

			<div className="container mx-auto p-5">
				<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
					{filteredProducts.map((product) => (
						<div key={product._id} className="p-4 border rounded-lg shadow-md">
							<Link to={`/product/${product._id}`} className="block">
								<img
									src={`${import.meta.env.VITE_API_URL}${product.image}`}
									alt={product.name}
									className="w-full h-48 object-cover rounded"
								/>
								<h2 className="text-lg font-semibold mt-2">{product.name}</h2>
							</Link>
							<p className="text-blue-500 text-xs font-medium">{product.category}</p>
							<div className="flex justify-between items-center mt-2">
								<p className="text-green-600 font-bold">£{product.price}</p>
								<button
									onClick={() => handleAddToCart(product)}
									className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 text-sm"
								>
									Add to Cart
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Products;
