import { Route, Routes } from "react-router-dom";

import Landing from "./pages/landing/Landing";
import Main from "./pages/main/Main";
import Calendar from "./components/Calendar";
import Map from "./pages/map/Map";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/main" element={<Main />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/map" element={<Map />} />
    </Routes>
  );
}

export default App;
