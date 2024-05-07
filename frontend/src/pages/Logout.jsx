import { useEffect } from 'react';
import PropTypes from 'prop-types';

const Logout = ({ navigate }) => {
  useEffect(() => {
    // Elimina específicamente el token de acceso, manteniendo otros datos de localStorage intactos.
    localStorage.removeItem('access_token');
    
    // Redirige inmediatamente al usuario a la página de inicio de sesión.
    navigate('/login');
  }, [navigate]);

  return <h1>Logging out...</h1>;
}

Logout.propTypes = {
  navigate: PropTypes.func.isRequired
};

export default Logout;
