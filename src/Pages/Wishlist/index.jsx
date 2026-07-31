import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import MovieCard from "../../components/MovieCard";
import "./index.css";
import { getMovieTrailer } from "../../services/tmdbApi";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const storedWishlist =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    setWishlist(storedWishlist);
  }, []);


  const handleTrailer = async (movieId) => {
  const trailerUrl = await getMovieTrailer(movieId);

  if (trailerUrl) {
    window.open(trailerUrl, "_blank");
  } else {
    alert("Trailer not available");
  }
};


  const removeMovie = (movieId) => {
    const updatedWishlist = wishlist.filter(
      (movie) => movie.id !== movieId
    );

    setWishlist(updatedWishlist);

    localStorage.setItem(
      "wishlist",
      JSON.stringify(updatedWishlist)
    );
  };

  return (
    <>
      <Navbar />

      <div className="wishlist-page">
        <h1>❤️ My Wishlist</h1>

        {wishlist.length === 0 ? (
          <p>No movies in wishlist.</p>
        ) : (
          <div className="wishlist-container">
            {wishlist.map((movie) => (
              <div key={movie.id} className="wishlist-card">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.posterPath}`}
                  alt={movie.title}
                />

                <h3>{movie.title}</h3>

                <p>📅 {movie.releaseDate}</p>
                <p>🎭 {movie.genres}</p>
                <p>⭐ {movie.rating}</p>

                <button
                  className="remove-btn"
                  onClick={() => removeMovie(movie.id)}
                >
                  ❌ Remove
                </button>
              <button
                className="trailer-btn"
                onClick={() => handleTrailer(movie.id)}
              >
                ▶ Watch Trailer
              </button>

              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Wishlist;