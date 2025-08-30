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
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Section Heading */}
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Our <span className="text-indigo-600">Products</span>
      </h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 group"
          >
            {/* Product Image */}
            <Link to={`/product/${product._id}`}>
              <div className="h-60 w-full flex items-center justify-center bg-gray-50 relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </Link>

            {/* Product Content */}
            <div className="p-5">
              <Link to={`/product/${product._id}`}>
                <h2 className="text-lg font-semibold text-gray-800 group-hover:text-indigo-600 transition line-clamp-1">
                  {product.name}
                </h2>
              </Link>
              <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                {product.description}
              </p>
              <p className="text-indigo-600 font-bold mt-3 text-xl">
                ₹{product.price}
              </p>

              {/* Button */}
              <Link
                to={`/product/${product._id}`}
                className="mt-5 block text-center bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-5 py-2.5 rounded-xl font-medium shadow-md transition"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
