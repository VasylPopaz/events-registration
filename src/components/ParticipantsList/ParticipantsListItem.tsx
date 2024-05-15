import { IParticipant } from "../../types";

interface ParticipantListItemProps {
  participant: IParticipant;
}

export const ParticipantsListItem: React.FC<ParticipantListItemProps> = ({
  participant,
}) => {
  console.log(participant);
  return (
    <li className="flex flex-col justify-between text-[#b5b6b6] p-[18px] text-[18px] bg-transparent  rounded-[18px] w-[100%] md:w-[342px] lg:w-[300px] lg:p-[24px] shadow-custom-inset">
      <p>{participant.name}</p>
      <p>{participant.email}</p>
    </li>
  );
};
