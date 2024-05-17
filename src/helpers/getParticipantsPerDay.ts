import { format } from "date-fns";

import { IParticipant } from "../types";

interface IRegistrationData {
  date: string;
  count: number;
}

export const getParticipantsPerDay = (
  participants: IParticipant[]
): IRegistrationData[] => {
  const currentDate = new Date();
  const fiveDaysAgo = new Date(currentDate);
  fiveDaysAgo.setDate(fiveDaysAgo.getDate() - 4);

  const dates = [];
  for (
    let d = new Date(fiveDaysAgo);
    d <= currentDate;
    d.setDate(d.getDate() + 1)
  ) {
    dates.push(new Date(d).toISOString().split("T")[0]);
  }

  const registrationsByDay: IRegistrationData[] = dates.map((date) => ({
    date,
    count: 0,
  }));

  const filteredData = participants.filter((participant) => {
    const registrationDate = new Date(participant.dateOfRegistration);

    return (
      registrationDate >= new Date(fiveDaysAgo.toISOString().split("T")[0]) &&
      registrationDate <= new Date(currentDate.toISOString().split("T")[0])
    );
  });

  filteredData.forEach((participant) => {
    const registrationDate = new Date(participant.dateOfRegistration)
      .toISOString()
      .split("T")[0];
    const existingEntryIndex = registrationsByDay.findIndex(
      (entry) => entry.date === registrationDate
    );
    if (existingEntryIndex !== -1) {
      registrationsByDay[existingEntryIndex].count++;
    }
  });

  const formattedRegistrationsByDay = registrationsByDay.map((entry) => {
    const formattedDate = format(new Date(entry.date), "d MMM");
    return {
      ...entry,
      date: formattedDate,
    };
  });

  return formattedRegistrationsByDay;
};
