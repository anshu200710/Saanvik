import { Outlet, Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Home = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform bg-white shadow-lg w-64 z-50 transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold">Admin Panel</h2>
          <button className="lg:hidden" onClick={toggleSidebar}>
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="p-4">
          <ul className="space-y-3">
            <li>
              <Link
                to="/admin/dashboard"
                className={`block p-2 rounded ${
                  location.pathname === "/admin/dashboard"
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-200"
                }`}
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/admin/manage-products"
                className={`block p-2 rounded ${
                  location.pathname === "/admin/manage-products"
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-200"
                }`}
              >
                Manage Products
              </Link>
            </li>
            <li>
              <Link
                to="/admin/add-product"
                className={`block p-2 rounded ${
                  location.pathname === "/admin/add-product"
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-200"
                }`}
              >
                Add Product
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="flex items-center justify-between bg-white shadow px-4 py-3 lg:ml-64">
          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={toggleSidebar}
          >
            <Menu className="h-6 w-6" />
          </button>
          <h1 className="text-lg font-semibold">Admin Dashboard</h1>
          <div className="flex items-center space-x-3">
            <span className="text-gray-700">Admin</span>
            <img
              src="data:image/png;base64,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"
              alt="profile"
              className="h-8 w-8 rounded-full"
            />
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 lg:ml-64 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Home;
