import "./App.css";
import { Route, Routes } from "react-router-dom";
import CalendarPage from "./pages/CalendarPage";
import HomePage from "./pages/HomePage";
import TodayPage from "./pages/TodayPage";
import TodoPage from "./pages/TodoPage";
function App() {
  return (
    <div>
      <Routes>
        <Route exect path="/" element={<HomePage />} />
        <Route path="/todo" element={<TodoPage />} />
        <Route path="/today" element={<TodayPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
      </Routes>
      <TodoPage />
    </div>
  );
}

export default App;
