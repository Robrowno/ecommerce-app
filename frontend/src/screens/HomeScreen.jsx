import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const HomeScreen = () => {
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

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold mb-5">Latest Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product._id} className="p-4 border rounded-lg shadow-md">
            <Link to={`/product/${product._id}`} className="block">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded" />
              <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
            </Link>
            <p className="text-gray-600">{product.category}</p>
            <p className="text-green-600 font-bold">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
