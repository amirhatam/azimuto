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
            <MDBView className="bgc-light">
                <MDBContainer>
                    <MDBRow >
                        <MDBCol md='12' className=' text-center my-5'>
                            <MDBCol md='12' className=' text-center'>
                                <h4 className='display-6 fontW my-5'>
                                    MISSION DE SERVICE CIVIQUE </h4>
                                <p className='col-10 m-auto text-justify lh-base h3 font-weight-light mb-0 pt-md-3 pt-3'>
                                    Rejoins la communauté Azimuto au travers du service civique. Découvre nos offres de volontariat
                                    et viens apprendre au sein d’une structure qui te fera grandir et te projeter dans ton avenir !
                                </p>
                                <MDBBtn href={civique[0].url} color='amber' className="rounded-pill pt-3 px-4 my-5"  >
                                Nos offres
                                </MDBBtn>
                            </MDBCol>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </MDBView>
        );
    }
}
export default MissionCivique