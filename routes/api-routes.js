const db = require('../models')
const path = require('path');
const express = require('express')
const app = express()

app.get("/api/workouts",(req, res) => {
  db.Workout.find({}, (err, data) => {
    if (err) throw err;
    res.json(data)
  })
})

app.post("/api/workouts", (req, res) => {
  db.Workout.create({}, (err, data) => {
    if (err) throw err;
    res.json(data)
  })
})

app.put("/api/workouts/:id", (req, res) => {
  db.Workout.findOneAndUpdate(
    {_id: req.params.id},
    { $push: {exercises: req.body}},
    {new: true}, (err, data) => {
      if(err) throw err;
      res.json(data)
    }
  )
})

app.get("/api/workouts/range", (req,res) => {
 db.Workout.find({}, (err, data) => {
   if(err) throw err;
   res.json(data)
 })
})

module.exports = (app)