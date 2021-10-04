const mongoose = require("mongoose")

const parcourSchema = new mongoose.Schema ({
    url: String,
    created: { type: Date, default: Date.now }
})

const parcourModel = mongoose.model("Parcour", parcourSchema)

module.exports = parcourModel