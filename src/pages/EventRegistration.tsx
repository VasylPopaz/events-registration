import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { RegisterForm } from "../components";

import { getEventById } from "../api";
import { IEvent } from "../types";
import { Loader } from "../components/Loader/Loader";

const EventRegistration = () => {
  const [event, setEvent] = useState<IEvent | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const { eventId } = useParams();

  useEffect(() => {
    if (!eventId) return;

    setIsLoading(true);
    getEventById(eventId)
      .then(setEvent)
      .catch((e) => {
        toast.error(e.response.data.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [eventId]);

  return (
    <section className="container py-[40px] ">
      {isLoading && <Loader />}
      <h2 className="font-semibold text-[38px] text-center mb-[30px]">
        "{event?.title}"
      </h2>
      <div>
        <RegisterForm />
      </div>
    </section>
  );
};
export default EventRegistration;
