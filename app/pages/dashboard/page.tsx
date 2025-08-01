"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import Navbar from "@/components/Navbar/page2";


// Dummy gym data — replace with API fetch later if needed
const gyms = [
  {
    id: 1,
    name: "Gold's Gym",
    location: "Mumbai, Maharashtra",
    features: ["Cardio", "Strength", "Personal Trainer"],
  },
  {
    id: 2,
    name: "Anytime Fitness",
    location: "Pune, Maharashtra",
    features: ["24x7 Access", "Zumba", "Steam Bath"],
  },
  {
    id: 3,
    name: "Cult Fit",
    location: "Bangalore, Karnataka",
    features: ["Yoga", "Crossfit", "Diet Plans"],
  },
];

const Page = () => {
  const router = useRouter();
  const { isSignedIn, user, isLoaded } = useUser();
  const [mounted, setMounted] = useState(false);
  const [loading,setloading]=useState(false)
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !isLoaded) return null;

  if (!isSignedIn) {
    return (
      <div className="flex flex-col justify-center items-center h-screen text-center text-white bg-black">
        <p>Please sign in to explore supported gyms.</p>
        <div className="mt-4">
          <Link href="/pages/auth/">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Sign In
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="bg-black min-h-screen px-4 py-8">
        <h1 className="text-3xl font-semibold text-center mb-8 text-white">
          Supported Gyms on Our Platform
        </h1>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {gyms.map((gym) => (
            <div
              key={gym.id}
              className="border border-gray-700 rounded-lg p-4 bg-gray-900 text-white flex justify-between items-start hover:shadow-xl transition"
            >
              <div>
                <h2 className="text-xl font-bold">{gym.name}</h2>
                <p className="text-gray-400">{gym.location}</p>
                <ul className="mt-2 list-disc list-inside text-sm text-gray-300">
                  {gym.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div>
                <Link href="/pages/auth/gym">
                  <button className="ml-4 bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded">
                    Login
                  </button>
                </Link>
              </div>
            </div>
          ))}

        </div>
      </div>
    </>
  );
};

export default Page;
