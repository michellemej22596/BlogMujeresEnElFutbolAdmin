// frontend/src/pages/Edit.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/Edit.css';

const Edit = () => {
    const { postId } = useParams();
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [team, setTeam] = useState('');
    const [goalsScored, setGoalsScored] = useState(0);
    const [imageBase64, setImageBase64] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    // Cargar los datos iniciales del post a editar
    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(`http://localhost:22596/posts/${postId}`);
                const post = await response.json();
                setTitle(post.title);
                setDescription(post.description);
                setTeam(post.team);
                setGoalsScored(post.goals_scored);
                setImageBase64(post.image_base64);
            } catch (error) {
                console.error('Error al obtener el post:', error);
            }
        };

        fetchPost();
    }, [postId]);

    // Manejar el evento de guardar cambios
    const handleSaveChanges = async () => {
        const body = {
            title,
            description,
            team,
            goals_scored: goalsScored,
            image_base64: imageBase64
        };

        const fetchOptions = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        };

        try {
            const response = await fetch(`http://localhost:22596/posts/${postId}`, fetchOptions);
            if (response.ok) {
                setSuccessMessage('¡Los cambios se guardaron exitosamente!');
                setTimeout(() => {
                    navigate('/admin');
                }, 2000); // Redirige al menú principal después de 2 segundos
            } else {
                console.error('Error al guardar los cambios');
            }
        } catch (error) {
            console.error('Error al comunicarse con el servidor:', error);
        }
    };

    return (
        <div className="edit-container">
            <h1 className="edit-title">Editar Post</h1>
            {successMessage && <div className="success-message">{successMessage}</div>}
            <label className="edit-label">Título:</label>
            <input className="edit-input" value={title} onChange={e => setTitle(e.target.value)} />

            <label className="edit-label">Descripción:</label>
            <textarea className="edit-textarea" value={description} onChange={e => setDescription(e.target.value)} />

            <label className="edit-label">Equipo:</label>
            <input className="edit-input" value={team} onChange={e => setTeam(e.target.value)} />

            <label className="edit-label">Goles:</label>
            <input className="edit-input" type="number" value={goalsScored} onChange={e => setGoalsScored(Number(e.target.value))} />

            <label className="edit-label">Enlace de la Imagen:</label>
            <input className="edit-input" value={imageBase64} onChange={e => setImageBase64(e.target.value)} />

            <button className="edit-button" onClick={handleSaveChanges}>Guardar Cambios</button>
        </div>
    );
};

export default Edit;
