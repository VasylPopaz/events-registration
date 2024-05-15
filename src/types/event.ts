export interface IEvent {
  _id: string;
  title: string;
  description: string;
  date: Date;
  organizer: string;
}
export interface IEventExceptId extends Omit<IEvent, "_id"> {}

export interface IEventResponse {
  events: IEvent[];
  totalEvents: number;
}
