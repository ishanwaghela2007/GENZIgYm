'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';
import Link from 'next/link';

const GymLoginPage = () => {
  const router = useRouter();
  const { isSignedIn, user, isLoaded } = useUser();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !isLoaded) return null;

  // If user is signed in, check if user is a gym member
  if (isSignedIn) {
    // Example condition - replace with actual gym logic
    const isGymMember = user?.publicMetadata?.gymMember === true;

    if (!isGymMember) {
      return (
        <div className="flex flex-col justify-center items-center h-screen bg-black text-center text-white">
          <p className="text-lg">You're signed in but not registered with any gym.</p>
          <p className="mt-2">Please contact your gym administrator or try another account.</p>
        </div>
      );
    }

    // If member, redirect or show member info
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-green-50 text-center text-green-800">
        <h1 className="text-2xl font-bold">Welcome, {user.firstName}!</h1>
        <p className="mt-2">You are successfully logged in as a gym member.</p>
        <button
          onClick={() => router.push('/member')}
          className="mt-4 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded"
        >
          Go to Dashboard
        </button>
      </div>
    );
  }

  // Not signed in
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-black text-white text-center">
      <h1 className="text-2xl font-bold">Gym Member Login</h1>
      <p className="mt-2">Please sign in to access your gym account.</p>
      <Link href="/pages/auth/">
        <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Sign In
        </button>
      </Link>
    </div>
  );
};

export default GymLoginPage;
