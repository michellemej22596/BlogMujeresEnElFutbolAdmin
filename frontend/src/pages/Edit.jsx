// frontend/src/pages/Edit.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';
import '../styles/Edit.css'; // Crea esta hoja de estilos para la página

const Edit = () => {
    // Obtener el postId de la URL
    const { postId } = useParams();
    const navigate = useNavigate();

    // Estados para los datos del post
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [team, setTeam] = useState('');
    const [goalsScored, setGoalsScored] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // Obtener el post actual para editar
    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(`http://localhost:22596/posts/${postId}`);
                const post = await response.json();
                setTitle(post.title);
                setDescription(post.description);
                setTeam(post.team);
                setGoalsScored(post.goals_scored);
                setImageUrl(post.image_base64);
            } catch (error) {
                setErrorMessage('Error al obtener el post.');
            }
        };

        fetchPost();
    }, [postId]);

    // Manejar la actualización del post
    const handleSubmit = async () => {
        const body = {
            title,
            description,
            team,
            goals_scored: parseInt(goalsScored, 10),
            image_base64: imageUrl
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
                navigate('/admin'); // Redirige al menú principal tras una edición exitosa
            } else {
                setErrorMessage('Error al actualizar el post.');
            }
        } catch (error) {
            setErrorMessage('Error al comunicarse con el servidor.');
        }
    };

    return (
        <aside className="edit-form">
            <h1>Editar Post</h1>
            {errorMessage && (
                <div className="error-message" onClick={() => setErrorMessage('')}>
                    {errorMessage}
                </div>
            )}
            <Input label="Nombre de la jugadora" type="text" value={title} onChange={setTitle} />
            <Input label="Descripción" type="textarea" value={description} onChange={setDescription} />
            <Input label="Equipo" type="text" value={team} onChange={setTeam} />
            <Input label="Número de goles" type="number" value={goalsScored} onChange={setGoalsScored} />
            <Input label="Enlace de imagen" type="text" value={imageUrl} onChange={setImageUrl} />
            <Button text="Actualizar Post" onClick={handleSubmit} />
        </aside>
    );
};

export default Edit;
