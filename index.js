require('dotenv').config()
const express = require('express')
const cors = require('cors');
const router = require('./routes')

const mongoose = require("mongoose");
const connectionStatus = mongoose.connection;


mongoose.connect(`mongodb://${process.env.MONGO_URL}/${process.env.MONGO_DB_NAME}`, (err) => {
  err ? console.error('DB connection error: ', err) : console.log('Connected to DB')
})

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.use('/static', express.static(__dirname + '/public'))

app.use('/api', router)
if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(__dirname + '/client/build'))
  app.get('*', (req, res) => {
    res.sendFile(__dirname + '/client/build/index.html')
  })
}

app.listen(PORT, (err) => {
  err && console.error(`Server port error: ${err}`)
  console.log(`Аpp listening on port ${PORT}`)
})