const mongoose = require('mongoose')

const materialSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true

    },
    materialUnitPrice: {
        type: float,
        required: true,
        default:Date.now

    },
    materialStockLevel: {
        type: float,
        required: true,
        default:Date.now
    }
})

module.exports = mongoose.model('Materials', materialSchema)