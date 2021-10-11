import React, { useState, useEffect } from 'react';
import { MDBFormInline, MDBBtn, MDBView, MDBRow, MDBCol, MDBContainer, MDBCard } from 'mdbreact';
import axios from "axios";
import Radio from "./Radio";
import TextareaPage from "./TextareaPage";


const QuestionPage = (props) => {

    const [radioBox, setRadioBox] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const [textBox, setTextBox] = useState([1]);

    const [questions, setQuestions] = useState([]);

    const [response, setResponses] = useState([]);

    const [usersData, setusersData] = useState([]);

    if ( setRadioBox && setTextBox && usersData){
        console.log();
    }

    const changeCollection = (data) => {
        const newFilterResponses = response.filter((elem) => {
            return elem.question !== data.question
        })
        const newResponses = [...newFilterResponses, data]

        setResponses(
            newResponses
        )
    }

    const Form = async (body) => {
        try {
            const response = await axios.get("http://localhost:8080/questions", body)

            const questionsMap = response.data.questionFound.map((elem) => {
                return elem
            });
            setQuestions(questionsMap)

        } catch (err) {
            console.log(err)
        }
    }

    const User = async () => {
        try {
            const response = await axios.get("http://localhost:8080/users")
            const usersMap = response.data.map((elem) => {
                return elem;
            })
            setusersData(usersMap)

        } catch (err) {
            console.error(err);
        }
    }

    // console.log("users data",usersData);



    const userReponse = async (body) => {
        try {
            await axios.post("http://localhost:8080/answers", response)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        Form()
        User()
    }, [])
    return (
        <MDBView className="purple-slight">
            {/* <MDBFormInline className="d-block "> */}
            <MDBContainer className="mb-5" style={{ marginTop: "15vmax" }}>
                <div className="text-center mb-5">
                    <h1 className="mb-5" >Questionnaire</h1>
                    <h3>{localStorage.firstName} {localStorage.lastName} bienvenue dans votre espace personnel  </h3>
                </div>
                <MDBRow >
                    {questions.map((elem, index) => {
                        return (
                            <>
                                {index === 19 && <h2 className="text-danger text-center my-5">NE PAS RÉPONDRE À CES QUESTIONS AVANT D'AVOIR FINI LE PARCOURS AVEC AZIMUTO</h2>}
                                <MDBView className="my-5">

                                    <MDBCard testimonial >
                                        <MDBView className=" text-center ">

                                            <h3 className="mt-5 px-5" >{elem.description}</h3>
                                        </MDBView>

                                        <MDBRow className=" block-example border border-light mx-5 mb-5">
                                            <MDBCol className="" md='1' >
                                            </MDBCol>

                                            {radioBox.map((e,i) => {
                                                if (elem.type === "multiple") {
                                                    return (
                                                        <MDBCol className="my-5 px-0" md='1' >
                                                            <MDBFormInline className="justify-content-center ">
                                                                <Radio
                                                                    changeAnswerText={changeCollection}
                                                                    value={e}
                                                                    id={elem._id}
                                                                    description={elem.description}
                                                                    key={i}
                                                                />
                                                                <span className="h5 mb-1" key={i}>{e}</span>
                                                            </MDBFormInline>
                                                        </MDBCol>

                                                    )
                                                }
                                            })}
                                        </MDBRow>
                                        {textBox.map((e,i) => {
                                            if (elem.type === "texte") {
                                                return (
                                                    <MDBView className=" container justify-content-center mb-5 ">

                                                        <TextareaPage
                                                            value={e}
                                                            id={elem._id}
                                                            changeAnswerText={changeCollection}
                                                            description={elem.description}
                                                            key={i}
                                                        />
                                                    </MDBView>
                                                )
                                            }
                                        })}
                                    </MDBCard>
                                </MDBView>
                            </>
                        );
                    })}
                </MDBRow>
                <MDBView className="col-12 text-center mt-5">
                    <MDBBtn onClick={userReponse}  className="col-2" color="purple">
                        Enregistrer
                    </MDBBtn>
                </MDBView>
            </MDBContainer>

            {/* </MDBFormInline> */}
        </MDBView>

    );

}

export default QuestionPage;

