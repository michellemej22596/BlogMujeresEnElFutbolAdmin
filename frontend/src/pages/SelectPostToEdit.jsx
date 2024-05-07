// frontend/src/pages/SelectPostToEdit.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SelectPostToEdit.css'; // Asegúrate de tener una hoja de estilos para esta página

const SelectPostToEdit = () => {
    const [posts, setPosts] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    // Obtener todos los posts disponibles
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('https://api.tiburoncin.lat/22596/posts');
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

    // Eliminar el post seleccionado y actualizar la lista
    const handleDelete = async (postId) => {
        try {
            const response = await fetch(`https://api.tiburoncin.lat/22596/posts/${postId}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                // Filtrar el post eliminado de la lista local
                setPosts(posts.filter(post => post.id !== postId));
            } else {
                setErrorMessage('Error al eliminar el post.');
            }
        } catch (error) {
            setErrorMessage('Error al comunicarse con el servidor.');
        }
    };

    return (
        <div className="select-post">
            <h1>Selecciona un Post</h1>
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
                        <button onClick={() => handleDelete(post.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SelectPostToEdit;
