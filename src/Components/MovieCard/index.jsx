import "./index.css";

const MovieCard = ({ title, posterPath, releaseDate,genres,rating,poster }) => {
  return (
    <div className="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w500${posterPath}`}
        alt={title}
        className="movie-poster"
      />
      <h3 className="movie-title">{title}</h3>

      <p className="movie-info">📅 {releaseDate}</p>
      <p className="movie-info">🎭 {genres}</p>
      <p className="movie-info">⭐ {rating}</p>

    </div>
  );
};

export default MovieCard;