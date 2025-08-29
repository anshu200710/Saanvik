// components/Testimonials.jsx
import React from "react";

const testimonials = [
  { id: 1, name: "Anshu", feedback: "Amazing products and great quality!" },
  { id: 2, name: "Priya", feedback: "Fast delivery and awesome customer support." },
  { id: 3, name: "Rahul", feedback: "Super smooth buying experience. Love it!" },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="px-8 py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">What Our Customers Say</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div key={t.id} className="bg-white shadow rounded-lg p-6 text-center">
            <p className="text-gray-600 mb-4">“{t.feedback}”</p>
            <h4 className="font-semibold text-indigo-600">- {t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
