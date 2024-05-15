import { ParticipantsListProps } from "../../types";
import { ParticipantsListItem } from "./ParticipantsListItem";

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
