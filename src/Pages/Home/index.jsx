import Navbar from "../../Components/Navbar";
import HeroBanner from "../../components/HeroBanner";
import MovieRow from "../../components/MovieRow";
import SearchBar from "../../Components/Searchbar";


const Home=()=>{
    return (
        <>
        <Navbar />
        <SearchBar />
        <HeroBanner />
        

        <MovieRow title="Trending Movies"/>
        <MovieRow title="Popular Movies"/>
        <MovieRow title="Top Rated Movies"/>
        <MovieRow title="Thriller Movies"/>
        <MovieRow title="The Great Indian Cinemas"/>


        </>
    );
};

export default Home;