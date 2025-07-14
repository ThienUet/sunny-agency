"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "@/styles/header/header.module.scss";
import ImageNew from "../CustomImage/ImageNew";

const navItems = [
  { name: "INTRODUCTION", href: "/introduction" },
  { name: "RENTAL SERVICES", href: "/rental-services" },
  { name: "ABOUT US", href: "/about" },
  { name: "REVIEWS", href: "/reviews" },
  { name: "FACEBOOK NEWS", href: "/news" },
  { name: "CONTACT US", href: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative overflow-hidden">
      <div className={styles["header-bg"]} />

      <div className="relative container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className={styles.logo}>
            <Link aria-label="homepage" href="/">
              <div className="rounded-full p-2 pb-6 flex items-center h-16">
                <ImageNew
                  src="/images/logos/logo2.png"
                  alt="Sunny Agency Logo"
                  width={220}
                  height={60}
                  classNameParent="h-14 w-auto block object-contain"
                  priority={true}
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-end gap-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="uppercase font-bold text-white text-lg px-6 py-2 rounded-xl transition-all duration-200 hover:bg-yellow-100 hover:text-blue-950 hover:shadow-md"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white hover:bg-white/20 rounded-full p-2 transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Toggle menu</span>
            {/* Hamburger/X icon */}
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-xl">
              <nav className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="px-4 py-3 text-white font-medium text-sm tracking-wide rounded-lg hover:bg-white/20 transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
