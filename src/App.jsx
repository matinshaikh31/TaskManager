import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import TodayPage from "./pages/today/TodayPage";
import CalendarPage from "./pages/calendar/CalendarPage";
import StickWallPage from "./pages/stickywall/StickWallPage";
import UpcomingPage from "./pages/upcomping/UpcomingPage";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <Router>
      <div className="flex h-screen overflow-hidden">
        <Header toggleSidebar={toggleSidebar} />

        <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />

        <div className="flex-1 p-6 pt-20 md:pt-6 overflow-y-auto w-full">
          <Routes>
            <Route path="/" element={<TodayPage />} />
            <Route path="calendar" element={<CalendarPage />} />
            <Route path="sticky-wall" element={<StickWallPage />} />
            <Route path="upcoming" element={<UpcomingPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
