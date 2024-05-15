import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { RegisterForm } from "../components";
import { getEventById } from "../api";
import { IEvent } from "../types";
import { toast } from "react-toastify";

const EventRegistration = () => {
  const [event, setEvent] = useState<IEvent | null>(null);

  const { eventId } = useParams();

  useEffect(() => {
    if (!eventId) return;

    getEventById(eventId)
      .then(setEvent)
      .catch((e) => {
        toast.error(e.response.data.message);
      });
  }, [eventId]);

  return (
    <section className="container py-[40px] ">
      <h2 className="font-semibold text-[38px] text-center mb-[10px]">
        "{event?.title}"
      </h2>
      <div>
        <RegisterForm />
      </div>
    </section>
  );
};
export default EventRegistration;
