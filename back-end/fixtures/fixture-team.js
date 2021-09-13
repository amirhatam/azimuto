const mongoose = require('mongoose')
const teamModel = require("../models/team")

mongoose.connect("mongodb://localhost:27017/azimutoDB", (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("I'm connected to the database")
    }
})

const addTeam = async () => {

    try {

        await teamModel.deleteMany({})

        await teamModel.insertMany([

            {
                name: "Manon Maugé-Imbault",
                post:"Co-fondatrice et Co-présidente En charge de la coordination et du développement de la vie associative",
                description: "Azimuto, c'est pour moi faciliter la levée des barrières sociales pour les jeunes de tous les horizons en les accompagnant à devenir acteurs de leurs parcours. Formée en sciences politiques et en participation citoyenne, j’ai évolué professionnellement dans le champ de l'Économie Sociale et Solidaire et de l’innovation sociale à l’accompagnement des jeunes.Mes valeurs phares : Émancipation, Justice et Bienveillance !",
                image: "Test",
                // role: 2
            },
            {
                name: "Gwenhael Massa",
                post:"Co-présidente / Facilitatrice En charge de l’innovation de la pédagogie et du développement de la facilitation",
                description: "Azimuto, c’est pour moi offrir un espace de ressources aux jeunes pour leur permettre de se connaître, d’ouvrir leur esprit et leur conscience d’eux-mêmes afin qu’ils s’autorisent avec faire des choix alignés.Mes valeurs phares : Authenticité - Action - Responsabilisation Apprendre à mettre beaucoup de soi dans ce que l’on fait invite à l’exploration. Offrir le plus beaux des voyages à cette jeunesse.",
                image: "Test",
                // role: 2
            },
            {
                name: "Laurie Massouf",
                post:"Co-présidente / Facilitatrice / Référente communication & communauté",
                description: "Pourquoi Azimuto ? Pour permettre à tous les jeunes puissent vivre en toute sérénité leur orientation au lieu de la subir ! J’ai découvert Azimuto au moment où je souhaitais m’impliquer et inspirer la jeunesse : les programmes et la pédagogie aident vraiment à se connaître et faire des choix éclairés. L’association participe aussi à dédramatiser ce sujet et réfléchir à son projet d’avenir en partant de soi-même. Mes valeurs phares : Optimisme, Ouverture, Authenticité Peu importe ce que tu as choisis hier, tu peux toujours faire un nouveau choix et écrire demain !",
                image: "Test",
                // role: 2
            },
            {
                name: "Bérangère Dartau",
                post:"En appui sur la recherche de financements et de partenariats, participation à la stratégie de l’association",
                description: "Azimuto, c’est permettre aux jeunes d’explorer le champ de leurs possibles avant de faire leur choix d’orientation et d’être accompagner en toute bienveillance. J’ai des expériences dans l’accompagnement d’initiatives citoyennes et dans la gestion de projets d’économie sociale et solidaire. J’ai décidé de rejoindre Azimuto car c’est un projet qui se réalise de manière collaborative, dans la co-construction et qui fait sens pour l’accompagnement des jeunes dans leur parcours. Mes valeurs phares : la persévérance, la découverte et la générosité !",
                image: "Test",
                // role: 2
            },
            {
                name: "Véronique Rosenfeld Bompy",
                post:"Co-présidente, facilitatrice, relais région nord, contributive à l’innovation pédagogique et stratégique",
                description: "Pour moi avec Azimuto c’est apprendre à faire les premiers pas sur le chemin de la connaissance de soi, expérimenter la prise de décision vers des choix personnels, attiser son envie d’explorer au delà de son environnement habituel en s’appuyant notamment sur le potentiel d’énergie, de soutien et de créativité du groupe. Je me sens totalement en phase et investie dans une approche résolument positive, participative, active, responsabilisante et joyeuse. Ma longue expérience d’accompagnement et de ressources humaines dans divers mondes du travail m’a permis de l’expérimenter et d’en constater les immenses bénéfices. Mes Valeurs: Confiance,ouverture, bienveillance Les plus grandes limites sont celles que tu te donnes, explorer, partager t’ouvriront de nouveaux horizons",
                image: "Test",
                // role: 2
            },
            {
                name: "Catherine Leguillette",
                post:"Co-présidente / Référente Gestion & RH",
                description: "Entrée chez Azimuto avec un rôle de mentore pour quelques mois, j’y suis restée depuis 2020 par conviction ! Azimuto, c’est un engagement fort pour que chacun trouve la voie qui lui plaît et prenne en main son parcours dès le début de l’adolescence. Cela fait écho à une partie de mon expérience professionnelle que j’ai trouvée particulièrement valorisante et utile, l’accompagnement de salariés sur leur projet professionnel. Mes valeurs phares : Ecoute, Bienveillance et Persévérance Guider, accompagner, partager mon expérience … apporter ma pierre à l’édifice d’Azimuto me donne beaucoup de fierté !",
                image: "Test",
                // role: 2
            },

        ])

    } catch (error) {

    }

}

addTeam()