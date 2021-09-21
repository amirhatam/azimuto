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
                pdf: "Notre plaquette",
                description: "20210921_Plaquette.pdf",
            },
            {
                pdf: "Notre catalogue d’ateliers",
                description: "20210921_Catalogue.pdf",
            },
            {
                pdf: "Notre dernier rapport d’activité",
                description: "20210921_Rapport.pdf",
            }

        ])

    } catch (error) {

    }

}

addRapportage()