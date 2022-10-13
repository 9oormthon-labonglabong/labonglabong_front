import { Route, Routes } from "react-router-dom";

import Landing from "./pages/landing/Landing";
import Main from "./pages/main/Main";
import Diary from "./pages/diary/Diary";
import Map from "./pages/map/Map";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/main" element={<Main />} />
      <Route path="/map" element={<Map />} />
      <Route path="/diary" element={<Diary />} />
    </Routes>
  );
}

export default App;
