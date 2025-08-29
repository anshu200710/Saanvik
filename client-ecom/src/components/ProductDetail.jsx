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
  // ✅ MongoDB me "_id" hota hai, id number nahi
  const product = products.find((p) => p._id === id);

  const [quantity, setQuantity] = useState(25); // default 25

  // 🔥 Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return <h2 className="text-center text-red-500 mt-10">Product not found</h2>;
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
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Product Detail Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white p-6 rounded-2xl shadow-lg">
        {/* Image */}
        <div className="flex justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-h-[400px] object-contain rounded-lg"
          />
        </div>

        {/* Info */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          <p className="text-gray-600 text-lg">{product.description}</p>
          <p className="text-2xl font-semibold text-blue-600">₹{product.price}</p>

          {/* Quantity Input */}
          <div className="flex items-center gap-3">
            <label className="font-medium text-gray-700">Quantity:</label>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-24 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            onClick={handleBuyNow}
            className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-medium shadow transition w-full md:w-auto"
          >
            Buy Now on WhatsApp
          </button>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Related Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {relatedProducts.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden"
            >
              <Link to={`/product/${item._id}`}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-40 w-full object-contain bg-gray-50"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900">{item.name}</h3>
                  <p className="text-blue-600 font-bold mt-1">₹{item.price}</p>
                  <p className="text-sm text-gray-500 line-clamp-2">
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
