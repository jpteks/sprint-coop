"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Users, TrendingUp, CheckCircle, Award, Lightbulb, Leaf } from "lucide-react";
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
    <div className="flex flex-col font-sans">
      {/* ✅ Hero Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative h-[550px] flex flex-col items-center justify-center text-center"
      >
        <div className="absolute inset-0">
          <Image src="/home.jpeg" alt="Farmers working" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-white px-4 flex flex-col items-center">
          <h1 className="text-2xl md:text-3xl font-bold leading-snug">
            Empowering Farmers, <span className="text-green-400">Enriching Communities</span>
          </h1>
          <p className="mt-4 max-w-3xl leading-[40px] font-normal opacity-90">
            SPRING OF LIFE Cooperative Society with Board of Directors (SOLIF-COOP-BOD) transforms
            agricultural communities through cassava processing, farmer training, and cooperative
            credit services. Join us in building sustainable farming futures.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button className="bg-green-600 hover:bg-green-700 font-sans text-[15px] text-white rounded-md px-4 py-2">
              Become a member
            </Button>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-black"
            >
              Contact Us
            </Button>
          </div>
        </div>

        <div className="relative z-10 mt-12 flex flex-wrap justify-center gap-6">
          <Card className="flex items-center gap-4 bg-black/40 backdrop-blur-md text-white px-4 py-2 border-none w-40">
            <Users className="w-8 h-8 text-yellow-500" />
            <div>
              <p className="text-2xl font-bold">100</p>
              <p className="text-sm opacity-80">Active Members</p>
            </div>
          </Card>

          <Card className="flex items-center gap-4 bg-black/40 backdrop-blur-md text-white px-4 py-2 border-none w-40">
            <TrendingUp className="w-8 h-8 text-yellow-500" />
            <div>
              <p className="text-2xl font-bold">10M CFA</p>
              <p className="text-sm opacity-80">Share Capital</p>
            </div>
          </Card>

          <Card className="flex items-center gap-4 bg-black/40 backdrop-blur-md text-white px-4 py-2 border-none w-40">
            <CheckCircle className="w-8 h-8 text-yellow-500" />
            <div>
              <p className="text-2xl font-bold">3</p>
              <p className="text-sm opacity-80">Years Active</p>
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
        className="max-w-7xl mx-auto px-6 py-16"
      >
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Our <span className="text-green-600">Mission</span>
            </h2>
            <p className="text-gray-600 mb-8">
              SOLIF COOP is committed to transforming the agricultural landscape through education,
              innovation, and sustainable practices.
            </p>

            <Card className="bg-green-50 border-l-4 border-green-600 shadow">
              <CardContent className="pt-6">
                <p className="text-gray-700">
                  SOLIF–COOP–BOD was formed under the Cooperative Societies Act, with the mission to
                  bring farmers together and improve livelihoods through collective resources and
                  education.
                </p>
                <p className="mt-4 text-gray-700">
                  Our main mission is to build a higher and more economically focused community with
                  focus on processing, job creation, and market penetration in Cameroon and Central
                  Africa.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {[
              {
                icon: <Award className="w-12 h-12 text-green-500 mx-auto mb-4" />,
                desc: "Equipping farmers with modern skills and knowledge.",
              },
              {
                icon: <Lightbulb className="w-12 h-12 text-yellow-500 mx-auto mb-4" />,
                desc: "Encouraging creative solutions in agriculture.",
              },
              {
                icon: <Leaf className="w-12 h-12 text-green-700 mx-auto mb-4" />,
                desc: "Promoting practices that protect our environment.",
              },
              {
                icon: <Users className="w-12 h-12 text-blue-500 mx-auto mb-4" />,
                desc: "Building strong and supportive farming communities.",
              },
            ].map((item, i) => (
              <Card key={i} className="text-center hover:shadow-md transition">
                <CardContent className="p-6">
                  {item.icon}
                  <p className="text-sm text-gray-600">{item.desc}</p>
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
        className="bg-gray-50 py-16"
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-6">
            Our <span className="text-green-600">Core Services</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {selectedServices.map((service, i) => (
              <Card key={i} className="overflow-hidden hover:shadow-md transition">
                <div className="w-full h-40 relative">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader className="pt-4">
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button className="bg-green-600 hover:bg-green-700 font-sans text-[15px] text-white rounded-md px-4 py-2">
              View All Services
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
        className="max-w-7xl mx-auto px-6 py-16"
      >
        <h2 className="text-3xl font-bold text-center mb-6">
          Latest <span className="text-green-600">News</span>
        </h2>

        <div className="flex flex-col items-center justify-center min-h-[200px] mt-12 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-green-600 mb-4 animate-pulse">
            Coming Soon
          </h2>
          <p className="text-gray-500 text-lg">
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
        className="bg-gray-50 text-black text-center py-10"
      >
        <h2 className="text-lg font-semibold">Ready to Join Our Community?</h2>
        <p className="mt-2 text-sm max-w-xl mx-auto">
          Become part of a thriving network dedicated to positively impacting farming communities.
        </p>
        <div className="mt-4 flex justify-center gap-4">
          <Button className="bg-green-600 hover:bg-green-700 font-sans text-[15px] text-white rounded-md px-4 py-2">
            Become a member
          </Button>
          <Button
            variant="outline"
            className="text-black bg-transparent hover:bg-white hover:text-green-700"
          >
            Contact Us
          </Button>
        </div>
      </motion.section>
    </div>
  );
}
