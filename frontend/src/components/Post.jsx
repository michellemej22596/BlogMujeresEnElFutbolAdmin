// frontend/src/components/Post.jsx
import PropTypes from 'prop-types';

export default function Post({ title, description, team, goals_scored, image_base64 }) {
    return (
        <div className="post">
            <img src={image_base64} alt="Post Image" className="post-image" />
            <div className="post-content">
                <h1 className="post-title">{title}</h1>
                <p className="post-team">Equipo: {team}</p>
                <p className="post-goals">Goles: {goals_scored}</p>
                <p className="post-description">{description}</p>
            </div>
        </div>
    );
}

Post.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    team: PropTypes.string.isRequired,
    goals_scored: PropTypes.number.isRequired,
    image_base64: PropTypes.string.isRequired
};
