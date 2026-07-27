import Navbar from "../../Components/Navbar";
import HeroBanner from "../../components/HeroBanner";
import MovieRow from "../../components/MovieRow";
import SearchBar from "../../Components/Searchbar";
import { useState,useEffect } from "react";
import {
  getTrendingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getThrillerMovies,
  getIndianMovies,
} from "../../services/tmdbApi";



const Home=()=>{
    const [trending,setTrending]=useState([]);
    const [popular,setPopular]=useState([]);
    const [topRated,setTopRated]=useState([]);
    const [thriller,setThriller]=useState([]);
    const [indian,setIndian]=useState([]);

    useEffect(()=>{
        const fetchData=async ()=>{
            setTrending(await getTrendingMovies());
            setPopular(await getPopularMovies());
            setTopRated(await getTopRatedMovies());
            setThriller(await getThrillerMovies());
            setIndian(await getIndianMovies());
        };
        fetchData();
    },[]);

    return (
        <>
        <Navbar />
        <HeroBanner />
        <SearchBar />

        <MovieRow title="Trending Movies" movies={trending}/>
        <MovieRow title="Popular Movies" movies={popular}/>
        <MovieRow title="Top Rated Movies" movies={topRated}/>
        <MovieRow title="Thriller Movies" movies={thriller}/>
        <MovieRow title="The Great Indian Cinemas" movies={indian}/>
        </>
    );
};

export default Home;