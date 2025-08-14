"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion } from "framer-motion";
import { Leaf, Handshake, Lightbulb, Users, Scale, Globe } from "lucide-react";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";

// ✅ SEO Metadata
export const metadata: Metadata = {
  title: "About SOLIF-COOP-BOD | Our Mission, Values & Leadership",
  description:
    "Learn about SOLIF-COOP-BOD's creation, values, vision, and leadership team driving sustainable impact.",
};
const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 3 },
  desktop: { breakpoint: { max: 1024, min: 768 }, items: 2 },
  tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};
const items = [
  { title: "Board chairman", name: "Dr Alfred Esingie", image: "/board.jpeg" },
  {
    title: "Vice Chair Lady",
    name: "Dr Prudence Makia",
    image: "/prudence.jpeg",
  },
  {
    title: "Secretary General",
    name: "Silas Netongo Mutale",
    image: "/silas.jpeg",
  },
  {
    title: "Financial Secretary",
    name: "Dr Fritz Etuge",
    image: "/fritz.jpeg",
  },
  { title: "Board member", name: "Dr Kenneth Tatoh", image: "/ken.jpeg" },
  { title: "Board member", name: "Kemba Mopako Roland", image: "/kemba.jpeg" },
  { title: "Board member", name: "Dr Ambe Valentine Ngwa", image: "/ambe.jpeg" },
  { title: "Board member", name: "Merian Engeh Obamde", image: "/merian.jpeg" },
  { title: "Board member", name: "Nkweta Benjamin Acha", image: "/ben.jpeg" },
  {
    title: "Board member",
    name: "Gwanmesia Patrick Bobga",
    image: "/pat.jpeg",
  },
];

const companyValues = [
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "We adopt eco-friendly farming practices that protect the environment and preserve resources for future generations.",
  },
  {
    icon: Scale,
    title: "Fair Trade & Equity",
    description:
      "We ensure fair compensation, respect, and opportunities for farmers, workers, and suppliers across the value chain.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We embrace modern techniques and creative solutions to improve yields, processing, and market access.",
  },
  {
    icon: Users,
    title: "Community Empowerment",
    description:
      "We invest in training, education, and support systems that help agricultural communities prosper.",
  },
  {
    icon: Handshake,
    title: "Collaboration",
    description:
      "We partner with farmers, organizations, and stakeholders to achieve shared goals and lasting impact.",
  },
  {
    icon: Globe,
    title: "Transparency & Integrity",
    description:
      "We operate with honesty, openness, and accountability in everything we do.",
  },
];

export default function AboutPage() {
  return (
    <main className="font-sans">
      {/* Hero Section */}
      <header className="relative w-full h-[60vh] md:h-[50vh]">
        <Image
          src="/about.jpeg"
          alt="About SOLIF-COOP-BOD"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70 flex items-center justify-center flex-col px-4">
          <h1 className="text-white text-2xl md:text-3xl font-bold text-center">
            Empowering Farmers, Transforming Agriculture, Shaping the Future
          </h1>
          <p className="text-white text-md md:text-xl text-center mt-4 max-w-3xl">
            Since 2022, SOLIF-COOP-BOD has been training farmers, advancing the
            agro–value chain, and transforming crops like cassava and other
            agricultural products. We are also involved in livestock and
            fisheries products. Through cooperation, innovation, and sustainable
            development, we’re building stronger agricultural communities for
            generations to come.
          </p>
        </div>
      </header>

      {/* Why We Were Created */}
      <section className="container mx-auto p-6">
        <h2 className="text-3xl font-bold text-center mb-6">
          Why We Were <span className="text-green-600">Created</span>
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }} // start hidden and slightly below
          whileInView={{ opacity: 1, y: 0 }} // slide up into view
          viewport={{ once: true, amount: 0.2 }} // trigger when 20% of the card is visible
          transition={{ duration: 0.6, ease: "easeOut" }} // smooth animation
        >
          <Card className="max-w-3xl mx-auto border-l-4 border-green-500">
            <CardContent className="p-6">
              <p className="text-lg text-gray-700">
                SOLIF-COOP-BOD (Spring Of Life Cooperative Society with Board of
                Directors) was formed to support farmers through sustainable
                agricultural practices, credit union, and community empowerment.
                Our goal is to create a thriving environment for local farmers
                to prosper.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Our Values */}
      <section className="bg-gray-50 p-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">
            Our <span className="text-green-600">Values</span>
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 50 }} // start hidden and slightly below
            whileInView={{ opacity: 1, y: 0 }} // slide up into view
            viewport={{ once: true, amount: 0.2 }} // trigger when 20% of the card is visible
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="grid md:grid-cols-3 gap-3"
          >
            {companyValues.map((value, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="text-4xl">
                    <value.icon />
                  </div>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold text-center mb-6">
            Our <span className="text-green-600"> Vision</span>
          </h2>
          <p className="text-lg text-gray-700">
            We envision a future where farmers thrive, communities are
            self-reliant, and the environment is preserved for future
            generations.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }} // start hidden and slightly below
          whileInView={{ opacity: 1, y: 0 }} // slide up into view
          viewport={{ once: true, amount: 0.2 }} // trigger when 20% of the card is visible
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Card className="bg-gradient-to-r from-green-500 to-green-900 text-white">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3">Long Term Goals</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Empower 10,000 farmers by 2030</li>
                <li>Expand sustainable farming programs</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Leadership Section */}
      <section className="bg-gray-50 p-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Our <span className="text-green-600">Leadership</span>
          </h2>
          <p className="text-center mb-6 text-gray-700">
            Experienced leaders committed to advancing agricultural cooperation
            and community development.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 50 }} // start hidden and slightly below
            whileInView={{ opacity: 1, y: 0 }} // slide up into view
            viewport={{ once: true, amount: 0.2 }} // trigger when 20% of the card is visible
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Carousel
               responsive={responsive}
               swipeable={true}
               draggable={true}
               showDots={false}
               infinite={true}
               autoPlay={true}           // enable automatic sliding
               autoPlaySpeed={3000}      // slide every 3 seconds
               pauseOnHover={true}       // pause when hovering
               keyBoardControl={true}
               containerClass="w-full"
               itemClass="px-2"
            >
              {items.map((leader, index) => (
                <Card
                  key={index}
                  className="text-center border-l-4 border-green-500 h-full overflow-hidden"
                >
                  <CardHeader>
                    <div className="relative w-24 h-24 mx-auto">
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        fill
                        className="rounded-full object-cover object-top"
                      />
                    </div>
                    <CardTitle>{leader.name}</CardTitle>
                    <p className="text-gray-500">{leader.title}</p>
                  </CardHeader>
                </Card>
              ))}
            </Carousel>
            {/* <Carousel opts={{ align: "start" }} className="w-full">
            <CarouselContent>
              {items.map((leader, index) => (
                <CarouselItem
                  key={index}
                  className="sm:basis-full md:basis-1/3" // 1 on small screens, 3 on md+
                >
                  <Card className="text-center border-l-4 border-green-500 h-full overflow-hidden">
                    <CardHeader>
                      <div className="relative w-24 h-24 mx-auto">
                        <Image
                          src={leader.image}
                          alt={leader.name}
                          fill
                          className="rounded-full object-cover object-top"
                        />
                      </div>
                      <CardTitle>{leader.name}</CardTitle>
                      <p className="text-gray-500">{leader.title}</p>
                    </CardHeader>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-between mt-4">
              <CarouselPrevious className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
                Previous
              </CarouselPrevious>
              <CarouselNext className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
                Next
              </CarouselNext>
            </div>
          </Carousel> */}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
