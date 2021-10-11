import React from 'react'
import {
    MDBCol,
    MDBRow,
    MDBView,
    MDBContainer,
    MDBBtn,

} from 'mdbreact';
import { useState, useEffect } from 'react'
import axios from 'axios'
import Logo from "../../assets/images/Logo2.png"


const MissionCivique = () => {

    const [civique, setCivique] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get("http://localhost:8080/civique")
                if (response.status === 200) {
                    setCivique(response.data.civiqueFound)
                }

            } catch (err) {
                console.error(err);
            }
        })();
    }, []);

    if (civique.length === 0) {
        return <p>Loading ...</p>
    } else {
        return (
            <MDBView className="bgc-darker">
                <MDBContainer>
                    <MDBRow >
                        <MDBCol md='12' className='mb-4 text-center '>
                            <MDBCol md='12' className='mb-4 text-center'>
                                <h4 className='display-6 font-weight-bold my-5 pt-md-3 pt-3'>
                                    MISSION DE SERVICE CIVIQUE </h4>
                                <p className='col-10 m-auto text-justify h3 font-weight-light mb-0 pt-md-3 pt-3'>
                                    Rejoins la communauté Azimuto au travers du service civique. Découvre nos offres de volontariat
                                    et viens apprendre au sein d’une structure qui te fera grandir et te projeter dans ton avenir !
                                </p>
                                <MDBBtn href="/Contact" color='amber' className="rounded-pill pt-3 px-4 mt-5"  >
                                    Nous contacter
                                </MDBBtn>
                            </MDBCol>
                            <div >
                                <a href={civique[0].url} target="_blank"  rel="noreferrer">
                                    <img src={Logo} alt="Logo" className="d-inline  img-fluid rounded-circle" style={{ width: "10%" }}></img>
                                </a>
                            </div>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </MDBView>
        );
    }
}
export default MissionCivique