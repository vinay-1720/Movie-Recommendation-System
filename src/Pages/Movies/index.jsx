import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";

import MovieRow from "../../components/MovieRow";
import "./index.css";
import {
  getTrendingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getThrillerMovies,
  getActionMovies,
  getIndianMovies,
  getMoviesByGenre,
} from "../../services/tmdbApi";


const Movies = () => {
  const [trending, setTrending] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [action, setAction] = useState([]);
  const [thriller, setThriller] = useState([]);
  const [indian, setIndian] = useState([]);
  const [comedy, setComedy] = useState([]);

  const [drama, setDrama] = useState([]);
  const [horror, setHorror] = useState([]);
  const [romance, setRomance] = useState([]);
  const [sciFi, setSciFi] = useState([]);
  const [animation, setAnimation] = useState([]);
  const [crime, setCrime] = useState([]);
  const [family, setFamily] = useState([]);
  const [Fantasy,setFantasy]=useState([]);
  const [Documentary,setDocumentary]=useState([]);
  const [War,setWar]=useState([]);
  const [Mystery,setMystery]=useState([]);





  useEffect(() => {
    const fetchData = async () => {
      setTrending(await getTrendingMovies());
      setPopular(await getPopularMovies());
      setTopRated(await getTopRatedMovies());
      setAction(await getActionMovies());
      setThriller(await getThrillerMovies());
      setIndian(await getIndianMovies());

      setDrama(await getMoviesByGenre(18));
      setHorror(await getMoviesByGenre(27));
      setRomance(await getMoviesByGenre(10749));
      setSciFi(await getMoviesByGenre(878));
      setAnimation(await getMoviesByGenre(16));
      setCrime(await getMoviesByGenre(80));
      setFamily(await getMoviesByGenre(10751));
      setFantasy(await getMoviesByGenre(14));
      setDocumentary(await getMoviesByGenre(99));
      setWar(await getMoviesByGenre(10752));
      setMystery(await getMoviesByGenre(9648));
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />

      <MovieRow title="Trending Movies" movies={trending} />
      <MovieRow title="Popular Movies" movies={popular} />
      <MovieRow title="Top Rated Movies" movies={topRated} />
      <MovieRow title="Action Movies" movies={action} />
      <MovieRow title="Thriller Movies" movies={thriller} />
      <MovieRow title="Great Indian Cinema" movies={indian} />

      <MovieRow title="Drama Movies" movies={drama} />
      <MovieRow title="Horror Movies" movies={horror} />
      <MovieRow title="Romance Movies" movies={romance} />
      <MovieRow title="Science Fiction" movies={sciFi} />
      <MovieRow title="Animation Movies" movies={animation} />
      <MovieRow title="Crime Movies" movies={crime} />
      <MovieRow title="Family Movies" movies={family} />
      <MovieRow title="Fantasy Movies" movies={Fantasy}/>
      <MovieRow title="Documentary Movies" movies={Documentary}/>
      <MovieRow title="War Movies" movies={War}/>
      <MovieRow title="Mystery Movies" movies={Mystery}/>
    </>
  );
};

export default Movies;