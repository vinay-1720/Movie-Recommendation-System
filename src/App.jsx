import { BrowserRouter,Routes,Route } from "react-router-dom";
import Wishlist from "./Pages/Wishlist/index.jsx";
import Home from "./Pages/Home/index.jsx"
import Movies from "./Pages/Movies/index.jsx";
import Search from "./Pages/Search/index.jsx";




function App(){
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/movies" element={<Movies/>}/>
      <Route path="/search" element={<Search />} />
      <Route path="/wishlist" element={<Wishlist />} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;