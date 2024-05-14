import { useEffect, useState } from "react";
import { getEventById, getEvents } from "../api/api";
import { EventsList } from "../components";

const EventsBoard = () => {
  const [events, setEvents] = useState(null);
  useEffect(() => {
    getEvents().then((res) => setEvents(res));
  }, []);

  return (
    <section className="container">
      <h2>Events</h2>
      <EventsList events={events} />
    </section>
  );
};
export default EventsBoard;
