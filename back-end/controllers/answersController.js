const answerModel = require("../models/answers")


const getAnswer = async (req, res) => {
    try {
        const answer = req.body
        const answerFound = await answerModel.find(answer)

        res.json({
            message: "Answer ok",
            answerFound
        })
    } catch (err) {
        console.log(err)

        res.status(500).json({ errorMessage: "There was a problem :(" })
    }
}

const createAnswer = async (req, res) => {
    try {

        const answers = req.body
        const answerCreate = await answerModel.create(answers)

        res.json({
            message: "New Answer",
            answerCreate
        })

    } catch (err) {

        console.log(err)
        res.status(500).json({ errorMessage: "There was a problem :(" })
    }
}

module.exports = { getAnswer, createAnswer }

// 