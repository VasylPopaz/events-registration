import axios from "axios";

import { Event } from "../types";

const instance = axios.create({
  baseURL: "https://events-registration-app-backend-w9jw.onrender.com/api",
});

export const getEvents = async (): Promise<Event[]> => {
  const { data } = await instance.get("/events");

  return data;
};

export const getEventById = async (id: string): Promise<Event> => {
  const { data } = await instance.get(`/events/${id}`);

  return data;
};

export const getParticipants = async () => {
  const { data } = await instance.get("/participants");

  return data;
};

export const getParticipantById = async (id: string) => {
  const { data } = await instance.get(`/participants/${id}`);

  return data;
};
