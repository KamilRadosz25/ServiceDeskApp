import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";
import Tickets from "./pages/Tickets";
import Users from "./pages/Users";
import SideBar from "./components/SideBar";
import "./App.css";
import EasydeskDev from "./pages/EasydeskDev";

const App: React.FC = () => {
  return (
    <div className="d-flex flex-nowrap">
      <SideBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/users" element={<Users />} />
        <Route path="/easydeskdev" element={<EasydeskDev />} />
      </Routes>
    </div>
  );
};

export default App;
