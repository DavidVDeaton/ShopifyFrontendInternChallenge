import React, { useState, useEffect } from "react";
// import Search from './components/addSearch';
import movies from "./omdb";
import DisplayMovie from './components/displayMovies';

// const search = ["armageddon", "back to the future", "dark knight", "edge of tomorrow", "fight club", "godfather", "hotel rwanda", "ice age", "jurassic park", "kill the messenger", "life of pi", "matrix", "ocean's eleven", "pulp fiction", "quantum of solace", "raging bull", "the sandlot", "titanic", "v for vendetta", "wizard of oz", "malcolm x", "yesterday", "zoolander", "1917", "13 going on 30"];

function App() {

  // const [search, setSearch] = useState("");
  // const [poster, setPoster] = useState("");
  const [movieList, setMovieList] = useState([]);
  // const [title, setTitle] = useState("");
  // const [year, setYear] = useState("");

  // useEffect(() => {

    // const random1 = Math.floor(Math.random() * 12);

    // movies.getMovies().then((response) => {
    //   console.log("get movies", response);
    //   setMovieList([...movieList, 
    //     response[random1].data.Search[0],
    //     response[(random1+12)].data.Search[0],
    //     response[(random1+24)].data.Search[0],
    //     response[(random1+36)].data.Search[0],
    //     response[(random1+48)].data.Search[0],
    //     response[(random1+60)].data.Search[0],
    //     response[(random1+72)].data.Search[0],
    //     response[(random1+84)].data.Search[0],
    //     response[(random1+96)].data.Search[0],
    //     response[(random1+108)].data.Search[0]
    //   ]);



    // })

    // console.log(movieList);


  // }, []);

  return (
    <div className="App">
      <h1>The Shoppies</h1>
      {/* <Search onAdd={setSearch} /> */}
      <div className = "movieSuggestions">
      {/* <DisplayMovie src={poster} title={title} year={year}/>         */}
      {/* {movieList.map((item, index) => {
        return (
          <div className="spot" key={index}> 
            <img className="searchIcon" src={item.Poster} alt={item.Title} /> 
            <h3>{item.Title}</h3>
            <h4>{item.Year}</h4>
          </div>
        );
      })} */}
      </div>

    </div>
  );
}

export default App;
