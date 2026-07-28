import MovieCard from "../MovieCard";
import "./index.css";

const genreMap = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  18: "Drama",
  27: "Horror",
  878: "Sci-Fi",
  53: "Thriller",
};

const MovieRow = ({ title, movies }) => {
  return (
    <div className="movie-row">
      <h2>{title}</h2>

      <div className="movies-container">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            posterPath={movie.poster_path}
            releaseDate={movie.release_date}
            genres={
              movie.genre_ids
                ?.slice(0, 2)
                .map((id) => genreMap[id])
                .join(", ")
            }
            rating={movie.vote_average?.toFixed(1)}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieRow;