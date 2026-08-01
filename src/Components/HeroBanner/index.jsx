import "./index.css";

import { getMovieTrailer } from "../../services/tmdbApi";

const HeroBanner=({movie})=>{
    console.log(movie);

    if (!movie) return null;
    const handleTrailer=async ()=>{
        const trailerUrl=await getMovieTrailer(movie.id);
        if(trailerUrl){
            window.open(trailerUrl,"_blank");
        }else{
            alert("Official trailer is not available")
        }
    };


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

                <button className="watch-btn" onClick={handleTrailer}>
                    ▶ Watch Trailer
                </button>
            </div>
        </div>
    );
};

export default HeroBanner;