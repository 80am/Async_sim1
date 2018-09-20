require('dotenv').config()
const express = require('express')
// const axios = require('axios')
// const massive = require('massive')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))


const SERVER_PORT = 3333


app.listen(SERVER_PORT, () => {
    console.log(`Mr Smith lives on ${SERVER_PORT}`)
})