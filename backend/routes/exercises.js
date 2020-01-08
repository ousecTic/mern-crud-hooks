//this is going to be the crud application for exercise
const express = require("express");
const router = express.Router();
const Exercise = require("../models/exercise.model");

//create exercise

router.post("/create-exercise", (req, res) => {
  const { username, description, duration, date } = req.body;
  let exercise = new Exercise({
    username,
    description,
    duration,
    date
  });

  exercise
    .save()
    .then(() => res.json("Exercise added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

//get exercise

router.get("/all-exercise", (req, res) => {
  Exercise.find()
    .then(data => res.json(data))
    .catch(err => console.log(err));
});

//get a specific exercise

router.get("/:exercise", (req, res) => {
  Exercise.findById(req.params.exercise)
    .then(data => res.json(data))
    .catch(err => console.log(err));
});

//update a specific exercise

router.put("/:exercise", async (req, res) => {
  try {
    let exercise = await Exercise.findByIdAndUpdate(
      req.params.exercise,
      req.body
    );

    await exercise.save();

    res.json("exercise updated!");
  } catch (err) {
    console.log(err);
  }
});

router.delete("/:exercise", async (req, res) => {
  try {
    await Exercise.findByIdAndDelete(req.params.exercise);
    res.json("exercise was deleted!");
  } catch (err) {}
});

module.exports = router;
