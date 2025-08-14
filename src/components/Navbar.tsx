"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../components/ui/button";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="w-full border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Left section: Logo + Text */}
        <div className="flex items-center gap-2">
          <div className="relative w-6 h-6">
            <Image
              src="/logo.png" // replace with your icon path
              alt="SOLIF COOP Logo"
              fill
              className="object-contain"
            />
          </div>
          <div>
            <h1 className="text-sm font-bold text-[#8B4513] leading-none">
              SOLIF COOP (BOD)
            </h1>
            <p className="text-xs text-gray-600 leading-none">
              Spring of Life Cooperative
            </p>
          </div>
        </div>

        {/* Center nav links */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                pathname === link.href
                  ? "text-green-600 font-medium"
                  : "text-gray-700 hover:text-green-600"
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right button */}
        <Button className="bg-green-600 hover:bg-green-700 text-white rounded-md px-4 py-1 h-auto">
          Join Us
        </Button>
      </div>
    </header>
  );
}
