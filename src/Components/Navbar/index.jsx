import "./index.css";
import {Link,useNavigate} from "react-router-dom";
import { useState } from "react";


const Navbar=()=>{

    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const handleSearch=()=>{
      if(searchTerm.trim()!==""){
        navigate(`/search?q=${searchTerm}`);
        setSearchTerm("");
      }
    };

  return (
    <nav className="navbar">
      <h1 className="logo">MovieHub</h1>

      <div className="nav-links">
        <Link to="/" className="nav-link">
          Home
        </Link>

        <Link to="/movies" className="nav-link">
          Movies
        </Link>

        <Link to="/wishlist" className="nav-link">
          Wishlist
        </Link>
      </div>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />

        <button
          onClick={handleSearch}
          className="search-btn"
        >
          Search
        </button>
      </div>
    </nav>
  );
};

export default Navbar;