import "./index.css";
import { getMovieTrailer } from "../../services/tmdbApi";

const MovieCard = ({
  id,
  title,
  posterPath,
  releaseDate,
  genres,
  rating,
}) => {
  const handleTrailer = async () => {
    const trailerUrl = await getMovieTrailer(id);

    if (trailerUrl) {
      window.open(trailerUrl, "_blank");
    } else {
      alert("Trailer is not Available");
    }
  };

  const addToWishlist = () => {
    const wishlist =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    const exists = wishlist.find(
      (item) => item.id === id
    );

    if (!exists) {
      wishlist.push({
        id,
        title,
        posterPath,
        releaseDate,
        genres,
        rating,
      });

      localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
      );

      alert("Added to Wishlist ❤️");
    } else {
      alert("Movie already in Wishlist");
    }
  };

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

      <button
        className="wishlist-btn"
        onClick={addToWishlist}
      >
        ❤️ Add to Wishlist
      </button>

      <button
        className="trailer-btn"
        onClick={handleTrailer}
      >
        ▶ Watch Trailer
      </button>
    </div>
  );
};

export default MovieCard;