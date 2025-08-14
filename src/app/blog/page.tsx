"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Blog() {
  const posts = [
    {
      img: "/blog/cassava-training.jpg",
      title: "Modern Cassava Processing Techniques",
      desc: "Discover new methods to process cassava more efficiently and profitably.",
      date: "Jan 15, 2025",
      read: "3 min read",
    },
    {
      img: "/blog/farmer-training.jpg",
      title: "Successful Farmers Training Program Results",
      desc: "Our recent training helped hundreds of farmers adopt better practices.",
      date: "Feb 10, 2025",
      read: "4 min read",
    },
    {
      img: "/blog/credit-facility.jpg",
      title: "Cooperative Credit Facility Launch",
      desc: "We’ve established a new credit system to support our members’ growth.",
      date: "Feb 25, 2025",
      read: "2 min read",
    },
    {
      img: "/blog/market-linkage.jpg",
      title: "Market Linkage Success Stories",
      desc: "How we connected farmers to high-value buyers and improved incomes.",
      date: "Mar 05, 2025",
      read: "3 min read",
    },
    {
      img: "/blog/farming-practices.jpg",
      title: "Sustainable Farming Practices Workshop",
      desc: "Training farmers to embrace eco-friendly agricultural techniques.",
      date: "Mar 12, 2025",
      read: "5 min read",
    },
    {
      img: "/blog/annual-meeting.jpg",
      title: "Annual General Meeting Highlights",
      desc: "A recap of our AGM discussing achievements and future plans.",
      date: "Apr 01, 2025",
      read: "3 min read",
    },
  ];

  const categories = ["All", "Farming", "Processing", "Cooperative", "Training"];

  return (
    <div className="flex flex-col w-full">
      <Navbar />
      {/* Hero */}
      <div className="relative w-full h-[300px]">
        <Image
          src="/blog-hero.jpg" // Replace with your image
          alt="Latest News & Insights"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-3xl md:text-4xl font-bold">
            Latest News & Insights
          </h1>
          <p className="text-white mt-2 max-w-2xl">
            Choose the articles and latest opportunities available to our cooperative members.
          </p>
        </div>
      </div>

      {/* Filters */}
      <section className="px-4 md:px-16 py-12 bg-white">
        <h2 className="text-2xl font-bold text-center mb-8">
          Why Join <span className="text-green-600">SOLIF–COOP–BOD?</span>
        </h2>
        <div className="flex justify-center gap-4 flex-wrap mb-10">
          {categories.map((cat, i) => (
            <Button
              key={i}
              variant={i === 0 ? "default" : "outline"}
              className="capitalize"
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <Card key={i} className="shadow">
              <CardHeader className="p-0">
                <Image
                  src={post.img}
                  alt={post.title}
                  width={500}
                  height={300}
                  className="w-full h-[180px] object-cover rounded-t-md"
                />
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.desc}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{post.date}</span>
                  <span>{post.read}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="flex justify-center mt-10">
          <Button variant="outline">Load More</Button>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gray-100 py-12 px-4 md:px-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Stay Informed</h2>
        <p className="text-gray-700 mb-6">
          Subscribe to our newsletter for the latest updates and insights.
        </p>
        <div className="max-w-md mx-auto flex gap-2">
          <Input placeholder="Enter your email" className="flex-1" />
          <Button className="bg-green-600 hover:bg-green-700 text-white">
            Subscribe
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  );
}
