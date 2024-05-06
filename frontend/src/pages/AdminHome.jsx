// frontend/src/pages/AdminHome.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AdminHome.css'; // Ruta relativa para importar la hoja de estilos

const AdminHome = () => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    localStorage.removeItem('token'); // Elimina el token de localStorage
    navigate('/login');
  };

  const navigateToCreate = () => navigate('/admin/create');
  const navigateToEdit = () => navigate('/admin/edit');
  const navigateToDelete = () => navigate('/admin/delete');
  
  const navigateToSelect = () => navigate('/admin/select');

  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4">Menú Principal</h1>
      <div className="d-flex flex-column align-items-center">
        <button onClick={navigateToCreate}>Crear Post</button>
        <button onClick={navigateToEdit}>Editar Post</button>
        <button onClick={navigateToDelete}>Eliminar Post</button>
        <button onClick={navigateToSelect}>Seleccionar Post</button>
        <button onClick={handleLogout}>Cerrar Sesión</button>
      </div>
    </div>
  );
};

export default AdminHome;
