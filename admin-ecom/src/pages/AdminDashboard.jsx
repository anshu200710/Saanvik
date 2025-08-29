import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <div className="mt-4 flex gap-4">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={() => navigate("/admin/add-product")}
        >
          Add Product
        </button>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded"
          onClick={() => navigate("/admin/products")}
        >
          Manage Products
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;
