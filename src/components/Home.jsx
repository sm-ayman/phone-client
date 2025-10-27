import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/phones")
      .then((res) => res.json())
      .then((data) => {
        setPhones(data.slice(0, 4));
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-cyan-600 text-white py-20">
        <div className="container mx-auto text-center px-6">
          <h1 className="text-5xl font-bold mb-4">Welcome to PhoneClient 📱</h1>
          <p className="text-xl mb-6">
            Explore the latest smartphones, compare specs, and find your perfect
            device.
          </p>
          <Link
            to="/phones"
            className="bg-white text-cyan-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Browse Phones
          </Link>
        </div>
      </section>

      {/* Featured Phones */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
          Featured Phones
        </h2>

        {loading ? (
          <p className="text-center text-gray-500">Loading phones...</p>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {phones.map((phone) => (
              <div
                key={phone.id}
                className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-transform hover:-translate-y-2"
              >
                <img
                  src={phone.image}
                  alt={phone.name}
                  className="w-full h-72 object-contain"
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">
                    {phone.name}
                  </h3>
                  <p className="text-gray-500 mb-4">
                    ${phone.price.toFixed(2)}
                  </p>
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
        )}
      </section>
    </div>
  );
};

export default Home;
