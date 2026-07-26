import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { getPopularMovies } from "../../services/tmdbApi";
import MovieRow from "../../components/MovieRow";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getPopularMovies();
      setMovies(data);
    };

    fetchMovies();
  }, []);

  return (
    <>
      <Navbar />

      <h1>Popular Movies</h1>

        <div className="movies-container">
        {movies.map((movie) => (
            <div key={movie.id}>
            <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                width="200"
            />

            <p>{movie.title}</p>
            </div>
        ))}
        </div>
    </>
  );
};

export default Movies;