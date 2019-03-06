const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {
    type: 'String',
    required: true
  },
  price: { type: Number },
  identifyBy: { type: 'String' },
  description: { type: 'String' },
});
// Export the model
module.exports = mongoose.model('Product', ProductSchema);