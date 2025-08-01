"use client";

import Link from "next/link";
import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="relative min-h-screen bg-[#0e0e0e] text-white py-16 px-4 sm:px-6 lg:px-8">
      {/* Home button in top right */}
      <div className="absolute top-6 right-6">
        <Link href="/">
          <button className="border border-gray-600 text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-800 hover:text-white transition duration-200">
            Home
          </button>
        </Link>
      </div>

      <div className="max-w-2xl mx-auto bg-[#1a1a1a] p-10 rounded-3xl shadow-xl border border-[#2e2e2e]">
        <h2 className="text-4xl font-bold mb-6 text-center text-white">Contact Us</h2>
        <p className="text-center text-gray-400 mb-10">
          We'd love to hear from you. Fill out the form and we’ll get back to you shortly.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Name</label>
            <input
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[#2a2a2a] text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
            <input
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[#2a2a2a] text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Message</label>
            <textarea
              name="message"
              rows={6}
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[#2a2a2a] text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your message here..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition duration-200 text-white py-3 px-6 rounded-lg font-semibold shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
