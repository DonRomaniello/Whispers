const express = require('express')
const app = express()
const port = 3000
const path = require('path');
require('dotenv').config()
const { db, User, Answer, Offer } = require('./client/database')

app.use(express.json());

app.use(express.static('public'));

app.get('/api/users', async(req, res, next) => {
  try {
    const users = await User.findAll()
    console.log(users)
    res.send(users)
  } catch(err){
    next(err)
  }
})

app.post('/api/offers', async(req, res, next) => {
  try {
    console.log("Reading:", req.body)
    const offer = await Offer.create(req.body)
    res.send(offer)
  } catch (err){
    next(err)
  }
})

app.get('/api/offers', async(req, res, next) => {
  try {
    const existingOffers = await Offer.findAll({attributes: ['token']})
    res.send(existingOffers)
  } catch (err) {
    next(err)
  }
})

app.get('/api/answers', async(req, res, next) => {
  try {
    const answers = await Answer.findAll()
    res.send(answers)
  } catch (err) {
    next(err)
  }
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
