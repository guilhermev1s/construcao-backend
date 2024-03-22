const express = require('express')
const app = express()

//Middleware -> INtermediário
app.use((req, res, next) => {
    console.log('passou no intermediário')
    console.log('Data: ' + Date.now())
    next()
})

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World')
})


app.post('/aluno', (req, res) => {
    console.log(req.body)

    res.send('ok')
})


app.listen(3000, () => {
    console.log(`Api iniciada! rodando em http://localhost:3000`)
})