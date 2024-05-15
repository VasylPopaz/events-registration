export type Source = "Social media" | "Friends" | "Found myself";

export interface IParticipant {
  _id: string;
  name: string;
  email: string;
  dateOfBirth: Date;
  dateOfRegistration: Date;
  eventAdvertisementSource: Source;
  eventId: string;
}

export interface IParticipantExceptId {
  name: string;
  email: string;
  dateOfBirth: string;
  dateOfRegistration: string;
  eventAdvertisementSource: Source;
  eventId: string;
}
export interface ParticipantsListProps {
  participants: IParticipant[];
}
// export interface IParticipantExceptId extends Omit<IParticipant, "_id"> {}
