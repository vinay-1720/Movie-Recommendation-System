import "./index.css";

const MovieCard=({title,poster})=>{
    return (
        <div className="movie-card">
            <img src={poster} alt={title} className="movie-poster"/>
            <p className="movie-title">{title}</p>
        </div>
    );
};

export default MovieCard;