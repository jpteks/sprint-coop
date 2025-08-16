"use client";

import Image from "next/image";

import { SanityDocument } from "next-sanity";

interface Props {
  event: SanityDocument;
}

export default function EventDetailClient({ event }: Props) {
 
  
  return (
    <main className="container mx-auto max-w-3xl p-6 min-h-screen">
      <h1 className="text-4xl font-bold mb-6">{event.title}</h1>

      {event.imageUrl && (
        <div className="relative w-full h-64 mb-6">
          <Image
            src={event.imageUrl}
            alt={event.title}
            fill
            className="object-cover rounded-md"
          />
        </div>
      )}

      <p className="mb-4 text-blackpale font-mons-medium">{event.description}</p>

      <p className="mb-2 font-mons-medium">
        {new Date(event.date).toLocaleDateString(undefined, {
          day: "2-digit",
          month: "long",
          year: "numeric",
        })}{" "}
        — {event.time}hr
      </p>

      <p className="mb-2 text-sm font-mons-medium">{event.location}</p>

      <p className="uppercase text-xs text-gray-400 mb-6">Status: {event.status}</p>

      <button
        onClick={() => window.history.back()}
        className="px-4 py-2 bg-blue text-white rounded hover:bg-green"
      >
        Back
      </button>
    </main>
  );
}
