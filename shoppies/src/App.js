import React, { useState, useEffect } from "react";
import Search from './components/addSearch';
import movies from "./omdb";
import DisplayMovie from './components/displayMovies';

// const search = ["armageddon", "back to the future", "dark knight", "edge of tomorrow", "fight club", "godfather", "hotel rwanda", "ice age", "jurassic park", "kill the messenger", "life of pi", "matrix", "ocean's eleven", "pulp fiction", "quantum of solace", "raging bull", "the sandlot", "titanic", "v for vendetta", "wizard of oz", "malcolm x", "yesterday", "zoolander", "1917", "13 going on 30"];

function App() {

  // const [search, setSearch] = useState("");
  const [poster, setPoster] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");

  useEffect(() => {

    const random1 = Math.floor(Math.random() * 120);
    const random2 = Math.floor(Math.random() * 120);
    const random3 = Math.floor(Math.random() * 120);
    const random4 = Math.floor(Math.random() * 120);
    const random5 = Math.floor(Math.random() * 120);
    const random6 = Math.floor(Math.random() * 120);
    const random7 = Math.floor(Math.random() * 120);
    const random8 = Math.floor(Math.random() * 120);
    const random9 = Math.floor(Math.random() * 120);

    movies.getMovies().then((response) => {
      console.log("get movies", response);
      setMovieList([...movieList, 
        response[random1].data.Search[0],
        response[random2].data.Search[0],
        response[random3].data.Search[0],
        response[random4].data.Search[0],
        response[random5].data.Search[0],
        response[random6].data.Search[0],
        response[random7].data.Search[0],
        // response[random8].data.Search[0],
        response[random9].data.Search[0]
      ]);
      setPoster(response[random1].data.Search[0].Poster);
      setTitle(response[random1].data.Search[0].Title);
      setYear(response[random1].data.Search[0].Year);



    })

    console.log(movieList);


  }, []);

  return (
    <div className="App">
      <h1 className="mainTitle">The Shoppies</h1>
      <div className="section">
        <h1>Shoppie Nominees</h1>
      </div>
      <div className="joinSection">
        <div className="section">
          <h1>Shoppie Search</h1>
          <Search />
          <DisplayMovie src={poster} title={title} year={year}/>
        </div>
        <div className="section suggestions"> 
          <h1>Shoppie Suggestions</h1>  
          <div className = "movieSuggestions">
            {movieList.map((item, index) => {
              return (
                <div className="spot" key={index}> 
                  <img className="searchIcon" src={item.Poster} alt={item.Title} /> 
                  <h3>{item.Title}</h3>
                  <h4>{item.Year}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
