'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import Link from 'next/link';

const GymServicePage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to GENZIgYm</h1>
        <p className="text-lg text-gray-400 mb-8">
          Your transformation starts here. Explore our world-class facilities, expert trainers, and customized fitness plans.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => router.push('/billing')}
            className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition font-semibold"
          >
            View Plans
          </button>
        </div>
      </div>

      {/* Services Section */}
      <section className="mt-24">
        <h2 className="text-3xl font-semibold text-center mb-10">What We Offer</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Personal Training",
              desc: "Certified trainers focused on your goals and body transformation.",
            },
            {
              title: "Group Sessions",
              desc: "Fun and energetic Zumba, Yoga, HIIT, and more every day.",
            },
            {
              title: "Diet & Nutrition",
              desc: "Personalized diet plans and expert consultations for all members.",
            },
          ].map((service, i) => (
            <div
              key={i}
              className="bg-zinc-900 p-6 rounded-xl shadow hover:scale-105 transition"
            >
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="mt-24 text-center">
        <h2 className="text-2xl mb-2">Need Help?</h2>
        <p className="text-gray-400">Call us: <span className="text-white font-medium">+91 1234567890</span></p>
      </section>

      {/* Home Button */}
      <div className="fixed top-0 right-0 p-4">
        <Link href="/">
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-lg">
            Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default GymServicePage;
