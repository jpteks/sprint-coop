// app/contact/page.tsx (Next.js App Router)
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="w-full">
        <Navbar />
      {/* Hero Section */}
      <section
        className="relative h-64 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="text-white text-4xl font-bold z-10">Contact Us</h1>
      </section>

      {/* Contact Details & Form */}
      <section className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side - Details */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>
          <p className="text-gray-600 mb-6">
            Please fill out the form and our team will get back to you as soon as possible.
          </p>
          <ul className="space-y-4">
            <li>
              <h4 className="font-semibold">Address</h4>
              <p>123 Sample Street, Yaoundé, Cameroon</p>
            </li>
            <li>
              <h4 className="font-semibold">Phone</h4>
              <p>+237 6 71 23 45 67</p>
            </li>
            <li>
              <h4 className="font-semibold">Email</h4>
              <p>info@example.com</p>
            </li>
            <li>
              <h4 className="font-semibold">Business Hours</h4>
              <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
            </li>
          </ul>
        </div>

        {/* Right Side - Form */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
          <form className="space-y-4">
            <Input placeholder="Your Name" required />
            <Input placeholder="Your Email" type="email" required />
            <Input placeholder="Subject" />
            <Textarea placeholder="Message" rows={4} />
            <Button className="w-full" type="submit">
              Send Message
            </Button>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold mb-4">Find Us on the Map</h2>
          <p className="text-gray-600 mb-6">
            Visit our main office or meeting facilities located in the heart of the agricultural areas.
          </p>
          <div className="w-full h-72 bg-gray-300 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.7968282786746!2d11.502075515253916!3d3.848032249439078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcf58b5463db7%3A0x8d4eacacacf7b65a!2sYaound%C3%A9%2C%20Cameroon!5e0!3m2!1sen!2scm!4v1697555578364!5m2!1sen!2scm"
              width="100%"
              height="100%"
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
        <Footer />
    </div>
  );
}
