import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

import {
  Filter,
  ParticipantsList,
  Loader,
  Chart,
} from "../components";

import { IEvent, IParticipant } from "../types";
import { getEventById, getParticipantsByEventId } from "../api";
import { getFilteredParticipants } from "../helpers";

const EventParticipants = () => {
  const [participants, setParticipants] = useState<IParticipant[] | null>(null);
  const [event, setEvent] = useState<IEvent | null>(null);
  const [filter, setFilter] = useState("");
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

  const handleChangeFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  if (!participants) return <Loader />;

  const filteredParticipants = getFilteredParticipants(participants, filter);

  const sortedParticipants = [...filteredParticipants].sort(
    (b, a) =>
      new Date(a.dateOfRegistration).getTime() -
      new Date(b.dateOfRegistration).getTime()
  );

  return (
    <section className="container py-[40px]">
      <h2 className="font-semibold text-[38px] text-left mb-[10px]">
        "{event?.title}" Event {!participants.length && " has no "} participants
      </h2>
      {participants.length ? (
        <>
          <Chart participants={participants} />
          <Filter onChange={handleChangeFilter} />
        </>
      ) : null}
      {!filteredParticipants.length && participants.length ? (
        <h2 className="font-semibold text-[38px] text-left">
          No results for "{filter}".
        </h2>
      ) : null}
      <ParticipantsList participants={sortedParticipants} />
    </section>
  );
};
export default EventParticipants;
