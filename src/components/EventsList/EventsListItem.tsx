import { format } from "date-fns";
import { Link } from "react-router-dom";

import { IEvent } from "../../types";

interface IEventListItemProps {
  event: IEvent;
}

export const EventsListItem: React.FC<IEventListItemProps> = ({
  event: { title, description, date, organizer, _id },
}) => {
  return (
    <li className="flex flex-col justify-between text-text-color p-[18px] bg-bg-card-color rounded-[18px] w-[100%] md:w-[342px] lg:w-[362px] lg:p-[24px] shadow-custom-inset">
      <div className="pb-[10px] mb-auto">
        <h2 className="font-semibold text-[20px]">{title}</h2>
        <p className="line-clamp-6 ">{description}</p>
      </div>
      <div className=" ">
        <div className="flex justify-between border-b border-b-texttext-text-color mb-[8px]">
          <p>{format(date, "PP")}</p>
          <p className="text-right">{organizer}</p>
        </div>
        <div className="flex justify-between text-[#4278c8] ">
          <Link className="link " to={`/registration/${_id}`}>
            Register
          </Link>
          <Link className="link" to={`/participants/${_id}`}>
            View
          </Link>
        </div>
      </div>
    </li>
  );
};
