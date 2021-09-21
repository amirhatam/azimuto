const mongoose = require("mongoose")

const chiffresSchema = new mongoose.Schema ({
    rapport: String,
    detail: String,
    created: { type: Date, default: Date.now }
})

const chiffresModel = mongoose.model("Chiffres", chiffresSchema)

module.exports = chiffresModel