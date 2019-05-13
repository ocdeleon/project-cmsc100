const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
// const cookieParser = require('cookie-parser')

//set up mongoose and models
mongoose.connect('mongodb://localhost:27017/Project', { useNewUrlParser: true })
require('./models/index')

//initialize server
const app = express()

//CORS
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.setHeader('Access-Control-Allow-Methods' ,'GET,POST,OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers,Access-Control-Allow-Methods,Origin,Accept,Content-Type')
    res.setHeader('Access-Control-Allow-Credentials', 'true')
    next()
  })



//set up bodyParser
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

//cookie parser for auth
// app.use(cookieParser())

//require router
require('./router')(app)

app.listen(3001, (err) => { 
    if (!err) { 
        console.log('Server listening at port 3001') 
    } 
})