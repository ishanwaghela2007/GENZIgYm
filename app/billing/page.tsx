'use client';
import React from 'react';
import Link from 'next/link';

const gyms = [
  {
    name: "Gold's Gym",
    plans: {
      "1 Year": "₹15,000",
      "6 Months": "₹9,000",
      "1 Month": "₹4,000",
    },
    phone: "+91 1234567890",
  },
  {
    name: "Anytime Fitness",
    plans: {
      "1 Year": "₹15,000",
      "6 Months": "₹9,000",
      "1 Month": "₹4,000",
    },
    phone: "+91 1234567890",
  },
  {
    name: "Cult Fit",
    plans: {
      "1 Year": "₹15,000",
      "6 Months": "₹9,000",
      "1 Month": "₹4,000",
    },
    phone: "+91 1234567890",
  },
];

export default function PlanDetails() {
  return (
    <div className="min-h-screen bg-black text-white py-10 px-6 relative">
      {/* Transparent Home Button */}
      <div className="absolute top-5 right-6">
        <Link
          href="/"
          className="text-white border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition"
        >
          Home
        </Link>
      </div>

      <h1 className="text-3xl font-bold text-center mb-12">Gym Membership Plans</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {gyms.map((gym, index) => (
          <div
            key={index}
            className="bg-gray-900 text-white shadow-lg rounded-xl p-6 flex flex-col justify-between hover:scale-105 transition-transform"
          >
            <div>
              <h2 className="text-xl font-semibold text-center mb-4">{gym.name}</h2>
              <ul className="space-y-3 mb-6">
                {Object.entries(gym.plans).map(([duration, price], idx) => (
                  <li
                    key={idx}
                    className="flex justify-between items-center border-b border-gray-700 pb-2"
                  >
                    <span>{duration}</span>
                    <span className="font-medium">{price}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center text-sm text-gray-300 border-t border-gray-700 pt-4">
              📞 Contact: {gym.phone}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
