import React from "react";
import { MDBView, MDBBtn, MDBIcon, MDBContainer } from 'mdbreact';
import { useState, useEffect } from "react";
import axios from "axios"
import EditQuestion from "./EditQuestion";
import ListQuestions from "./ListQuestions";

const Modification = () => {
    const [questions, setQuestions] = useState([])
    const [editingId, setEditingId] = useState("")
    const [views, setViews] = useState("List")
    const [deletId, setDeletId] = useState("")


    useEffect(async () => {
        try {
            const responseData = await axios.get("http://localhost:8080/questions")

            if (responseData.data.questionFound) {
                setQuestions(responseData.data.questionFound)
            } else {
                alert("There was a problem")
            }
        } catch (error) {
            console.log(error)
        }
    }, [])


    const deleteQuestion = async () => {
        try {
            const response = await axios.delete(`http://localhost:8080/questions/${deletId}`)
            const responseData = await axios.get("http://localhost:8080/questions")
            setQuestions(responseData.data.questionFound)
            setViews("List")
        } catch (error) {
            console.log(error)
        }
    }
    // console.log("deletId", deletId)

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
        if (views === "List") {
            return <ListQuestions setEditingId={setEditingId} questions={questions} setViews={setViews} setDeletId={setDeletId} />
        } else if (views === "Edit") {
            return <EditQuestion editingId={editingId} setEditingId={setEditingId} setQuestions={setQuestions} setViews={setViews} />
        } else if (views === "Delete") {
            return (
                <MDBView className="purple-slight">
                    <MDBContainer className="mb-5" style={{ marginTop: "15vmax" }}>
                        <div className="text-center my-5 ">
                            <h2 className="h1-responsive font-weight-bold text-center  pr-5 mb-5">
                                <a href="/modification" className="h2 px-2"><MDBIcon icon="angle-left" /> </a> Liste des questions
                            </h2>
                        </div>
                        <div className="container my-5 ">

                            <div>
                                <h2>Es que vous êtes sur de suprimmer la question ?</h2>
                                <MDBBtn color="cyan" rounded onClick={deleteQuestion}>Confirmer</MDBBtn>
                            </div>

                        </div>
                    </MDBContainer>

                </MDBView>
            )
        }
    }
}

export default Modification;