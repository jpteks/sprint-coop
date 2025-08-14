"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Latest News" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="w-full border-b shadow-sm bg-white sticky top-0 z-50 ">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-20 h-20">
            <Image
              src="/logo2.png"
              alt="SOLIF COOP Logo"
              fill
              className="object-contain"
            />
          </div>
         <div className="flex flex-col">
         <h1 className="text-sm md:text-lg font-bold text-green-600 leading-none">
            SOLIF-COOP-BOD
          </h1>
          <p className="text-xs text-yellow-400">Spring of Life Cooperative with Board of Directors</p>
          
         </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                pathname === link.href
                  ? "text-green-600 font-medium font-sans text-[14px]"
                  : "text-gray-700 hover:text-green-600 font-sans text-[14px]"
              }
            >
              {link.label}
            </Link>
          ))}
            <div className="hidden md:block">
          <Button className="bg-green-600 hover:bg-green-700 font-sans text-[15px] text-white rounded-md px-4 py-2">
          Become a member
          </Button>
        </div>
        </nav>

        {/* Desktop Join Us Button */}
      

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-6 w-6 text-gray-700" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-6">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-lg ${
                      pathname === link.href
                        ? "text-green-600 font-medium"
                        : "text-gray-700 hover:text-green-600"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button className="bg-green-600 hover:bg-green-700 text-white mt-4">
                  Join Us
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
