const express = require('express')
const app = express()

// middlewares
app.use(express.json())

// rotas
const tarefas = require('./routes/tarefas')
app.use(tarefas)


app.listen(3000, () => {
    console.log("Aplicação rodando em http://localhost:3000")
})