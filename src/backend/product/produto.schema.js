const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = mongoose.SchemaTypes;

exports.modelName = 'Product';
exports.collectionName = 'products';

exports.getSchema = function () {
    const ProductSchema = new Schema({
        nome: {
            type: String,
            required: true,
        },
        nomeComercial: {
            type: String,
        },
        estoque: {
            type: Number,
        },
        tipo: {
            type: ObjectId,
        },
        preco: {
            type: Number,
        },
        descricao: {
            type: String,
        },
        fabricacao: {
            type: Date,
            default: Date.now,
        },
        validade: {
            type: Date,
        }
    })

    return ProductSchema
}