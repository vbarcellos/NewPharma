const { update } = require("./order.model");
const Order = require("./order.model");

module.exports = {
  async query(filtros) {
    return await Order.find();
  },
  async create(dados) {
    return await Order.create(dados);
  },
  async update(body, params) {
    return Order.findByIdAndUpdate(params.id, body, { new: true });
  },
  async delete(params) {
    return Order.findByIdAndRemove(params.id);
  },
};
