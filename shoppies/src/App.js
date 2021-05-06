import React, { useState, useEffect } from "react";
import movies from './omdb'

function App() {

  const [movieList, setMovieList] = useState([]);
  const [movieA, setMovieA] = useState([]);
  const [movieB, setMovieB] = useState([]);
  const [movieC, setMovieC] = useState([]);
  const [movieD, setMovieD] = useState([]);
  const [movieE, setMovieE] = useState([]);
  const [movieF, setMovieF] = useState([]);
  const [movieG, setMovieG] = useState([]);
  const [movieH, setMovieH] = useState([]);
  const [movieI, setMovieI] = useState([]);
  const [movieJ, setMovieJ] = useState([]);
  const [movieK, setMovieK] = useState([]);
  const [movieL, setMovieL] = useState([]);
  const [movieM, setMovieM] = useState([]);
  const [movieN, setMovieN] = useState([]);
  const [movieO, setMovieO] = useState([]);
  const [movieP, setMovieP] = useState([]);
  const [movieQ, setMovieQ] = useState([]);
  const [movieR, setMovieR] = useState([]);
  const [movieS, setMovieS] = useState([]);
  const [movieT, setMovieT] = useState([]);
  const [movieU, setMovieU] = useState([]);
  const [movieV, setMovieV] = useState([]);
  const [movieW, setMovieW] = useState([]);
  const [movieX, setMovieX] = useState([]);
  const [movieY, setMovieY] = useState([]);
  const [movieZ, setMovieZ] = useState([]);
  const [movieNo, setMovieNo] = useState([]);
  const [movieJuno, setMovieJuno] = useState([]);

  useEffect(() => {
    // movies.getMovies().then((response) => {
    //   console.log("movie list", response.data.Search);
    //   setMovieList(response.data.Search);
    // });

    movies.getA().then((response) => {
      setMovieA(response.data.Search[0]);
    });
    movies.getB().then((response) => {
      setMovieB(response.data.Search[0]);
    });
    movies.getC().then((response) => {
      setMovieC(response.data.Search[0]);
    });
    movies.getD().then((response) => {
      setMovieD(response.data.Search[0]);
    });
    movies.getE().then((response) => {
      setMovieE(response.data.Search[0]);
    });
    movies.getF().then((response) => {
      setMovieF(response.data.Search[0]);
    });
    movies.getG().then((response) => {
      setMovieG(response.data.Search[0]);
    });
    movies.getH().then((response) => {
      setMovieH(response.data.Search[0]);
    });
    movies.getI().then((response) => {
      setMovieI(response.data.Search[0]);
    });
    movies.getJ().then((response) => {
      setMovieJ(response.data.Search[0]);
    });
    movies.getK().then((response) => {
      setMovieK(response.data.Search[0]);
    });
    movies.getL().then((response) => {
      setMovieL(response.data.Search[0]);
    });
    movies.getM().then((response) => {
      setMovieM(response.data.Search[0]);
    });
    movies.getN().then((response) => {
      setMovieN(response.data.Search[0]);
    });
    movies.getO().then((response) => {
      setMovieO(response.data.Search[0]);
    });
    movies.getP().then((response) => {
      setMovieP(response.data.Search[0]);
    });
    movies.getQ().then((response) => {
      setMovieQ(response.data.Search[0]);
    });
    movies.getR().then((response) => {
      setMovieR(response.data.Search[0]);
    });
    movies.getS().then((response) => {
      setMovieS(response.data.Search[0]);
    });
    movies.getT().then((response) => {
      setMovieT(response.data.Search[0]);
    });
    movies.getU().then((response) => {
      setMovieU(response.data.Search[0]);
    });
    movies.getV().then((response) => {
      setMovieV(response.data.Search[0]);
    });
    movies.getW().then((response) => {
      setMovieW(response.data.Search[0]);
    });
    movies.getX().then((response) => {
      setMovieX(response.data.Search[0]);
    });
    movies.getY().then((response) => {
      setMovieY(response.data.Search[0]);
    });
    movies.getZ().then((response) => {
      setMovieZ(response.data.Search[0]);
    });
    movies.getNo().then((response) => {
      setMovieNo(response.data.Search[0]);
    });
    movies.getJuno().then((response) => {
      setMovieJuno(response.data.Search[0]);
    });


  }, []);

  return (
    <div className="App">
      <h1>The Shoppies</h1>
      <div className="movieSuggestions">
        <div className = "spot">        
          <img className="searchIcon" src={movieA.Poster} alt={movieA.Title} />
          <h3>{movieA.Title}</h3> 
        </div>
        <div className = "spot">        
          <img className="searchIcon" src={movieB.Poster} alt={movieB.Title} />
          <h3>{movieB.Title}</h3> 
        </div>
        <div className = "spot">        
          <img className="searchIcon" src={movieC.Poster} alt={movieC.Title} />
          <h3>{movieC.Title}</h3> 
        </div>
        <div className = "spot">        
          <img className="searchIcon" src={movieD.Poster} alt={movieD.Title} />
          <h3>{movieD.Title}</h3> 
        </div>
        <div className = "spot">        
          <img className="searchIcon" src={movieE.Poster} alt={movieE.Title} />
          <h3>{movieE.Title}</h3> 
        </div>
        <div className = "spot">        
          <img className="searchIcon" src={movieF.Poster} alt={movieF.Title} />
          <h3>{movieF.Title}</h3> 
        </div>
        <div className = "spot">        
          <img className="searchIcon" src={movieG.Poster} alt={movieG.Title} />
          <h3>{movieG.Title}</h3> 
        </div>
        <div className = "spot">        
          <img className="searchIcon" src={movieH.Poster} alt={movieH.Title} />
          <h3>{movieH.Title}</h3> 
        </div>
        <div className = "spot">        
          <img className="searchIcon" src={movieI.Poster} alt={movieI.Title} />
          <h3>{movieI.Title}</h3> 
        </div>
        <div className = "spot">        
          <img className="searchIcon" src={movieJ.Poster} alt={movieJ.Title} />
          <h3>{movieJ.Title}</h3> 
        </div>
        <div className = "spot">        
          <img className="searchIcon" src={movieK.Poster} alt={movieK.Title} />
          <h3>{movieK.Title}</h3> 
        </div>
        <div className = "spot">        
          <img className="searchIcon" src={movieL.Poster} alt={movieL.Title} />
          <h3>{movieL.Title}</h3> 
        </div>
        <div className = "spot">        
          <img className="searchIcon" src={movieM.Poster} alt={movieM.Title} />
          <h3>{movieM.Title}</h3> 
        </div>
        <div className = "spot">        
          <img className="searchIcon" src={movieN.Poster} alt={movieN.Title} />
          <h3>{movieN.Title}</h3> 
        </div>
        <div className = "spot">        
          <img className="searchIcon" src={movieO.Poster} alt={movieO.Title} />
          <h3>{movieO.Title}</h3> 
        </div>
        <div className = "spot">        
          <img className="searchIcon" src={movieP.Poster} alt={movieP.Title} />
          <h3>{movieP.Title}</h3> 
        </div>
        <div className = "spot">        
          <img className="searchIcon" src={movieQ.Poster} alt={movieQ.Title} />
          <h3>{movieQ.Title}</h3> 
        </div>
        <div className = "spot">        
          <img className="searchIcon" src={movieR.Poster} alt={movieR.Title} />
          <h3>{movieR.Title}</h3> 
        </div>
        <div className = "spot">        
          <img className="searchIcon" src={movieS.Poster} alt={movieS.Title} />
          <h3>{movieS.Title}</h3> 
        </div>
        <div className = "spot">        
          <img className="searchIcon" src={movieT.Poster} alt={movieT.Title} />
          <h3>{movieT.Title}</h3> 
        </div>
        <div className = "spot">        
          <img className="searchIcon" src={movieU.Poster} alt={movieU.Title} />
          <h3>{movieU.Title}</h3> 
        </div>
        <div className = "spot">        
          <img className="searchIcon" src={movieV.Poster} alt={movieV.Title} />
          <h3>{movieV.Title}</h3> 
        </div>
        <div className = "spot">        
          <img className="searchIcon" src={movieW.Poster} alt={movieW.Title} />
          <h3>{movieW.Title}</h3> 
        </div>
        <div className = "spot">        
          <img className="searchIcon" src={movieX.Poster} alt={movieX.Title} />
          <h3>{movieX.Title}</h3> 
        </div>
        <div className = "spot">        
          <img className="searchIcon" src={movieY.Poster} alt={movieY.Title} />
          <h3>{movieY.Title}</h3> 
        </div>
        <div className = "spot">        
          <img className="searchIcon" src={movieZ.Poster} alt={movieZ.Title} />
          <h3>{movieZ.Title}</h3> 
        </div>
        <div className = "spot">        
          <img className="searchIcon" src={movieNo.Poster} alt={movieNo.Title} />
          <h3>{movieNo.Title}</h3> 
        </div>
        <div className = "spot">        
          <img className="searchIcon" src={movieJuno.Poster} alt={movieJuno.Title} />
          <h3>{movieJuno.Title}</h3> 
        </div>
      </div>


      {/* {movieList.map((item, index) => {
        return <div key={index}> <img className="searchIcon" src={item.Poster} alt={item.Title} /> {item.Title}</div>;
      })} */}

        
    </div>
  );
}

export default App;
