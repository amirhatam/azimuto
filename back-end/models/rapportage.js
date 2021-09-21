const mongoose = require("mongoose")

const rapportageSchema = new mongoose.Schema({
    pdf: String,
    description: String,
    created: { type: Date, default: Date.now }
})

const rapportageModel = mongoose.model("Rapportage", rapportageSchema)

module.exports = rapportageModel