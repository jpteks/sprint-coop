"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Services() {
  return (
    <div className="flex flex-col w-full">
      <Navbar />

      {/* Main Content */}
      {/* Hero Section */}
      <div className="relative w-full h-[300px]">
        <Image
          src="/services-hero.jpg" // Replace with your hero image
          alt="Our Services"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-3xl md:text-4xl font-bold">
            Our Services
          </h1>
          <p className="text-white mt-2 max-w-2xl">
            Discover how SOLIF–COOP–BOD is transforming agriculture with innovative solutions for farmers.
          </p>
        </div>
      </div>

      {/* Services List */}
      <section className="px-4 md:px-16 py-12 bg-white space-y-12">
        {[
          {
            img: "/services/cassava.jpg",
            title: "Cassava cultivation (organic & non-organic)",
            text: "Complete cassava processing from farm to market, including flour, garri, starch, and animal feed production. We facilitate training, farming techniques, and provide access to markets.",
            items: ["Product & Processing", "Farming Techniques", "Quality Control Standards"],
          },
          {
            img: "/services/garri.jpg",
            title: "Garri processing & packaging",
            text: "We produce hygienic, top-quality garri for both organic and non-organic markets with attractive packaging ready for sale.",
            items: ["Market-Ready Production", "Hygienic Packaging", "Shelf-Ready Distribution"],
          },
          {
            img: "/services/starch.jpg",
            title: "Laundry starch production",
            text: "Our starch production facilities engage organic farmers with eco-friendly production methods for sustainable local businesses.",
            items: ["Eco-friendly Production", "Process Monitoring & Packaging"],
          },
          {
            img: "/services/animal-feed.jpg",
            title: "Animal feed production",
            text: "Animal feed sourced from cassava by-products designed specifically for poultry, pigs, goats, and other livestock.",
            items: ["Strategic Sourcing", "Product Development"],
          },
          {
            img: "/services/vegetables.jpg",
            title: "Cassava leaf vegetable processing",
            text: "From farm to market, we process cassava leaves for local, regional, and export markets. We ensure product freshness and quality.",
            items: ["Direct Farmer Access", "Export Opportunities"],
          },
          {
            img: "/services/cassava-stems.jpg",
            title: "Sale of cassava stems",
            text: "We distribute selected cassava stem varieties for improved yields and disease resistance to farmers in our network.",
            items: ["Strategic Sourcing", "Farming Training"],
          },
          {
            img: "/services/farmer-programs.jpg",
            title: "Partnership programs with local farmers",
            text: "Joint ventures to grow garri, starch, leaves, and organic markets. We facilitate financing, training, and market access.",
            items: ["Joint Ventures", "Business Facilitation"],
          },
        ].map((service, idx) => (
          <div
            key={idx}
            className={`grid grid-cols-1 md:grid-cols-2 gap-6 items-center ${
              idx % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="relative w-full h-[220px] md:h-[280px]">
              <Image
                src={service.img}
                alt={service.title}
                fill
                className="object-cover rounded-md"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-3">{service.text}</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {service.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="bg-gray-100 py-12 px-4 md:px-16 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Ready to Transform Your Farming?
        </h2>
        <p className="text-gray-700 mb-6">
          Join SOLIF–COOP–BOD today and access all our expert farming services.
        </p>
        <div className="flex justify-center gap-4">
          <Button className="bg-green-600 hover:bg-green-700 text-white">
            Join Us
          </Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </section>
      <Footer />
    </div>
  );
}
