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
                url: "http://www.apoyourbano.org/",
                image: "20210920_ApoyoUrbano.png",
            },
            {
                url: "https://www.caf.fr/allocataires/caf-de-la-seine-saint-denis/coordonnees",
                image: "20210920_caf_93.png",
            },
            {
                url: "https://inseinesaintdenis.fr/",
                image: "20210920_INSSD.png",
            },
            {
                url: "https://evora-montreuil.webcollege.seinesaintdenis.fr/",
                image: "20210920_CesariaEvora.png",
            },
            {
                url: "https://hello-charly.com/",
                image: "20210920_HelloCharly.png",
            },
            {
                url: "https://explorjob.com/",
                image: "20210920_ExplorJob.png",
            },
            {
                url: "http://eiffel-gagny.org/",
                image: "20210920_GustaveEiffel.png",
            },
            {
                url: "https://www.cite-sciences.fr/fr/accueil/",
                image: "20210921_cite.png",
            },
            {
                url: "https://www.cressidf.org/",
                image: "20210920_logocress.png",
            },
            {
                url: "https://makesense.org/",
                image: "20210920_MakesenseDark.png",
            },
            {
                url: "https://www.montreuil.fr/",
                image: "20210921_montreuil.png",
            },
            {
                url: "https://moidans10ans.fr/",
                image: "20210921_MoiDans10Ans.png",
            },
            {
                url: "http://www.lephares.coop/",
                image: "20210920_Phares.png",
            },
            {
                url: "https://www.lespremieres.com/fr",
                image: "20210920_premieres.png",
            },
            {
                url: "http://www.robinsdesvilles.org/",
                image: "20210920_RobinsVilles.png",
            },
            {
                url: "https://seinesaintdenis.fr/",
                image: "20210920_ssd.png",
            },
            {
                url: "https://www.ticketforchange.org/",
                image: "20210920_TFC.png",
            }

        ])

    } catch (error) {

    }

}

addPartenaires()