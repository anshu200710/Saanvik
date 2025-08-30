import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const ProductDetail = () => {
  const [products, setProducts] = useState([]);
  const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

  useEffect(() => {
    fetch(`${backendUrl}/api/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const { id } = useParams();
  const product = products.find((p) => p._id === id);
  const [quantity, setQuantity] = useState(25);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <h2 className="text-center text-red-500 font-medium mt-20">
        Product not found
      </h2>
    );
  }

  const whatsappNumber = "919558394627";

  const handleBuyNow = () => {
    if (quantity < 25) {
      alert("Minimum order quantity is 25 pieces.");
      return;
    }

    const message = `Hello, I want to buy this product:
Product: ${product.name}
Price: ₹${product.price}
Quantity: ${quantity} pieces
Description: ${product.description}`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const relatedProducts = products
    .filter((p) => p._id !== product._id)
    .slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Product Detail */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-8 rounded-2xl shadow-xl">
        {/* Left - Image */}
        <div className="flex justify-center items-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-h-[450px] object-contain rounded-lg bg-gray-50 p-4"
          />
        </div>

        {/* Right - Info */}
        <div className="flex flex-col justify-center space-y-5">
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          <p className="text-gray-600 text-base leading-relaxed">
            {product.description}
          </p>
          <p className="text-3xl font-semibold text-indigo-600">
            ₹{product.price}
          </p>

          {/* Quantity */}
          <div className="flex items-center gap-3">
            <label className="font-medium text-gray-700">Quantity:</label>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-28 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Buy Now Button */}
          <button
            onClick={handleBuyNow}
            className="mt-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold shadow-md transition-all w-full md:w-auto"
          >
            Buy Now on WhatsApp
          </button>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-20">
        <h2 className="text-2xl font-bold mb-8 text-gray-800 text-center md:text-left">
          Related Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {relatedProducts.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden border border-gray-100"
            >
              <Link to={`/product/${item._id}`}>
                <div className="h-44 flex items-center justify-center bg-gray-50 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full object-contain p-3 transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 truncate">
                    {item.name}
                  </h3>
                  <p className="text-indigo-600 font-bold mt-1">
                    ₹{item.price}
                  </p>
                  <p className="text-sm text-gray-500 line-clamp-2 mt-1">
                    {item.description}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
