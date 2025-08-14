"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import { motion } from "framer-motion";
export const metadata:Metadata = {
  title: "Our Services | AgriSmart",
  description:
    "Discover SOLIF-COOP-BOD's range of agricultural services, from crop advisory to market linkages, aimed at transforming farming and boosting yields.",
};

export default function ServicesPage() {
  return (
    <main className="font-sans">
      {/* Hero Section */}
      <section className="relative h-[300px] w-full">
        <Image
          src="/services.jpeg"
          alt="Farmers working in the field"
          fill
          priority
          className="object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Our Services</h1>
        </div>
      </section>

      {/* Services List */}
      <section className="max-w-6xl mx-auto px-4 py-16 grid gap-12">
        {services.map((service, index) => (
          <motion.article
            key={service.title}
            className="grid md:grid-cols-2 gap-6 items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {/* Image */}
            <div
              className={`relative w-full h-[250px] md:h-[300px] ${
                index % 2 === 1 ? "md:order-2" : "md:order-1"
              }`}
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover rounded-lg shadow-md"
              />
            </div>

            {/* Text */}
            <div
              className={`${
                index % 2 === 1 ? "md:order-1" : "md:order-2"
              }`}
            >
              <h2 className="text-2xl font-semibold mb-3 text-green-600">
                {service.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {service.description}
              </p>
            </div>
          </motion.article>
        ))}
      </section>

      {/* CTA Section */}
      <motion.section
        className="bg-gray-100 py-12 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-4">
          Ready to Transform Your Farming?
        </h2>
        <p className="text-gray-600 mb-6">
          Join SOLIF-COOP-BOD today and take the first step toward smarter, more
          profitable farming.
        </p>
        <div className="flex justify-center gap-4">
          <Button className="bg-green-600 hover:bg-green-700">
            Become a member
          </Button>
          <Button variant="outline">Contact Us</Button>
        </div>
      </motion.section>
    </main>
  );
}

const services = [
    {
        title: "Cassava, Other Crops & Livestock Farming",
        description:
          "We specialize in transforming agricultural products such as cassava, cocoa, and other high-value crops into market-ready goods, while also supporting livestock farming to improve productivity, sustainability, and income for farmers.",
        image: "/services.jpeg",
      },
      
    {
      title: "Credit Union for Farmers",
      description:
        "Providing affordable financial services, savings plans, and loans to help farmers invest in better seeds, equipment, and farming practices.",
      image: "/credit.jpeg",
    },
    {
      title: "Agro Value Chain Participation",
      description:
        "We actively engage in the agricultural value chain, connecting farmers to processors, distributors, and markets to ensure fair trade and stable demand.",
      image: "/agro.jpeg",
    },
    {
      title: "Farmers Training & Capacity Building",
      description:
        "Empowering farmers through training in modern agricultural techniques, sustainable farming practices, and agribusiness management.",
      image: "/farmers.jpeg",
    },
    {
      title: "Fisheries Development",
      description:
        "Promoting sustainable fish farming and aquaculture practices to increase productivity, create jobs, and ensure food security for local communities.",
      image: "/fish.jpeg",
    },
   
  ];
  