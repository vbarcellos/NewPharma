const mongoose = require("mongoose");
const { Schema } = mongoose;
const { ObjectId } = mongoose.SchemaTypes;

exports.modelName = "Order";
exports.collectionName = "orders";

exports.getSchema = function () {
  const OrderSchema = new Schema({
    nomeCliente: {
      type: String,
      required: true,
    },
    descricao: {
      type: String,
    },
    dataPedido: {
      type: Date,
      default: Date.now,
    },
    produto: {
      type: ObjectId,
      ref: "Product",
      required: true,
    },
    quantidade: {
      type: Number,
      required: true,
      default: 1,
    },
  });

  return OrderSchema;
};
