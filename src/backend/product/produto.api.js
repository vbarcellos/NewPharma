const { update } = require("./produto.model");
const Product = require("./produto.model");

module.exports = {
  async query(filtros) {
    return await Product.find();
  },
  async create(dados) {
    return await Product.create(dados);
  },
  async update(body, params) {
    return Product.findByIdAndUpdate(params.id, body, { new: true });
  },
  async delete(params) {
    return Product.findByIdAndRemove(params.id);
  },
};
