import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import AdminHome from './pages/AdminHome';
import Login from './pages/Login';
import Register from './pages/Register';
import Posts from './pages/Posts';

import Create from './pages/Create';
import Edit from './pages/Edit';
import Delete from './pages/Delete';

function Pages({ token, setToken }) {
  return (
    <Routes>
      <Route path="/" element={token ? <Home /> : <Navigate to="/login" />} /> 
      
      <Route path="posts" element={<Posts />} />
      <Route path="/login" element={<Login setToken={setToken} />} />
      <Route path="/register" element={<Register />} />
      <Route path="/admin" element={<AdminHome />} />
      <Route path="/admin/create" element={<Create />} />
      <Route path="/admin/edit" element={<Edit />} />
      <Route path="/admin/delete" element={<Delete />} />
    </Routes>
  );
}

export default Pages;