const mongoose = require("mongoose");
const { Schema } = mongoose;

exports.modelName = "Material";
exports.collectionName = "materials";

exports.getSchema = function () {
  const MaterialSchema = new Schema({
    nome: {
      type: String,
      required: true,
    },
    estoque: {
      type: Number,
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
    },
  });

  return MaterialSchema;
};
