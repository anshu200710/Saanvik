import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu, X, LayoutDashboard, Package, PlusCircle } from "lucide-react";

const Home = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  // Close sidebar when a link is clicked (on mobile only)
  const handleLinkClick = (path) => {
    navigate(path);
    if (window.innerWidth < 1024) {
      setSidebarOpen(false);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform bg-white shadow-lg w-64 z-50 transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold text-gray-800">Admin Panel</h2>
          <button className="lg:hidden" onClick={toggleSidebar}>
            <X className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        {/* Sidebar Nav */}
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => handleLinkClick("/admin/dashboard")}
                className={`flex items-center gap-2 w-full text-left p-2 rounded-lg transition ${
                  location.pathname === "/admin/dashboard"
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-200 text-gray-700"
                }`}
              >
                <LayoutDashboard className="h-5 w-5" />
                Dashboard
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLinkClick("/admin/manage-products")}
                className={`flex items-center gap-2 w-full text-left p-2 rounded-lg transition ${
                  location.pathname === "/admin/manage-products"
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-200 text-gray-700"
                }`}
              >
                <Package className="h-5 w-5" />
                Manage Products
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLinkClick("/admin/add-product")}
                className={`flex items-center gap-2 w-full text-left p-2 rounded-lg transition ${
                  location.pathname === "/admin/add-product"
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-200 text-gray-700"
                }`}
              >
                <PlusCircle className="h-5 w-5" />
                Add Product
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
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
              src="https://ui-avatars.com/api/?name=Admin&background=0D8ABC&color=fff"
              alt="profile"
              className="h-8 w-8 rounded-full border"
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
