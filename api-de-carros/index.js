const express = require('express')
const app = express()

app.use(express.json())

const carrosRouter = require('./routes/carros')
app.use(carrosRouter)

app.listen(3000, () => {
    console.log('aplicção rodando em http://localhost:3000')
})