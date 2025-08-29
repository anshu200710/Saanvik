import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

  useEffect(() => {
    fetch(`${backendUrl}/api/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-6">
      {products.map((product) => (
        <div
          key={product._id}
          className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
        >
          {/* Product Image */}
          <Link to={`/product/${product._id}`}>
            <div className="h-56 w-full flex items-center justify-center bg-gray-50 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-full max-w-full object-contain transition-transform duration-500 hover:scale-105"
              />
            </div>
          </Link>

          {/* Product Content */}
          <div className="p-4">
            <Link to={`/product/${product._id}`}>
              <h2 className="text-lg font-semibold text-gray-800 hover:text-indigo-600 transition line-clamp-1">
                {product.name}
              </h2>
            </Link>
            <p className="text-gray-500 text-sm mt-1 line-clamp-2">
              {product.description}
            </p>
            <p className="text-indigo-600 font-bold mt-2 text-lg">
              ₹{product.price}
            </p>

            {/* Button */}
            <Link
              to={`/product/${product._id}`}
              className="mt-4 block text-center bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-4 py-2 rounded-lg font-medium shadow-md transition"
            >
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
