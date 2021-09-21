const mongoose = require("mongoose")

const partenairesSchema = new mongoose.Schema({
    url: String,
    image: String,
    created: { type: Date, default: Date.now }
})

const partenairesModel = mongoose.model("Partenaires", partenairesSchema)

module.exports = partenairesModel