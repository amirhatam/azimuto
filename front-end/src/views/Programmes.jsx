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
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem
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


const Programmes = () => {

    return (
        <div>

            <MDBView >

                <MDBView className="purple-slight ">
                    <section className="mb-5" style={{ marginTop: "15vmax" }}>
                        <MDBMask />
                        <h4 className='display-6 text-center font-weight-bold mb-0 pt-md-3 pt-3'>
                            NOTRE PÉDAGOGIE EXPÉRIENTIELLE</h4>
                        <MDBContainer className="py-5 my-5 ">
                            <MDBRow>
                                <MDBCol className="px-0" lg="7">
                                    <p className="h4 mx-5 px-5 text-box font-weight-light">
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
                            <MDBRow className="my-5 pt-5">
                                <p className="h4 text-box">
                                    Une méthode alliant temps individuels et collectifs basée sur notre pédagogie active, coopérative et sur
                                    l'intelligence collective, portée par nos facilitateurs et facilitatrices dont les maîtres mots sont :
                                </p>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol md="12" className="my-5">
                                    <MDBView hover cascade waves className="col-6">
                                        <img
                                            src={CooperationLogo}
                                            alt=""
                                            className="img-fluid "
                                        />
                                        <MDBMask overlay="white-slight" className="waves-light" />
                                    </MDBView>
                                    <MDBCardBody cascade className=" ">

                                        <p className="h4 font-weight-light px-5">
                                            "Tout seul, on va plus vite, ensemble, on va plus loin." C'est aussi en coopérant que nous pouvons nous
                                            rendre compte de la place que l'on prend et envisager la place que l'on souhaite dans la société.
                                        </p>

                                    </MDBCardBody>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol md="12" className="my-5">
                                    <MDBView hover cascade waves className="offset-6 col-6">
                                        <img
                                            src={BienveillanceLogo}
                                            alt=""
                                            className="img-fluid "
                                        />
                                        <MDBMask overlay="white-slight" className="waves-light" />
                                    </MDBView>
                                    <MDBCardBody cascade className="text-end pt-0">
                                        <p className="h4 font-weight-light">
                                            Nous sommes convaincues de l'immense potentiel de chacun !
                                        </p>
                                    </MDBCardBody>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol md="12" className="my-5">
                                    <MDBView hover cascade waves className="col-6">
                                        <img
                                            src={OptimismeLogo}
                                            alt=""
                                            className="img-fluid "
                                        />
                                        <MDBMask overlay="white-slight" className="waves-light" />
                                    </MDBView>
                                    <MDBCardBody cascade className=" ">

                                        <p className="h4 font-weight-light">
                                            Avec notre perception positive du monde, nous souhaitons transmettre notre énergie.
                                        </p>

                                    </MDBCardBody>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </section>

                </MDBView>

                <MDBView className="purple-slight">
                    <MDBMask className='rgba-purple-slight ' />
                    <MDBContainer>

                        <MDBCardBody className="my-5">
                            <h4 className='display-6 text-center font-weight-bold my-5 pt-md-3 pt-3'> NOS PARCOURS</h4>

                            <MDBCardGroup>
                                <MDBCard className="text-center mx-2">
                                    <MDBCardImage src={LogoBouee} alt="MDBCard image cap" top hover
                                        overlay="white-slight" />
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

                                <MDBCard className="text-center mx-2">
                                    <MDBCardImage src={LogoBoussole} alt="MDBCard image cap" top hover
                                        overlay="white-slight" />
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

                                <MDBCard className="text-center mx-2">
                                    <MDBCardImage src={LogoCardinaux} alt="MDBCard image cap" top hover
                                        overlay="white-slight" />
                                    <MDBCardBody>
                                        <MDBCardTitle className="mt-5 mb-4" tag="h5"><span className="font-weight-light">
                                            LE</span> PARCOURS
                                            TOUS AZIMUTS :<span className="font-weight-light"> POUR LES 15-25 ANS DURANT LES
                                                VACANCES SCOLAIRES</span>
                                        </MDBCardTitle>
                                        <MDBCardText className="px-4 text-box">
                                            Some quick example text to build on the card title and make up
                                            the bulk of the card's content.
                                        </MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCardGroup>
                        </MDBCardBody>

                        <MDBView >
                            <MDBMask className='' />
                            <MDBContainer className="py-5 my-5">
                                <MDBRow>
                                    <MDBCol lg="7">
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
                            </MDBContainer>
                        </MDBView>
                    </MDBContainer>
                </MDBView>



                <MDBView className="purple-slight ">
                    <MDBContainer className=" my-5 ">
                        <MDBCardBody className="my-5">

                            <h4 className='display-6 my-5  text-center font-weight-bold mb-0 pt-md-3 pt-3'>
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
                                    <h3 className="font-weight-bold mb-3 p-0">
                                    </h3>
                                    <p className="h6 dark-grey-text text-box">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque nostrum, illum autem maiores magnam corporis aliquid consequatur, non eveniet est accusantium quod minima error, vero ex laborum distinctio eum adipisci nesciunt recusandae illo minus. Eveniet debitis nulla voluptas, quae iure accusantium est enim eos architecto facilis perferendis corporis, nam corrupti iste voluptatibus quisquam molestiae. Voluptatibus velit maiores dolorem porro incidunt rem at accusantium, fuga perferendis?
                                    </p>
                                    <p className="h4 mt-4">
                                        <span className="font-weight-bold">Lisa</span>
                                        <span className="h5 dark-grey-text">, 17 ans, participante au parcours Tous Azimuts, 19/04/2018</span>
                                    </p>
                                </MDBCol>
                            </MDBRow>

                            <MDBRow className="my-5">
                                <MDBCol lg="7" xl="8">
                                    <h3 className="font-weight-bold mb-3 p-0">
                                    </h3>
                                    <p className="h6 dark-grey-text text-box">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque nostrum, illum autem maiores magnam corporis aliquid consequatur, non eveniet est accusantium quod minima error, vero ex laborum distinctio eum adipisci nesciunt recusandae illo minus. Eveniet debitis nulla voluptas, quae iure accusantium est enim eos architecto facilis perferendis corporis, nam corrupti iste voluptatibus quisquam molestiae. Voluptatibus velit maiores dolorem porro incidunt rem at accusantium, fuga perferendis?
                                    </p>
                                    <p className="h4 mt-4">
                                        <span className="font-weight-bold">Amane</span>
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



                <MDBView className="purple-slight">
                    <MDBMask className='rgba-purple-slight ' />
                    <MDBContainer>

                        <MDBCardBody className="mt-5 pb-0">
                            <h4 className='display-6 text-center font-weight-bold mt-5 pt-md-3 pt-3'>NOS CHIFFRES CLÉS</h4>
                        </MDBCardBody>
                        <MDBCarousel activeItem={1} length={2} slide={true} showControls={false} showIndicators={true} multiItem>
                            <MDBCarouselInner>
                                <MDBRow className="my-5 text-center">
                                    <MDBCarouselItem itemId="1">
                                        <MDBRow>
                                            <MDBCol lg="4" md="12" className="mb-lg-0 my-5">
                                                <MDBCard style={{ height: "400px" }} className="">
                                                    <div className="aqua-gradient rounded-top">
                                                        <h2
                                                            className="font-weight-bold option white-text p-5 mb-0"
                                                        >
                                                            900
                                                        </h2>
                                                    </div>
                                                    <MDBCardBody className="h3 font-weight-light px-5 my-5 ">
                                                        C’est le nombre de jeunes accompagnés par Azimuto !
                                                    </MDBCardBody>
                                                </MDBCard>
                                            </MDBCol>

                                            <MDBCol lg="4" md="12" className="mb-lg-0 my-5">
                                                <MDBCard style={{ height: "400px" }} className="">
                                                    <div className="peach-gradient rounded-top ">
                                                        <h2
                                                            className="font-weight-bold option white-text p-5 mb-0"
                                                        >
                                                            2
                                                        </h2>
                                                    </div>
                                                    <MDBCardBody className="h3 font-weight-light px-5 my-5 ">
                                                        C’est le nombre de programmes de remobilisation scolaire réalisés !
                                                    </MDBCardBody>
                                                </MDBCard>
                                            </MDBCol>
                                            <MDBCol lg="4" md="12" className="mb-lg-0 my-5">
                                                <MDBCard style={{ height: "400px" }} className="">
                                                    <div className="purple-gradient rounded-top">
                                                        <h2
                                                            className="font-weight-bold option white-text p-5 mb-0"
                                                        >
                                                            31
                                                        </h2>
                                                    </div>
                                                    <MDBCardBody className="h3 font-weight-light px-5 my-5 ">
                                                        C’est le nombre de classes accompagnées !
                                                    </MDBCardBody>
                                                </MDBCard>

                                            </MDBCol>
                                        </MDBRow>
                                    </MDBCarouselItem>

                                    <MDBCarouselItem itemId="2">
                                        <MDBRow>
                                            <MDBCol lg="4" md="12" className="mb-lg-0 my-5">
                                                <MDBCard style={{ height: "400px" }} className="">
                                                    <div className="aqua-gradient rounded-top">
                                                        <h2
                                                            className="font-weight-bold option white-text p-5 mb-0"
                                                        >
                                                            93%
                                                        </h2>
                                                    </div>
                                                    <MDBCardBody className="h3 font-weight-light px-5 my-5 ">
                                                        C’est le pourcentage de jeunes déclarant connaître leur forces à la fin des parcours Azimuto !
                                                    </MDBCardBody>
                                                </MDBCard>
                                            </MDBCol>

                                            <MDBCol lg="4" md="12" className="mb-lg-0 my-5">
                                                <MDBCard style={{ height: "400px" }} className="">
                                                    <div className="peach-gradient rounded-top ">
                                                        <h2
                                                            className="font-weight-bold option white-text p-5 mb-0"
                                                        >
                                                            7
                                                        </h2>
                                                    </div>
                                                    <MDBCardBody className="h3 font-weight-light px-5 my-5 ">
                                                        C’est le nombre de membres de l’équipe s’engageant pour la jeunesse !
                                                    </MDBCardBody>
                                                </MDBCard>
                                            </MDBCol>
                                            <MDBCol lg="4" md="12" className="mb-lg-0 my-5">
                                                <MDBCard style={{ height: "400px" }} className="">
                                                    <div className="purple-gradient rounded-top">
                                                        <h2
                                                            className="font-weight-bold option white-text p-5 mb-0"
                                                        >
                                                            700
                                                        </h2>
                                                    </div>
                                                    <MDBCardBody className="h3 font-weight-light px-5 my-5 ">
                                                        C’est le nombre d’heures d’ateliers réalisé par Azimuto depuis sa création !
                                                    </MDBCardBody>
                                                </MDBCard>
                                            </MDBCol>
                                        </MDBRow>
                                    </MDBCarouselItem>
                                </MDBRow>
                            </MDBCarouselInner>
                        </MDBCarousel>
                    </MDBContainer>
                </MDBView>
















            </MDBView>
        </div>

    );
}

export default Programmes;