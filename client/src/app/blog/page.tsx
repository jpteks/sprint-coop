import { client } from "@/lib/sanity";
import EventsList from "./components/Event";
import { type SanityDocument } from "next-sanity";

// Sanity query to fetch all events
const EVENTS_QUERY = `*[_type == "blog"]{
  _id,
  title,
  body,
  category,
  "imageUrl": image.asset->url
}`;

const options = { next: { revalidate: 30 } };

export default async function EventPage() {
  // Fetch all events
  const events: SanityDocument[] = await client.fetch(EVENTS_QUERY, {}, options);

  // If no events found
  if (!events || events.length === 0) {
    return (
      <div className="flex items-center justify-center h-64">
      <h2 className="text-3xl md:text-5xl font-bold text-gray-700 text-center animate-pulse">
        🚧 No News for Now <br /> <span className="text-green-600">Coming Soon</span>
      </h2>
    </div>
    
    );
  }

  // Pass all events to client component
  return <EventsList events={events} />;
}
