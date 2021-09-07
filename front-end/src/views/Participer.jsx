import {
    MDBCol, MDBRow, MDBMask, MDBView, MDBContainer, MDBBtn, Link, MDBIcon, MDBCard, MDBCardImage, MDBCardBody
} from 'mdbreact';
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import '../assets/styles/Home.css';
import '../assets/styles/Qui.css';


import TFC from "../assets/images/LogoPartenaires/TFC.png"
import ApoyoUrbano from "../assets/images/LogoPartenaires/ApoyoUrbano.jpg"
import CAF from "../assets/images/LogoPartenaires/caf_93.png"
import Cite from "../assets/images/LogoPartenaires/cite.jpg"
import CesariaEvora from "../assets/images/LogoPartenaires/CesariaEvora.PNG"
import HelloCharly from "../assets/images/LogoPartenaires/HelloCharly.jpeg"
import INSSD from "../assets/images/LogoPartenaires/INSSD.jpg"
import Montreuil from "../assets/images/LogoPartenaires/montreuil.jpg"
import Logocress from "../assets/images/LogoPartenaires/logocress.jpg"
import ExplorJob from "../assets/images/LogoPartenaires/ExplorJob.png"
import GustaveEiffel from "../assets/images/LogoPartenaires/GustaveEiffel.PNG"
import SSD from "../assets/images/LogoPartenaires/ssd.png"
import Phares from "../assets/images/LogoPartenaires/Phares.png"
import Premieres from "../assets/images/LogoPartenaires/premieres.png"
import RobinsVilles from "../assets/images/LogoPartenaires/RobinsVilles.png"
import MoiDans10Ans from "../assets/images/LogoPartenaires/MoiDans10Ans.png"
import MakesenseDark from "../assets/images/LogoPartenaires/MakesenseDark.png"



