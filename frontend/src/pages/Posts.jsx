// frontend/src/pages/Posts.jsx
import React, { useState, useEffect } from 'react';
import Post from '../components/Post';

export default function Posts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('http://localhost:22596/posts');
                if (!response.ok) throw new Error('Error al obtener los posts');
                const posts = await response.json();
                setPosts(posts);
            } catch (err) {
                setError(true);
            } finally {
                setLoading(false);
            }
        };
        fetchPosts();
    }, []);

    if (loading) return <div className="loading">Cargando...</div>;
    if (error) return <div className="error">Error al cargar los posts</div>;
    if (posts.length === 0) return <div>No hay publicaciones disponibles.</div>;

    return (
        <ul className="posts-list">
            {posts.map((post, index) => (
                <Post key={index} {...post} />
            ))}
        </ul>
    );
}
