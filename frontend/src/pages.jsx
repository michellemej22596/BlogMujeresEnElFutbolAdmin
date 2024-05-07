import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

// Lazy loading de los componentes
const Home = lazy(() => import('./pages/Home'));
const AdminHome = lazy(() => import('./pages/AdminHome'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const Posts = lazy(() => import('./pages/Posts'));
const Create = lazy(() => import('./pages/Create'));
const Edit = lazy(() => import('./pages/Edit'));
const Delete = lazy(() => import('./pages/Delete'));
const Select = lazy(() => import('./pages/SelectPostToEdit'));

// Un componente básico de "skeleton loading"
const LoadingIndicator = () => <div>Cargando...</div>;

function Pages({ token, setToken }) {
  return (
    <Suspense fallback={<LoadingIndicator />}>
      <Routes>
        <Route path="/" element={token ? <Home /> : <Navigate to="/login" />} />
        <Route path="posts" element={<Posts />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/admin/create" element={<Create />} />
        <Route path="edit/:postId" element={<Edit />} />
        <Route path="/admin/delete" element={<Delete />} />
        <Route path="/admin/select" element={<Select />} />
      </Routes>
    </Suspense>
  );
}

Pages.propTypes = {
  token: PropTypes.string,
  setToken: PropTypes.func.isRequired
};

export default Pages;
