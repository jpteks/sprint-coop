"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#8B5E3C] text-white">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo & Description */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="relative w-7 h-7">
              <Image
                src="/logo.png" // replace with your logo
                alt="SOLIF COOP Logo"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h2 className="text-sm font-bold text-yellow-400">
                SOLIFE-COOP-BOD
              </h2>
              <p className="text-xs">Spring of Life Cooperative</p>
            </div>
          </div>

          <p className="text-sm leading-relaxed mb-4">
            Empowering farmers and enriching communities through cooperative
            agriculture, training, and sustainable development initiatives.
          </p>

          <div className="flex gap-4">
            <Link href="#" className="hover:text-yellow-400">
              <Facebook size={16} />
            </Link>
            <Link href="#" className="hover:text-yellow-400">
              <Twitter size={16} />
            </Link>
            <Link href="#" className="hover:text-yellow-400">
              <Linkedin size={16} />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-yellow-400 font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#" className="hover:text-yellow-400">About Us</Link></li>
            <li><Link href="#" className="hover:text-yellow-400">Our Services</Link></li>
            <li><Link href="#" className="hover:text-yellow-400">Become a Member</Link></li>
            <li><Link href="#" className="hover:text-yellow-400">Latest News</Link></li>
            <li><Link href="#" className="hover:text-yellow-400">Events & Training</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-yellow-400 font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#" className="hover:text-yellow-400">Cassava Transformation</Link></li>
            <li><Link href="#" className="hover:text-yellow-400">Agricultural Training</Link></li>
            <li><Link href="#" className="hover:text-yellow-400">Cooperative Credit</Link></li>
            <li><Link href="#" className="hover:text-yellow-400">Market Linkage</Link></li>
            <li><Link href="#" className="hover:text-yellow-400">Equipment Supply</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-yellow-400 font-semibold mb-3">Contact Info</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="text-yellow-400 mt-0.5" />
              <span>
                123 Agricultural District<br />
                Cooperative Center<br />
                Agricultural Zone, Country
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-yellow-400" /> +123 456 789 000
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-yellow-400" /> info@solifcoop.org
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-yellow-500 py-3">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-200 gap-2">
          <div className="flex gap-6">
            <Link href="#" className="hover:text-yellow-400">Articles of Association</Link>
            <Link href="#" className="hover:text-yellow-400">Board Minutes</Link>
            <Link href="#" className="hover:text-yellow-400">Financial Reports</Link>
          </div>
          <p>© 2025 SPRING OF LIFE Cooperative Society. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
