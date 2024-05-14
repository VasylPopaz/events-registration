import { useEffect, useState } from "react";
import { getEvents } from "../api/api";
import { EventsList } from "../components";

const EventsBoard = () => {
  const [events, setEvents] = useState(null);
  useEffect(() => {
    getEvents().then((res) => setEvents(res));
  }, []);

  return (
    <section className="container py-[40px]">
      <EventsList events={events} />
    </section>
  );
};
export default EventsBoard;
