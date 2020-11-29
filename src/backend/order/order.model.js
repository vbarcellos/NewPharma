'use strict'

const mongoose = require('mongoose');

const { modelName, getSchema, collectionName } = require('./order.schema');

module.exports = mongoose.model(modelName, getSchema(), collectionName);