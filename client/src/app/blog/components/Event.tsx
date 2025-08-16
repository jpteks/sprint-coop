"use client";

import { useState } from "react";
import { type SanityDocument } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PortableText } from "next-sanity";
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
  const [filter, setFilter] = useState<"all" | "events" | "our-work">("all");
  const eventsPerPage = 6;
  const params = useParams();

  // Filter events by status
  const filteredEvents = events.filter((event) =>
    filter === "all" ? true : event.category?.toLowerCase() === filter
  );

  // Pagination logic
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = filteredEvents.slice(
    indexOfFirstEvent,
    indexOfLastEvent
  );
  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);



  return (
    <main className="container mx-auto min-h-screen max-w-7xl p-6 font-sans">
      <h1 className="text-4xl font-bold mb-8 text-center">Latest News</h1>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {[
          { key: "all", label: "All" },
          { key: "events", label: "Events" },
          { key: "our-work", label: "Our works" },
        ].map(({ key, label }) => (
          <Button
            key={key}
            className="flex flex-wrap justify-center gap-3 mb-6 "
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
              <CardTitle className=" text-black/60">
                {post.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mt-2 text-xs uppercase tracking-wide text-green-600">
                Category: {post.category}
              </p>
              {post.body && (
               <div className="mb-4 text-black" >
               <PortableText value={post.body} />
             </div>
             
              )}
              <Link
                href={`/blog/${post._id}`}
                className="mt-3 inline-block text-yellow-600 hover:underline"
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
                  onClick={() =>
                    setCurrentPage((p) => Math.min(totalPages, p + 1))
                  }
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
