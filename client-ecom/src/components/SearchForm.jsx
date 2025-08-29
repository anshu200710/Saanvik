import React, { useState } from "react";
import axios from "axios";
import { Search } from "lucide-react"; // for nice icon

function SearchForm() {
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/search",
        { category, location },
        { responseType: "blob" }
      );

      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "businesses.xlsx");
      document.body.appendChild(link);
      link.click();
    } catch (err) {
      alert("Something went wrong!");
      console.error(err);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 via-indigo-100 to-white">
      <form
        onSubmit={handleSubmit}
        className="bg-white/90 backdrop-blur-lg p-10 rounded-3xl shadow-xl w-full max-w-lg space-y-6 border border-gray-200"
      >
        {/* Header */}
        <div className="flex items-center justify-center gap-2">
          <Search className="w-6 h-6 text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-800 text-center">
            Business Data Finder
          </h2>
        </div>

        {/* Category Input */}
        <div>
          <label className="block text-gray-700 mb-2 font-medium">
            Category
          </label>
          <input
            type="text"
            placeholder="e.g. Salon, Restaurant"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm 
                       focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            required
          />
        </div>

        {/* Location Input */}
        <div>
          <label className="block text-gray-700 mb-2 font-medium">
            Location
          </label>
          <input
            type="text"
            placeholder="e.g. Delhi, Mumbai"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm 
                       focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 
                     text-white font-semibold shadow-lg hover:shadow-2xl hover:scale-[1.02] 
                     transition-transform duration-200 flex items-center justify-center gap-2"
        >
          <Search className="w-5 h-5" /> Search & Download
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
