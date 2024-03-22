const express = require('express')
const app = express()

app.use(express.json())

//path params -> lista 2 -> exercicio 1
app.get('/exercicio1/:qtdMinima/:qtdMaxima', (req, res) => {
  const QuantidadeMinima = Number(req.params.qtdMinima)
  const QuantidadeMaxima = Number(req.params.qtdMaxima)

  const estoqueMedio = (QuantidadeMinima + QuantidadeMaxima) / 2

  res.send(`Estoque Médio: ${estoqueMedio}`)
})

//Query params
app.get('/exercicio1', (req, res) => {
    const QuantidadeMinima = Number(req.query.qtdMinima)
    const QuantidadeMaxima = Number(req.query.qtdMaxima)
  
    const estoqueMedio = (QuantidadeMinima + QuantidadeMaxima) / 2
  
    res.send(`Estoque Médio: ${estoqueMedio}`)
  })

  //body
  app.post('/exercicio1', (req, res) => {
    const QuantidadeMinima = req.body.qtdMinima
    const QuantidadeMaxima = req.body.qtdMaxima

    const estoqueMedio = (QuantidadeMinima + QuantidadeMaxima) / 2
    
    res.send(`Estoque Médio: ${estoqueMedio}`)
})

app.listen(3000, () => {
    console.log(`Api iniciada! rodando em http://localhost:3000`)
})