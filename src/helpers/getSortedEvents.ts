import { IEvent } from "../types";

export const getSortedEvents = (events: IEvent[], sortBy: string) => {
  if (!sortBy) return events;

  const sortKey: keyof IEvent = sortBy
    .slice(2)
    .split("=")[0]
    .toLowerCase() as keyof IEvent;

  const sortOrder = sortBy.split("=")[1] === "true" ? 1 : -1;

  return [...events].sort((a, b) => {
    const valueA = a[sortKey];
    const valueB = b[sortKey];

    if (typeof valueA === "string" && typeof valueB === "string") {
      return sortOrder * valueA.localeCompare(valueB);
    } else {
      return 0;
    }
  });
};
