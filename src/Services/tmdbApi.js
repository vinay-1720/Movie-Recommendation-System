import axios from "axios";

const options={
    headers:{
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
        accept:"application/json",
    },
};

export const getPopularMovies=async ()=>{
    try{
        const response=await axios.get(
            "https://api.themoviedb.org/3/movie/popular",
            options
        );
        return response.data.results;
    }catch(error){
        console.error(error);
        return [];
    }
};