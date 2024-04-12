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
    res.status(200).json(listaPessoas)
})

//read -> Buscar o pessoa pelo ID
router.get('/pessoas/:id', (req, res) => {
    const id = req.params.id
    const pessoa = listaPessoas.find(pessoa => pessoa.id == id)
    if (pessoa) {
        res.status(200).json(pessoa)
    } else {
        res.status(404).json({ mensagem: "pessoa não encontrada!" })
    }
})

// CREATE -> Criar uma pessoa
router.post('/pessoas', (req, res) => {
    const dados = req.body

    if (!dados.nome || !dados.idade || !dados.email || !dados.telefone) {
        res.status(400).json({ mensagem: "Dados são obrigatórios" })
    } else {
        const pessoa = {
            id: Math.round(Math.random() * 1000),
            nome: dados.nome,
            idade: dados.idade,
            email: dados.email,
            telefone: dados.telefone
        }


        listaPessoas.push(pessoa)

        res.status(201).json({ mensagem: "pessoa cadastrada com sucesso!", pessoa })
    }
})

//UPDATE -> Alterar uma pessoa
router.put('/pessoas/:id', (req, res) => {
    const id = req.params.id
    const novaPessoa = req.body

    if (!novaPessoa.nome || !novaPessoa.idade || !novaPessoa.email || !novaPessoa.telefone) {
        res.status(400).json({ mensagem: "Dados são obrigatórios" })
    } else {
        const index = listaPessoas.findIndex(pessoa => pessoa.id == id)
        if (index == -1) {
            res.status(404).json({ mensagem: "Pessoa não encotrada!" })
        } else {
        const pessoa = {
            id: Math.round(Math.random() * 1000),
            nome: novaPessoa.nome,
            idade: novaPessoa.idade,
            email: novaPessoa.email,
            telefone: novaPessoa.telefone
        }

        listaPessoas[index] = pessoa

        res.status(200).json({mensagem: "Pessoa alterada com sucesso!",pessoa})
    }

    }
})

//DELETE -> Deletar um produto
router.delete('/pessoas/:id', (req, res) => {
    const id = req.params.id
    const index = listaPessoas.findIndex(pessoa => pessoa.id == id)
    if (index == -1) {
        res.status(404).json({ mensagem: "Pessoa não encontrado!" })
    } else {
    listaPessoas.splice(index, 1)
    res.status(200).json({ mensagem: "Pessoa excluida com sucesso!" })
}
})



module.exports = router