import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

import { EventsList, ScrollUpBtn, Sort } from "../components";

import { getEvents } from "../api";
import { IEvent } from "../types";
import { getSortedEvents } from "../helpers";

const EventsBoard = () => {
  const [events, setEvents] = useState<IEvent[]>([]);
  const [sortBy, setSortBy] = useState("");
  const [page, setPage] = useState(1);
  const [isFetching, setIsFetching] = useState(true);
  const [totalEvents, setTotalEvents] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const scrollYRef = useRef(0);

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
    const handleScroll = () => {
      scrollYRef.current = window.scrollY;
      setIsVisible(scrollYRef.current > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isFetching) {
      getEvents(page, "")
        .then((res) => {
          setEvents([...events, ...res.events]);
          setTotalEvents(res.totalEvents);
          setPage((prev) => prev + 1);

          const isMoreEvents =
            page < Math.ceil(res.totalEvents / EVENTS_PER_PAGE);
          if (!isMoreEvents) {
            toast.info(
              `We’re sorry, but you’ve reached the end of the event list.`
            );
          }
        })
        .catch((e) => {
          toast.error(e.response.data.message);
        })
        .finally(() => setIsFetching(false));
    }
  }, [events, isFetching, page, sortBy, totalEvents]);

  const handleChangeSort = (option: string) => {
    setSortBy(option);
  };

  const sortedEvents = getSortedEvents(events, sortBy);

  return (
    <section className="container py-[40px]">
      <Sort onChange={handleChangeSort} />
      <EventsList events={sortedEvents} />
      <ScrollUpBtn isVisible={isVisible} />
    </section>
  );
};
export default EventsBoard;
