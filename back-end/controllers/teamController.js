const teamModel = require("../models/team")
const mongoose = require("mongoose")

const express = require("express")
const cors = require("cors")
const multer = require('multer');
const fs = require("fs")
const path = require("path")

const app = express()


app.use(cors())
app.use(express.json())
app.use(express.static("./public"))


const getTeam = async (req, res) => {
    try {
        const team = req.body
        console.log(req.body)
        const teamFound = await teamModel.find(team)

        res.json({
            message: "teste OK",
            teamFound
        })
    } catch (err) {
        console.log(err)

        res.status(500).json({ errorMessage: "There was a problem :(" })
    }
}

const addnewTeam = async (req, res) => {
    try {
        const { name, post, description, image } = req.body

        const date = new Date().toISOString().slice(0,10).replace(/-/g,"");
        const extension = req.file.originalname.split(".")[1]
        const newImageName = name+"_"+date+"."+extension
        

        const newTeam = await teamModel.create({name, post, description, image: newImageName})
        
        fs.renameSync(req.file.path, path.join(req.file.destination, newImageName));

        res.json({ message: "Team was created!", newTeam })

    } catch (error) {
        console.log("Error: ", error)
        res.status(500).json({ message: "There was a problem :( " })
    }

}

const getTeamById = async (req, res) => {
    try {
        const Idteam = req.params.id
        const team = await teamModel.findById(Idteam)

        if (team) {
            res.json(team)
        } else {
            res.json({
                message: "Team member not found"
            })
        }
    } catch (err) {
        console.log(err)

        res.status(500).json({ errorMessage: "There was a problem :(" })
    }
}


const deleteTeam = async (req, res) => {
    try {
        const Idteam = req.params.id
        const teamDelete = await teamModel.deleteOne({ _id: Idteam })
        console.log("deleteteam", teamDelete)
        res.json({ message: "User was deleted", teamDelete })
    } catch (error) {
        console.log("Error", error)
        res.status(500).json({ message: "There was a problem :(" })
    }
}


const updateTeam = async (req, res) => {
    try {
        const Idteam = req.params.id
        const data = req.body
        const teamUpdate = await teamModel.updateOne({ _id: Idteam }, data)
        console.log("teamupdate", teamUpdate)
        res.json({
            message: "User was updated",
            teamUpdate
        })
    } catch (error) {
        console.log("Error", error)
        res.status(500).json({ message: "There was a problem :(" })
    }
}

module.exports = { getTeam, addnewTeam, getTeamById, deleteTeam, updateTeam }