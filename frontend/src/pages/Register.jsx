// frontend/src/pages/Register.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../components/Button';
import Input from '../components/Input';
import '../styles/Login.css'; // Asegúrate de que los estilos sean apropiados para el registro también

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  // Función para actualizar el valor de los campos
  const setValue = (name, value) => {
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  // Función para manejar el envío del formulario de registro
  const handleSubmit = async () => {
    // Cuerpo de la solicitud con las credenciales proporcionadas
    const body = {
      username,
      email,
      password
    };

    // Opciones de la solicitud
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    };

    // Solicitud a la API de registro
    try {
      const response = await fetch('http://localhost:22596/auth/register', fetchOptions);
      if (response.ok) {
        console.log('¡Registro exitoso!');
        navigate('/login'); // Redirigir al usuario a la página de inicio de sesión después del registro
      } else {
        const data = await response.json();
        setErrorMessage(data.message || 'Registro fallido.');
      }
    } catch (error) {
      console.error('Error al realizar el registro:', error);
      setErrorMessage('Error al comunicarse con el servidor.');
    }
  };

  return (
    <aside className="login">
      <div className="logo-container">
        <img className="login-logo" src="../../public/images/logo.png" alt="Logo del Restaurante" />
      </div>
      <h1 className="title">Registra un nuevo usuario</h1>
      {errorMessage && (
        <div className='error-message' onClick={() => setErrorMessage('')}>
          {errorMessage}
        </div>
      )}
      <Input placeholder="Tu nombre de usuario" label="Usuario" type="text" value={username} onChange={(value) => setValue('username', value)} />
      <Input placeholder="Tu correo electrónico" label="Email" type="email" value={email} onChange={(value) => setValue('email', value)} />
      <Input placeholder="Tu contraseña" label="Contraseña" type="password" value={password} onChange={(value) => setValue('password', value)} />
      <Button text="Registrar" onClick={handleSubmit} />
    </aside>
  );
};

export default Register;
