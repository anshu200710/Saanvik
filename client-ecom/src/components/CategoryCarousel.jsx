// components/CategoryCarousel.jsx
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules"; 
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import { motion } from "framer-motion";
import { products } from "../assets/assets"; // adjust path if needed

// ✅ Extract unique categories from products
const categories = [...new Set(products.map((p) => p.category))].map((cat) => {
  const product = products.find((p) => p.category === cat);
  return {
    name: cat,
    image: product?.image,
    // ✅ You can define custom gradients per category
    gradient:
      cat === "Laptop"
        ? "from-blue-400 to-indigo-600"
        : cat === "Mobile"
        ? "from-pink-400 to-purple-600"
        : cat === "Tablet"
        ? "from-green-400 to-emerald-600"
        : cat === "Earphones"
        ? "from-orange-400 to-red-500"
        : "from-gray-400 to-gray-600",
  };
});

const CategoryCarousel = () => {
  const [activeGradient, setActiveGradient] = useState(categories[0].gradient);

  return (
    <motion.section
      className={`min-h-[70vh] flex items-center justify-center transition-all duration-700 relative`}
    >
      {/* Background Gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${activeGradient} transition-all duration-700`}
      ></div>

      {/* Carousel Container */}
      <div className="relative w-[90%] md:w-[70%] z-10">
        <h2 className="text-3xl font-bold text-center mb-10 text-white drop-shadow-lg">
          Explore Categories
        </h2>

        <Swiper
          spaceBetween={30}
          slidesPerView={1.2}
          centeredSlides
          loop={true}
          autoplay={{
    delay: 2500,   // time between slides (ms)
    disableOnInteraction: false, // keep autoplay even after user interacts
  }}
//   pagination={{ clickable: true }}
//   navigation={true}
  modules={[Autoplay]}
          onSlideChange={(swiper) => {
            const current = categories[swiper.realIndex];
            setActiveGradient(current.gradient);
          }}
        >
          {categories.map((cat, idx) => (
            <SwiperSlide key={idx}>
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white rounded-2xl shadow-xl p-6 text-center"
  >
    {/* Image wrapper to maintain aspect ratio */}
    <div className="h-52 w-full flex items-center justify-center bg-gray-50 rounded-xl mb-4 overflow-hidden">
      <img
        src={cat.image}
        alt={cat.name}
        className="max-h-full max-w-full object-contain"
      />
    </div>

    <h3 className="text-lg font-semibold">{cat.name}</h3>
  </motion.div>
</SwiperSlide>

          ))}
        </Swiper>
      </div>
    </motion.section>
  );
};

export default CategoryCarousel;
