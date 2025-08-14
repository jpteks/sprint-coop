"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="flex flex-col w-full">
      <Navbar />

      {/* Main Content */}
      {/* Hero Section */}
      <div className="relative w-full h-[300px]">
        <Image
          src="/about-hero.jpg" // Replace with your image
          alt="About SOLIF–COOP–BOD"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-4xl font-bold">
            About SOLIF–COOP–BOD
          </h1>
        </div>
      </div>

      {/* Why We Were Created */}
      <section className="px-4 md:px-16 py-12 bg-white">
        <h2 className="text-2xl font-bold text-center mb-6">
          Why We Were <span className="text-yellow-500">Created</span>
        </h2>
        <div className="max-w-3xl mx-auto bg-green-50 border-l-4 border-green-600 p-6 rounded-md shadow">
          <p className="text-gray-700">
            {`SOLIF–COOP–BOD was formed under the Cooperative Societies Act, with the mission to bring farmers together and improve livelihoods through collective resources and education.`}
          </p>
          <p className="mt-4 text-gray-700">
            {`Our main mission is to build a higher and more economically focused community with focus on processing, job creation, and market penetration in Cameroon and Central Africa.`}
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="px-4 md:px-16 py-12 bg-gray-50">
        <h2 className="text-2xl font-bold text-center mb-6">
          Our <span className="text-yellow-500">Values</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Voluntary Membership",
              text: "Open to all who are able to use services and accept responsibilities.",
            },
            {
              title: "Democratic Control",
              text: "One member, one vote – members actively participate in setting policies.",
            },
            {
              title: "Community Credit Fund Expansion",
              text: "Encouraging members to save collectively for mutual benefit.",
            },
            {
              title: "Autonomy & Independence",
              text: "Self-help organizations controlled by their members.",
            },
            {
              title: "Education & Training",
              text: "Providing education for members, leaders, and employees.",
            },
            {
              title: "Community Concern",
              text: "Working for sustainable community development.",
            },
          ].map((item, idx) => (
            <Card key={idx} className="shadow">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Vision */}
      <section className="px-4 md:px-16 py-12 bg-white">
        <h2 className="text-2xl font-bold mb-4">
          Our <span className="text-yellow-500">Vision</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="text-gray-700 mb-4">
              To become one of the leading cooperative institutions and positively impact our community.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Expand processing capacity for farmers’ produce.</li>
              <li>Create local employment through agro-industrial initiatives.</li>
              <li>Establish strong marketing channels for agricultural products.</li>
              <li>Develop training programs that boost rural economies.</li>
            </ul>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-yellow-400 p-6 rounded-md text-white">
            <h3 className="font-semibold text-lg mb-4">Long-Term Goals</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Expand member base across the country.</li>
              <li>Increase value-added product processing.</li>
              <li>Build strong storage infrastructures.</li>
              <li>Strengthen inter-cooperative partnerships.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="px-4 md:px-16 py-12 bg-gray-50">
        <h2 className="text-2xl font-bold text-center mb-6">
          Our <span className="text-yellow-500">Leadership</span>
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Experienced leaders committed to advancing agricultural innovation and community development.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "Dr Alfred Bissige", role: "President", img: "/leaders/alfred.jpg" },
            { name: "Dr Eric Etoga", role: "Vice President", img: "/leaders/eric.jpg" },
            { name: "Nelson Tangwa Chemek", role: "Secretary General", img: "/leaders/nelson.jpg" },
            { name: "Fr Anike Valentine Nyoze", role: "Treasurer", img: "/leaders/valentine.jpg" },
            { name: "Lukafor Fombongong", role: "Assistant Treasurer", img: "/leaders/lukafor.jpg" },
            { name: "Nelson Atem", role: "Financial Secretary", img: "/leaders/nelson2.jpg" },
            { name: "Silas Wango Nwabe", role: "Technical Adviser", img: "/leaders/silas.jpg" },
            { name: "Karine Ngosso Roland", role: "Communication Officer", img: "/leaders/karine.jpg" },
            { name: "Fr Ernest Tchah", role: "Member", img: "/leaders/ernest.jpg" },
            { name: "Maxime Sagnes", role: "Member", img: "/leaders/maxime.jpg" },
          ].map((leader, idx) => (
            <Card key={idx} className="shadow">
              <CardContent className="p-6 text-center">
                <Image
                  src={leader.img}
                  alt={leader.name}
                  width={100}
                  height={100}
                  className="rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-semibold">{leader.name}</h3>
                <p className="text-gray-600 text-sm">{leader.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
