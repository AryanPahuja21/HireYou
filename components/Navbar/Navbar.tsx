"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Services",
      url: "#services",
    },
    {
      name: "About",
      url: "#about",
    },
    {
      name: "Contact",
      url: "#contact",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      console.log(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={clsx(
        "w-full sticky top-0 bg-white ",
        isScrolled && "shadow-lg"
      )}
    >
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center">
          <h1 className="text-2xl text-blue-500 font-bold ml-2">Hire You</h1>
        </div>
        <ul className="flex">
          {navLinks.map((link) => (
            <li key={link.name} className="mx-2">
              <Link href={link.url} className="hover:text-blue-500">
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
