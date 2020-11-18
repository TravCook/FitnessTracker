const db = require('../models')
const router = require('express').Router();

router.get("/api/workouts",(req, res) => {
  db.Workout.find({}, (err, data) => {
    if (err) throw err;
    res.json(data)
    console.log(data)
  })
})

router.post("/api/workouts", (req, res) => {
  let workout = req.body
  console.log(workout)
  db.Workout.create({workout}, (err, data) => {
    if (err) throw err;
    res.json(data)
  })
})

router.put("/api/workouts/:id", (req, res) => {
  db.Workout.findOneAndUpdate(
    {_id: req.params.id},
    { $push: {exercises: req.body}},
    {new: true}, (err, data) => {
      if(err) throw err;
      res.json(data)
    }
  )
})

router.get("/api/workouts/range", (req,res) => {
 db.Workout.find({}, (err, data) => {
   if(err) throw err;
   res.json(data)
 })
 .limit(7)
})

module.exports = router