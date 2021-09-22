const rapportageModel = require("../models/rapportage")
const express = require("express")
const cors = require("cors")
const fs = require("fs")
const path = require("path")

const app = express()


app.use(cors())
app.use(express.json())
app.use(express.static("./public"))


const getRapportage = async (req, res) => {
    try {
        const rapportage = await rapportageModel.find()
        res.json({
            message: "Test OK",
            rapportage
        })
    } catch (err) {
        console.error(err)

        rea.status(500).json({ errorMessage: "There was a problem :(" })
    }
}

const addNewRapportage = async (req, res) => {
    try {
        const { pdf, description } = req.body

        const date = new Date().toISOString().slice(0, 10).replace(/-/g, "");
        const newPdfName = date + "_" + req.file.originalname

        const data = {pdf : newPdfName, description}

        const addRapportage = await rapportageModel.create(data)

        fs.renameSync(req.file.path, path.join(req.file.destination, newPdfName));

        res.json({
            message: "Rapportage was created",
            addRapportage
        })

    } catch (err) {
        console.error(err);
        res.status(500).json({ errorMessage: "There was a problem :(" })
    }
}


const findRapportageById = async (req, res) => {

    try {
        const rapportage = req.params.id
        const foundRapportage = await rapportageModel.findById(rapportage)

        res.json({
            message: "Rapportage Id it's OK ",
            foundRapportage
        })
    } catch (err) {
        console.error(err);
        res.status(500).json({ errorMessage: "There was a problem :(" })
    }
}

const updateRapportage = async (req, res) => {
    try {
        const rapportage = req.params.id
        const { pdf, description } = req.body


        const dateNow = new Date().toISOString().slice(0, 10).replace(/-/g, "");
        const newPdfName = dateNow + "_" + req.file.originalname

        const data = { pdf: newPdfName, description }

        const rapportageUpdate = await rapportageModel.updateOne({ _id: rapportage }, data)

        fs.renameSync(req.file.path, path.join(req.file.destination, newPdfName));


        res.json({
            message: "Rapportage was updated",
            rapportageUpdate
        })
    } catch (err) {
        console.error(err);
        res.status(500).json({ errorMessage: "There was a problem :(" })
    }
}

const deleteRapportage = async (req, res) => {
    try {
        const rapportage = req.params.id
        const rapportageDelete = await rapportageModel.deleteOne({ _id: rapportage })

        res.json({
            message: "Rapportage was deleted",
            rapportageDelete
        })


    } catch (err) {
        console.error(err);
        res.status(500).json({ errorMessage: "There was a problem :(" })
    }

}


module.exports = {
    getRapportage,
    addNewRapportage,
    findRapportageById,
    updateRapportage,
    deleteRapportage
}