import "./index.css";

const Navbar=()=>{
    return(
        <nav className="navbar">
            <div className="logo-container">
                <h1 className="logo">MovieFlix</h1>
            </div>

            <ul className="nav-links">
                <li>Home</li>
                <li>Movies</li>
                <li>Trending</li>
                <li>Watchlist</li>
                <li>Search</li>
            </ul>
        </nav>
    );
};

export default Navbar;