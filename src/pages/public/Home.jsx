import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-50 to-white text-center px-4">
      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 leading-tight">
        Build your <span className="text-blue-600">Career</span> with <br />
        <span className="text-gray-900">Qualty.ai Portal</span>
      </h1>
      <p className="mt-4 text-gray-600 max-w-2xl">
        A full-stack job portal built with the MERN stack. Post jobs, manage candidates,
        and explore analytics in one place.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <Link
          to="/login"
          className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="border border-blue-600 text-blue-600 px-6 py-3 rounded-full hover:bg-blue-50 transition"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}
