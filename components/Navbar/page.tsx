'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const navbarRef = useRef<HTMLElement | null>(null);

  useGSAP(() => {
    gsap.fromTo(
      navbarRef.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: navbarRef.current,
          start: 'top top+=50',
        },
        scrollBehavior: "smooth"
      }
    );
  }, { scope: navbarRef });

  return (
    <nav
      ref={navbarRef}
      className="w-full border-b bg-background text-foreground"
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo / Branding */}
        <a href="/" className="text-xl font-bold">
          GENZIgYm
        </a>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-sm font-medium text-muted-foreground">
          <li>
            <a href="/info" className="hover:underline">About</a>
          </li>
          <li>
            <a href="/billing" className="hover:underline">Pricing</a>
          </li>
          <li>
            <a href="/support/contact" className="hover:underline">Contact</a>
          </li>
          <li>
            <a href="/pages/auth" className="hover:underline">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
