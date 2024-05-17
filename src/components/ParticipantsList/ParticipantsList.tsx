import { ParticipantsListItem } from "./ParticipantsListItem";

import { IParticipantsListProps } from "../../types";

export const ParticipantsList: React.FC<IParticipantsListProps> = ({
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
