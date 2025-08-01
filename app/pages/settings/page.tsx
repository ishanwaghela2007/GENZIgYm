"use client";
import React, { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import Navbar from "@/components/Navbar/page2";
const page = () => {
  const { isSignedIn, user, isLoaded } = useUser();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !isLoaded) return null;

  if (!isSignedIn) {
    return (
      <div className="flex flex-col justify-center items-center h-screen text-center text-white bg-black">
        <p>Please sign in to explore settings of the app </p>
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
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Settings Page</h1>
      <p className="text-lg mt-4">
        This is the settings page of the app. You can configure various settings
        here.
      </p>
      <p className="text-lg mt-4">
        Version: {process.env.NEXT_PUBLIC_APP_VERSION}
      </p>
    </div>
    </>
  );
};

export default page;
