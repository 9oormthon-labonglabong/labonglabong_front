import { Alert, UncontrolledAlert } from "@goorm-dev/gds-goormthon";
import { ActivityIcon, CheckCircleIcon } from "@goorm-dev/gds-goormthon";

import { Route, Routes } from "react-router-dom";

import Landing from "./pages/landing/Landing";
import Calendar from "./components/Calendar";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/calendar" element={<Calendar />} />
    </Routes>
  );
}

export default App;
