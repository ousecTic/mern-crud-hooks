const express = require("express");
const app = express();
const PORT = 5000;
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

//this is the middleware that is going to be use

app.use(cors());

//this is going to give us access to req.body

app.use(express.json());

//connect to the database

const uri = process.env.ATLAS_URI;

mongoose.connect(
  uri,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  err => {
    if (err) {
      console.log(err);
    }

    console.log("DB is connected");
  }
);
//require the routes
const exerciseRoute = require("./routes/exercises");
const userRoute = require("./routes/users");

//these are the routes that we are going to be using

app.use("/exercise", exerciseRoute);
app.use("/users", userRoute);

app.listen(PORT, () => {
  console.log("server has started");
});
