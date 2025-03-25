import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../context/CartContext";

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const { addToCart } = useCart();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const { data } = await axios.get(`http://localhost:5001/api/products/${id}`);
                setProduct(data);
            } catch (error) {
                console.error("Error fetching product details:", error);
            }
        };

        fetchProduct();
    }, [id]);

    if (!product) {
        return <div className="p-6 text-center text-gray-500">Loading product...</div>;
    }

    return (
        <div className="container mx-auto max-w-2xl p-6 bg-white rounded-lg shadow-lg mt-8">
            {/* Product Image */}
            <div className="w-full flex justify-center mb-6">
                <img
                    src={`http://localhost:5001${product.image}`}
                    alt={product.name}
                    className="h-80 object-contain rounded"
                />
            </div>

            {/* Product Info */}
            <div className="text-center space-y-4">
                <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
                <p className="text-sm text-gray-500">Brand: {product.brand} | Category: {product.category}</p>
                <p className="text-xl text-green-600 font-semibold">£{product.price.toFixed(2)}</p>

                {/* Stock Count Display */}
                <p className={`font-medium ${product.countInStock > 0 ? "text-green-600" : "text-red-500"}`}>
                    {product.countInStock > 0
                        ? `In Stock: ${product.countInStock}`
                        : "Out of Stock"}
                </p>

                <p className="text-gray-700 mt-4 leading-relaxed">{product.description}</p>

                {product.countInStock > 0 ? (
                    <button
                        onClick={() => addToCart(product)}
                        className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow transition duration-300"
                    >
                        Add to Cart
                    </button>
                ) : (
                    <p className="mt-6 text-red-500 font-semibold">Temporarily Unavailable</p>
                )}
            </div>
        </div>
    );
};

export default ProductDetail;
