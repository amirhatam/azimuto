const mongoose = require("mongoose")

const answerSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: "user",
    },
    firstName: String,
    lastName: String,
    questionId: {
        type: mongoose.Types.ObjectId,
        ref: "question"
    },
    question: String,
    valueNumber: Number,
    valueText: String,
    email: String,
    created: { type: Date, default: Date.now }

})

const answerModel = mongoose.model("Answer", answerSchema)

module.exports = answerModel