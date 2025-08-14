"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Users, TrendingUp, CheckCircle, Link } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* ✅ Hero Section */}
      <section className="relative h-[550px] flex flex-col items-center justify-center text-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/farmer.png"
            alt="Farmers working"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-white px-4 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-snug">
            Empowering Farmers,{" "}
            <span className="text-green-400">Enriching Communities</span>
          </h1>
          <p  className="mt-4 text-[22px] leading-[40px] tracking-[0.05em] font-normal font-merriweather opacity-90">
            SPRING OF LIFE Cooperative Society (SOLIF-COOP-BOD) transforms agricultural communities through cassava processing, farmer training, and cooperative credit services. Join us in building sustainable farming futures.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button className="bg-green-600 hover:bg-green-700">
              Join Us
            </Button>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-black"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* ✅ Stats Section (Overlay) */}
        <div className="relative z-10 mt-12 flex flex-wrap justify-center gap-6">
          {/* Card 1 */}
          <div className="flex items-center gap-4 bg-black/40 backdrop-blur-md text-white rounded-lg px-6 py-4">
            <Users className="w-8 h-8 text-yellow-500" />
            <div>
              <p className="text-2xl font-bold">500+</p>
              <p className="text-sm opacity-80">Active Members</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-center gap-4 bg-black/40 backdrop-blur-md text-white rounded-lg px-6 py-4">
            <TrendingUp className="w-8 h-8 text-yellow-500" />
            <div>
              <p className="text-2xl font-bold">5M CFA</p>
              <p className="text-sm opacity-80">Share Capital</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-center gap-4 bg-black/40 backdrop-blur-md text-white rounded-lg px-6 py-4">
            <CheckCircle className="w-8 h-8 text-yellow-500" />
            <div>
              <p className="text-2xl font-bold">10+</p>
              <p className="text-sm opacity-80">Years Active</p>
            </div>
          </div>
        </div>
      </section>

     {/* ✅ Mission Section */}
<section className="max-w-7xl mx-auto px-6 py-16">
  <div className="grid md:grid-cols-2 gap-12 items-start">
    
    {/* LEFT SIDE — Title & Mission Statement */}
    <div>
      {/* Section Title */}
      <h2 className="text-2xl font-bold mb-4">
        Our <span className="text-green-600">Mission</span>
      </h2>
      <p className="text-gray-600 mb-8">
        SOLIF COOP is committed to transforming the agricultural landscape
        through education, innovation, and sustainable practices.
      </p>

      {/* Highlighted Mission Statement */}
      <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-md shadow">
        <p className="text-gray-700">
          SOLIF–COOP–BOD was formed under the Cooperative Societies Act, with
          the mission to bring farmers together and improve livelihoods through
          collective resources and education.
        </p>
        <p className="mt-4 text-gray-700">
          Our main mission is to build a higher and more economically focused
          community with focus on processing, job creation, and market
          penetration in Cameroon and Central Africa.
        </p>
      </div>
    </div>

    {/* RIGHT SIDE — Mission Cards */}
    <div className="grid sm:grid-cols-2 gap-8">
      {[
        {
          img: "/images/training.png",
          desc: "Equipping farmers with modern skills and knowledge."
        },
        {
          img: "/images/innovation.png",
          desc: "Encouraging creative solutions in agriculture."
        },
        {
          img: "/images/sustainability.png",
          desc: "Promoting practices that protect our environment."
        },
        {
          img: "/images/community.png",
          desc: "Building strong and supportive farming communities."
        }
      ].map((item, i) => (
        <div
          key={i}
          className="bg-white shadow rounded-lg p-6 text-center hover:shadow-md transition"
        >
          <div className="w-20 h-20 mx-auto mb-4 relative">
            <Image
              src={item.img}
              alt="Mission icon"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-sm text-gray-600">{item.desc}</p>
        </div>
      ))}
    </div>

  </div>
