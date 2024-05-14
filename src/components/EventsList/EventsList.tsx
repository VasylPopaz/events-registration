import { EventsListItem } from "./EventsListItem";

export const EventsList = ({ events = null }) => {
  if (!events) return;

  return (
    <ul className="flex flex-wrap gap-[20px]">
      {events.map((event) => (
        <EventsListItem key={event._id} {...event} />
      ))}
    </ul>
  );
};
