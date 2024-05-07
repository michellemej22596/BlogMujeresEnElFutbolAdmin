import { useNavigate } from 'react-router-dom';
import '../styles/AdminHome.css'; 

const AdminHome = () => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    localStorage.removeItem('token'); // Elimina el token de localStorage
    navigate('/login');
  };

  const navigateToCreate = () => navigate('/admin/create');  
  const navigateToSelect = () => navigate('/admin/select');

  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4">Menú Principal</h1>
      <div className="d-flex flex-column align-items-center">
        <button onClick={navigateToCreate}>Crear Post</button>
        <button onClick={navigateToSelect}>Seleccionar Post</button>
        <button onClick={handleLogout}>Cerrar Sesión</button>
      </div>
    </div>
  );
};

export default AdminHome;
