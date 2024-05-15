import axios from "axios";

import {
  IEvent,
  IEventResponse,
  IParticipant,
  IParticipantExceptId,
} from "../types";

const instance = axios.create({
  baseURL: "https://events-registration-app-backend-w9jw.onrender.com/api",
});

export const getEvents = async (page: number): Promise<IEventResponse> => {
  const { data } = await instance.get("/events", { params: { page } });

  return data;
};

export const getEventById = async (id: string): Promise<IEvent> => {
  const { data } = await instance.get(`/events/${id}`);

  return data;
};

export const addParticipant = async (
  credentials: IParticipantExceptId
): Promise<IParticipant> => {
  const { data } = await instance.post("/participants", credentials);

  return data;
};

export const getParticipants = async () => {
  const { data } = await instance.get(`/participants`);

  return data;
};

export const getParticipantsByEventId = async (id: string) => {
  const { data } = await instance.get(`/participants?eventId=${id}`);

  return data;
};

export const getParticipantById = async (id: string) => {
  const { data } = await instance.get(`/participants/${id}`);

  return data;
};
