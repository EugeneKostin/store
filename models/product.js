const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  info: [{
    label: String,
    value: String,
  }],
})

module.exports = mongoose.model('product', productSchema)