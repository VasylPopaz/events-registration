import { format } from "date-fns";
import { Link } from "react-router-dom";

import { IEvent } from "../../types";

interface EventListItemProps {
  event: IEvent;
}

export const EventsListItem: React.FC<EventListItemProps> = ({ event }) => {
  return (
    <li className="flex flex-col justify-between text-[#b5b6b6] p-[18px] bg-[#0e223b] rounded-[18px] w-[100%] md:w-[342px] lg:w-[362px] lg:p-[24px] shadow-custom-inset">
      <div className="pb-[10px] mb-auto">
        <h2 className="font-semibold text-[20px]">{event.title}</h2>
        <p className="line-clamp-6 ">{event.description}</p>
      </div>
      <div className=" ">
        <div className="flex justify-between border-b border-b-[#b5b6b6] mb-[8px]">
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
      </div>
    </li>
  );
};
