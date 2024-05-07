const express = require('express')
const DBConnection = require('./DB/connection')
const routes = require('./routes/routes')

const app = express()
const PORT = 3000

app.use(express.json())

app.use(routes)


app.listen(PORT, () => {
    DBConnection()
    console.log(`Api rodando na porta ${PORT}`)
})