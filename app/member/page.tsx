"use client"
import Navbar from '@/components/Navbar/page'
import React, { useEffect, useState } from 'react'
import { useUser } from '@clerk/nextjs'
import Link from 'next/link'

const page = () => {
  const { user, isSignedIn, isLoaded } = useUser();
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100  dark:bg-black">
      <Navbar />
      <div className="max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center mb-8">Hello member {user?.firstName}</h1>
      </div>
    </div>
  )
}

export default page