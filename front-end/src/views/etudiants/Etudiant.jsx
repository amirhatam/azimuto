import React from "react";
import { useState, useEffect } from "react";
import { MDBRow, MDBCol, MDBCardBody, MDBCard, MDBView, MDBContainer, MDBIcon } from "mdbreact";
import axios from 'axios'



const Etudiant = (props) => {

    const [answersData, setAnswersData] = useState([]);

    useEffect(() => {
        (async () => {

            try {
                const response = await axios.get("http://localhost:8080/answers")

                if (response.status === 200) {
                    setAnswersData(response.data.answerFound)
                }

            } catch (err) {
                console.error(err);
            }

        })()
    }, [])

    // console.log("answersData", answersData);
    console.log("answersData", answersData);
    console.log("props.userHistory", props.userHistory[0]);
    return (

        <MDBView className="bgc-light">
            <MDBContainer className="mb-5" style={{ marginTop: "15vmax" }}>

                <div className="text-center my-5 ">
                    <h2 className="h1-responsive fontW text-center  pr-5 mb-5">
                        <a href="/etudiants" className="h2 px-2"><MDBIcon icon="angle-left" /> </a> Étudiant
                    </h2>
                </div>

                <MDBRow className="text-md-left ">

                    <MDBCard className="">
                        <MDBCardBody className="text-center my-5">
                            <h2> {props.userHistory[1]} {props.userHistory[2]}</h2>
                        </MDBCardBody>
                        <MDBRow className="  mx-5 mb-5">

                            {answersData.map((elem) => {
                                if (elem.user === props.userHistory[0]) {
                                    // if (elem.valueNumber){

                                    return (
                                        <>
                                            <MDBCol lg="12" md="12" className="block-example border border-dark mb-5 px-0 ">
                                                <MDBCardBody className="">
                                                    <h5 className="block-example border border-light p-2 my-5" >{elem.question}</h5>
                                                    <h5 className="px-2" > {elem.valueNumber} {elem.valueText}</h5>
                                                </MDBCardBody>
                                            </MDBCol>
                                        </>
                                    );
                                    // } else {
                                    //     return <h2>TEST</h2>
                                    // }
                                }
                            })}
                        </MDBRow>

                    </MDBCard>
                </MDBRow>

            </MDBContainer>
        </MDBView>
    )
}

export default Etudiant