const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    name: {type: String, require: true},
    description: {type: String},
    category: {type: String},
    price: {type: Number, require: true},
    rating: {type: Number},
    imageName: {type: String},
    tag: {type: String}

})

module.exports = mongoose.model("products", ProductSchema)