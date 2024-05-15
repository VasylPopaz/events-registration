import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { Filter, ParticipantsList } from "../components";
import { IEvent, IParticipant } from "../types";
import { getEventById, getParticipantsByEventId } from "../api";

const EventParticipants = () => {
  const [participants, setParticipants] = useState<IParticipant[] | null>(null);
  const [event, setEvent] = useState<IEvent | null>(null);
  const { eventId } = useParams();

  useEffect(() => {
    if (!eventId) return;
    getEventById(eventId)
      .then((data) => {
        setEvent(data);
        getParticipantsByEventId(eventId)
          .then(setParticipants)
          .catch((e) => {
            toast.error(e.response.data.message);
          });
      })
      .catch((e) => {
        toast.error(e.response.data.message);
      });
  }, [eventId]);

  if (!participants) return;

  return (
    <section className="container py-[40px]">
      <h2 className="font-semibold text-[38px] text-left mb-[10px]">
        "{event?.title}" Event {!participants.length && " has no "} participants
      </h2>
      <Filter />
      <ParticipantsList participants={participants} />
    </section>
  );
};
export default EventParticipants;
