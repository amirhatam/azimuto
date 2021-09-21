const mongoose = require('mongoose')
const partenairesModel = require("../models/partenaires")

mongoose.connect("mongodb://localhost:27017/azimutoDB", (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("I'm connected to the database")
    }
})

const addPartenaires = async () => {

    try {

        await partenairesModel.deleteMany({})

        await partenairesModel.insertMany([

            {
                url: "Azimuto, c'est pour moi faciliter la levée des barrières sociales pour les jeunes de tous les horizons en les accompagnant à devenir acteurs de leurs parcours. Formée en sciences politiques et en participation citoyenne, j’ai évolué professionnellement dans le champ de l'Économie Sociale et Solidaire et de l’innovation sociale à l’accompagnement des jeunes.Mes valeurs phares : Émancipation, Justice et Bienveillance !",
                image: "/Manon%20Maug%C3%A9-Imbault_20210912.png",
            },
            {
                url: "Azimuto, c’est pour moi offrir un espace de ressources aux jeunes pour leur permettre de se connaître, d’ouvrir leur esprit et leur conscience d’eux-mêmes afin qu’ils s’autorisent avec faire des choix alignés.Mes valeurs phares : Authenticité - Action - Responsabilisation Apprendre à mettre beaucoup de soi dans ce que l’on fait invite à l’exploration. Offrir le plus beaux des voyages à cette jeunesse.",
                image: "/Gwenhael%20Massa_20210913.png",
            }

        ])

    } catch (error) {

    }

}

addPartenaires()