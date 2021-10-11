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
                    <h2 className="h1-responsive font-weight-bold my-5 ">
                        AVEC AZIMUTO, ENVIE DE...
                    </h2>
                    <MDBRow>
                        <MDBView hover rounded className="col-5  px-0 mb-5 ">
                            <MDBCard className="text-center ">
                                <h4 className="h4-responsive font-weight-bold m-5 ">
                                    D’en savoir plus ?
                                </h4>

                                {rapportage.map((e,index) => {
                                    return <>
                                        <MDBRow center >
                                            <MDBCol size="1" className="offset-2 d-flex my-2">
                                                <a href={`http://localhost:8080/uploads/${e.pdf}`}  key={index} className="h2 " target="_blank" rel="noreferrer">
                                                    <MDBIcon icon="caret-right" />
                                                </a>
                                            </MDBCol>
                                            <MDBCol size="7"  className=" text-start pt-3 pl-0">
                                                <p className="font-weight-bold text-start mb-0 "  key={index}>
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
                                <h4 className="h4-responsive font-weight-bold m-5 ">
                                    De contribuer à notre action ?
                                </h4>
                                <MDBRow center>
                                    <MDBCol size="7" className=" text-start">
                                        <h6 className="font-weight-bold my-3">
                                            Devenir bénévole ou partenaire
                                        </h6>
                                    </MDBCol>
                                    <MDBCol size="7" className=" text-start ">
                                        <h6 className="font-weight-bold my-4">
                                            Faire un don
                                        </h6>
                                    </MDBCol>
                                    <MDBCol size="7" className=" text-start ">
                                        <h6 className="font-weight-bold my-4 ">
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