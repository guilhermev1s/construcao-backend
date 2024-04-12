const express = require('express')
const router = express.Router()

// criar uma lista
let listaTarefas = []

// READ - BUSCAR TODAS AS TAREFAS
router.get('/tarefas', (req, res) => {
    res.json(listaTarefas)
})

// READ - BUSCA DA TAREFA PELO IDENTIFICADOR
router.get('/tarefas/:id', (req, res) => {
    const id = req.params.id
    const index = listaTarefas.findIndex(tarefa => tarefa.id == id)
    const tarefa = listaTarefas[index]
    res.json(tarefa)
})

// CREATE - CADASTRAR UMA TAREFA
router.post('/tarefas', (req, res) =>{
    const novaTarefa = req.body
    console.log(novaTarefa)

    const tarefa = {
        id: listaTarefas.length + 1,
        nome: novaTarefa.nome
    }

    listaTarefas.push(tarefa)

    res.json({mensagem: "tarefa cadastro com sucesso!"})

})

// DELETE - EXCLUIR TAREFA
router.delete('/tarefas/:id', (req, res) => {
    const id = req.params.id
    const index = listaTarefas.findIndex(tarefa => tarefa.id == id)
    listaTarefas.splice(index, 1)
    res.json({ mensagem: "Tarefa excluida com sucesso!"})
})

// UPDATE - ATUALIZAR TAREFA
router.put('/tarefas/:id', (req, res) => {
    const id = req.params.id
    const index = listaTarefas.findIndex(tarefa => tarefa.id == id)
    const novosDados = req.body

    const tarefaAlterada = {
        id: id,
        nome: novosDados.nome,
    }

    listaTarefas[index] = tarefaAlterada

    res.json({ mensagem: "Tarefa atualizada com sucesso!" })
})

// exportar o router
module.exports = router