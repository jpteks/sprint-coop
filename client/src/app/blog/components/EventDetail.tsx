"use client";

import Image from "next/image";
import { PortableText, SanityDocument } from "next-sanity";
import { Button } from "@/components/ui/button";

interface Props {
  event: SanityDocument;
}


export default function EventDetailClient({ event }: Props) {
 
  return (
    <main className="container mx-auto max-w-3xl p-6 min-h-screen font-sans">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-6">{event.title}</h1>

      {/* Image */}
      {event.imageUrl && (
        <div className="relative w-full h-64 mb-6">
          <Image
            src={event.media}
            alt={event.title}
            fill
            className="object-cover rounded-md"
          />
        </div>
      )}

  

      {/* Body */}
      <div className="mb-4 text-black">
        <PortableText value={event.body} />
      </div>

      {/* Category */}
      <p className="uppercase text-xs text-green-600 mb-6">
        Category: {event.category}
      </p>

      {/* Back Button */}
      <Button
        onClick={() => window.history.back()}
        className="px-4 py-2 bg-green-600 rounded-lg text-white hover:bg-green-700"
      >
        Back
      </Button>
    </main>
  );
}
