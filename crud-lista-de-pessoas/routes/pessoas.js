const express = require('express')
const router = express.Router()

//lista mockada
let listaPessoas = [
    {
        id: 1,
        "nome": "João",
        "idade": 20,
        email: "joão@email.com",
        "telefone": "61900010002"
    },
    {
        id: 2,
        "nome": "Maria Eduarda",
        "idade": 21,
        email: "mariaeduarda@email.com",
        "telefone": "61982919293"
    },
    {
        id: 3,
        "nome": "Lucas",
        "idade": 22,
        email: "lucas@email.com",
        "telefone": "61981919293"
    }
]

//rotas
router.get('/pessoas', (req, res) => {
    res.json(listaPessoas)
})

//read -> Buscar o pessoa pelo ID
router.get('/pessoas/:id', (req, res) => {
    const id = req.params.id
    const index = listaPessoas.findIndex(pessoa => pessoa.id == id)
    const pessoa = listaPessoas[index]
    res.json(pessoa)
})

// CREATE -> Criar uma pessoa
router.post('/pessoas', (req, res) =>{
    const novaPessoa = req.body
    console.log(novaPessoa)

    const pessoa = {
        id: listaPessoas.length + 1,
        nome: novaPessoa.nome,
        idade: novaPessoa.idade,
        email: novaPessoa.email,
        telefone: novaPessoa.telefone
    }

    listaPessoas.push(pessoa)

    res.json({mensagem: "pessoa cadastrada com sucesso!"})

})

//DELETE -> Deletar um produto
router.delete('/pessoas/:id', (req, res) => {
    const id = req.params.id
    const index = listaPessoas.findIndex(pessoa => pessoa.id == id)
    listaPessoas.splice(index, 1)
    res.json({mensagem: "pessoa excluida com sucesso!"})
})

//UPDATE -> Alterar uma pessoa
router.put('/pessoas/:id', (req, res) => {
    const id = req.params.id
    const index = listaPessoas.findIndex(pessoa => pessoa.id == id)
    const novosDados = req.body

    const pessoaAlterada = {
        id: id,
        nome: novosDados.nome,
        idade: novosDados.idade,
        email: novosDados.email,
        telefone: novosDados.telefone
    }

    listaPessoas[index] = pessoaAlterada

    res.json({mensagem: "pessoa alterada com sucesso!"})

})

module.exports = router