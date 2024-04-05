const express = require('express')
const router = express.Router()

//lista mockada
let listaProdutos = [
    { id: 1,
     nome: "Coca-cola",
     preco: 4.99
    },
    { id: 2,
     nome: "Batata frita",
     preco: 9.99
    },
    { id: 3,
     nome: "Arroz",
     preco: 29.99
    }
]

//rotas
router.get('/produtos', (req, res) => {
    res.json(listaProdutos)
})

//read -> Buscar o produto pelo ID
router.get('/produtos/:id', (req, res) => {
    const id = req.params.id
    const index = listaProdutos.findIndex(produto => produto.id == id)
    const produto = listaProdutos[index]
    res.json(produto)
})

// CREATE -> Criar um produto
router.post('/produtos', (req, res) =>{
    const novoProduto = req.body
    console.log(novoProduto)

    const produto = {
        id: listaProdutos.length + 1,
        nome: novoProduto.nome,
        preco: novoProduto.preco
    }

    listaProdutos.push(produto)

    res.json({mensagem: "produto cadastro com sucesso!"})

})

//DELETE -> Deletar um produto
router.delete('/produtos/:id', (req, res) => {
    const id = req.params.id
    const index = listaProdutos.findIndex(produto => produto.id == id)
    listaProdutos.splice(index, 1)
    res.json({mensagem: "produto excluido com sucesso!"})
})

//UPDATE -> Alterar um produto
router.put('/produtos/:id', (req, res) => {
    const id = req.params.id
    const index = listaProdutos.findIndex(produto => produto.id == id)
    const novosDados = req.body

    const produtoAlterado = {
        id: id,
        nome: novosDados.nome,
        preco: novosDados.preco
    }

    listaProdutos[index] = produtoAlterado

    res.json({mensagem: "produto alterado com sucesso!"})

})

module.exports = router