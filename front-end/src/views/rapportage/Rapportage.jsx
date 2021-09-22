import {
    MDBMask,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBView,
    MDBIcon,
    Link,
    MDBCardBody
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

        <MDBView className="purple-slight">
            <MDBMask className='rgba-purple-slight' />
            <MDBCardBody className="text-center mb-5 " >
                <h2 className="h1-responsive font-weight-bold my-5 ">
                    AVEC AZIMUTO, ENVIE DE...
                </h2>
                <MDBRow >
                    <MDBView hover rounded className=" offset-1 col-5 z-depth-1-half mb-5">
                        <h4 className="h4-responsive font-weight-bold m-5 ">
                            D’en savoir plus ?
                        </h4>

                        {rapportage.map(e => {
                            return <>
                                <MDBRow center>
                                    <MDBCol size="4" className="d-flex my-2">
                                        <a href={e.pdf} className="h2 " target="_blank">
                                            <MDBIcon icon="file-pdf" className="pr-3 " />
                                        </a>
                                        <h6 className="font-weight-bold text-start">
                                            {e.description}
                                        </h6>
                                    </MDBCol>
                                </MDBRow>
                            </>
                        })}

                        <MDBBtn outline color='purple' className="mb-5 btn-rounded " >
                            <MDBIcon icon='user' className='mr-2 ' />
                            <Link to="/Contact" className=" nav-link active b-Right ">Nous rencontrer </Link>

                        </MDBBtn>

                    </MDBView>
                    <MDBView hover rounded className=" col-5 z-depth-1-half mb-5 ml-4">

                        <h4 className="h4-responsive font-weight-bold m-5 ">
                            De contribuer à notre action ?
                        </h4>

                        <div className=" justify-content-between  ">
                            <h6 className="font-weight-bold my-3">
                                Devenir bénévole ou partenaire
                            </h6>

                            <h6 className="font-weight-bold my-3">
                                Faire un don
                            </h6>

                            <h6 className="font-weight-bold mt-3 mb-5 ">
                                Rejoindre notre équipe
                            </h6>

                        </div>

                        <MDBBtn outline color='purple' className="my-5 btn-rounded " >
                            <MDBIcon icon='user' className='mr-2 ' />
                            <Link to="/participer" className=" nav-link active b-Right ">Rejoindre la communauté </Link>

                        </MDBBtn>
                    </MDBView>
                </MDBRow>
            </MDBCardBody>
        </MDBView>

    )
}

export default Rapportage