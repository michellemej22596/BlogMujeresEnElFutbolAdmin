// frontend/src/pages/CreatePost.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CreatePost.css';

const Delete = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [team, setTeam] = useState('');
  const [goalsScored, setGoalsScored] = useState('');
  const [imageBase64, setImageBase64] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  // Manejar la conversión de una imagen a Base64
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => setImageBase64(reader.result);
    reader.readAsDataURL(file);
  };

  // Enviar el formulario
  const handleSubmit = async () => {
    const body = {
      title,
      description,
      team,
      goals_scored: parseInt(goalsScored, 10), // Asegura que sea un número
      image_base64: imageBase64
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
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {successMessage && <div className="success-message">{successMessage}</div>}

      <div className="form-group">
        <label htmlFor="title">Título:</label>
        <input id="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>

      <div className="form-group">
        <label htmlFor="description">Descripción:</label>
        <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>

      <div className="form-group">
        <label htmlFor="team">Equipo:</label>
        <input id="team" type="text" value={team} onChange={(e) => setTeam(e.target.value)} />
      </div>

      <div className="form-group">
        <label htmlFor="goalsScored">Goles:</label>
        <input id="goalsScored" type="number" value={goalsScored} onChange={(e) => setGoalsScored(e.target.value)} />
      </div>

      <div className="form-group">
        <label htmlFor="imageUpload">Imagen:</label>
        <input id="imageUpload" type="file" onChange={handleImageUpload} />
      </div>

      <button onClick={handleSubmit}>Crear Post</button>
    </div>
  );
};

export default Delete;
