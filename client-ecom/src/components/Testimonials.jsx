// components/Testimonials.jsx
import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  { id: 1, name: "Anshu", feedback: "Amazing products and great quality!" },
  { id: 2, name: "Priya", feedback: "Fast delivery and awesome customer support." },
  { id: 3, name: "Rahul", feedback: "Super smooth buying experience. Love it!" },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="px-6 md:px-16 py-20 bg-gradient-to-b from-gray-50 to-white">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-14">
        What Our <span className="text-indigo-600">Customers</span> Say
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 text-center border border-gray-100"
          >
            <p className="text-gray-600 italic mb-6 text-lg">“{t.feedback}”</p>
            <h4 className="font-semibold text-indigo-600 text-xl">- {t.name}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
