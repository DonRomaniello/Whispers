const express = require('express')
const app = express()
const port = 3000
const path = require('path');
require('dotenv').config()
const { db, User } = require('./client/database')

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

app.post('/api/users', async(req, res, next) => {
  try {
    console.log("Reading.")
    const connectionToken = await User.create(req.body)
    console.log(connectionToken)
    res.send(connectionToken)
  } catch (err){
    next(err)
  }
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
