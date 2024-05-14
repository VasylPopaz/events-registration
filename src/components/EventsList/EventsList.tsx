import { EventsListItem } from "./EventsListItem";
import { Event } from "../../types";
interface EventsListProps {
  events: Event[];
}

export const EventsList: React.FC<EventsListProps> = ({ events }) => {
  return (
    <ul className="flex flex-wrap gap-[20px]">
      {events.map((event) => (
        <EventsListItem key={event._id} event={event} />
      ))}
    </ul>
  );
};
