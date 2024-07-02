import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { EventsList, Sort, Loader } from "../components";

import { getEvents } from "../api";
import { IEvent } from "../types";

const EventsBoard = () => {
  const [events, setEvents] = useState<IEvent[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sortValue, setSortValue] = useState<string>("");
  const [sortLabel, setSortLabel] = useState<string>("None");
  const [page, setPage] = useState(1);
  const [isFetching, setIsFetching] = useState(true);
  const [totalEvents, setTotalEvents] = useState(0);

  const SCROLL_THRESHOLD = 100;
  const EVENTS_PER_PAGE = 9;

  useEffect(() => {
    const scrollHandler = () => {
      if (
        document.documentElement.scrollHeight -
          (window.scrollY + window.innerHeight) <
          SCROLL_THRESHOLD &&
        events.length < totalEvents
      ) {
        setIsFetching(true);
      }
    };

    document.addEventListener("scroll", scrollHandler);

    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, [events.length, totalEvents]);

  useEffect(() => {
    if (isFetching) {
      setIsLoading(true);
      getEvents(page, sortValue)
        .then((res) => {
          setEvents([...events, ...res.events]);
          setTotalEvents(res.totalEvents);
          setPage((prev) => prev + 1);

          const isMoreEvents =
            page < Math.ceil(res.totalEvents / EVENTS_PER_PAGE);
          if (!isMoreEvents) {
            toast.info(
              `We are sorry, but you have reached the end of the event list.`
            );
          }
        })
        .catch((e) => {
          toast.error(e.response.data.message);
        })
        .finally(() => {
          setIsLoading(false);
          setIsFetching(false);
        });
    }
  }, [events, isFetching, page, sortValue, totalEvents]);

  const handleChangeSort = (label: string, value: string) => {
    setSortLabel(label);
    setSortValue(value);
    setPage(1);
    setEvents([]);
    setIsFetching(true);
  };
  if (!events.length) return <Loader />;

  return (
    <section className="container py-[40px]">
      {isLoading && <Loader />}
      {events.length ? (
        <>
          <Sort onChange={handleChangeSort} sortLabel={sortLabel} />
          <EventsList events={events} />
        </>
      ) : null}
    </section>
  );
};
export default EventsBoard;
