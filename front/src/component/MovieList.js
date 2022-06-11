import React from 'react';
import '../styles/movie.css';
import '../styles/custom.css';
import { useNavigate } from 'react-router-dom';

const MovieList = (props) => {
  const navigate = useNavigate();

 const moviedetail = (id)=>{
  navigate(`/movie/${id}`,{state:{id:id}});
 }
  return (
    <>
      <h1 className="mt-2 mb-2 main-heding">Movies</h1>
      <div className="container-fluid">
        <div className="row">
          {props.movieList && props.movieList.length
            ? props.movieList.map((movie) => (
                <div className="col-md-3 col-sm-6 movie-col-css">
                  <div className="box">
                    <img src={movie.Mimage} alt="" />
                    <div className="box-content">
                      <div className="overlay-img">
                        <img src={movie.Mimage} alt="" />
                      </div>
                      <div className="inner-content">
                        <h3 className="title">{movie.Mtitle}</h3>
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={(e) => moviedetail(movie._id)}
                        >
                          movie Profile
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>
    </>
  )
}

export default MovieList