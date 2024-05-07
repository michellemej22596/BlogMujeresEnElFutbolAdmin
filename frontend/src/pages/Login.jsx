// frontend/src/pages/Login.jsx
import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import Button from '../components/Button';
import Input from '../components/Input';
import '../styles/Login.css';
import { useNavigate } from 'react-router-dom';

const Login = ({ setToken }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Función para actualizar el valor de username o password
  const setValue = (name, value) => {
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  // Función para manejar el envío del formulario de login
  const handleSubmit = async () => {
    // Cuerpo de la solicitud con las credenciales proporcionadas
    const body = {
      email: username, // Asegúrate de que el nombre coincide con lo esperado en la API
      password
    };

    // Opciones de la solicitud
    const fetchOptions = {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      // Solicitud a la API de autenticación
      const response = await fetch('https://api.tiburoncin.lat/22596/auth/login', fetchOptions);
      const data = await response.json();

      if (response.ok) {
        // Almacenar el token devuelto por la API
        const token = data.token; // Supone que la API devuelve un campo 'token'
        setToken(token);

        // Redirigir a la página de inicio o panel de administración
        navigate('/admin');
      } else {
        // Manejo de errores
        setErrorMessage('Credenciales inválidas.');
      }
    } catch (error) {
      // Captura de excepciones en caso de error de red u otro
      console.error('Error al realizar el inicio de sesión:', error);
      setErrorMessage('Error al comunicarse con el servidor.');
    }
  };

  return (
    <aside className="login">
      <div className="logo-container">
        <img className="login-logo" src="https://png.pngtree.com/png-clipart/20230930/original/pngtree-flaming-soccer-ball-png-png-image_13023197.png" />
      </div>
      <h1 className="title">¡Bienvenido(a)!</h1>
      {errorMessage && (
        <div className='error-message' onClick={() => setErrorMessage('')}>
          {errorMessage}
        </div>
      )}
      <Input placeholder="Tu nombre de usuario" label="Usuario" type="text" value={username} onChange={(value) => setValue('username', value)} />
      <Input placeholder="Tu contraseña" label="Contraseña" type="password" value={password} onChange={(value) => setValue('password', value)} />
      <Button text="Iniciar sesión" onClick={handleSubmit} />
    </aside>
  );
};

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Login;
