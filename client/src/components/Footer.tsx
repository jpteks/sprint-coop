"use client";
import { FaFacebook, FaLinkedin, FaTiktok, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { Badge } from "./ui/badge";

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white font-sans">
      {/* Top Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & About */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="relative w-16 h-16">
              <Image
                src="/logo.jpeg"
                alt="SOLIF COOP Logo"
                fill
                className="object-contain"
              />
            </div>
            <div>
            <p className="md:text-xs text-6px text-yellow-400">
              Spring of Life Cooperative society with Board of Directors
            </p>
            <h1 className="text-[10px] md:text-md font-bold text-white leading-none">
              SOLIF-COOP-BOD
            </h1>
             
            </div>
          </div>

          <p className="text-base leading-relaxed mb-5">
            Empowering farmers and enriching communities through cooperative
            agriculture, training, and sustainable development initiatives.
          </p>

          <div className="flex gap-4">
            <Link
              href="#"
              aria-label="Facebook"
              className="hover:text-yellow-400"
            >
              <FaFacebook size={18} />
            </Link>
            <Link
              href="#"
              aria-label="Twitter"
              className="hover:text-yellow-400"
            >
              <FaTiktok size={18} />
            </Link>
            <Link
              href="#"
              aria-label="LinkedIn"
              className="hover:text-yellow-400"
            >
              <FaLinkedin size={18} />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-yellow-400 font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-base">
            <li>
              <Link href="/" className="hover:text-yellow-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-yellow-400">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-yellow-400">
                Our Services
              </Link>
            </li>

            <li>
              <Link href="/blog" className="hover:text-yellow-400">
                Latest News
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-yellow-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-yellow-400 font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-base">
            <li>
              <Link
                href="/services"
                className="hover:text-yellow-400"
              >
                Cassava, Other Crops & Livestock Farming
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-yellow-400"
              >
                Credit Union for Farmers
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-yellow-400"
              >
                Agro Value Chain Participation
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-yellow-400"
              >
                Farmers Training & Capacity Building
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-yellow-400"
              >
                Fisheries Development
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-yellow-400 font-semibold mb-4">Contact Info</h3>
          <ul className="space-y-3 text-base">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="text-yellow-400 mt-0.5" />
              <span>
                Tiko-Douala Road Cameroon
                <br />
              </span>
            </li>
            <li className="flex flex-col">
              <div className="flex items-center gap-2">
                <a
                  href="https://wa.me/237677287778"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-yellow-500"
                >
                  <FaWhatsapp size={16} className="text-yellow-400" />
                  +237 677287778
                </a>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="tel:+237658677206"
                  className="flex items-center gap-2 hover:text-yellow-500"
                >
                  <Phone size={16} className="text-yellow-400" />
                  +237 658677206
                </a>
              </div>
            </li>

            <li className="flex items-center gap-2">
              <a
                href="mailto:contact@solif-coop-bod.com"
                className="flex items-center gap-2 hover:text-yellow-500"
              >
                <Mail size={16} className="text-yellow-400" />
                contact@solif-coop-bod.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-yellow-500 py-4">
        <p className="text-center text-[8px] ">
          © {new Date().getFullYear()} SOLIF-COOP-BOD. All rights reserved. |
          Designed by{" "}
          <Link
            href="https://jpteks.techsprint.cm"
            className="hover:text-yellow-400 font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
           <Badge className="bg-green-600 text-white">Techsprint.cm</Badge>
          </Link>
        </p>
      </div>
    </footer>
  );
}