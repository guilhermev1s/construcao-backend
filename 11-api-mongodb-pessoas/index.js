require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const app = express()

app.use(express.json())

const Pessoa = mongoose.model('pessoa', {nome: String})

//Buscar todas pessoas
app.get('/pessoas', async (req, res) => {
    const pessoa = await Pessoa.find()
    res.json(pessoa)
})

//bUscar pessoa pelo ID
app.get('/pessoas/:id', async (req, res) => {
    const pessoa = await Pessoa.findById(req.params.id)
    res.json(pessoa)
})

//New Post
app.post('/pessoas', async (req, res) => {
    const pessoa = new Pessoa({nome: req.body.nome})
    await pessoa.save()
    res.json(pessoa)
})

//Update
app.put('/pessoas/:id', async (req, res) => {
    const pessoa = await Pessoa.findByIdAndUpdate(req.params.id, {nome: req.body.nome}, {new:true})
    res.json(pessoa)
})

//Delete
app.delete('/pessoas/:id', async (req, res) => {
    await Pessoa.findByIdAndDelete(req.params.id)
    res.json()
})

const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;

mongoose.connect(`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@backend.bgpkpuv.mongodb.net/?retryWrites=true&w=majority&appName=Backend`)
    .then(() => console.log("Conectado ao meu MongoDB!"))
    .catch(err => console.log("Erro ao conectar no meu MongoDB: ", err))



app.listen(3000, () => {
    console.log("Api rodando em http://localhost:3000")
})