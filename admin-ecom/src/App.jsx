import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AdminDashboard from "./pages/AdminDashboard";
import ManageProducts from "./pages/ManageProducts";
import AdminLogin from "./pages/AdminLogin";
import AddProduct from "./pages/AddProduct";

function App() {
  return (
    <Routes>
      {/* Parent Route */}
      <Route path="/" element={<AdminLogin/>}/>
      <Route path="/admin" element={<Home />}>
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="manage-products" element={<ManageProducts />} />
        <Route path="add-product" element={<AddProduct />} />
      </Route>
      
    </Routes>
  );
}

export default App;
