import React from "react";
import { useLoaderData, Link } from "react-router-dom";

const Phone = () => {
  const phone = useLoaderData();
  console.log(phone);
  const { name, image, price, description } = phone;

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="bg-white shadow-lg rounded-2xl flex flex-col md:flex-row overflow-hidden">
        {/* Image Section */}
        <div className="md:w-1/2 bg-gray-100 flex justify-center items-center p-6">
          <img
            src={image}
            alt={name}
            className="w-80 h-auto object-contain hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Details Section */}
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">{name}</h2>
          <p className="text-lg text-gray-500 mb-4 leading-relaxed">
            {description}
          </p>
          <p className="text-2xl font-semibold text-cyan-600 mb-6">
            ${price.toFixed(2)}
          </p>

          <div className="flex space-x-4">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg transition">
              Buy Now
            </button>
            <Link
              to="/phones"
              className="border border-cyan-500 text-cyan-600 px-6 py-2 rounded-lg hover:bg-cyan-50 transition"
            >
              Back to List
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phone;
