require("dotenv").config(); // access .env file
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.disable("x-powered-by");
app.use(express.json());

//connect to mongodb 
const db = require('./src/config/db.config');

//access  the routing
const movieRouter = require('./src/routes/MovieRoutes');
app.use(movieRouter);

// localhost:9000
app.get("/", (req, res) => {
  res.status(200).json({
   
    title: "API's running fine"
  });
});

//store movie to database collection 

app.listen(process.env.PORT, () => {
  console.log(`Movie app listening on port ${process.env.PORT}`);
});
