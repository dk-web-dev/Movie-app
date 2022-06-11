const express = require("express");
const router = express.Router();

const Movie = require('.././model/MovieModel');

//ADD Movie API
router.post("/addmovie", async (req, res) => {
  const { Mtitle, Mtype, Mdesc, Myear, Mduration, Mrating, Mimage,Movielink } = req.body;
  Movie.findOne({ Mtitle: Mtitle }, (err, movie) => {
    if (movie) {
      res.status(400).json({
        errorMessage: `Movie Already Exist!`
      });
    } else {
      const movie = new Movie({
        Mtitle,
        Mtype,
        Mdesc,
        Myear,
        Mduration,
        Mrating,
        Mimage,
        Movielink
      });
      movie.save((err, data) => {
        if (err) {
          res.status(400).json({
            errorMessage: err
          });
        } else {
          res.status(200).json({
            title: "movie store  Successfully."
          });
        }
      });
    }
  });
});

//fetch all Movie list API
router.get("/movies", (req, res) => {
    Movie.find((err, movie) => {
      if (movie) {
        res.send(movie);
      }
      else {
          res.send("Movie list not found")
      }
    });
  });

//fetch Single Movie api
  router.get("/movie/:id",(req,res)=>{
    const {id} = req.params;
    Movie.find({_id:id},(err,movie)=>{
       if(movie){
          res.send(movie);
       }
       else{
         res.send("no Movie found for this ID");
       }
    })
  })

  module.exports = router;