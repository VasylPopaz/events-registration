import { Navigate, Route, Routes } from "react-router-dom";

import { SharedLayout } from "../components";
import Home from "../pages/Home";
import EventRegistration from "../pages/EventRegistration";
import EventParticipants from "../pages/EventParticipants";
import EventsBoard from "../pages/EventsBoard";

function App() {
  return (
    <Routes>
      <Route element={<SharedLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/registration/:eventId" element={<EventRegistration />} />
        <Route path="/participants" element={<EventParticipants />} />
        <Route path="/board" element={<EventsBoard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
