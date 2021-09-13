import React from "react";
import { MDBRow, MDBCol, MDBCardBody, MDBMask, MDBView } from "mdbreact";
import Manon from "../../assets/images/Team/MANON.png"
import Berangere from "../../assets/images/Team/BERANGERE.png"
import Gwenhael from "../../assets/images/Team/GWENHAEL.png"
import Laurie from "../../assets/images/Team/LAURIE.png"
import CATHERINE from "../../assets/images/Team/CATHERINE.png"
import VERONIQUE from "../../assets/images/Team/VERONIQUE.png"


const TeamPage = () => {
    return (
        <MDBView className="purple-slight px-5 pb-1 text-center">
            <MDBMask className='rgba-purple-slight ' />
            <MDBCardBody>
                <h2 className="h1-responsive font-weight-bold my-5">
                Notre Équipe
                </h2>
                <p className="h6 grey-text w-responsive mx-auto mb-5">
                Azimuto se base sur la force du collectif. Notre association fonctionne en gouvernance partagée. Découvrez ici les personnalités qui la compose : 
                </p>
                <MDBRow className="text-md-left">
                    <MDBCol lg="6" md="12" className="mb-5">
                        <MDBCol md="4" lg="6" className="float-left">
                            <MDBView waves>
                                <img
                                    src={Manon}
                                    className="mx-auto  mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                                    tag="img"
                                    alt="Sample avatar"

                                />
                            </MDBView>
                        </MDBCol>
                        <MDBCol md="8" lg="6" className="float-right ">
                            <h3 className=" font-weight-bold mb-3 text-danger">Manon Maugé-Imbault </h3>
                            <h5 className="font-weight-bold grey-text mb-3">
                                Co-fondatrice et Co-présidente
                            </h5>
                            <h5 className="font-weight-bold grey-text mb-3">
                                En charge de la coordination et du développement de la vie associative
                            </h5>
                            <p>
                                Azimuto, c'est pour moi faciliter la levée des barrières sociales pour les jeunes de tous les horizons en les accompagnant à devenir acteurs de leurs parcours.<p />
                            </p>
                            <p>
                                Formée en sciences politiques et en participation citoyenne, j’ai évolué professionnellement dans le champ de l'Économie Sociale et Solidaire et de l’innovation sociale à l’accompagnement des jeunes.
                            </p>
                            <p>
                                Mes valeurs phares : Émancipation, Justice et Bienveillance !
                            </p>

                        </MDBCol>
                    </MDBCol>

                    <MDBCol lg="6" md="12" className="mb-5">
                        <MDBCol md="4" lg="6" className="float-left">
                            <MDBView waves>
                                <img
                                    src={Gwenhael}
                                    className="mx-auto  mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                                    tag="img"
                                    alt="Sample avatar"
                                />
                            </MDBView>
                        </MDBCol>
                        <MDBCol md="8" lg="6" className="float-right">
                            <h3 className="font-weight-bold mb-3">Gwenhael Massa</h3>
                            <h5 className="font-weight-bold grey-text mb-3">
                                Co-présidente / Facilitatrice
                            </h5>
                            <h5 className=" font-weight-bold grey-text mb-3">
                                En charge de l’innovation de la pédagogie et du développement de la facilitation
                            </h5>
                            <p>
                                Azimuto, c’est pour moi offrir un espace de ressources aux jeunes pour leur permettre de se connaître, d’ouvrir leur esprit et leur conscience d’eux-mêmes afin qu’ils s’autorisent avec faire des choix alignés.
                            </p>
                            <p>
                                Mes valeurs phares : Authenticité - Action - Responsabilisation
                            </p>
                            <p>
                                Apprendre à mettre beaucoup de soi dans ce que l’on fait invite à l’exploration. Offrir le plus beaux des voyages à cette jeunesse.
                            </p>

                        </MDBCol>
                    </MDBCol>

                    <MDBCol lg="6" md="12" className="mb-5">
                        <MDBCol md="4" lg="6" className="float-left">
                            <MDBView waves>
                                <img
                                    src={Laurie}
                                    className="mx-auto  mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                                    tag="img"
                                    alt="Sample avatar"

                                />
                            </MDBView>
                        </MDBCol>
                        <MDBCol md="8" lg="6" className="float-right ">
                            <h3 className=" font-weight-bold mb-3">Laurie Massouf</h3>
                            <h5 className="font-weight-bold grey-text mb-3">
                                Co-présidente / Facilitatrice / Référente
                            </h5>
                            <h5 className="font-weight-bold grey-text mb-3">
                                communication & communauté
                            </h5>
                            <p>
                                Pourquoi Azimuto ? Pour permettre à tous les jeunes puissent vivre en toute sérénité  leur orientation au lieu de la subir !
                            </p>
                            <p>
                                J’ai découvert Azimuto au moment où je souhaitais m’impliquer et inspirer la jeunesse : les programmes et la pédagogie aident vraiment à se connaître et faire des choix éclairés. L’association participe aussi à dédramatiser ce sujet et réfléchir à son projet d’avenir en partant de soi-même.                            </p>
                            <p>
                                Mes valeurs phares : Optimisme, Ouverture, Authenticité
                            </p>
                            <p>
                                Peu importe ce que tu as choisis hier, tu peux toujours faire un nouveau choix et écrire  demain !
                            </p>

                        </MDBCol>
                    </MDBCol>

                    <MDBCol lg="6" md="12" className="mb-5">
                        <MDBCol md="4" lg="6" className="float-left">
                            <MDBView waves>
                                <img
                                    src={Berangere}
                                    className="mx-auto  mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                                    tag="img"
                                    alt="Sample avatar"
                                />
                            </MDBView>
                        </MDBCol>
                        <MDBCol md="8" lg="6" className="float-right">
                            <h3 className="font-weight-bold mb-3">Bérangère Dartau</h3>
                            <h5 className="font-weight-bold grey-text mb-3">
                                En appui sur la recherche de financements et de partenariats, participation à la stratégie de l’association
                            </h5>

                            <p >
                                Azimuto, c’est permettre aux jeunes d’explorer le champ de leurs possibles avant de faire leur choix d’orientation et d’être accompagner en toute bienveillance.                            </p>
                            <p >
                                J’ai des expériences dans l’accompagnement d’initiatives citoyennes et dans la gestion de projets d’économie sociale et solidaire. J’ai décidé de rejoindre Azimuto car c’est un projet qui se réalise de manière collaborative, dans la co-construction et qui  fait sens pour l’accompagnement des jeunes dans leur parcours.                             </p>
                            <p >
                                Mes valeurs phares : la persévérance, la découverte et la générosité !
                            </p>

                        </MDBCol>
                    </MDBCol>


                    <MDBCol lg="6" md="12" className="mb-5">
                        <MDBCol md="4" lg="6" className="float-left">
                            <MDBView waves>
                                <img
                                    src={VERONIQUE}
                                    className="mx-auto  mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                                    tag="img"
                                    alt="Sample avatar"

                                />
                            </MDBView>
                        </MDBCol>
                        <MDBCol md="8" lg="6" className="float-right ">
                            <h3 className=" font-weight-bold mb-3">Véronique Rosenfeld Bompy</h3>
                            <h5 className="font-weight-bold grey-text mb-3">
                                Co-présidente, facilitatrice, relais région nord, contributive à l’innovation pédagogique et stratégique
                            </h5>
                            <p>
                                Pour moi avec Azimuto c’est apprendre à faire les premiers pas sur le chemin de la connaissance de soi, expérimenter la prise de décision vers des choix personnels,       attiser son envie d’explorer au delà de son environnement habituel en s’appuyant notamment sur le potentiel d’énergie, de soutien et de créativité du groupe.                            </p>
                            <p>
                                Je me sens totalement en phase et investie dans une approche résolument positive, participative, active, responsabilisante et joyeuse. Ma longue expérience d’accompagnement et de ressources humaines dans divers mondes du travail m’a permis de l’expérimenter et d’en constater les immenses bénéfices.
                            </p>
                            <p>
                                Mes Valeurs:  Confiance,ouverture, bienveillance
                            </p>
                            <p>
                                Les plus grandes limites sont celles que tu te donnes, explorer, partager t’ouvriront de nouveaux horizons
                            </p>
                        </MDBCol>
                    </MDBCol>

                    <MDBCol lg="6" md="12" className="mb-5">
                        <MDBCol md="4" lg="6" className="float-left">
                            <MDBView waves>
                                <img
                                    src={CATHERINE}
                                    className="mx-auto  mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                                    tag="img"
                                    alt="Sample avatar"
                                />
                            </MDBView>
                        </MDBCol>
                        <MDBCol md="8" lg="6" className="float-right">
                            <h3 className="font-weight-bold mb-3">Catherine Leguillette</h3>
                            <h5 className="font-weight-bold grey-text mb-3">
                                Co-présidente / Référente Gestion & RH
                            </h5>

                            <p >
                                Entrée chez Azimuto avec un rôle de mentore pour quelques mois, j’y suis restée depuis 2020 par conviction ! Azimuto, c’est un engagement fort pour que chacun trouve la voie qui lui plaît et prenne en main son parcours dès le début de l’adolescence. Cela fait écho à une partie de mon expérience professionnelle que j’ai trouvée particulièrement valorisante et utile, l’accompagnement de salariés sur leur projet professionnel.
                            </p>
                            <p >
                                Mes valeurs phares : Ecoute, Bienveillance et Persévérance
                            </p>
                            <p >
                                Guider, accompagner, partager mon expérience … apporter ma pierre à l’édifice d’Azimuto me donne beaucoup de fierté !
                            </p>

                        </MDBCol>
                    </MDBCol>

                </MDBRow>
            </MDBCardBody>
        </MDBView>
    );
}

export default TeamPage;