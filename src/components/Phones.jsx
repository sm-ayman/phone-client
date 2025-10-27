import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Phones = () => {
  const phones = useLoaderData();

  return (
    <div className="container mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold text-center text-slate-800 mb-8">
        📱 All Phones <span className="text-cyan-500">({phones.length})</span>
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {phones.map((phone) => (
          <div
            key={phone.id}
            className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-transform hover:-translate-y-2"
          >
            <img
              src={phone.image}
              alt={phone.name}
              className="w-full h-72 object-fit"
            />

            <div className="p-5">
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                {phone.name}
              </h3>
              <p className="text-gray-500 mb-4">${phone.price}</p>

              <Link
                to={`/phones/${phone.id}`}
                className="inline-block bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Phones;
