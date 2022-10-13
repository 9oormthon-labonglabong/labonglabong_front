import { Route, Routes } from "react-router-dom";

import Landing from "./pages/landing/Landing";
import Calendar from "./components/Calendar";
import Map from "./pages/map/Map";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/map" element={<Map />} />
    </Routes>
  );
}

export default App;
