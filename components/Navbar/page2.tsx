"use client";

import React, { useState } from "react";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function DashboardNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", href: "/pages/dashboard" },
    { name: "Profile", href: "/pages/profile" },
    { name: "Settings", href: "/pages/settings" },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 dark:border-gray-700 px-4 py-3 shadow-sm dark:bg-black">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo / Title */}
        <Link href="/dashboard" className="text-xl font-bold text-black dark:text-white">
          GENZIgYm Dashboard
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 text-black dark:text-white">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`hover:text-green-500 transition ${
                pathname === item.href ? "font-semibold text-green-600" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-black dark:text-white"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* User Button */}
        <div className="ml-4">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden mt-2 px-4 space-y-2 text-black dark:text-white">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`block hover:text-green-500 ${
                pathname === item.href ? "font-semibold text-green-600" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
