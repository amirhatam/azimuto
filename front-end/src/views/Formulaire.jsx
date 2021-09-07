import React, { useState, useEffect } from 'react';
import { MDBFormInline, MDBBtn, MDBMask, MDBView, MDBRow, MDBCol } from 'mdbreact';
import axios from "axios";
import Radio from "./Radio";
import TextareaPage from "./TextareaPage";


const QuestionPage = () => {

    const [radioBox, setRadioBox] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const [textBox, setTextBox] = useState([1]);

    const [questions, setQuestions] = useState([]);

    const [response, setResponses] = useState([]);


    const changeCollection = (data) => {
        const newFilterResponses = response.filter((elem) => {

            return elem.id !== data.id
        })
        const newResponses = [...newFilterResponses, data]

        setResponses(
            newResponses
        )
    }
    console.log("response", response)

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


    const userReponse = async (body) => {
        try {
            await axios.post("http://localhost:8080/answers", response)


        } catch (err) {
            console.log(err)
        }
    }



    useEffect(() => {
        Form()
    }, [])
    return (
        <MDBFormInline className="d-block  purple-slight">

            <form >
                <h1 className="text-center mb-5" style={{ paddingTop: "15vmax" }}>Questionnaire</h1>
                {questions.map((elem, index) => {
                    return (
                        <>
                            {index === 19 && <h2 className="text-danger text-center my-5">NE PAS RÉPONDRE À CES QUESTIONS AVANT D'AVOIR FINI LE PARCOURS AVEC AZIMUTO</h2>}
                            <MDBView className=" text-center ">

                                <h3 className="mt-5" >{elem.description}</h3>
                            </MDBView>
                            {radioBox.map((e) => {
                                if (elem.type === "multiple") {
                                    return (


                                        <MDBFormInline className=" justify-content-center  ">


                                            <Radio
                                                changeAnswerText={changeCollection}
                                                value={e}
                                                id={elem._id}
                                            />

                                        </MDBFormInline>

                                    )
                                }

                            })}
                            {textBox.map((e) => {
                                if (elem.type === "texte") {
                                    return (
                                        <MDBView className=" container justify-content-center mb-5 ">

                                            <TextareaPage value={e} id={elem._id} changeAnswerText={changeCollection} />
                                        </MDBView>
                                    )
                                }
                            })}
                        </>
                    );
                })}

            </form>
            <MDBView className="col-12 text-center mt-5">
                <MDBBtn onClick={userReponse} className="col-2" color="purple">
                    Enregistrer
                </MDBBtn>
            </MDBView>

        </MDBFormInline>

    );

}

export default QuestionPage;

