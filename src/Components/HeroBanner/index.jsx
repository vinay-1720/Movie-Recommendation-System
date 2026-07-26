import "./index.css";
import poster from "../../assets/spiderman.jpeg";

const HeroBanner=()=>{
    return (
        <div className="hero-banner" 
        style={{
            backgroundImage:`url(${poster})`,
        }}>
            <div className="hero-content">
                <h1 className="movie-title">SpiderMan Brand New Day</h1>

                <button className="watch-btn">
                    Watch Trailer
                </button>
            </div>
        </div>
    );
};

export default HeroBanner;