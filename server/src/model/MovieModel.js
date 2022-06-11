var mongoose = require("mongoose");

var Schema = mongoose.Schema;

const movieSchema = new Schema({
  Mtitle: { type: String, required: true },
  Mtype: { type: String, required: true },
  Mdesc: { type: String, required: true },
  Myear: { type: Number, required: true },
  Mduration: { type: String, required: true },
  Mrating: { type: String, required: true },
  Mimage: { type: String, required: true },
  Movielink:{type:String,required:true}
});

const Movie = new mongoose.model("movie", movieSchema);

module.exports = Movie;
