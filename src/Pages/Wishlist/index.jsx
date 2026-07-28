import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import MovieCard from "../../components/MovieCard";
import "./index.css";


const Wishlist=()=>{
    const [wishlist,setWishlist]=useState([]);
    
    useEffect(()=>{
        const movies=JSON.parse(localStorage.getItem("wishlist")) || [];
        setWishlist(movies);
    },[]);
    const removeMovie=(id)=>{
        const updatedWishlist=wishlist.filter(
            (movie)=>movie.id!==id
        );
        setWishlist(updatedWishlist);

        localStorage.setItem(
            "wishlist",
            JSON.stringify(updatedWishlist)
        );
    };

    return (
        <>
        <Navbar/>
        <div className="wishlist-page">
            <h1>❤️ My Wishlist</h1>
            <div className="wishlist-container">
                {wishlist.map((movie)=>(
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
                    </div>
                ))}
            </div>
        </div>
        </>
    );
};


export default Wishlist;