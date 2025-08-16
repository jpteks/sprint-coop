import { client } from "@/lib/sanity";
import EventDetailClient from "../components/EventDetail";
import { notFound } from "next/navigation";

const EVENT_QUERY = `*[_type == "blog" && _id == $id][0]{
  _id,
  title,
  body,
  category,
  "imageUrl": image.asset->url
}`;



export default async function EventPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { id } = await params;

  if (!id) {
    notFound(); // avoids $id error
  }

  const event = await client.fetch(EVENT_QUERY, { id });

  if (!event) {
    notFound();
  }

  return <EventDetailClient event={event} />;
}
