//comentário de uma linha
// ctrl + ;

/* aula de backend 29/02 */

// variavel com var 
var nome = "GUILHERME"

//imprimir informação no console(terminal)
console.log("IMPRIMIR UM TEXTO")
console.log(2)
console.log(nome)
console.log(1, 2, 3, 4)
console.log('Nome:', "Guilherme")
console.log('Nome:', nome)
console.log('Qualquer texto' + ' Qualquer texto')
console.log(2 + 2)

//tipos dados
var texto = "teste"
console.log("tipo da variavel texto: ", typeof texto)

var numero = 2
console.log("tipo da variavel numero: ", typeof numero)

var numeroFlutuante = 2.5444444
console.log("tipo da variavel numeroFlutuante: ", typeof numeroFlutuante)

var numeroNegativo = -2.5444444
console.log("tipo da variavel numeroNegativo: ", typeof numeroNegativo)

var boleano = true // ou false
console.log("tipo da variavel boleano: ", typeof boleano)

var array = [1, 2, 3, 4, 5]
console.log("tipo da variavel array: ", typeof array)

var testeAlteracao = "Um texto"
testeAlteracao = 2

console.log("testeAlteracao: ", testeAlteracao)


var arrayNumero = [1, 2, 3, 4, 5]
var arrayCarros = ["Gol", "Uno", "Civic"]
var arrayDinamico = [1, "Nome", true, { "nome": "Teste" }]

var pessoa = {
    "nome": "Guilherme",
    "idade": 23,
    "nacionalidade": "Brasileiro"
}
console.log(pessoa)
console.log(typeof pessoa)

const CONSTANTE = "CONSTANTE"
// CONSTANTE = "TESTE"

const notaA1 = 8
const notaA2 = 7

const media = notaA1 + notaA2 / 2


let aprovado = false

if(media >= 7) { 
    aprovado = true
}






