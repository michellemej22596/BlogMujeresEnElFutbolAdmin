// frontend/src/pages/SelectPostToEdit.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SelectPostToEdit.css'; // Crea esta hoja de estilos para el diseño

const Select = () => {
    const [posts, setPosts] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    // Obtener todos los posts disponibles
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('http://localhost:22596/posts');
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                setErrorMessage('Error al obtener la lista de posts.');
            }
        };

        fetchPosts();
    }, []);

    // Navegar a la página de edición del post seleccionado
    const handleEdit = (postId) => {
        navigate(`/edit/${postId}`);
    };

    return (
        <div className="select-post">
            <h1>Selecciona un Post para Editar</h1>
            {errorMessage && (
                <div className="error-message" onClick={() => setErrorMessage('')}>
                    {errorMessage}
                </div>
            )}
            <ul className="post-list">
                {posts.map(post => (
                    <li key={post.id} className="post-item">
                        <span>{post.title}</span>
                        <button onClick={() => handleEdit(post.id)}>Editar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Select;
