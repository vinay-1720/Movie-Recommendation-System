import Navbar from "../../components/Navbar";
import HeroBanner from "../../components/HeroBanner";
import MovieRow from "../../components/MovieRow";

import { useState,useEffect } from "react";
import {
  getTrendingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getThrillerMovies,
  getIndianMovies,
} from "../../services/tmdbApi";



const Home=()=>{
    const [heroMovie, setHeroMovie] = useState(null);
    const [trending,setTrending]=useState([]);
    const [popular,setPopular]=useState([]);
    const [topRated,setTopRated]=useState([]);
    const [thriller,setThriller]=useState([]);
    const [indian,setIndian]=useState([]);

    useEffect(()=>{
        const fetchData=async ()=>{
            const trendingMovies = await getTrendingMovies();

            setTrending(trendingMovies);
            setPopular(await getPopularMovies());
            setTopRated(await getTopRatedMovies());
            setThriller(await getThrillerMovies());
            setIndian(await getIndianMovies());


            const randomMovie=trendingMovies[Math.floor(Math.random()*trendingMovies.length)];
            setHeroMovie(randomMovie);
        };
        fetchData();
    },[]);

    return (
        <>
        <Navbar />
        <HeroBanner movie={heroMovie}/>
        

        <MovieRow title="Trending Movies" movies={trending}/>
        <MovieRow title="Popular Movies" movies={popular}/>
        <MovieRow title="Top Rated Movies" movies={topRated}/>
        <MovieRow title="Thriller Movies" movies={thriller}/>
        <MovieRow title="The Great Indian Cinemas" movies={indian}/>
        </>
    );
};

export default Home;