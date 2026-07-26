import MovieCard from "../MovieCard";
import "./index.css";

const MovieRow=({title})=>{
    const movies=[
        {
            id:1,
            title:"spider-man",
            poster: "https://picsum.photos/200/300?1",
        },
        {
            id: 2,
            title: "Batman",
            poster: "https://picsum.photos/200/300?2",
        },
            {
            id: 3,
            title: "Interstellar",
            poster: "https://picsum.photos/200/300?3",
        },
        {
            id: 4,
            title: "Avatar",
            poster: "https://picsum.photos/200/300?4",
        },
        {
            id: 4,
            title: "Avatar",
            poster: "https://picsum.photos/200/300?4",
        },
        {
            id: 4,
            title: "Avatar",
            poster: "https://picsum.photos/200/300?4",
        },
        {
            id: 4,
            title: "Avatar",
            poster: "https://picsum.photos/200/300?4",
        },
             
        {
            id: 4,
            title: "Avatar",
            poster: "https://picsum.photos/200/300?4",
        },
    ];
    return (
        <div className="movie-row">
            <h2>{title}</h2>
            <div className="movies-container">
                {movies.map((movie)=>(
                    <MovieCard 
                        key={movie.id}
                        title={movie.title}
                        poster={movie.poster}
                    />
                
                ))}
            </div>
        </div>
    );
};

export default MovieRow;