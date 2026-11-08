import { useState } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import AccountNavigation from "./components/AccountNavigation";
import DiscoverPage from "./pages/DiscoverPage";
import LoginPage from "./pages/LoginPage";
import CreateAccountPage from "./pages/CreateAccountPage";
import "./App.css";

function AppLayout() {
  // Search and filter states
  const [search, setSearch] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [selectedStage, setSelectedStage] = useState("All");
  const [savedStartups, setSavedStartups] = useState([]);
  const [showSaved, setShowSaved] = useState(false);

  return (
    <div className="app-layout">
      <div className="app-shell">
        <AccountNavigation />
        <Outlet context={{
          search,
          setSearch,
          selectedIndustry,
          setSelectedIndustry,
          selectedLocation,
          setSelectedLocation,
          selectedStage,
          setSelectedStage,
          savedStartups,
          setSavedStartups,
          showSaved,
          setShowSaved,
        }} />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<DiscoverPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="create-account" element={<CreateAccountPage />} />
          <Route path="*" element={<main><h1>Page not found</h1><p>Use the navigation to continue.</p></main>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
