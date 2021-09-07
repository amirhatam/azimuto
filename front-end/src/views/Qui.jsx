import {
    MDBCol,
    MDBRow,
    MDBMask,
    MDBView,
    MDBContainer,
} from 'mdbreact';
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';

import TeamPage from '../components/Team';
import "../assets/styles/Qui.css"


import RegretteLogo from "../assets/images/Regret.png"
import DouteLogo from "../assets/images/doute.png"
import StressLogo from "../assets/images/Stress.png"

import BouteilleLogo from "../assets/images/Bouteille.png"
import AmbitionLogo from "../assets/images/Ambition.png"
import MissionLogo from "../assets/images/Mission.png"
import AudreyManon from "../assets/images/Team/AudreyManon.jpg"



const Qui = () => {

    return (
        <div>

            <MDBView className="purple-slight">
                <section className="mb-5" style={{ marginTop: "15vmax" }}>
                    <MDBMask className='rgba-purple-slight ' />
                    <MDBContainer>
                        <MDBRow >
                            <MDBCol md='12' className='mb-4 text-center '>
                                <MDBCol md='12' className='mb-4 text-center'>
                                    <h4 className='display-6 font-weight-bold mb-0 pt-md-3 pt-3'>
                                        NOTRE RAISON D'ÊTRE</h4>
                                    <h4 className=' font-weight-light AziPhrase pt-md-5 pt-sm-2 pt-5 pb-md-5 pb-sm-3 pb-5 '>
                                        Parce-que nous rêvons d'un monde où chaque jeune se sente libre de choisir son parcours
                                        et de trouver sa place dans une société qui évolue.
                                    </h4>

                                </MDBCol>
                                <MDBRow className="mt-4">
                                    <MDBCol md="4">
                                        <MDBView waves>
                                            <img
                                                src={RegretteLogo}
                                                className="img-fluid"
                                                alt=""
                                            />
                                            <label className="h5 mt-2">
                                                1 jeune sur 3 regrette son choix
                                                d'orientation
                                            </label>
                                        </MDBView>
                                    </MDBCol>
                                    <MDBCol md="4">
                                        <MDBView waves>
                                            <img
                                                src={StressLogo}
                                                className="img-fluid"
                                                alt=""
                                            />
                                            <label className="h5 mt-2">2 jeunes sur 3 vivent leur
                                                orientation comme stressant</label>
                                        </MDBView>
                                    </MDBCol>
                                    <MDBCol md="4">
                                        <MDBView waves>
                                            <img
                                                src={DouteLogo}
                                                className="img-fluid"
                                                alt=""
                                            />
                                            <p className="h5 mt-2"><mark className="bg-warning">
                                                1 jeune sur deux a déjà douté
                                                de ses compétences pour
                                                réussir son parcours
                                            </mark>
                                            </p>
                                        </MDBView>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>
            </MDBView>

            <MDBView>
                <MDBMask className='rgba-purple-slight ' />
                <MDBContainer>
                    <MDBRow className="text-center my-5 p-0 ">
                        <MDBCol md="6">
                            <MDBView waves>
                                <img
                                    src={BouteilleLogo}
                                    className="img-fluid mt-5"
                                    alt=""
                                />
                            </MDBView>
                        </MDBCol>
                        <MDBCol className=" border border-left-0 border-dark  p-5" md="6">
                            <MDBView >
                                <h4 className=' font-weight-bold px-4  mt-5  mb-5 pt-md-3 pt-3'>
                                    NOTRE RAISON D'ÊTRE
                                    UN PROBLÈME DE SOCIÉTÉ URGENT ET
                                    IMPORTANT
                                </h4>
                                <h4 className='text-box font-weight-light  pt-md-3 pt-sm-3 pt-2 px-5  '>
                                    Une orientation subie entraîne du décrochage
                                    scolaire et ne permet pas aux jeunes de
                                    s'épanouir dans une filière qu'ils auraient choisie.
                                    L’orientation peut être vécue de manière
                                    stressante.
                                </h4>
                            </MDBView>
                        </MDBCol>

                        <MDBCol className="border border-right-0 border-dark  p-5" md="6">
                            <MDBView >
                                <h4 className=' font-weight-bold my-5 mb-0 pt-md-3 pt-3'>
                                    NOTRE AMBITION
                                </h4>
                                <h4 className='text-box font-weight-light  pt-md-3 pt-sm-3 pt-2 px-5  '>
                                    Nous avons pour ambition de donner accès à
                                    tous les jeunes de 13 à 25 ans à nos
                                    parcours afin qu’ils vivent leur orientation plus
                                    sereinement et qu’ils reprennent confiance en
                                    l’avenir.
                                </h4>

                            </MDBView>
                        </MDBCol>
                        <MDBCol md="6">
                            <MDBView waves>
                                <img
                                    src={AmbitionLogo}
                                    className="img-fluid mt-5"
                                    alt=""
                                />

                            </MDBView>
                        </MDBCol>

                        <MDBCol md="6">
                            <MDBView className="mt-5" waves>
                                <img
                                    src={MissionLogo}
                                    className="img-fluid mt-5 pt-5"
                                    alt=""
                                />

                            </MDBView>
                        </MDBCol>
                        <MDBCol className="border  border-left-0 border-dark mb-5 p-5 " md="6">
                            <MDBView  >
                                <h4 className=' font-weight-bold py-5 mb-0 pt-md-3 mt-4'>
                                    NOTRE MISSION
                                </h4>

                                <h4 className='text-box font-weight-light py-5 pt-md-3 pt-sm-3 pt-2 px-5  '>
                                    Choisir, ça s’apprend ! Nous sommes convaincus de l'immense potentiel
                                    de chacun et que celui-ci se révèle grâce à une
                                    meilleure connaissance de soi, de ses forces et
                                    aspirations pour l’avenir !
                                    Notre mission est de développer l’aptitude à
                                    s’orienter : c’est une compétence qui s’acquiert et
                                    qui est nécessaire à l’épanouissement
                                    professionnel et personnel.
                                </h4>

                            </MDBView>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </MDBView>

            <TeamPage />

            <MDBView >
                <MDBMask className='rgba-purple-slight ' />
                <MDBContainer className="py-5 my-5">
                    <MDBRow>
                        <MDBCol lg="7">
                            <p className="h4 text-box font-weight-light">
                                Azimuto est né de la rencontre d’Audrey et
                                Manon. Nous étions chargées d’animation d’une
                                Coopérative Éphémère de jeunesse auprès de
                                jeunes de 18-30 ans issus des quartiers Politique
                                de la Ville. Cette expérience nous a permis de
                                réaliser qu’en chacun de ces jeunes, il y avait un
                                immense potentiel qui ne demandait qu’à être
                                révélé mais qui avait souvent été éteint par une
                                orientation subie des années auparavant. L’idée
                                d’Azimuto est née de cette rencontre et de ce
                                constat.
                            </p>
                        </MDBCol>
                        <MDBCol lg="5">
                            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                                <img
                                    className="img-fluid"
                                    src={AudreyManon}
                                    alt=""
                                />
                               
                            </MDBView>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </MDBView>

        </div>

    );
}

export default Qui;