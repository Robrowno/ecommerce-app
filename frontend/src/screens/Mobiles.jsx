import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Computers = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const { data } = await axios.get("http://localhost:5001/api/products");
				setProducts(data);
			} catch (error) {
				console.error("Error fetching products:", error);
			}
		};

		fetchProducts();
	}, []);

	const filteredArray = products.filter((product) => {
		return product.category == "Mobile Phones";
	});

	return (
		<>
			<div className="h-100 flex bg-gray-100 border shadow-md">
				<h1 className="text-3xl font-bold mb-5 mt-5 ps-7 flex justify-start">Mobiles</h1>
			</div>

			<div className="container mx-auto p-5">
				<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
					{filteredArray.map((product) => (
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

export default Computers;