const Participer = () => {

    return (
        <div>


            <MDBView className="purple-slight ">
                <section className="mb-5" style={{ marginTop: "15vmax" }}>
                    <MDBMask className='rgba-purple-slight ' />
                    <MDBContainer>
                        <MDBRow >
                            <MDBCol md='12' className='mb-4 text-center '>
                                <MDBCol md='12' className='mb-4 text-center'>
                                    <p className='h3 font-weight-light mb-0 pt-md-3 pt-3'>
                                        Azimuto, c’est un collectif de personnes engagées pour que les jeunes soient actrices et acteurs de
                                        leur parcours.
                                    </p>
                                    <h4 className='display-6 font-weight-bold my-5 pt-md-3 pt-3'>
                                        DEVENIR BÉNÉVOLE </h4>
                                    <p className='h3  font-weight-light grey-text mb-5 pt-md-3 pt-3'>
                                        Que ce soit sur le terrain ou dans la gestion courante, tu peux intervenir avec nous sur des
                                        missions de facilitation des ateliers auprès des jeunes, après avoir été formé.e à nos méthodes et
                                        la vie associative. Envie de monter à bord ?
                                        Rejoins la communauté de bénévoles Azimuto !
                                    </p>
                                    <MDBBtn outline color='purple' className="btn-rounded btn-1" >
                                        <MDBIcon className="pr-2" icon='coffee' />
                                        <Link to="/Contact" className=" nav-link active b-Right">Prendre un café (réel ou virtuel)</Link>
                                    </MDBBtn>
                                </MDBCol>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>
            </MDBView>

            <MDBView className="purple-slight ">
                <MDBContainer>
                    <MDBRow >
                        <MDBCol md='12' className='mb-4 text-center '>
                            <MDBCol md='12' className='mb-4 text-center'>
                                <h4 className='display-6 font-weight-bold my-5 pt-md-3 pt-3'>
                                    MISSION DE SERVICE CIVIQUE </h4>
                                <p className='h3 font-weight-light mb-0 pt-md-3 pt-3'>
                                    Rejoins la communauté Azimuto au travers du service civique. Découvre nos offres de volontariat
                                    et viens apprendre au sein d’une structure qui te fera grandir et te projeter dans ton avenir !
                                </p>
                                <MDBBtn outline color='purple' className="btn-rounded btn-1" >
                                    <MDBIcon className="pr-2" icon='coffee' />
                                    <Link to="/Contact" className=" nav-link active b-Right">Nous contacter</Link>
                                </MDBBtn>
                            </MDBCol>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </MDBView>










            <MDBView className="purple-slight ">
                <MDBMask className='rgba-purple-slight ' />
                <MDBContainer>
                    <MDBRow >
                        <MDBCol md='12' className='mb-4 text-center'>
                            <h4 className='display-6 font-weight-bold my-5 pt-md-3 pt-3'>
                                NOS PARTENAIRES </h4>
                            <MDBRow>
                                <MDBCol md="12">
                                    <div className="card-group my-5">

                                        <MDBBtn outline color='purple' className="btn-rounded p-0 btn-1" >
                                            <Link to="/Contact" className=" nav-link active b-Right">
                                                <MDBCardImage
                                                    className="LogoPartenaires"
                                                    top
                                                    src={TFC}
                                                    alt="MDBCard image cap"
                                                />
                                            </Link>
                                        </MDBBtn>

                                        <MDBBtn outline color='purple' className="btn-rounded p-0 btn-1" >

                                            <Link to="/Contact" className="m-5 nav-link active b-Right">
                                                <MDBCardImage
                                                    top
                                                    src={ApoyoUrbano}
                                                    alt="MDBCard image cap"
                                                />
                                            </Link>
                                        </MDBBtn>
                                        <MDBBtn outline color='purple' className="btn-rounded p-0 btn-1" >

                                            <Link to="/Contact" className="m-5 nav-link active b-Right">
                                                <MDBCardImage
                                                    className="LogoPartenaires"
                                                    top
                                                    src={CAF}
                                                    alt="MDBCard image cap"
                                                />
                                            </Link>
                                        </MDBBtn>

                                        <MDBBtn outline color='purple' className="btn-rounded p-0 btn-1" >

                                            <Link to="/Contact" className="m-5 nav-link active b-Right">
                                                <MDBCardImage
                                                    className="LogoPartenaires"
                                                    top
                                                    src={CesariaEvora}
                                                    alt="MDBCard image cap"
                                                />
                                            </Link>
                                        </MDBBtn>
                                        <MDBBtn outline color='purple' className="btn-rounded p-0 btn-1" >

                                            <Link to="/Contact" className="m-5 nav-link active b-Right">
                                                <MDBCardImage
                                                    className="LogoPartenaires"
                                                    top
                                                    src={HelloCharly}
                                                    alt="MDBCard image cap"
                                                />
                                            </Link>
                                        </MDBBtn>
                                        <MDBBtn outline color='purple' className="btn-rounded p-0 btn-1" >

                                            <Link to="/Contact" className="m-5 nav-link active b-Right">
                                                <MDBCardImage
                                                    className="LogoPartenaires"
                                                    top
                                                    src={INSSD}
                                                    alt="MDBCard image cap"
                                                />
                                            </Link>
                                        </MDBBtn>
                                        <MDBBtn outline color='purple' className="btn-rounded p-0 btn-1" >

                                            <Link to="/Contact" className="m-5 nav-link active b-Right">
                                                <MDBCardImage
                                                    top
                                                    src={MoiDans10Ans}
                                                    alt="MDBCard image cap"
                                                />
                                            </Link>
                                        </MDBBtn>
                                        <MDBBtn outline color='purple' className="btn-rounded p-0 btn-1" >

                                            <Link to="/Contact" className="m-5 nav-link active b-Right">
                                                <MDBCardImage
                                                    className="LogoPartenaires"
                                                    top
                                                    src={Montreuil}
                                                    alt="MDBCard image cap"
                                                />
                                            </Link>
                                        </MDBBtn>
                                        <MDBBtn outline color='purple' className="btn-rounded p-0 btn-1" >

                                            <Link to="/Contact" className="m-5 nav-link active b-Right">
                                                <MDBCardImage
                                                    className="LogoPartenaires"
                                                    top
                                                    src={SSD}
                                                    alt="MDBCard image cap"
                                                />
                                            </Link>
                                        </MDBBtn>
                                        <MDBBtn outline color='purple' className="btn-rounded p-0 btn-1" >

                                            <Link to="/Contact" className="m-5 nav-link active b-Right">
                                                <MDBCardImage
                                                    top
                                                    src={RobinsVilles}
                                                    alt="MDBCard image cap"
                                                />
                                            </Link>
                                        </MDBBtn>
                                        <MDBBtn outline color='purple' className="btn-rounded p-0 btn-1" >

                                            <Link to="/Contact" className="m-5 nav-link active b-Right">
                                                <MDBCardImage
                                                    className="LogoPartenaires"
                                                    top
                                                    src={Phares}
                                                    alt="MDBCard image cap"
                                                />
                                            </Link>
                                        </MDBBtn>
                                        <MDBBtn outline color='purple' className="btn-rounded p-0 btn-1" >

                                            <Link to="/Contact" className="m-5 nav-link active b-Right">
                                                <MDBCardImage
                                                    className="LogoPartenaires"
                                                    top
                                                    src={Premieres}
                                                    alt="MDBCard image cap"
                                                />
                                            </Link>
                                        </MDBBtn>

                                        <MDBBtn outline color='purple' className="btn-rounded p-0 btn-1" >

                                            <Link to="/Contact" className="m-5 nav-link active b-Right">
                                                <MDBCardImage
                                                    top
                                                    src={MakesenseDark}
                                                    alt="MDBCard image cap"
                                                />
                                            </Link>
                                        </MDBBtn>
                                        <MDBBtn outline color='purple' className="btn-rounded p-0 btn-1" >
                                            <Link to="/Contact" className="m-5 nav-link active b-Right">
                                                <MDBCardImage
                                                    className="LogoPartenaires"
                                                    top
                                                    src={Cite}
                                                    alt="MDBCard image cap"
                                                />
                                            </Link>
                                        </MDBBtn>
                                        <MDBBtn outline color='purple' className="btn-rounded p-0 btn-1" >

                                            <Link to="/Contact" className="m-5 nav-link active b-Right">
                                                <MDBCardImage
                                                    top
                                                    src={GustaveEiffel}
                                                    alt="MDBCard image cap"
                                                />
                                            </Link>
                                        </MDBBtn>
                                        <MDBBtn outline color='purple' className="btn-rounded p-0 btn-1" >

                                            <Link to="/Contact" className="m-5 nav-link active b-Right">
                                                <MDBCardImage
                                                    top
                                                    src={ExplorJob}
                                                    alt="MDBCard image cap"
                                                />
                                            </Link>
                                        </MDBBtn>
                                        <MDBBtn outline color='purple' className="btn-rounded p-0 btn-1" >

                                            <Link to="/Contact" className="m-5 nav-link active b-Right">
                                                <MDBCardImage
                                                    top
                                                    src={Logocress}
                                                    alt="MDBCard image cap"
                                                />
                                            </Link>
                                        </MDBBtn>














                                    </div>
                                </MDBCol>
                            </MDBRow>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </MDBView>








        </div>

    );
}

export default Participer;
