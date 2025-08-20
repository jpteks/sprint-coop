"use client";

import Image from "next/image";
import { PortableText, SanityDocument } from "next-sanity";
import { Button } from "@/components/ui/button";

interface Props {
  event: SanityDocument;
}

export default function EventDetailClient({ event }: Props) {
  // get first media item (schema allows only one anyway)
  const mediaItem = event.media?.[0];
  const mimeType = mediaItem?.asset?.mimeType || "";
  const isVideo = mimeType.startsWith("video");
  const mediaUrl = mediaItem?.asset?.url;

  return (
    <main className="container mx-auto max-w-3xl p-6 min-h-screen font-sans">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-6">{event.title}</h1>

      {/* Media (Image or Video) */}
      {mediaUrl && (
        <div className="relative w-full h-64 mb-6">
          {isVideo ? (
            <video
              controls
              className="w-full h-full object-cover rounded-md"
            >
              <source src={mediaUrl} type={mimeType} />
              Your browser does not support the video tag.
            </video>
          ) : (
            <Image
              src={mediaUrl}
              alt={event.title || "Event media"}
              fill
              className="object-cover rounded-md"
            />
          )}
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
