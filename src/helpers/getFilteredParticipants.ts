import { IParticipant } from "../types";

export const getFilteredParticipants = (
  participants: IParticipant[],
  filter: string
): IParticipant[] => {
  const normalizedFilter = filter.toLowerCase();
  if (!participants) return [];

  return participants?.filter(
    (item) =>
      item.name.toLowerCase().includes(normalizedFilter) ||
      item.email.toLowerCase().includes(normalizedFilter)
  );
};
