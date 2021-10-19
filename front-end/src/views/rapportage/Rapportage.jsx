import {
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBView,
    MDBIcon,
    MDBCardBody,
    MDBCard,
    MDBContainer
} from 'mdbreact';
import axios from 'axios'
import { useState, useEffect } from "react";


const Rapportage = () => {

    const [rapportage, setRapportage] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get("http://localhost:8080/rapportage")

                if (response.status === 200) {
                    setRapportage(response.data.rapportage)
                }


            } catch (err) {
                console.error(err);
            }
        })();
    }, [])


    return (

        <MDBView className="bgc-darker">
            <MDBContainer>
                <MDBCardBody className="text-center my-5 " >
                    <h2 className="h1-responsive text-white fontW my-5 ">
                        AVEC AZIMUTO, ENVIE DE...
                    </h2>
                    <MDBRow>
                        <MDBView hover rounded className="col-5  px-0 mb-5 ">
                            <MDBCard className="text-center ">
                                <h4 className="h4-responsive fontW m-5 ">
                                    D’en savoir plus ?
                                </h4>

                                {rapportage.map((e) => {
                                    return <>
                                        <MDBRow center >
                                            <MDBCol size="1" className="offset-2 d-flex my-2">
                                                <a href={`http://localhost:8080/uploads/${e.pdf}`} className="h2 " target="_blank" rel="noreferrer">
                                                    <MDBIcon className="txt-orange" icon="caret-right" />
                                                </a>
                                            </MDBCol>
                                            <MDBCol size="7" className=" text-start pt-3 pl-0">
                                                <p className="fontW text-start mb-0 "  >
                                                    {e.description}
                                                </p>
                                            </MDBCol>
                                        </MDBRow>
                                    </>
                                })}
                                <div>
                                    <MDBBtn href="/Contact" color='amber' className=" rounded-pill my-5 py-3 px-4" >
                                        Nous rencontrer
                                    </MDBBtn>
                                </div>
                            </MDBCard>
                        </MDBView>

                        <MDBView hover rounded className="offset-2 col-5  px-0">
                            <MDBCard className="text-center ">
                                <h4 className="h4-responsive fontW m-5 ">
                                    De contribuer à notre action ?
                                </h4>
                                <MDBRow center>
                                    <MDBCol size="1" className="offset-2 d-flex my-2">
                                        <h2>
                                            <MDBIcon className="txt-orange" icon="caret-right" />
                                        </h2>
                                    </MDBCol>
                                    <MDBCol size="9" className=" text-start pt-3 pl-0">
                                        <p className="fontW mb-0">
                                            Devenir bénévole ou partenaire
                                        </p>
                                    </MDBCol>
                                    <MDBCol size="1" className="offset-2 d-flex my-2">
                                        <h2>
                                            <MDBIcon className="txt-orange" icon="caret-right" />
                                        </h2>
                                    </MDBCol>
                                    <MDBCol size="9" className=" text-start pt-3 pl-0">
                                        <h6 className="fontW mb-0">
                                            Faire un don
                                        </h6>
                                    </MDBCol>
                                    <MDBCol size="1" className="offset-2 d-flex my-2">
                                        <h2>
                                            <MDBIcon className="txt-orange" icon="caret-right" />
                                        </h2>
                                    </MDBCol>
                                    <MDBCol size="9" className=" text-start pt-3 pl-0">
                                        <h6 className="fontW mb-0 px-0">
                                            Rejoindre notre équipe
                                        </h6>
                                    </MDBCol>
                                </MDBRow>
                                <div >
                                    <MDBBtn href="/participer" color='amber' className=" rounded-pill my-5 py-3 px-4">
                                        Rejoindre la communauté
                                    </MDBBtn>
                                </div>
                            </MDBCard>
                        </MDBView>
                    </MDBRow>
                </MDBCardBody>
            </MDBContainer>
        </MDBView>

    )
}

export default Rapportage