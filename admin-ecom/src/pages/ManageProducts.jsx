import { useEffect, useState } from "react";
import axios from "axios";
import { Trash2, Package } from "lucide-react";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await axios.get("http://localhost:5000/api/products");
    setProducts(data);
  };

  const deleteProduct = async (id) => {
    const token = localStorage.getItem("adminToken");
    await axios.delete(`http://localhost:5000/api/products/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchProducts();
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <Package className="w-7 h-7 text-blue-600" />
        <h2 className="text-3xl font-bold text-gray-800">
          Manage Products
        </h2>
      </div>

      {/* Products Grid */}
      {products.length === 0 ? (
        <p className="text-gray-500 text-center mt-16 text-lg">
          No products found.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((p) => (
            <div
              key={p._id}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-48 w-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-semibold text-gray-900 text-lg mb-1 truncate">
                  {p.name}
                </h3>
                <p className="text-gray-600 text-sm flex-1 line-clamp-2">
                  {p.description || "No description available."}
                </p>
                <p className="mt-3 text-blue-600 font-bold text-lg">
                  ${p.price}
                </p>
              </div>

              {/* Actions */}
              <div className="p-4 border-t">
                <button
                  onClick={() => deleteProduct(p._id)}
                  className="flex items-center gap-2 w-full justify-center bg-red-500 hover:bg-red-600 text-white font-medium px-4 py-2 rounded-xl transition"
                >
                  <Trash2 className="w-5 h-5" />
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageProducts;
