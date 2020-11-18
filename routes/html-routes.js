const db = require('../models')
const path = require('path');
const express = require('express')
const app = express()

app.get("/",(req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"))
})

app.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"))
})

app.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"))
})

module.exports = (app)