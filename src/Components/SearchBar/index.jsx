import "./index.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const SearchBar=()=>{
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const handleSearch=()=>{
        if(searchTerm.trim()!=""){
            navigate(`/search?q=${searchTerm}`);
        }
    };

    return (
        <div className="search-container">
            <input type="text"
            placeholder="Search Movies ..."
            value={searchTerm}
            onChange={(e)=>setSearchTerm(e.target.value)}
            className="search-input"
        />
        <button 
            onClick={handleSearch}
            className="search-btn"
            >
                Search
            </button>



        </div>
    );
};

export default SearchBar;