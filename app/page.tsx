"use client";

import React, { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar/page";
import dynamic from "next/dynamic";
import Link from "next/link";
import Head from "next/head";
import { useUser } from "@clerk/nextjs";
import gsap from "gsap";
import Scene1 from '@/components/Scene/scene1'


export default function Home() {
  const { isSignedIn } = useUser();
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Entrance animations
    const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });
    const ctaButtons = Array.from(ctaRef.current?.children ?? []) as HTMLElement[];
    timeline
      .fromTo(
        titleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 }
      )
      .fromTo(
        subtitleRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        "-=0.3"
      )
      .from(
        ctaButtons,
        { y: 10, opacity: 0, duration: 0.6, stagger: 0.1 },
        "-=0.2"
      );
  }, []);

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

      <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4">
        <h1 ref={titleRef} className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600">
          Train Smarter. Manage Faster.
        </h1>
        <p ref={subtitleRef} className="mb-8 text-center max-w-2xl text-gray-300">
          GENZIgYm is your modern, lightning-fast gym management platform—built to streamline memberships, schedules, and performance insights so you can focus on results.
        </p>
        <div ref={ctaRef} className="flex gap-4">
          <Link href={isSignedIn ? "/pages/dashboard" : "/pages/auth/"}>
            <button className="bg-gradient-to-r from-green-500 to-emerald-700 text-white px-6 py-2 rounded-full hover:shadow-[0_0_20px_rgba(16,185,129,0.45)] hover:-translate-y-0.5 active:translate-y-0 transition-all">
              {isSignedIn ? "Go to Dashboard" : "Get Started"}
            </button>
          </Link>
          <Link href={"/info"}>
            <button className="border border-gray-600 px-6 py-2 rounded-full text-gray-200 hover:border-gray-300 hover:bg-gray-800/60 transition-all">
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
