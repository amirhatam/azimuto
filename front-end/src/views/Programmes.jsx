import {
    MDBCol,
    MDBRow,
    MDBView,
    MDBMask,
    MDBContainer,
    MDBCardBody,
    MDBCard,
    MDBCardImage,
    MDBCardTitle,
    MDBCardText,
    MDBCardGroup,
} from 'mdbreact';
import React from 'react';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';

import Illustration from "../assets/images/Illustration.png"
import CooperationLogo from "../assets/images/cooperation.png"
import OptimismeLogo from "../assets/images/Optimisme.png"
import BienveillanceLogo from "../assets/images/Bienveillance.png"
import LogoBouee from "../assets/images/Bouee.png"
import LogoBoussole from "../assets/images/Boussole.png"
import LogoCardinaux from "../assets/images/cardinaux.png"
import CarnetDeBord from "../assets/images/CarnetDeBord.jpg"
import Lisa from "../assets/images/Lisa.jpg"
import Amane from "../assets/images/Amane.jpg"
import NosChiffres from './chiffresCles/NosChiffres';


const Programmes = () => {
    return (
        <div className="bgc-light">
            <MDBView className="bgc-white">
                <MDBContainer
                    style={{ marginTop: "15vmax" }}
                >
                    <h4 className='display-6 text-center fontW mb-5 pb-5 pt-md-3 pt-3'>
                        NOTRE PÉDAGOGIE EXPÉRIENTIELLE</h4>

                    <MDBRow className="">
                        <MDBCol className="d-flex align-items-center px-5" lg="7">
                            <p className="h4  text-box font-weight-light">
                                Nous créons et faisons vivre des expériences de
                                coopération pour mieux se connaître.
                            </p>
                        </MDBCol>
                        <MDBCol className="px-0" lg="5">
                            <MDBView className="rounded mx-5 z-depth-2 mb-lg-0 mb-4 " hover waves>
                                <img
                                    className="img-fluid"
                                    src={Illustration}
                                    alt=""
                                />

                            </MDBView>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className=" mt-5 pt-5">
                        <MDBCol className="offset-1  col-10">
                            <p className="h4 text-box">
                                Une méthode alliant temps individuels et collectifs basée sur notre pédagogie active, coopérative et sur
                                l'intelligence collective, portée par nos facilitateurs et facilitatrices dont les maîtres mots sont :
                            </p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol md="4" className="my-5 px-0">
                            <MDBView hover cascade waves className="">
                                <img
                                    src={CooperationLogo}
                                    alt=""
                                    className="img-fluid "
                                />
                                <MDBMask overlay="white-slight" className="waves-light" />
                            </MDBView>
                        </MDBCol>
                        <MDBCol md="8" className="d-flex align-items-center ">
                            <MDBCardBody cascade className=" px-0 ">
                                <h1 className="" style={{ fontWeight: "400" }}>COOPÉRATION</h1>
                                <p className="text-start h4 font-weight-light ">
                                    "Tout seul, on va plus vite, ensemble, on va plus loin." C'est aussi en coopérant que nous pouvons nous
                                    rendre compte de la place que l'on prend et envisager la place que l'on souhaite dans la société.
                                </p>
                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol md="8" className="d-flex align-items-center ">
                            <MDBCardBody cascade className="text-end pt-0">
                                <p className="h4 font-weight-light">
                                    Nous sommes convaincues de l'immense potentiel de chacun !
                                </p>
                            </MDBCardBody>
                        </MDBCol>
                        <MDBCol md="4" className="my-5 px-0">
                            <MDBView hover cascade waves className="">
                                <img
                                    src={BienveillanceLogo}
                                    alt=""
                                    className="img-fluid "
                                />
                                <MDBMask overlay="white-slight" className="waves-light" />
                            </MDBView>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol md="4" className="my-5 px-0">
                            <MDBView hover cascade waves className="">
                                <img
                                    src={OptimismeLogo}
                                    alt=""
                                    className="img-fluid "
                                />
                                <MDBMask overlay="white-slight" className="waves-light" />
                            </MDBView>
                        </MDBCol>
                        <MDBCol md="8" className="d-flex align-items-center px-0">
                            <MDBCardBody cascade className="px-0 ">
                                <p className="h4 font-weight-light">
                                    Avec notre perception positive du monde, nous souhaitons transmettre notre énergie.
                                </p>

                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </MDBView>

            <MDBView className="">
                <MDBContainer>
                    <MDBCardBody className="">
                        <h4 className='display-6 text-center fontW my-5 pt-md-3 pt-3'> NOS PARCOURS</h4>
                        <MDBCardGroup>
                            <MDBCard className="text-center pt-5 pb-2 mx-2">
                                <MDBCardImage src={LogoBouee} alt="MDBCard image cap" top hover
                                    overlay="white-slight" className="col-6 m-auto " />
                                <MDBCardBody>
                                    <MDBCardTitle className="my-5" tag="h5">
                                        <span className="font-weight-light">
                                            LE</span> PARCOURS
                                        COLLÈGE/LYCÉE : <br />
                                        <span className="font-weight-light">ATELIERS COLLECTIFS </span>
                                    </MDBCardTitle>
                                    <MDBCardText className="px-4 text-box">
                                        Mieux se connaître pour faire
                                        ses choix et avancer
                                        sereinement dans son
                                        orientation scolaire et
                                        professionnelle.
                                    </MDBCardText>
                                </MDBCardBody>
                            </MDBCard>

                            <MDBCard className="text-center pt-5 pb-2 mx-2">
                                <MDBCardImage src={LogoBoussole} alt="MDBCard image cap" top hover
                                    overlay="white-slight" className="col-6 m-auto " />
                                <MDBCardBody>
                                    <MDBCardTitle className="my-5" tag="h5">
                                        <span className="font-weight-light">
                                            LE</span> PROGRAMME DE
                                        REMOBILISATION
                                        SCOLAIRE</MDBCardTitle>
                                    <MDBCardText className="px-4 text-box">
                                        Monter un projet en équipe de
                                        A à Z pour se connaitre dans
                                        l’action et développer de
                                        nouvelles
                                        compétences dans l’action
                                        telles que la collaboration,
                                        la créativité, la communication et
                                        l’esprit critique !
                                    </MDBCardText>
                                </MDBCardBody>
                            </MDBCard>

                            <MDBCard className="text-center pt-5 pb-2 mx-2">
                                <MDBCardImage src={LogoCardinaux} alt="MDBCard image cap" top hover
                                    overlay="white-slight" className="col-6 m-auto " />
                                <MDBCardBody>
                                    <MDBCardTitle className="mt-5 mb-4" tag="h5"><span className="font-weight-light">
                                        LE</span> PARCOURS
                                        TOUS AZIMUTS :<span className="font-weight-light"> POUR LES 15-25 ANS DURANT LES
                                            VACANCES SCOLAIRES</span>
                                    </MDBCardTitle>
                                    <MDBCardText className="px-4 text-box">
                                        Un parcours de plusieurs jours
                                        pour se découvrir soi-même
                                        avec nos ateliers et découvrir
                                        les opportunités
                                        de l'Économie Sociale et
                                        Solidaire au travers de
                                        témoignages de
                                        professionnels.
                                    </MDBCardText>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCardGroup>
                    </MDBCardBody>

                    <MDBView className="my-5">
                        <MDBRow>
                            <MDBCol className="d-flex align-items-center" lg="7">
                                <p className="h4 text-box font-weight-light">
                                    Nous passons toujours par une phase de diagnostic des besoins
                                    des établissements et structures jeunesse pour transmettre des
                                    clés et des outils adaptés.
                                </p>
                            </MDBCol>
                            <MDBCol lg="5">
                                <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                                    <img
                                        className="img-fluid"
                                        src={CarnetDeBord}
                                        alt=""
                                    />
                                </MDBView>
                            </MDBCol>
                        </MDBRow>

                    </MDBView>
                </MDBContainer>
            </MDBView>

            <MDBView className="bgc-white">
                <MDBContainer>
                    <MDBCardBody className="my-5">

                        <h4 className='display-6 my-5  text-center fontW mb-0'>
                            TÉMOIGNAGES</h4>
                        <MDBRow className="my-5">
                            <MDBCol lg="5" xl="4">
                                <MDBView hover className="rounded z-depth-1-half mb-lg-0 mb-4">
                                    <img
                                        className="img-fluid"
                                        src={Lisa}
                                        alt=""
                                    />
                                </MDBView>
                            </MDBCol>
                            <MDBCol lg="7" xl="8">
                                <h3 className="fontW mb-3 p-0">
                                </h3>
                                <p className="h6 dark-grey-text text-box">
                                    "Ça m'a apporté du progrès et de la confiance en moi. J’ai plus réfléchi et ça m’a ouvert plus de
                                    portes dans ma tête. Ce qui m’a le plus marqué, c’est le travail en groupe.”                                </p>
                                <p className="h4 mt-4">
                                    <span className="fontW">Lisa</span>
                                    <span className="h5 dark-grey-text">, 17 ans, participante au parcours Tous Azimuts</span>
                                </p>
                            </MDBCol>
                        </MDBRow>

                        <MDBRow className="my-5">
                            <MDBCol lg="7" xl="8">
                                <h3 className="fontW mb-3 p-0">
                                </h3>
                                <p className="h6 dark-grey-text text-box">
                                    "Le stage Tous Azimuts ça a vraiment été
                                    l’impulsion, quand je compare entre le
                                    stage et maintenant, là j’ai les idées
                                    vraiment plus claires.
                                    J’ai trouvé un chemin pour mon avenir. Le
                                    stage ça a été un petit déclic : je sais ce
                                    que je veux, ce que je veux pas.
                                    Ça nous aide, on remet tout à zéro, on remet
                                    tout au clair.”
                                </p>
                                <p className="h4 mt-4">
                                    <span className="fontW">Amane</span>
                                    <span className="h5 dark-grey-text">, 17 ans, participante au parcours Tous Azimuts</span>
                                </p>
                            </MDBCol>
                            <MDBCol lg="5" xl="4">
                                <MDBView hover className="rounded z-depth-1-half mb-lg-0 mb-4">
                                    <img
                                        className="img-fluid"
                                        src={Amane}
                                        alt=""
                                    />
                                </MDBView>
                            </MDBCol>
                        </MDBRow>
                    </MDBCardBody>
                </MDBContainer>
            </MDBView>
            <NosChiffres />

        </div >

    );
}

export default Programmes;