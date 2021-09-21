const civiqueModel = require("../models/civique")

const express = require("express")
const cors = require("cors")



const app = express()

app.use(cors())
app.use(express.json())


const getCivique = async (req, res) => {
    try {
        const civique = req.body
        console.log(req.body)
        const civiqueFound = await civiqueModel.find(civique)

        res.json({
            message: "teste OK",
            civiqueFound
        })

    } catch (err) {
        console.error(err);

        res.status(500).json({ errorMessage: "There was a problem :(" })
    }
}

const getCiviqueById = async (req, res) => {

    try {
        const civiqueId = req.params.id
        const civique = await civiqueModel.findById(civiqueId)
        if (civique) {
            res.json(civique)
        } else {
            res.json({
                message: "service civique not found"
            })
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ errorMessage: "There was a problem :(" })
    }

}

const updateCivique = async (req, res) => {
    try {
        const civiqueId = req.params.id
        const data = req.body
        const civiqueUpdate = await civiqueModel.updateOne({ _id: civiqueId}, data )
        res.json({
            message:"service civique was updated",
            civiqueUpdate
        })

    } catch (err) {
        console.error(err);
        res.status(500).json({ errorMessage: "There was a problem :(" })
    }
}




module.exports = { getCivique, getCiviqueById, updateCivique }