import { IParticipant } from "../../types";
import { ParticipantsListItem } from "./ParticipantsListItem";

interface ParticipantsListProps {
  participants: IParticipant[];
}

export const ParticipantsList: React.FC<ParticipantsListProps> = ({
  participants,
}) => {
  return (
    <ul className="flex flex-wrap gap-[20px]">
      {participants.map((participant) => (
        <ParticipantsListItem key={participant._id} participant={participant} />
      ))}
    </ul>
  );
};
