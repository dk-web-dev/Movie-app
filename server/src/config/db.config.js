require("dotenv").config(); // access .env file
const mongoose = require("mongoose");

//connect with database
mongoose.connect(process.env.DB_CONNECT, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on("error", (err) => {
  console.log("mongoose is not connected");
});

mongoose.connection.on("connected", (err, res) => {
  console.log("mongoose is connected");
});
