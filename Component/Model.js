const mongoose = require("mongoose")

const schemaStructure = mongoose.Schema({
  name: {
        type: String,
    },
    color: {
        type: String,
    },
    price: {
        type: Number,
    },
    stock: {
        type: Number,
    }
})

module.exports = mongoose.model("toys", schemaStructure)
