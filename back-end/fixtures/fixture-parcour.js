const mongoose = require("mongoose")
const parcourModel = require("../models/parcour")

mongoose.connect("mongodb://localhost:27017/azimutoDB", (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("I'm connected to the database")
    }
})


const addParcour = async () => {

    try {

        await parcourModel.deleteMany({})

        await parcourModel.insertMany([

            {
                url: "https://docs.google.com/forms/d/1gCLnUs6owd3KdZZbBsB3YwWjvlWbafSEqMZTvzPHoDQ/edit?ts=6155cfcb/"
            }

        ])


    } catch (error) {

    }

}

addParcour()