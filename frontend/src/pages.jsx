import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function Pages({ token, setToken }) {
  return (
    <Routes>
      <Route path="/" element={token ? <Home /> : <Navigate to="/login" />} /> 

      <Route path="/login" element={<Login setToken={setToken} />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default Pages;