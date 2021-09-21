const chiffresModel = require("../models/chiffresCles")

const express = require("express")
const cors = require("cors")



const app = express()

app.use(cors())
app.use(express.json())


const getChiffres = async (req, res) => {
    try {
        const chiffres = req.body
        console.log(req.body)
        const chiffresFound = await chiffresModel.find(chiffres)

        res.json({
            message: "teste OK",
            chiffresFound
        })

    } catch (err) {
        console.error(err);

        res.status(500).json({ errorMessage: "There was a problem :(" })
    }
}

const getChiffresById = async (req, res) => {

    try {
        const chiffreId = req.params.id
        const chiffre = await chiffresModel.findById(chiffreId)
        if (chiffre) {
            res.json(chiffre)
        } else {
            res.json({
                message: "Chiffre clés not found"
            })
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ errorMessage: "There was a problem :(" })
    }

}

const updateChiffre = async (req, res) => {
    try {
        const chiffreId = req.params.id
        const data = req.body
        const chiffreUpdate = await chiffresModel.updateOne({ _id: chiffreId}, data )
        res.json({
            message:"Chiffre was updated",
            chiffreUpdate
        })

    } catch (err) {
        console.error(err);
        res.status(500).json({ errorMessage: "There was a problem :(" })
    }
}




module.exports = { getChiffres, getChiffresById, updateChiffre }