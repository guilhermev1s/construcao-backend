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

//7. Faça uma api para ler o código e o preço de 15 produtos, calcular e escrever:
//• O maior preço lido; e
//• A média aritmética dos preços dos produtos.
app.post('/exercicio7', (req, res) => {
  console.log(req.body)
  const corpo = req.body
  let listaProdutos = []

  corpo.forEach(produto => {
    listaProdutos.push(produto)
  });

  let soma = 0
  listaProdutos.forEach(produto => {
    soma = soma + produto.preco
  })
  
  const media = soma / listaProdutos.length

  let maiorPreco = 0
  listaProdutos.forEach(produto => {
    if (produto.preco > maiorPreco){
      maiorPreco = produto.preco
    }
  })

  const resultado = {
    precoMedio: media.toFixed(2),
    maiorPreco: maiorPreco
  }
  res.json(resultado)
})





app.listen(3000, () => {
    console.log(`Api iniciada! rodando em http://localhost:3000`)
})