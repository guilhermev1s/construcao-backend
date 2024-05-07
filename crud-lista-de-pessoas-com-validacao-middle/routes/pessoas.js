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

function validarPessoa(req, res, next) {
    const id = req.params.id
    const pessoa = listaPessoas.find(pessoa => pessoa.id == id)
    if (pessoa) {
        req.pessoa = pessoa
        next()
    } else {
        return res.status(404).json({ mensagem: "Pessoa não encontrada!" })
    }
}

// validar os atributos do corpo
function validarAtributos(req, res, next) {
    const dados = req.body
    if (!dados.nome || !dados.idade || !dados.email || !dados.telefone) {
        return res.status(400).json({ mensagem: "Dados são obrigatórios" })
    } else {
        next()
    }
}

//rotas
router.get('/pessoas', (req, res) => {
    res.status(200).json(listaPessoas)
})

//read -> Buscar o pessoa pelo ID
router.get('/pessoas/:id', validarPessoa, (req, res) => {
    res.json(req.pessoa)
})

// CREATE -> Criar uma pessoa
router.post('/pessoas', validarAtributos, (req, res) => {
    const dados = req.body

        const pessoa = {
            id: Math.round(Math.random() * 1000),
            nome: dados.nome,
            idade: dados.idade,
            email: dados.email,
            telefone: dados.telefone
        }

        listaPessoas.push(pessoa)

        res.status(201).json({ mensagem: "Pessoa cadastrada com sucesso!", pessoa })
})

//UPDATE -> Alterar uma pessoa
router.put('/pessoas/:id', validarAtributos, validarPessoa, (req, res) => {
    const dados = req.body
    const pessoaAtual = req.pessoa
   
        const index = listaPessoas.findIndex(pessoa => pessoa.id == pessoaAtual.id)
        
        const pessoaAtualizada = {
            id: pessoaAtual.id, 
            nome: dados.nome,
            idade: dados.idade,
            email: dados.email,
            telefone: dados.telefone
        }

        listaPessoas[index] = pessoaAtualizada

        res.status(200).json({mensagem: "Pessoa alterada com sucesso!",pessoaAtualizada})
    })

//DELETE -> Deletar um produto
router.delete('/pessoas/:id', validarPessoa, (req, res) => {
    const pessoaAtual = req.pessoa
    const index = listaPessoas.findIndex(pessoa => pessoa.id == pessoaAtual.id)

    listaPessoas.splice(index, 1)
    res.status(200).json({ mensagem: "Pessoa excluida com sucesso!" })

})



module.exports = router