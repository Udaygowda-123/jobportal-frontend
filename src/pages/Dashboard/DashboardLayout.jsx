import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import JobPosted from "./JobPosted";
import JobForm from "./JobForm";
import Profile from "./Profile";
import CustomerAnalysis from "./CustomerAnalysis";
import { Menu } from "lucide-react";

export default function DashboardLayout() {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm p-4 flex justify-between items-center sticky top-0 z-20">
        <div className="flex items-center gap-3">
          <button
            className="lg:hidden border p-2 rounded-md"
            onClick={() => setOpenSidebar(!openSidebar)}
          >
            <Menu className="w-5 h-5" />
          </button>
          <h1 className="text-xl font-bold text-blue-600">Job Portal</h1>
        </div>

        <button
          className="border px-3 py-1 rounded-md hover:bg-gray-100 text-sm"
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/login";
          }}
        >
          Logout
        </button>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside
          className={`fixed lg:static top-0 left-0 h-full lg:h-auto w-64 lg:w-64 bg-white shadow-lg lg:shadow-none transform transition-transform duration-300 z-30 ${
            openSidebar ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          }`}
        >
          <Sidebar />
        </aside>

        {/* Overlay on mobile */}
        {openSidebar && (
          <div
            className="fixed inset-0 bg-black/40 lg:hidden z-20"
            onClick={() => setOpenSidebar(false)}
          ></div>
        )}

        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6">
          <Routes>
            <Route path="/" element={<Navigate to="jobs" replace />} />
            <Route path="jobs" element={<JobPosted />} />
            <Route path="post-job" element={<JobForm />} />
            <Route path="profile" element={<Profile />} />
            <Route path="analysis" element={<CustomerAnalysis />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
