const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        nome: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
        },
        senha: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'cargo',
            required: false
        },
        timestamps: true
    }
)

const Usuario = mongoose.model('usuario', schema)

module.exports = Usuario