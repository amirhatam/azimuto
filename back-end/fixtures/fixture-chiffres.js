const mongoose = require("mongoose")
const chiffresModel = require("../models/chiffresCles")

mongoose.connect("mongodb://localhost:27017/azimutoDB", (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("I'm connected to the database")
    }
})


const addChiffres = async () => {

    try {

        await chiffresModel.deleteMany({})

        await chiffresModel.insertMany([

            {
                rapport: "900",
                detail: "C’est le nombre de jeunes accompagnés par Azimuto !",
            },
            {
                rapport: "2",
                detail: "C’est le nombre de programmes de remobilisation scolaire réalisés !",
            },
            {
                rapport: "31",
                detail: "C’est le nombre de classes accompagnées !",
            },
            {
                rapport: "93%",
                detail: "C’est le pourcentage de jeunes déclarant connaître leur forces à la fin des parcours Azimuto !",
            },
            {
                rapport: "7",
                detail: "C’est le nombre de membres de l’équipe s’engageant pour la jeunesse !",
            },
            {
                rapport: "700",
                detail: "C’est le nombre d’heures d’ateliers réalisé par Azimuto depuis sa création !",
            }

        ])


    } catch (error) {

    }

}

addChiffres()