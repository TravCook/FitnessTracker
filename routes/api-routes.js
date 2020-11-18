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

})

app.put("/api/workouts/:id", (req, res) => {

})

app.get("/api/workouts/range", (req,res) => {

})

module.exports = (app)