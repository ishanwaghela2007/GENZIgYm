'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef<HTMLElement | null>(null);

  useGSAP(() => {
    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top bottom-=50',
        },
        scrollBehavior:"smooth"
      }
    );
  }, { scope: footerRef });

  return (
    <footer
      ref={footerRef}
      className="w-full border-t bg-background text-foreground"
    >
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Branding */}
        <div>
          <h2 className="text-xl font-bold">GENZIgYm</h2>
          <p className="text-sm text-muted-foreground mt-2">
            Smart gym access and management platform for modern fitness centers.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-sm font-semibold mb-2">Company</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/pricing" className="hover:underline">Pricing</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
            <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-semibold mb-2">Get in Touch</h3>
          <p className="text-sm text-muted-foreground">
            Email: <a href="mailto:support@fitaccess.io" className="hover:underline">support@genzigym.io</a>
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            Mumbai, India 🇮🇳
          </p>
        </div>
      </div>

      <div className="border-t text-center text-xs text-muted-foreground py-4">
        &copy; {new Date().getFullYear()} GENZIgYm. All rights reserved.
      </div>
    </footer>
  );
}
