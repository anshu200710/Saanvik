import { useEffect, useState } from "react";
import axios from "axios";

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
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Manage Products</h2>
      <div className="grid grid-cols-3 gap-4">
        {products.map((p) => (
          <div key={p._id} className="border p-4 rounded shadow">
            <img src={p.image} alt={p.name} className="h-32 w-full object-cover rounded mb-2" />
            <h3 className="font-bold">{p.name}</h3>
            <p>${p.price}</p>
            <button
              className="bg-red-500 text-white px-2 py-1 mt-2 rounded"
              onClick={() => deleteProduct(p._id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageProducts;
