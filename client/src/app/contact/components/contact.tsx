import { Metadata } from "next";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact Us - AgriSmart",
  description:
    "Get in touch with AgriSmart for inquiries, support, or partnership opportunities.",
};

export default function ContactPage() {
  return (
    <main className="font-sans">
      {/* Header */}
      <header className="relative w-full h-[60vh] md:h-[50vh]">
        <Image
          src="/farmer.png"
          alt="About SOLIF-COOP-BOD"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/ flex items-center justify-center flex-col px-4">
          <h1 className="text-white text-2xl md:text-3xl font-bold text-center">
            Contact Us
          </h1>
        </div>
      </header>

      {/* Contact Info & Form */}
      <section className="py-12 px-4 md:px-12 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
            <p className="mb-6 text-base text-gray-600">
              Our team is ready to assist you with any questions, feedback, or
              requests you may have.
            </p>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-yellow-400 mt-0.5" />
                <span>
                  Tiko-Douala Road Cameroon<br />
                </span>
              </li>
              <li className="flex flex-col">
                <div className="flex items-center gap-2">
                  <FaWhatsapp size={16} className="text-yellow-400" /> +237
                  677287778
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-yellow-400" /> +237 658677206
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-yellow-400" />{" "}
                info@solifcoopbod.com
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
            <form className="space-y-4">
              <Input placeholder="Your Name" required />
              <Input type="email" placeholder="Your Email" required />
              <Input placeholder="Subject" required />
              <Textarea
                placeholder="Message"
                required
                className="min-h-[120px]"
              />
              <Button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Find Us Section */}
      <section className="py-12 bg-gray-50 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">Find Us</h2>
          <p className="text-gray-600 text-base mb-6">
            Visit our main office for a face-to-face meeting with our team.
          </p>
          <div className="border border-gray-300 p-6 rounded-lg bg-white shadow-sm">
            <MapPin className="w-6 h-6 mx-auto text-green-600 mb-2" />
            <p className="font-medium">Tiko-Douala Road Cameroon</p>
            <p className="text-gray-500 text-sm mt-1">
              Open Monday - Friday, 8:00 AM - 5:00 PM
            </p>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/237677287778"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-110 z-50"
      >
        <FaWhatsapp size={28} />
      </a>
    </main>
  );
}
