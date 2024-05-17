import { format } from "date-fns";

import { IParticipant } from "../../types";

interface IParticipantListItemProps {
  participant: IParticipant;
}

export const ParticipantsListItem: React.FC<IParticipantListItemProps> = ({
  participant: { name, email, dateOfRegistration },
}) => {
  return (
    <li className=" flex flex-col justify-between text-text-color p-[18px] text-[20px] bg-bg-card-color  rounded-[18px] w-[100%] md:w-[342px] lg:w-[362px] lg:p-[24px] shadow-custom-inset">
      <p>{name}</p>
      <p className="mb-[8px]">{email}</p>
      <p className="text-[16px]">
        Date of registration: {format(dateOfRegistration, "PP")}
      </p>
    </li>
  );
};
