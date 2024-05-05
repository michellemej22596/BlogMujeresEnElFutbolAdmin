// frontend/src/pages/CreatePost.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CreatePost.css';

const Create = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [team, setTeam] = useState('');
  const [goalsScored, setGoalsScored] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  // Actualizar el enlace de imagen proporcionado
  const handleImageUrlChange = (e) => {
    setImageUrl(e.target.value);
  };

  // Enviar el formulario
  const handleSubmit = async () => {
    const body = {
      title,
      description,
      team,
      goals_scored: parseInt(goalsScored, 10), // Asegura que sea un número
      image_base64: imageUrl // Ahora este campo será solo una URL
    };

    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}` // Añade el token si es necesario
      },
      body: JSON.stringify(body)
    };

    try {
      const response = await fetch('http://localhost:22596/posts', fetchOptions);
      if (response.ok) {
        setSuccessMessage('Post creado con éxito');
        navigate('/admin');
      } else {
        const data = await response.json();
        setErrorMessage(data.message || 'Error al crear el post.');
      }
    } catch (error) {
      setErrorMessage('Error al comunicarse con el servidor.');
    }
  };

  return (
    <div className="create-container">
      <h1>Crear Nuevo Post</h1>
      {errorMessage && <div className="create-error-message">{errorMessage}</div>}
      {successMessage && <div className="create-success-message">{successMessage}</div>}

      <div className="create-form-group">
        <label className="create-label" htmlFor="title">Nombre de la jugadora:</label>
        <input className="create-input" id="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>

      <div className="create-form-group">
        <label className="create-label" htmlFor="description">Descripción:</label>
        <textarea className="create-textarea" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>

      <div className="create-form-group">
        <label className="create-label" htmlFor="team">Equipo:</label>
        <input className="create-input" id="team" type="text" value={team} onChange={(e) => setTeam(e.target.value)} />
      </div>

      <div className="create-form-group">
        <label className="create-label" htmlFor="goalsScored">Número de goles:</label>
        <input className="create-input" id="goalsScored" type="number" value={goalsScored} onChange={(e) => setGoalsScored(e.target.value)} />
      </div>

      <div className="create-form-group">
        <label className="create-label" htmlFor="imageUrl">Enlace de Imagen:</label>
        <input className="create-input" id="imageUrl" type="text" value={imageUrl} onChange={handleImageUrlChange} />
      </div>

      <button className="create-button" onClick={handleSubmit}>Crear Post</button>
    </div>
  );
};

export default Create;
