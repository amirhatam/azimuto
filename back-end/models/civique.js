const mongoose = require("mongoose")

const civiqueSchema = new mongoose.Schema ({
    url: String,
    created: { type: Date, default: Date.now }
})

const civiqueModel = mongoose.model("Civique", civiqueSchema)

module.exports = civiqueModel