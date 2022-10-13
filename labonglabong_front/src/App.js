import { Route, Routes } from "react-router-dom";

import Landing from "./pages/landing/Landing";
import Main from "./pages/main/Main";
import Calendar from "./components/Calendar";
import Map from "./components/Map";
import MapContainer from "./pages/map/MapContainer";
import SearchPlace from "./components/SearchPlace";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/main" element={<Main />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/map" element={<MapContainer />} />
      <Route path="/search" element={<SearchPlace />} />
    </Routes>
  );
}

export default App;
