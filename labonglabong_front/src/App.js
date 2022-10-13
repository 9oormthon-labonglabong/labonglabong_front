import { Route, Routes } from "react-router-dom";

import Landing from "./pages/landing/Landing";
import Calendar from "./components/Calendar";
import Map from "./components/Map";
import MapContainer from "./pages/map/MapContainer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/map" element={<MapContainer />} />
    </Routes>
  );
}

export default App;
