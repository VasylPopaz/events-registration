import { useEffect, useState } from "react";

import { getEvents } from "../api/api";
import { EventsList } from "../components";
import { Event } from "../types";

const EventsBoard = () => {
  const [events, setEvents] = useState<Event[] | null>(null);
  useEffect(() => {
    getEvents().then(setEvents);
  }, []);

  if (!events) return;

  return (
    <section className="container py-[40px]">
      <EventsList events={events} />
    </section>
  );
};
export default EventsBoard;
