"use client";

import { useState } from "react";
import { type SanityDocument } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useParams } from "next/navigation";

interface EventsListProps {
  events: SanityDocument[];
}

export default function EventsList({ events }: EventsListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState<"all" | "past" | "present" | "future">("all");
  const eventsPerPage = 6;
  const params = useParams();
  const locale = params?.locale || "fr"; // fallback to 'fr' if missing

  // Filter events by status
  const filteredEvents = events.filter((event) =>
    filter === "all" ? true : event.status?.toLowerCase() === filter
  );

  // Pagination logic
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = filteredEvents.slice(indexOfFirstEvent, indexOfLastEvent);
  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);

  // Translate status (plain text)
  function translateStatus(status: string | undefined) {
    if (!status) return "";
    switch (status.toLowerCase()) {
      case "past":
        return "Past";
      case "present":
        return "Present";
      case "future":
        return "Future";
      default:
        return status;
    }
  }

  return (
    <main className="container mx-auto min-h-screen max-w-7xl p-6">
      <h1 className="text-4xl font-bold mb-8 text-center">Events</h1>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-6 font-natom-bold">
        {[
          { key: "all", label: "All" },
          { key: "present", label: "Present" },
          { key: "past", label: "Past" },
          { key: "future", label: "Future" },
        ].map(({ key, label }) => (
          <Button
            key={key}
            className="flex flex-wrap justify-center gap-3 mb-6 font-natom-bold"
            variant={filter === key ? "default" : "outline"}
            onClick={() => {
              setFilter(key as typeof filter);
              setCurrentPage(1);
            }}
          >
            {label}
          </Button>
        ))}
      </div>

      {/* Events Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {currentEvents.map((post) => (
          <Card key={post._id} className="overflow-hidden h-full">
            {post.imageUrl && (
              <div className="relative w-full h-48">
                <Image
                  src={post.imageUrl}
                  alt={post.title || ""}
                  fill
                  quality={90}
                  priority
                  className="object-cover"
                />
              </div>
            )}
            <CardHeader>
              <CardTitle className="font-natom-bold text-blue">{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                {new Date(post.date)
                  .toLocaleDateString(locale === "fr" ? "fr-FR" : "en-GB", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })
                  .replace(/ /g, "-")}{" "}
                — {post.time}
              </p>
              <p className="text-sm text-gray-500">{post.location}</p>
              <p className="mt-2 text-xs uppercase tracking-wide text-gray-400">
                Status: {translateStatus(post.status)}
              </p>
              {post.description && (
                <p className="mt-2 text-gray-700 text-sm line-clamp-3">{post.description}</p>
              )}
              <Link
                href={`/${locale}/events/${post._id}`}
                className="mt-3 inline-block text-blue hover:underline"
              >
                Read more
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  aria-disabled={currentPage === 1}
                />
              </PaginationItem>
              {Array.from({ length: totalPages }, (_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink
                    isActive={currentPage === i + 1}
                    onClick={() => setCurrentPage(i + 1)}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  aria-disabled={currentPage === totalPages}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </main>
  );
}
