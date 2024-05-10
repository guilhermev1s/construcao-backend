const Funcionario = require('../models/Funcionario')

async function create(req, res) {
    try {
        const funcionario = new Funcionario(req.body)
        const funcionarioCriado = await funcionario.save()
        res.status(201).json(funcionarioCriado)
    } catch (error) {
        console.error("Erro ao criar funcionario: ", error)
        res.status(400).json({mensagem: "Erro ao criar funcionario!", erro: error.message})
    }
}

async function getAll(req, res) {
    res.json(await Funcionario.find())
}

async function getById(req, res) {
    const funcionario = await Funcionario.findById(req.params.id)
    if (funcionario) {
        res.json(funcionario)
    } else {
        res.status(404).json({ mensagem: "Funcionario não encontrado!" })
    }
}
//terminar
async function update(req, res) {
    try {
        const funcionarioAtulizado = await Cargo.findByIdAndUpdate(req.params.id, req.body)
        res.json(funcionarioAtulizado)
    } catch (error) {
        console.error("Erro ao criar cargo: ", error)
        res.status(400).json({
            mensagem: "Erro ao atualizar cargo!",
            erro: error.message
        })
    }
}
//terminar
async function remove(req, res) {
    await Cargo.findByIdAndDelete(req.params.id)
    res.json({ mensagem: "Cargo excluido com sucesso!" })
}






module.exports = {
    create,
    getAll,
    getById,
    update,
    remove
}