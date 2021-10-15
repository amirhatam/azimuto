import React from 'react'
import { MDBView, MDBBtn, MDBIcon, MDBContainer } from 'mdbreact';
import { useState} from 'react'
import axios from 'axios'


function EditQuestion(props) {
    const [description, setDescription] = useState("")
    const modifQuestion = async () => {
        try {
            const response = await axios.patch(`http://localhost:8080/questions/${props.editingId}/questionupdate`, { description: description })
            console.log(response)
            props.setEditingId("")

            const responseData = await axios.get("http://localhost:8080/questions")
            props.setQuestions(responseData.data.questionFound)
            props.setViews("List")

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <MDBView className="bgc-light">
            <MDBContainer className="mb-5" style={{ marginTop: "15vmax" }}>

                <div className="text-center my-5 ">
                    <h2 className="h1-responsive fontW text-center  pr-5 mb-5">
                        <a href="/modification" className="h2 px-2"><MDBIcon icon="angle-left" /> </a> Liste des questions
                    </h2>
                </div>
                <div className="container my-5 ">

                    <div>
                        <input type="text" id="example1" className="form-control form-control-lg" onChange={(e) => setDescription(e.target.value)} />
                        <MDBBtn color="amber" rounded onClick={modifQuestion}>Confirmer</MDBBtn>
                    </div>

                </div>
            </MDBContainer>

        </MDBView>
    )
}

export default EditQuestion
