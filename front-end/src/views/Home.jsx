import {
    MDBMask,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBView,
    MDBContainer,
    MDBIcon,
    Link,
    MDBCardBody
} from 'mdbreact';
import Rapportage from './rapportage/Rapportage';
import '../assets/styles/Home.css';
import LogoAzi from "../assets/images/Home-1.jpg"
import LogoBouee from "../assets/images/Bouee.png"
import LogoBoussole from "../assets/images/Boussole.png"
import LogoCardinaux from "../assets/images/cardinaux.png"


const Home = () => {

    return (
        <div >
            <MDBView src='https://mdbcdn.b-cdn.net/img/Photos/Others/gradient2.png'>
                <MDBMask className='rgba-red-slight' />
                <MDBContainer
                    style={{ height: '100%', width: '100%' }}
                    className='d-flex justify-content-center align-items-center pt-0 mt-5'
                >
                    <MDBCol lg="7">
                        <MDBRow >
                            <MDBCol lg="12" >
                                <img
                                    src={LogoAzi}
                                    alt=""
                                    className="img-fluid rounded z-depth-1"
                                />
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                    <MDBCol lg="7">
                        <MDBRow>
                            <MDBCol md='12' className='mb-4 text-center'>
                                <h4 className='display-6 font-weight-bold mb-0 pt-md-3 pt-3'>
                                    Azimuto en une phrase :</h4>
                                <h5 className='AziPhrase pt-md-5 pt-sm-2 pt-5 pb-md-5 pb-sm-3 pb-5 '>
                                    Une pédagogie innovante pour accompagner les
                                    professionnels de l'éducation dans un enjeu qui
                                    nous tient à coeur, l'orientation des jeunes en
                                    développant leur capacité de choisir.
                                </h5>
                                <MDBBtn outline color='purple' className="btn-rounded btn-1" >
                                    <MDBIcon className="pr-2" icon='book' />
                                    <Link to="/nos-programmes" className=" nav-link active b-Right">Découvrir nos ateliers</Link>
                                </MDBBtn>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBContainer>
            </MDBView>

            <MDBView className="purple-slight">
                <MDBMask className='rgba-purple-slight' />
                <MDBCardBody className="text-center my-5" >
                    <h2 className="h1-responsive font-weight-bold my-5 ">
                        POURQUOI AZIMUTO ?
                    </h2>
                    <p className="h5-responsive dark-grey-text mx-auto mb-5 w-75 ">
                        Azimuto est né d'un constat, l'orientation subie des jeunes ne les aide pas à trouver leur place dans
                        la société. Au moment des premiers grands choix, on ne connaît que très rarement ses forces et ses

                        aspirations.

                        Il y a de grandes chances pour se tromper ou tout simplement ne pas oser.

                        A travers l'orientation l'enjeu est de trouver sa place dans une société en devenir et nous sommes

                        convaincues que savoir choisir s’apprend
                    </p>

                    <MDBBtn outline color='purple' className="btn-rounded " >
                        <MDBIcon icon='user' className='mr-2 ' />
                        <Link to="/qui-sommes-nous" className=" nav-link active b-Right"> Notre mission </Link>

                    </MDBBtn>

                </MDBCardBody>
            </MDBView>

            <MDBCardBody className="text-center purple-slight" >
                <h2 className="h1-responsive font-weight-bold my-5 ">
                    NOS PARCOURS :
                </h2>
                <li className="h3-responsive font-weight-bold my-5 ">
                    PROFESSIONNEL.LE.S DE L'ÉDUCATION ET DE LA JEUNESSE ?
                </li>
                <p className="h5-responsive dark-grey-text mx-auto mb-5 w-75 ">
                    Nos parcours collectifs de connaissance de soi permettent de devenir acteur de son parcours afin de

                    trouver sa place dans la société pour y contribuer positivement.
                </p>
                <MDBRow className="justify-content-center ">
                    <MDBCol lg="5" md="12">
                        <img
                            className="img-fluid p-5"
                            src={LogoBouee}
                            alt=""
                        />
                        <h5 className="font-weight-bold  mb-3 p-0 text-center">
                            <h5 className="font-weight-light d-inline">LE</h5>PARCOURS
                            COLLÈGE/LYCÉE :
                            <h5 className="font-weight-light my-3">ATELIERS COLLECTIFS </h5>
                        </h5>
                    </MDBCol>

                    <MDBCol lg="5" md="12">
                        <img
                            className="img-fluid "
                            src={LogoBoussole}
                            alt=""
                        />
                        <h5 className="font-weight-bold  mb-3 p-0 text-center">
                            <h5 className="font-weight-light d-inline">LE</h5> PROGRAMME DE
                            REMOBILISATION
                            <h5 className="font-weight-light my-3"> SCOLAIRE</h5>
                        </h5>
                    </MDBCol>

                    <MDBCol className="mt-5" lg="3" md="5">

                        <MDBBtn outline color='purple' className="btn-rounded" >
                            <MDBIcon icon='user' className='mr-2 ' />
                            <Link to="/qui-sommes-nous" className=" nav-link active b-Right "> Nous faire intervenir </Link>
                        </MDBBtn>
                    </MDBCol>
                    <li className="h3-responsive font-weight-bold mt-5 ">
                        JEUNE DE 15 à 25 ans EN RECHERCHE d’inspiration ?
                    </li>

                    <MDBCol lg="3" md="5">

                        <img
                            className="img-fluid "
                            src={LogoCardinaux}
                            alt=""
                        />
                    </MDBCol>
                    <MDBCardBody className="text-center mb-5 " >

                        <MDBView hover rounded className="offset-3 col-6 z-depth-1-half mb-5">

                            <h4 className="h4-responsive font-weight-bold m-5 ">
                                LE PARCOURS TOUS AZIMUTS
                                <h4 className="font-weight-light my-3">DURANT LES VACANCES SCOLAIRES</h4>
                            </h4>

                        </MDBView>
                        <p className="h5-responsive dark-grey-text mx-auto mb-5 w-75 ">
                            Un parcours de 3 jours pour identifier tes forces, tes envies et définir ton projet d’avenir tout en
                            découvrant les opportunités d’un secteur : l'Économie Sociale et Solidaire !
                            Des ateliers réalisés en présentiel en Seine Saint Denis.
                            Pré-inscris-toi ici pour connaître la prochaine date !
                        </p>

                        <MDBBtn outline color='purple' className="btn-rounded " >
                            <MDBIcon icon='user' className='mr-2 ' />
                            <Link to="/?" className=" nav-link active b-Right"> Je candidate au parcours </Link>

                        </MDBBtn>
                    </MDBCardBody>
                </MDBRow>
            </MDBCardBody>

            <Rapportage/>

        </div>
    );
}

export default Home;
