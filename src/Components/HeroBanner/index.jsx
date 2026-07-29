import "./index.css";
import poster from "../../assets/spiderman.jpeg";

const HeroBanner=({movie})=>{
    if (!movie) return null;

    return (
        <div className="hero-banner" 
        style={{
            backgroundImage:`url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        }}>
            <div className="hero-content">
                <h1 className="hero-title">{movie.title}</h1>

                <p className="hero-description">
                {movie.overview?.slice(0, 180)}...
                </p>

                <button className="watch-btn">
                    ▶ Watch Trailer
                </button>
            </div>
        </div>
    );
};

export default HeroBanner;