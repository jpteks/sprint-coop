"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Users,
  TrendingUp,
  CheckCircle,
  Award,
  Lightbulb,
  Leaf,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const selectedServices = [
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
      title: "Farmers Training & Capacity Building",
      description:
        "Empowering farmers through training in modern agricultural techniques, sustainable farming practices, and agribusiness management.",
      image: "/farmers.jpeg",
    },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="flex flex-col font-sans ">
      {/* ✅ Hero Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative h-[630px] md:h-[650px] flex flex-col items-center justify-center text-center px-4"
      >
        <div className="absolute inset-0">
          <Image
            src="/home.jpeg"
            alt="Farmers working"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-white flex flex-col items-center">
          <h1 className="text-xl  md:text-3xl lg:text-4xl font-bold leading-snug">
            Empowering Agriculture,{" "}
            <span className="text-green-400">Enriching Communities</span>
          </h1>
          <p className="mt-4 max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl leading-6 sm:leading-7 md:leading-8 font-normal opacity-90 text-base sm:text-base md:text-lg">
            SPRING OF LIFE Cooperative Society with Board of Directors
            (SOLIF-COOP-BOD) is a farmer-led cooperative in Tiko, Cameroon,
            dedicated to transforming agriculture and improving rural
            livelihoods. Through innovation, sustainability, and community
            spirit, we empower farmers to increase productivity, add value to
            their harvests, and access better markets locally and
            internationally.
          </p>

          <div className="mt-2 flex flex-wrap justify-center gap-4">
            {/* Become a member */}
            <a
              href="https://wa.me/237677287778?text=I%20wish%20to%20be%20a%20member%20of%20SOLIF-COOP-BOD"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-green-600 hover:bg-green-700 font-sans text-sm sm:text-[15px] text-white rounded-md px-4 py-2">
                Become a member
              </Button>
            </a>

            {/* Contact Us */}
            <a
              href="https://wa.me/237677287778"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-black text-sm sm:text-[15px] rounded-md px-4 py-2"
              >
                Contact Us
              </Button>
            </a>
          </div>
        </div>

        <div className="relative z-10 mt-10 flex flex-wrap justify-center gap-4 sm:gap-6">
          <Card className="flex items-center gap-2 sm:gap-4 bg-black/40 backdrop-blur-md text-white px-3 sm:px-4 py-2 border-none w-32 sm:w-40">
            <Users className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500" />
            <div>
              <p className="text-xl sm:text-2xl font-bold">100</p>
              <p className="text-xs sm:text-sm opacity-80">Active Members</p>
            </div>
          </Card>

          <Card className="flex items-center gap-2 sm:gap-4 bg-black/40 backdrop-blur-md text-white px-3 sm:px-4 py-2 border-none w-32 sm:w-40">
            <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500" />
            <div>
              <p className="text-xl sm:text-2xl font-bold">10M CFA</p>
              <p className="text-xs sm:text-sm opacity-80">Share Capital</p>
            </div>
          </Card>

          <Card className="flex items-center gap-2 sm:gap-4 bg-black/40 backdrop-blur-md text-white px-3 sm:px-4 py-2 border-none w-32 sm:w-40">
            <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500" />
            <div>
              <p className="text-xl sm:text-2xl font-bold">3</p>
              <p className="text-xs sm:text-sm opacity-80">Years Active</p>
            </div>
          </Card>
        </div>
      </motion.section>

      {/* ✅ Mission Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto p-6"
      >
        <div className="grid  md:grid-cols-2 gap-8  items-start">
          <div> 
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Our <span className="text-green-600">Mission</span>
            </h2>
            <p className="text-gray-600 mb-8 text-base sm:text-base">
              SOLIF COOP is committed to transforming the agricultural landscape
              through education, innovation, and sustainable practices.
            </p>

            <Card className="bg-green-50 border-l-4 border-green-600 shadow">
              <CardContent className="pt-4 sm:pt-6">
                <p className="text-gray-700 text-base sm:text-sm">
                  SOLIF–COOP–BOD was formed under the Cooperative Societies Act,
                  with the mission to bring farmers together and improve
                  livelihoods through collective resources and education.
                </p>
                <p className="mt-2 sm:mt-4 text-gray-700 text-base sm:text-sm">
                  Our main mission is to build a higher and more economically
                  focused community with focus on processing, job creation, and
                  market penetration in Cameroon and Central Africa.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
            {[
              {
                icon: (
                  <Award className="w-12 h-12 text-green-500 mx-auto mb-2 sm:mb-4" />
                ),
                desc: "Equipping farmers with modern skills and knowledge.",
              },
              {
                icon: (
                  <Lightbulb className="w-12 h-12 text-yellow-500 mx-auto mb-2 sm:mb-4" />
                ),
                desc: "Encouraging creative solutions in agriculture.",
              },
              {
                icon: (
                  <Leaf className="w-12 h-12 text-green-700 mx-auto mb-2 sm:mb-4" />
                ),
                desc: "Promoting practices that protect our environment.",
              },
              {
                icon: (
                  <Users className="w-12 h-12 text-blue-500 mx-auto mb-2 sm:mb-4" />
                ),
                desc: "Building strong and supportive farming communities.",
              },
            ].map((item, i) => (
              <Card key={i} className="text-center hover:shadow-md transition">
                <CardContent className="p-4 sm:p-6">
                  {item.icon}
                  <p className="text-base sm:text-sm text-gray-600">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ✅ Services Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-gray-50 mx-auto p-6"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6">
            Our <span className="text-green-600">Core Services</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mt-8">
            {selectedServices.map((service, i) => (
              <Card
                key={i}
                className="overflow-hidden hover:shadow-md transition"
              >
                <div className="w-full h-40 relative">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader className="pt-2 sm:pt-4 px-2 sm:px-4">
                  <CardTitle className="text-sm sm:text-base md:text-lg">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-2 sm:px-4 pb-4">
                  <p className="text-base sm:text-sm md:text-sm text-gray-600">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 sm:mt-10 text-center">
            <Button
              asChild
              className="bg-green-600 hover:bg-green-700 font-sans text-sm sm:text-[15px] text-white rounded-md px-4 py-2"
            >
              <a href="/services">View All Services</a>
            </Button>
          </div>
        </div>
      </motion.section>

      {/* ✅ Latest News */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className=" mx-auto p-6"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6">
          Latest <span className="text-green-600">News</span>
        </h2>

        <div className="flex flex-col items-center justify-center min-h-[150px] sm:min-h-[200px] mt-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-green-600 mb-4 animate-pulse">
            Coming Soon
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-500">
            Exciting updates are on the way! Stay tuned.
          </p>
        </div>
      </motion.section>

      {/* ✅ Join Us Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-gray-50 text-black text-center mx-auto p-6"
      >
        <h2 className="text-lg sm:text-xl font-semibold">
          Ready to Join Our Community?
        </h2>
        <p className="mt-2 text-base sm:text-sm md:text-base max-w-xl mx-auto">
          Become part of a thriving network dedicated to positively impacting
          farming communities.
        </p>
        <div className="mt-4 flex justify-center gap-3 sm:gap-4">
          {/* Become Member */}
          <a
            href="https://wa.me/237677287778?text=I%20wish%20to%20be%20a%20member%20of%20SOLIF-COOP-BOD"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-green-600 hover:bg-green-700">
              Become a member
            </Button>
          </a>

          {/* Contact Us */}
          <a
            href="https://wa.me/237677287778"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="text-black bg-transparent hover:bg-white hover:text-green-700 text-sm sm:text-[15px] rounded-md px-4 py-2"
            >
              Contact Us
            </Button>
          </a>
        </div>
      </motion.section>
    </div>
  );
}