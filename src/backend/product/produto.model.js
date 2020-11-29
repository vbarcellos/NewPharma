'use strict'

const mongoose = require('mongoose');

const { modelName, getSchema, collectionName } = require('./produto.schema');

module.exports = mongoose.model(modelName, getSchema(), collectionName);