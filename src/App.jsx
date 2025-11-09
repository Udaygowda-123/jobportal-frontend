import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Public/Home';
import Login from './pages/Public/Login';
import Signup from './pages/Public/Signup';
import DashboardLayout from './pages/Dashboard/DashboardLayout';

const PrivateRoute = ({ children }) => {
  return localStorage.getItem('token') ? children : <Navigate to="/login" />;
};

export default function App(){
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/dashboard/*" element={<PrivateRoute><DashboardLayout/></PrivateRoute>} />
    </Routes>
  );
}
