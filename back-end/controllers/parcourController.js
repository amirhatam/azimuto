const parcourModel = require("../models/parcour")

const express = require("express")
const cors = require("cors")



const app = express()

app.use(cors())
app.use(express.json())


const getParcour = async (req, res) => {
    try {
        const parcour = req.body
        console.log(req.body)
        const parcourFound = await parcourModel.find(parcour)

        res.json({
            message: "teste OK",
            parcourFound
        })

    } catch (err) {
        console.error(err);

        res.status(500).json({ errorMessage: "There was a problem :(" })
    }
}

const getParcourById = async (req, res) => {

    try {
        const parcourId = req.params.id
        const parcour = await parcourModel.findById(parcourId)
        if (parcour) {
            res.json(parcour)
        } else {
            res.json({
                message: "service parcour not found"
            })
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ errorMessage: "There was a problem :(" })
    }

}

const updateParcour = async (req, res) => {
    try {
        const parcourId = req.params.id
        const data = req.body
        const parcourUpdate = await parcourModel.updateOne({ _id: parcourId}, data )
        res.json({
            message:"service parcour was updated",
            parcourUpdate
        })

    } catch (err) {
        console.error(err);
        res.status(500).json({ errorMessage: "There was a problem :(" })
    }
}




module.exports = { getParcour, getParcourById, updateParcour }