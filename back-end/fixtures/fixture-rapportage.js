const mongoose = require('mongoose')
const rapportageModel = require("../models/rapportage")

mongoose.connect("mongodb://localhost:27017/azimutoDB", (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("I'm connected to the database")
    }
})

const addRapportage = async () => {

    try {

        await rapportageModel.deleteMany({})

        await rapportageModel.insertMany([

            {
                pdf: "20210921_Plaquette.pdf",
                description: "Notre plaquette",
            },
            {
                pdf: "20210921_Catalogue.pdf",
                description: "Notre catalogue d’ateliers",
            },
            {
                pdf: "20210921_Rapport.pdf",
                description: "Notre dernier rapport d’activité",
            }

        ])

    } catch (error) {

    }

}

addRapportage()