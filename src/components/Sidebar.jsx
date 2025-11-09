import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const linkClass = ({ isActive }) =>
    `block py-2 px-4 rounded-md text-sm font-medium ${
      isActive ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100"
    }`;

  return (
    <div className="p-4 h-full overflow-y-auto">
      <h2 className="text-lg font-semibold mb-4 text-gray-700">Dashboard</h2>
      <nav className="space-y-2">
        <NavLink to="/dashboard/jobs" className={linkClass}>
          Jobs Posted
        </NavLink>
        <NavLink to="/dashboard/post-job" className={linkClass}>
          Post a Job
        </NavLink>
        <NavLink to="/dashboard/analysis" className={linkClass}>
          Customer Analysis
        </NavLink>
        <NavLink to="/dashboard/profile" className={linkClass}>
          Profile
        </NavLink>
      </nav>
    </div>
  );
}
