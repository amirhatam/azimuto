const mongoose = require("mongoose")
const civiqueModel = require("../models/civique")

mongoose.connect("mongodb://localhost:27017/azimutoDB", (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("I'm connected to the database")
    }
})


const addCivique = async () => {

    try {

        await civiqueModel.deleteMany({})

        await civiqueModel.insertMany([

            {
                url: "https://www.google.com/"
            }

        ])


    } catch (error) {

    }

}

addCivique()