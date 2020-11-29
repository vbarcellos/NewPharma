const { update } = require("./material.model");
const Material = require("./material.model");

module.exports = {
  async query(filtros) {
    return await Material.find();
  },
  async create(dados) {
    return await Material.create(dados);
  },
  async update(body, params) {
    return Material.findByIdAndUpdate(params.id, body, { new: true });
  },
  async delete(params) {
    return Material.findByIdAndRemove(params.id);
  },
};
