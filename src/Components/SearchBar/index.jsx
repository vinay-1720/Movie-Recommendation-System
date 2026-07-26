import "./index.css";

const SearchBar=()=>{
    return (
        <div className="search-container">
            <input type="text"
            placeholder="Search Movies"
            className="search-input"
        />
        </div>
    );
};

export default SearchBar;