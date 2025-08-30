import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState("");

  useEffect(() => {
    const savedAdmin = localStorage.getItem("adminName");
    if (savedAdmin) setAdmin(savedAdmin);
  }, []);

  const logout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminName");
    navigate("/admin/login");
  };

  return (
    <div className="min- bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Welcome, <span className="text-indigo-600">{admin || "Admin"}</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <button
            className="bg-indigo-500 hover:bg-indigo-600 transition text-white font-semibold px-6 py-4 rounded-xl shadow-md"
            onClick={() => navigate("/admin/add-product")}
          >
            ➕ Add Product
          </button>

          <button
            className="bg-blue-500 hover:bg-blue-600 transition text-white font-semibold px-6 py-4 rounded-xl shadow-md"
            onClick={() => navigate("/admin/products")}
          >
            📦 Manage Products
          </button>

          {/* <button
            className="bg-yellow-500 hover:bg-yellow-600 transition text-white font-semibold px-6 py-4 rounded-xl shadow-md"
            onClick={() => navigate("/admin/orders")}
          >
            📝 Manage Orders
          </button> */}

          {/* <button
            className="bg-red-500 hover:bg-red-600 transition text-white font-semibold px-6 py-4 rounded-xl shadow-md"
            onClick={logout}
          >
            🚪 Logout
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
