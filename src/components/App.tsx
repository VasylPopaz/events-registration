import { Navigate, Route, Routes } from "react-router-dom";
import { lazy } from "react";

import { SharedLayout } from "../components";

const Home = lazy(() => import("../pages/Home"));
const EventRegistration = lazy(() => import("../pages/EventRegistration"));
const EventParticipants = lazy(() => import("../pages/EventParticipants"));
const EventsBoard = lazy(() => import("../pages/EventsBoard"));

export const App = () => {
  return (
    <Routes>
      <Route element={<SharedLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/registration/:eventId" element={<EventRegistration />} />
        <Route path="/participants/:eventId" element={<EventParticipants />} />
        <Route path="/board" element={<EventsBoard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};
