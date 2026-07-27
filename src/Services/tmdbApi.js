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

export const getTrendingMovies=async ()=>{
    const response=await axios.get(
        "https://api.themoviedb.org/3/trending/movie/week",
        options
    );
    return response.data.results;
};

export const getTopRatedMovies=async ()=>{
    const response=await axios.get(
        "https://api.themoviedb.org/3/movie/top_rated",
        options
    );
    return response.data.results;
};
export const getThrillerMovies=async ()=>{
    const response=await axios.get(
        "https://api.themoviedb.org/3/discover/movie?with_genres=53",
        options
    );
    return response.data.results;
};

export const getIndianMovies=async ()=>{
    const response=await axios.get(
        "https://api.themoviedb.org/3/discover/movie?with_origin_country=IN",
        options
    );
    return response.data.results;
};

export const getActionMovies = async () => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/discover/movie?with_genres=28",
    options
  );

  return response.data.results;
};


export const getMoviesByGenre = async (genreId) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}`,
      options
    );

    return response.data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
};