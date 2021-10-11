import {
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBView,
    MDBContainer,
    MDBCardBody,
} from 'mdbreact';
import Rapportage from './rapportage/Rapportage';
import '../assets/styles/Home.css';
import LogoBouee from "../assets/images/Bouee.png"
import LogoBoussole from "../assets/images/Boussole.png"
import LogoCardinaux from "../assets/images/cardinaux.png"
import HomeCarousel from '../components/HomeCarousel';


const Home = () => {

    return (
        <MDBView className="bgc-light">
            <MDBView className="pb-5">
                <MDBContainer
                    style={{ marginTop: "20vmax" }}
                    className='d-flex justify-content-center align-items-center pt-0 pb-5 '
                >
                    <MDBCol lg="7" >
                        <HomeCarousel/>
                    </MDBCol>
                    <MDBCol lg="7">
                        <MDBRow>
                            <MDBCol md='12' className='mb-4 text-center'>
                                <h4 className='display-6 text-start font-weight-bold mb-0 pt-md-3 pt-3'>
                                    Azimuto :</h4>
                                <h5 className='text-start text-justify lh-base py-4'>
                                    Une pédagogie innovante pour accompagner les
                                    professionnels de l'éducation dans un enjeu qui
                                    nous tient à coeur, l'orientation des jeunes en
                                    développant leur capacité de choisir.
                                </h5>
                                <MDBBtn href="/nos-programmes" color='amber' className="rounded-pill py-3 px-4" >
                                    Découvrir nos ateliers
                                </MDBBtn>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBContainer>
            </MDBView>

            <MDBView className="bgc-darker"  >
                <MDBContainer>
                    <MDBCardBody className="text-center  "  >
                        <h2 className="h1-responsive font-weight-bold my-5 ">
                            POURQUOI AZIMUTO ?
                        </h2>
                        <p className="h5-responsive text-justify lh-lg dark-grey-text mx-auto mb-5 w-75 ">
                            Azimuto est né d'un constat, l'orientation subie des jeunes ne les aide pas à trouver leur place dans
                            la société. Au moment des premiers grands choix, on ne connaît que très rarement ses forces et ses

                            aspirations.

                            Il y a de grandes chances pour se tromper ou tout simplement ne pas oser.

                            A travers l'orientation l'enjeu est de trouver sa place dans une société en devenir et nous sommes

                            convaincues que savoir choisir s’apprend.
                        </p>

                        <MDBBtn href="/qui-sommes-nous" color='cyan' className=" rounded-pill mb-5 px-4" >
                            Notre mission
                        </MDBBtn>

                    </MDBCardBody>
                </MDBContainer>
            </MDBView>

            <MDBView>
                <MDBContainer>
                    <MDBCardBody className="text-center pt-5" >
                        <h2 className="h1-responsive font-weight-bold my-5 ">
                            NOS PARCOURS :
                        </h2>
                        <li className="h3-responsive font-weight-bold mb-1 ">
                            Professionnel.le.s de l'éducation et de la jeunesse ?
                        </li>
                        <p className="h5-responsive dark-grey-text mx-auto mb-5 w-75 ">
                            Nos parcours collectifs de connaissance de soi permettent de devenir acteur de son parcours afin de

                            trouver sa place dans la société pour y contribuer positivement.
                        </p>
                        <MDBRow className="justify-content-center">
                            <MDBCol lg="5" md="12" className="px-0" >
                                <img
                                    className=" rounded mx-auto d-block mb-3"
                                    src={LogoBouee}
                                    alt=""
                                    style={{ width: "150px" }}
                                />

                                <h5 className="font-weight-bold  mb-3 p-0 text-center">
                                    <h5 className="font-weight-light d-inline">LE </h5> PARCOURS
                                    COLLÈGE/LYCÉE :
                                    <h5 className="font-weight-light my-2">ATELIERS COLLECTIFS </h5>
                                </h5>
                            </MDBCol>

                            <MDBCol lg="5" md="12">
                                <img
                                    className="rounded mx-auto d-block mb-3"
                                    src={LogoBoussole}
                                    alt=""
                                    style={{ width: "150px" }}
                                />
                                <h5 className="font-weight-bold  mb-3 p-0 text-center">
                                    <h5 className="font-weight-light d-inline">LE</h5> PROGRAMME DE
                                    REMOBILISATION
                                    <h5 className="font-weight-light my-2"> SCOLAIRE</h5>
                                </h5>
                            </MDBCol>

                            <MDBCol className="mt-5" lg="3" md="5">

                                <MDBBtn href="/qui-sommes-nous" color='amber' className=" rounded-pill mb-5 py-3 px-4" >
                                    Nous faire intervenir
                                </MDBBtn>
                            </MDBCol>
                            <li className="h3-responsive font-weight-bold">
                                Jeune de 15 à 25 ans en recherche d’inspiration  ?
                            </li>

                            <MDBCol lg="2" md="5">

                                <img
                                    className="img-fluid mt-2"
                                    src={LogoCardinaux}
                                    alt=""
                                />
                            </MDBCol>
                            <MDBCardBody className="text-center mb-5 " >

                                <MDBView hover rounded className="mx-auto d-block col-6 mb-2">
                                    <h4 className="h4-responsive font-weight-bold m-5 ">
                                        LE PARCOURS TOUS AZIMUTS
                                        <h4 className="font-weight-light my-3">DURANT LES VACANCES SCOLAIRES</h4>
                                    </h4>

                                </MDBView>
                                <p className="h5-responsive text-justify dark-grey-text mx-auto mb-5 w-75 ">
                                    Un parcours de 3 jours pour identifier tes forces, tes envies et définir ton projet d’avenir tout en
                                    découvrant les opportunités d’un secteur : l'Économie Sociale et Solidaire !
                                    Des ateliers réalisés en présentiel en Seine Saint Denis.
                                    Pré-inscris-toi ici pour connaître la prochaine date !
                                </p>

                                <MDBBtn href="/connexion/signup" color='amber' className="rounded-pill py-3 px-4" >
                                    Je candidate au parcours
                                </MDBBtn>
                            </MDBCardBody>
                        </MDBRow>
                    </MDBCardBody>
                </MDBContainer>
            </MDBView>
            
            <Rapportage />
        </MDBView>
    );
}

export default Home;
