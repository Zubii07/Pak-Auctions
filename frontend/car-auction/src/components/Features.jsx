import React from "react";
import { FaShieldAlt, FaGavel, FaLock } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: <FaShieldAlt className="text-2xl" />,
      title: "Verified Vehicles",
      description: "Every vehicle undergoes a thorough inspection before listing."
    },
    {
      icon: <FaGavel className="text-2xl" />,
      title: "Transparent Bidding",
      description: "Real-time bidding system with complete bid history and instant updates."
    },
    {
      icon: <FaLock className="text-2xl" />,
      title: "Secure Transactions",
      description: "Secure payments and escrow service to protect both buyers and sellers."
    }
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose AutoBid</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We've revolutionized the car auction experience with a secure, verified, and transparent process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
