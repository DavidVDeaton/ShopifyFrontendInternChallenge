import React, { useState, useEffect } from "react";
import Search from './components/addSearch';
import movies from "./API/omdb";
import DisplayMovie from './components/displayMovies';
import Nominee from './components/Nominees';
import Banner from './components/banner';

function App() {
  const [banner, setBanner] = useState(false);
  const [poster, setPoster] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [nomineeSRC1, setNomineeSRC1] = useState("");
  const [nomineeTitle1, setNomineeTitle1] = useState("");
  const [nomineeSRC2, setNomineeSRC2] = useState("");
  const [nomineeTitle2, setNomineeTitle2] = useState("");
  const [nomineeSRC3, setNomineeSRC3] = useState("");
  const [nomineeTitle3, setNomineeTitle3] = useState("");
  const [nomineeSRC4, setNomineeSRC4] = useState("");
  const [nomineeTitle4, setNomineeTitle4] = useState("");
  const [nomineeSRC5, setNomineeSRC5] = useState("");
  const [nomineeTitle5, setNomineeTitle5] = useState("");

  useEffect(() => {

    const random1 = Math.floor(Math.random() * 150);
    const random2 = Math.floor(Math.random() * 150);
    const random3 = Math.floor(Math.random() * 150);
    const random4 = Math.floor(Math.random() * 150);
    const random5 = Math.floor(Math.random() * 150);
    const random6 = Math.floor(Math.random() * 150);
    const random7 = Math.floor(Math.random() * 150);
    const random8 = Math.floor(Math.random() * 150);
    const random9 = Math.floor(Math.random() * 150);

    movies.getMovies().then((response) => {
      setMovieList([...movieList, 
        response[random1].data.Search[0],
        response[random2].data.Search[0],
        response[random3].data.Search[0],
        response[random4].data.Search[0],
        response[random5].data.Search[0],
        response[random6].data.Search[0],
        response[random7].data.Search[0],
        response[random8].data.Search[0]
      ]);

      setPoster(response[random9].data.Search[0].Poster);
      setTitle(response[random9].data.Search[0].Title);
      setYear(response[random9].data.Search[0].Year);

    })

  }, []);

  const searchMovie = () => {
    movies.movieSearch().then((response) => {
      if (response.data.Search === undefined) {
        alert("No result found, try a different search.")
        return
      }
      setPoster(response.data.Search[0].Poster);
      setTitle(response.data.Search[0].Title);
      setYear(response.data.Search[0].Year);
    }
    );
  }

  const addNominee = (e) => {
    e.preventDefault();

    if ((e.target.src === nomineeSRC1) || (e.target.src === nomineeSRC2) || (e.target.src === nomineeSRC3) || (e.target.src === nomineeSRC4) || (e.target.src === nomineeSRC5)) {
      alert('You already nominated this movie, pick another one.')
      return
    }

    if ((nomineeSRC1 !== "") && (nomineeSRC2 !== "") && (nomineeSRC3 !== "") && (nomineeSRC4 !== "")) {
      setBanner(true);
    }
    else if ((nomineeSRC5 !== "") && (nomineeSRC2 !== "") && (nomineeSRC3 !== "") && (nomineeSRC4 !== "")) {
      setBanner(true);
    }
    else if ((nomineeSRC1 !== "") && (nomineeSRC5 !== "") && (nomineeSRC3 !== "") && (nomineeSRC4 !== "")) {
      setBanner(true);
    }
    else if ((nomineeSRC1 !== "") && (nomineeSRC2 !== "") && (nomineeSRC5 !== "") && (nomineeSRC4 !== "")) {
      setBanner(true);
    }
    else if ((nomineeSRC1 !== "") && (nomineeSRC2 !== "") && (nomineeSRC3 !== "") && (nomineeSRC5 !== "")) {
      setBanner(true);
    }

    if (nomineeSRC1 === "") {
      setNomineeSRC1(e.target.src);
      setNomineeTitle1(e.target.alt);
    }
    else if (nomineeSRC2 === "") {
      setNomineeSRC2(e.target.src);
      setNomineeTitle2(e.target.alt);
    }
    else if (nomineeSRC3 === "") {
      setNomineeSRC3(e.target.src);
      setNomineeTitle3(e.target.alt);
    }
    else if (nomineeSRC4 === "") {
      setNomineeSRC4(e.target.src);
      setNomineeTitle4(e.target.alt);
    }
    else if (nomineeSRC5 === "") {
      setNomineeSRC5(e.target.src);
      setNomineeTitle5(e.target.alt);
    }
    else {
      alert('Nominations Full, double click nomination to remove.')
      return
    }
  }

  const removeNominee1 = (e) => {
    e.preventDefault();
    setNomineeSRC1("");
    setNomineeTitle1("");
    setBanner(false);
  }

  const removeNominee2 = (e) => {
    e.preventDefault();
    setNomineeSRC2("");
    setNomineeTitle2("");
    setBanner(false);
  }

  const removeNominee3 = (e) => {
    e.preventDefault();
    setNomineeSRC3("");
    setNomineeTitle3("");
    setBanner(false);
  }

  const removeNominee4 = (e) => {
    e.preventDefault();
    setNomineeSRC4("");
    setNomineeTitle4("");
    setBanner(false);
  }

  const removeNominee5 = (e) => {
    e.preventDefault();
    setNomineeSRC5("");
    setNomineeTitle5("");
    setBanner(false);
  }

  return (
    <div className="App">
      <h1 className="mainTitle">The Shoppies</h1>
      <div className="section">
        <h1>Shoppies Nominees</h1>
        <div className="nomineeRow">
          <Nominee onDoubleClick={removeNominee1} src={nomineeSRC1} title={nomineeTitle1} />
          <Nominee onDoubleClick={removeNominee2} src={nomineeSRC2} title={nomineeTitle2} />
          <Nominee onDoubleClick={removeNominee3} src={nomineeSRC3} title={nomineeTitle3} />
          <Nominee onDoubleClick={removeNominee4} src={nomineeSRC4} title={nomineeTitle4} />
          <Nominee onDoubleClick={removeNominee5} src={nomineeSRC5} title={nomineeTitle5} />
        </div>
        <Banner showBanner={banner} />
      </div>
      <div className="joinSection">
        <div className="section">
          <h1>Shoppies Search</h1>
          <Search onSearch={searchMovie} />
          <DisplayMovie onClick={addNominee} src={poster} alt={title} value={year}/>
        </div>
        <div className="section suggestions"> 
          <h1>Shoppies Suggestions</h1>  
          <div className = "movieSuggestions">
            {movieList.map((item, index) => {
              return (
                <div className="spot" key={index}> 
                  <img onClick={addNominee} className="searchIcon" src={item.Poster} alt={item.Title} value={item.Year} /> 
                  <h3>{item.Title}</h3>
                  <h4>({item.Year})</h4>
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
