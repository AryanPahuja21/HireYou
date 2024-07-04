"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", url: "/" },
    { name: "Services", url: "#services" },
    { name: "About", url: "#about" },
    { name: "Contact", url: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={clsx(
        "w-full sticky top-0 bg-white p-4",
        isScrolled && "shadow-lg"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl text-blue-500 font-bold ml-2">
            Hire<span className="text-blue-800">You</span>
          </h1>
        </div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="block lg:hidden p-2 text-blue-500"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        <ul
          className={clsx(
            "hidden lg:flex lg:space-x-4",
            isMenuOpen && "lg:flex"
          )}
        >
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.url}
                className="text-gray-700 hover:text-blue-500"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <ul
          className={clsx(
            "absolute top-16 right-0 bg-white shadow-lg rounded-lg w-48 lg:hidden",
            isMenuOpen ? "block" : "hidden"
          )}
        >
          {navLinks.map((link) => (
            <li key={link.name} className="border-b border-gray-200">
              <Link
                href={link.url}
                className="block px-4 py-2 text-gray-700 hover:text-blue-500"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
