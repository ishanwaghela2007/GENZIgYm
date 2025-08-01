"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar/page";
import dynamic from "next/dynamic";
import Link from "next/link";
import Head from "next/head";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";;

const Scene1 = dynamic(() => import("@/components/Scene/scene1"), { ssr: false });

export default function Home() {
  const { isSignedIn } = useUser();
  const router = useRouter();
  useEffect(() => {
    if (isSignedIn) {
      router.push("/dashboard");
    }
  }, [isSignedIn, router]);

  return (
    <>
      <Head>
        <title>GENZIgYm | Gym Management Simplified</title>
        <meta
          name="description"
          content="Fast and efficient gym management platform for handling customers, schedules, and more."
        />
      </Head>

      <Navbar />

      <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
        <h2 className="text-2xl py-1 px-2 mb-4">GENZIgYm</h2>
        <p className="mb-8 text-center max-w-md">
          Welcome to the best gym management website which is fast, solves real-time problems, and helps manage gyms and customers.
        </p>
        <div className="flex gap-4">
          <Link href={"/pages/auth/"}>
            <button className="bg-gradient-to-r from-green-500 to-green-700 text-white px-6 py-2 rounded-full hover:scale-105 active:scale-95 transition-transform">
              Get Started
            </button>
          </Link>
          <Link href={"/info"}>
            <button className="border border-gray-400 px-6 py-2 rounded-full hover:bg-gray-700 transition">
              Learn More
            </button>
          </Link>
        </div>
      </main>

      <div className="flex justify-center items-center bg-black py-8">
        <div className="w-full max-w-5xl">
          <Scene1 />
        </div>
      </div>
    </>
  );
}
