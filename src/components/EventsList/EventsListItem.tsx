import { format } from "date-fns";
import { Link } from "react-router-dom";

import { Event } from "../../types";

interface EventListItemProps {
  event: Event;
}

export const EventsListItem: React.FC<EventListItemProps> = ({ event }) => {
  return (
    <li className="text-[#b5b6b6] p-[18px] bg-[#0e223b] rounded-[18px] w-[100%] md:w-[342px] lg:w-[516px] lg:p-[24px]">
      <h2 className="font-semibold text-[20px]">{event.title}</h2>
      <p className="line-clamp-6 mb-[8px]">{event.description}</p>
      <div className="flex justify-between border-b border-b-[#b5b6b6] mb-[4px]">
        <p>{format(event.date, "PP")}</p>
        <p className="text-right">{event.organizer}</p>
      </div>
      <div className="flex justify-between text-[#4278c8] ">
        <Link className="link " to={`/registration/${event._id}`}>
          Register
        </Link>
        <Link className="link" to={`/participants/${event._id}`}>
          View
        </Link>
      </div>
    </li>
  );
};
