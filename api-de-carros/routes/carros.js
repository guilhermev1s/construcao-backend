const express = require('express')
const router = express.Router()

let listaCarros = [
    {
        id: 1,
        marca: 'VW',
        modelo: "Gol",
        cor: "Branco",
        valor: 80.000
    }
]

router.get ('/carros', (req, res) => {
    res.status(200).json(listaCarros)
})

router.get('/carros', (req, res) =>{
    res.status(200).json(listaCarros)
})

router.get ('/carros/:id', (req, res) => {
    const id = req.params.id
    const carro = listaCarros.find(carro => carro.id == id) 
    if (carro) {
        res.status(200).json(carro)
    } else {
        res.status(404).json({mensagem: "produtao não encontrado!"})
    }
})

router.post ('/carros', (req, res) => {
    const dados = req.body 
    if (!dados.marca || !dados.modelo || !dados.cor || !dados.valor){
        res.status(400).json({mensagem: "Dados são obrigatórios"})
    }else{
        const carro = {
            id:Math.round(Math.random() * 1000),
            marca: dados.marca, 
            modelo: dados.modelo,
            cor: dados.cor,
            valor: dados.valor
        }

        listaCarros.push(carro)

        res.status(201).json({mensagem: "Carro cadastrado com sucesso!", carro})
    }
})

router.put('/carros/:id', (req,res) => {
    const id = req.params.id
    const novosDados = req.body
    
    if ( !novosDados.marca || !novosDados.modelo || !novosDados.cor || !novosDados.valor){
        res.status(400).json({mensagem: 'Dados são obrigatórios'})
    } else {
        const index = listaCarros.findIndex(carro => carro.id == id)
        if(index ==-1) {
            res.status(404).json({mensagem: "Carro não encontrado"})
        } else{
    
        const carroAtualizado = {
            id: Number(id),
            marca: novosDados.marca,
            modelo: novosDados.modelo,
            cor: novosDados.cor,
            valor: novosDados.valor
        }


        listaCarros[index] = carroAtualizado

        res.status(200).json(
            {
                mensagem: "carro alterado com sucesso!",
                carro
            }
        )}
    }
})

router.delete('/carros/:id', (req, res) =>{
    const id = req.params.id
    const index = listaCarros.findIndex(carro => carro.id == id)
    
    if (index == -1 ){
        return res.status(400).json({mensagem: "carro não encontrado!"})
    } else {
        listaCarros.splice(index, 1)
        res.status(200).json({mensagem: `Carro ${id} excluido com sucesso`})
    }
})

router.get ('/carros/cor/:cor', (req, res) => {
    const cor = req.params.cor.toUpperCase()
    const carroCor = listaCarros.filter(carro => carro.cor.toUpperCase == cor.toUpperCase()) 
    res.json(carroCor)
}) 



module.exports = router


