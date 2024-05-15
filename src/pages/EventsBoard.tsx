import { useEffect, useState } from "react";

import { EventsList } from "../components";

import { getEvents } from "../api";
import { IEvent } from "../types";
import { toast } from "react-toastify";

const EventsBoard = () => {
  const [events, setEvents] = useState<IEvent[] | null>(null);
  useEffect(() => {
    getEvents()
      .then((res) => setEvents(res.events))
      .catch((e) => {
        toast.error(e.response.data.message);
      });
  }, []);

  if (!events) return;

  return (
    <section className="container py-[40px]">
      <EventsList events={events} />
    </section>
  );
};
export default EventsBoard;
