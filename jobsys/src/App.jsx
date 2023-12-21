import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import { AdminPanel } from "./pages/AdminPanel";
import { JobForm } from "./components/JobForm";
import { Navigation } from "./components/Navigation";
import { Dashboard } from "./pages/Dashboard";
import { NewJob } from "./pages/NewJob";
function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/jobs" element={<AdminPanel />} />
        <Route path="/home" element={<NewJob />} />
      </Routes>
    </>
  );
}

export default App;
