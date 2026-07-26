import Navbar from "../../Components/Navbar";
import HeroBanner from "../../components/HeroBanner";
import MovieRow from "../../components/MovieRow";


const Home=()=>{
    return (
        <>
        <Navbar />
        <HeroBanner />

        <MovieRow title="Trending Movies"/>
        <MovieRow title="Popular Movies"/>
        <MovieRow title="Top Rated Movies"/>


        </>
    );
};

export default Home;