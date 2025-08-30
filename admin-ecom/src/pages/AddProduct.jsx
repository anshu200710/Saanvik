import { useState } from "react";
import axios from "axios";
import { PlusCircle, Upload, Image as ImageIcon } from "lucide-react";

const AddProduct = () => {
  const [form, setForm] = useState({ name: "", price: "", description: "" });
  const [image, setImage] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("price", form.price);
      formData.append("description", form.description);
      formData.append("image", image);

      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/products`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      alert("✅ Product Added!");
      setForm({ name: "", price: "", description: "" });
      setImage(null);
    } catch (err) {
      alert("❌ Error: " + (err.response?.data?.message || err.message));
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setImage(e.dataTransfer.files[0]);
    }
  };

  return (
    <div className="flex justify-center items-center py-10 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6 space-y-5 border border-gray-100"
      >
        <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
          <PlusCircle className="w-6 h-6 text-blue-500" />
          Add New Product
        </h2>

        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Product Name
          </label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter product name"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Price
          </label>
          <input
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder="Enter price"
            type="number"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Description
          </label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Write a short description..."
            rows="3"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* File Input with Drag & Drop */}
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setDragActive(true);
          }}
          onDragLeave={() => setDragActive(false)}
          onDrop={handleDrop}
          className={`flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer transition ${
            dragActive
              ? "border-blue-400 bg-blue-50"
              : "border-gray-300 hover:border-blue-400"
          }`}
        >
          {image ? (
            <div className="text-center">
              <ImageIcon className="w-8 h-8 text-green-500 mx-auto" />
              <p className="text-sm text-gray-700 mt-1">{image.name}</p>
            </div>
          ) : (
            <>
              <Upload className="w-6 h-6 text-gray-500" />
              <p className="text-gray-500 text-sm mt-1">
                Drag & Drop image here or <span className="text-blue-500">Click to upload</span>
              </p>
            </>
          )}
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="hidden"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-lg transition flex items-center justify-center gap-2"
        >
          <PlusCircle className="w-5 h-5" />
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
