require('dotenv').config()
const express = require('express')
// const axios = require('axios')
const massive = require('massive')
const bodyParser = require('body-parser')
const ctrl = require('./controller')
const connectionString= process.env.CONNECTION_STRING='postgres://ktyyzazrsjmgbd:8c1de560af4f49363d7e810c96e435c1f6a6357f258ad89af45c152b253f1306@ec2-54-83-50-145.compute-1.amazonaws.com:5432/d3vjac984q7len?ssl=true'

require('dotenv').config()

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

// app.get('/api/products', ctrl.getProducts)
app.post('/api/shelf/:id/bin/:bin', ctrl.addProducts)
app.get('/api/getbindata', ctrl.getBinData)
app.get('/api/shelf/:id/bin/:bin', ctrl.individualbindata)
app.put('/api/shelf/:id/bin/:bin', ctrl.editProduct)
app.put('/api/shelf/:id/bin/:bin', ctrl.deleteProduct)


const SERVER_PORT = 3333

massive(connectionString).then(connection => {
    app.set('db', connection)
    console.log("DB is connected")  
})


app.listen(SERVER_PORT, () => {
    console.log(`Mr Smith lives on ${SERVER_PORT}`)
})