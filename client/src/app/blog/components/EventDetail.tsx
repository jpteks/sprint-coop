"use client";

import Image from "next/image";
import { PortableText, SanityDocument } from "next-sanity";
import { Button } from "@/components/ui/button";

interface Props {
  event: SanityDocument;
}

function convertToEmbedUrl(url: string): string | null {
  try {
    const parsedUrl = new URL(url);

    // Handle YouTube long links
    if (parsedUrl.hostname.includes("youtube.com")) {
      const videoId = parsedUrl.searchParams.get("v");
      if (videoId) return `https://www.youtube.com/embed/${videoId}`;
    }

    // Handle YouTube short links
    if (parsedUrl.hostname === "youtu.be") {
      return `https://www.youtube.com/embed${parsedUrl.pathname}`;
    }

    // Handle Vimeo
    if (parsedUrl.hostname.includes("vimeo.com")) {
      return `https://player.vimeo.com/video${parsedUrl.pathname}`;
    }

    // Not supported for iframe embed
    return null;
  } catch {
    return null;
  }
}

export default function EventDetailClient({ event }: Props) {
  const embedUrl = event.youtubeLink ? convertToEmbedUrl(event.youtubeLink) : null;

  return (
    <main className="container mx-auto max-w-3xl p-6 min-h-screen font-sans">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-6">{event.title}</h1>

      {/* Image */}
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

      {/* Video Section */}
      {event.youtubeLink && (
        <div className="mb-6">
          {embedUrl ? (
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={embedUrl}
                title={event.title}
                className="rounded-md"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <a
              href={event.youtubeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Watch video here
            </a>
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
