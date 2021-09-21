const partenairesModel = require("../models/partenaires")
const express = require("express")
const cors = require("cors")
const fs = require("fs")
const path = require("path")

const app = express()


app.use(cors())
app.use(express.json())
app.use(express.static("./public"))


const getPartenaires = async (req, res) => {
    try {
        const partenaires = await partenairesModel.find()  //chercher les partenaires dans la BD
        res.json({
            message: "Test OK",
            partenaires
        })

    } catch (err) {
        console.log(err)

        res.status(500).json({ errorMessage: "There was a problem :(" })
    }
}


const addNewPartenaire = async (req, res) => {
    try {
        const { url, image } = req.body

        const date = new Date().toISOString().slice(0, 10).replace(/-/g, "");
        // const extension = req.file.originalname.split(".")[1]
        // const newImageName = image + "_" +date + "." + extension
        const newImageName = date + "_" + req.file.originalname

        const addPartenaire = await partenairesModel.create({ url, image: newImageName})

        fs.renameSync(req.file.path, path.join(req.file.destination, newImageName));

        console.log("newpartenaire", addPartenaire);
        res.json({
            message: "partenaire was created",
            addPartenaire
        })

    } catch (err) {
        console.log(err)

        res.status(500).json({ errorMessage: "There was a problem :(" })
    }
}


const findPartenairesById = async (req, res) => {
    try {

        const partenaires = req.params.id
        const foundPartenaires = await partenairesModel.findById(partenaires) // chercher un partenaire par id dans la BD

        res.json({
            message: 'Test ok Partenaires',
            foundPartenaires
        })
    } catch (err) {
        console.log(err)

        res.status(500).json({ errorMessage: "There was a problem :(" })
    }
}

const deletePartenaire = async (req, res) => {
    try {
        const partenaire = req.params.id
        const partenaireDelete = await partenairesModel.deleteOne({ _id: partenaire }) // supprimé un partenaire par id dans la BD

        res.json({
            message: "partenaire was deleted",
            partenaireDelete
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({ errorMessage: "There was a problem :(" })

    }
}

const updatePartenaire = async (req, res) => {
    try {
        const idPartenaire = req.params.id

        const { url, image } = req.body
        
        const dateNow = new Date().toISOString().slice(0, 10).replace(/-/g, "");
        const newImageName = dateNow + "_" + req.file.originalname
        
        const data = { url, image : newImageName}
       
        const partenaireUpdate = await partenairesModel.updateOne({ _id: idPartenaire }, data ) // changer une donnée parmis les données du partenaire dans la BD

     
        fs.renameSync(req.file.path, path.join(req.file.destination, newImageName));


        res.json({
            message: "Partenaire was updated",
            partenaireUpdate
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({ errorMessage: "There was a problem :(" })
    }
}


module.exports = {
    getPartenaires,
    addNewPartenaire,
    findPartenairesById,
    updatePartenaire,
    deletePartenaire
}