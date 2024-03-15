//criando uma instância do modulo express
const express = require('express')
//criando nossa aplicação
const app = express()

//definindo os caminhos da aplicação
app.get('/', (req, res) => {
  res.send('Olá')
})

app.get('/hello', (req, res) => {
  res.send('Hello World')
})

app.get('/nome', (req, res) => {
  res.send('Guilherme Vaz')
})

app.get('/exercicio1', (req, res) => {
    const nota1 = 10
    const nota2 = 8
    const media = (nota1+nota2) / 2
  res.send('Media: ' + media)
})

app.get('/teste', (req, res) => {
    res.send('Teste get')
  })

app.post('/teste', (req, res) => {
    res.send('Teste post')
  })

//executando a aplicação na porta definida
app.listen(3000, () => {
  console.log(`Api iniciada! rodando em http://localhost:3000`)
})