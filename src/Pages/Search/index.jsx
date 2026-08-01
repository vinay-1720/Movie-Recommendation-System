import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar";
import MovieRow from "../../components/MovieRow";
import { searchMovies } from "../../services/tmdbApi";

const Search=()=>{
    const [movies,setMovies]=useState([]);
    const location=useLocation();
    const query=new URLSearchParams(
        location.search
    ).get("q");

    useEffect(()=>{
        const fetchMovies=async ()=>{
            if(query){
                const data=await searchMovies(query);
                setMovies(data);
            }
        };
        fetchMovies();
    },[query]);

    return (
        <> 
        <Navbar/>
        <div style={{paddingTop: "80px"}}>
            <MovieRow
            title={`Results for "${query}"`}
            movies={movies}
            />
        </div>
        
        
        </>
    );
};

export default Search;