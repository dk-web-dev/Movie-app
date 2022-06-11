import React, { useEffect, useState } from "react";
import axios from "axios";
import '../styles/singlemovie.css';
import {useLocation} from 'react-router-dom'
import MovieTrailer from "./MovieTrailer";

const Singlemovie = (props) => {
  const [singleMovie, setSingleMovie] = useState([]);
  const [movieTrailer,setMovieTraielr] = useState(false);
  const location = useLocation();
  const id = location.state.id;
  const AddFavourite = props.AddFavourite;
  useEffect(()=>{
    axios.get(`http://localhost:9000/movie/${id}`)
          .then((res)=>{
            setSingleMovie(res.data)
        })
        .catch((err)=>{
            console.log(err);
        })
},[])
  return (
    <>
        {singleMovie && singleMovie.length
          ? singleMovie.map((movie) => (
              <>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12 mb-3 movietitle-css">
                    <h3 className="mt-3 mb-3 ml-3 ">{movie.Mtitle}</h3>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6 movie-col">
                    <img className="singleMovie" src={movie.Mimage} alt="" />
                  </div>
                  <div className="col-6">
                    <h5 className="mb-4">{movie.Myear}</h5>
                    <h5 className="mb-4">{movie.Mduration} mins</h5>
                    <h5 className="mb-4">{movie.Mrating}/10</h5>
                    <AddFavourite />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <span className="mt-3 mb-3">
                      <h5>Overview:</h5>
                      {movie.Mdesc}</span>
                  </div>
                </div>
                 <h4 className="mt-3">TRAILERS</h4><hr />
                <div className="row">
                  <div className="col-12">
                  <div className="movietrailer">
                   {movieTrailer ? <MovieTrailer src={movie.Movielink} />:null} 
                  <div className="mt-3">
                  <button className="btn btn-secondary playbutton" onClick={()=>setMovieTraielr(!movieTrailer)}>
                  <i class="bi-play"></i>Play Trailer 1</button>
                  </div>
                  <div className="mt-3">
                  <button className="btn btn-secondary playbutton" onClick={()=>setMovieTraielr(!movieTrailer)}>
                  <i class="bi-play"></i>Play Trailer 2</button>
                  </div>
                  </div>
                  </div>
                </div>
                </div>
              </>
            ))
          : null}
    </>
  );
};

export default Singlemovie;
