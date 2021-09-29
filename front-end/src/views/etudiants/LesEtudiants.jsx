import React from "react";
import { useState, useEffect } from "react";
import { MDBRow, MDBCol, MDBCardBody, MDBView, MDBContainer, MDBBtn, MDBIcon } from "mdbreact";
import axios from 'axios'
import Etudiant from "./Etudiant";


const LesEtudiants = () => {
    const [etudiants, setEtudiants] = useState([]);
    const [userHistory, setUserHistory] = useState([]);
    const [views, setViews] = useState("List")


    useEffect(() => {
        (async () => {

            try {
                const response = await axios.get("http://localhost:8080/users")

                if (response.status === 200) {
                    setEtudiants(response.data)
                }

            } catch (err) {
                console.error(err);
            }

        })()
    }, [])


    // console.log("userHistory",userHistory);
    // console.log("etudiants", etudiants);

    if (!localStorage.tokenAdmin) {
        return (
            <MDBView className="purple-slight ">
                <MDBContainer className="text-center mb-5" style={{ marginTop: "17vmax", height: "200px" }}>
                    <h1 className="h1 mb-0"><MDBIcon far icon="frown" /></h1>
                    <h3 className="h1-responsive font-weight-bold mb-5">
                        Page Not Found !
                    </h3>
                </MDBContainer>
            </MDBView>
        )
    } else {

        if (views === "History") {
            return <Etudiant
                setViews={setViews}
                userHistory={userHistory}
            />
        } else if (views === "List") {
            return (
                <MDBView className="purple-slight">
                    <MDBContainer className="mb-5" style={{ marginTop: "15vmax" }}>
                        <div className="text-center my-5 pr-5">
                            <h2 className="h1-responsive font-weight-bold text-center mb-5">
                                <a href="/EP" className="h2 mr-2"><MDBIcon icon="angle-left" /> </a> Étudiants
                            </h2>
                        </div>
                        <MDBRow className="text-md-left ">
                            {etudiants.map(elem => {
                                return (
                                    <>
                                        <MDBCol lg="3" md="12" className="px-0">
                                            <MDBCardBody className="text-center my-5">
                                                <MDBBtn size="sm" outline color='purple' className="btn-rounded btn-1" onClick={(e) => { setUserHistory([elem._id, elem.firstName, elem.lastName]); setViews("History") }} >{elem.firstName} {elem.lastName}</MDBBtn >
                                            </MDBCardBody>

                                        </MDBCol>
                                    </>
                                );
                            })}
                        </MDBRow>

                    </MDBContainer>
                </MDBView>
            )

        }
    }
}

export default LesEtudiants