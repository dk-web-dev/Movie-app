import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { Routes, Route } from "react-router-dom";

import Navbar from './component/Navbar';
import MovieList from './component/MovieList';
import Singlemovie from './component/Singlemovie';
import AddFavourite from './component/AddFavourite';
const App=()=> {
  const [movieList,setMovieList]= useState([]);
  
  useEffect(()=>{
    axios.get('http://localhost:9000/movies')
          .then((res)=>{
            setMovieList(res.data)
          })
          .catch((err)=>{
              console.log(err);
          })
 },[]);
  
  return (
    <>
     <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<MovieList movieList={movieList} />}></Route>
        <Route exact path="/movie/:id" element={<Singlemovie AddFavourite={AddFavourite} />}></Route>
        </Routes>
    </div>
    </>
   
  );
}

export default App;