</section>



      {/* ✅ Services Section */}
<section className="bg-gray-50 py-16">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-2xl font-bold text-center mb-4">
      Our <span className="text-orange-500">Core Services</span>
    </h2>

    {/* Services Grid */}
    <div className="grid md:grid-cols-3 gap-8 mt-8">
      {[
        { img: "/farmer3.png", title: "Quality", desc: "Processing excellence for better market value." },
        { img: "/farmer2.png", title: "Sustainability", desc: "Innovations for a greener tomorrow." },
        { img: "/farmer1.png", title: "Community empowerment", desc: "Strengthening livelihoods through unity." }
      ].map((service, i) => (
        <div key={i} className="bg-white shadow rounded-lg overflow-hidden hover:shadow-md transition">
          <Image
            src={service.img}
            alt={service.title}
            width={400}
            height={200}
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="font-semibold">{service.title}</h3>
            <p className="text-sm text-gray-600">{service.desc}</p>
          </div>
        </div>
      ))}
    </div>

    {/* View All Services Button */}
    <div className="mt-10 text-center">
      
        <button className="bg-orange-500 text-white px-6 py-3 rounded-lg shadow hover:bg-orange-600 transition">
          View All Services
        </button>
     
    </div>
  </div>
</section>

      {/* Stats Section */}
      <section className="bg-green-600 text-white py-10 text-center">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-4">
          <div>
            <p className="text-2xl font-bold">40+</p>
            <p>Associations</p>
          </div>
          <div>
            <p className="text-2xl font-bold">60+</p>
            <p>Villages reached</p>
          </div>
          <div>
            <p className="text-2xl font-bold">5+</p>
            <p>Years active</p>
          </div>
        </div>
      </section>

     {/* Latest News */}
<section className="max-w-7xl mx-auto px-6 py-16">
  <h2 className="text-2xl font-bold text-center mb-4">
    Latest <span className="text-yellow-500">News</span>
  </h2>
  <div className="grid md:grid-cols-3 gap-8 mt-8">
    <div className="bg-white shadow rounded-lg p-6">
      <h3 className="font-semibold mb-2">New Cassava Processing Expansion</h3>
      <p className="text-sm text-gray-600 mb-4">
        Boosting local processing capacity for better market competitiveness.
      </p>
      <Button variant="link" className="p-0 text-green-600">Read More</Button>
    </div>
    <div className="bg-white shadow rounded-lg p-6">
      <h3 className="font-semibold mb-2">Seasonal Harvest Training</h3>
      <p className="text-sm text-gray-600 mb-4">
        Improving yields through better harvesting techniques.
      </p>
      <Button variant="link" className="p-0 text-green-600">Read More</Button>
    </div>
    <div className="bg-white shadow rounded-lg p-6">
      <h3 className="font-semibold mb-2">Community Credit Fund Expansion</h3>
      <p className="text-sm text-gray-600 mb-4">
        Empowering members with access to affordable credit.
      </p>
      <Button variant="link" className="p-0 text-green-600">Read More</Button>
    </div>
  </div>

  {/* New Button */}
  <div className="flex justify-center mt-8">
    <Button className="bg-yellow-500 text-white hover:bg-yellow-600 px-6 py-2 rounded">
      View All News
    </Button>
  </div>
</section>


       {/* Join Us Section */}
      <section className="bg-green-700 text-white text-center py-10">
        <h2 className="text-lg font-semibold">Ready to Join Our Community?</h2>
        <p className="mt-2 text-sm max-w-xl mx-auto">
          Become part of a thriving network dedicated to positively impacting farming communities.
        </p>
        <div className="mt-4 flex justify-center gap-4">
          <Button className="bg-yellow-500 hover:bg-yellow-600">Become a Member</Button>
          <Button variant="outline" className="text-white border-white hover:bg-white hover:text-green-700">
            Contact Us
          </Button>
        </div>
      </section>


    </div>
  );
}
