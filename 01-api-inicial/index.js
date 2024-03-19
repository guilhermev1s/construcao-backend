//criando uma instância do modulo express
const express = require('express')
//criando nossa aplicação
const app = express()

//definindo os caminhos da aplicação
app.get('/', (req, res) => {
  res.send('Olá mundo')
})

app.get('/hello', (req, res) => {
  res.send('Hello World')
})

app.get('/nome', (req, res) => {
  res.send('Guilherme Vaz')
})

//Crie um endpoint que devolva seu nome e matricula /aluno
app.get('/aluno', (req, res) => {
  res.send('Nome: Guilherme Vaz \n matricula: 23114290053')
})

app.get('/exercicio1', (req, res) => {
  const nota1 = 10
  const nota2 = 8
  const media = (nota1 + nota2) / 2
  res.send('Media: ' + media)
})

app.get('/teste', (req, res) => {
  res.send('Teste get')
})

app.post('/teste', (req, res) => {
  res.send('Teste post')
})

// PATH PARAMS => :NOME
app.get('/aluno/:nome/:matricula/:curso', (req, res) => {
  console.log(req.params)
  res.send(`
  Olá ${req.params.nome},
  sua matricula é ${req.params.matricula},
  seu curso é ${req.params.curso}
  `)
})


// QUERY PARAMS => :PESSOA
app.get('/pessoa', (req, res) => {
  console.log(req.query)
  res.send("OK")
})

// 1. Faça um Programa que receba quatro notas de um aluno, calcule e imprima a média aritmética das notas e a mensagem de aprovado para média superior ou igual a 7.0 ou a mensagem de reprovado para média inferior a 7.0.
// Path Param
app.get('/exercicio1/:nota1/:nota2/:nota3/:nota4', (req, res) => {
  const nota1 = Number((req.params.nota1))
  const nota2 = Number((req.params.nota2))
  const nota3 = Number((req.params.nota3))
  const nota4 = Number((req.params.nota4))

  const media = (nota1 + nota2 + nota3 + nota4) / 4

  const resultado = media >= 7 ? "Aprovado" : "Reprovado"

  // const mensagem2 = null

  // if(media >= 7){
  //     mensagem2 = "Aprovado"
  // }else {
  //     mensagem2 = "Reprovado"
  // }

  res.send(`Media: ${media} Aluno ${resultado}`)
})

// 1. Faça um Programa que receba quatro notas de um aluno, calcule e imprima a média aritmética das notas e a mensagem de aprovado para média superior ou igual a 7.0 ou a mensagem de reprovado para média inferior a 7.0.
// Path Param
app.get('/estudante', (req, res) => {
  console.log(req.query)
  const nota1 = Number((req.query.nota1))
  const nota2 = Number((req.query.nota2))
  const nota3 = Number((req.query.nota3))
  const nota4 = Number((req.query.nota4))

  const media = (nota1 + nota2 + nota3 + nota4) / 4

  const resultado = media >= 7 ? "Aprovado" : "Reprovado"

  res.send(`
      Media: ${media.toFixed(1)}
      Resultado: ${resultado}
  `)
})


//executando a aplicação na porta definida
app.listen(3000, () => {
  console.log(`Api iniciada! rodando em http://localhost:3000`)
})