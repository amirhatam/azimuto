import React from 'react'
import { MDBView, MDBBtn, MDBContainer } from 'mdbreact';
import { useState, useEffect } from 'react'
import axios from 'axios'


function EditTeam(props) {

    const [nameUser, setNameUser] = useState("");
    const [postUser, setPostUser] = useState("");
    const [description, setDescription] = useState("");

    const modifTeam = async () => {
        try {

            const response = await axios.patch(`http://localhost:8080/teams/${props.editingId}/updateteam`, { name: nameUser, post: postUser, description: description })
            props.setEditingId("")

            const responseData = await axios.get("http://localhost:8080/teams")
            props.setUsers(responseData.data.teamFound)
            props.setViews("List")

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <MDBView className="purple-slight">
            <MDBContainer className="mb-5" style={{ marginTop: "15vmax" }}>
                <div >
                    <div className="text-center my-5">
                        <MDBBtn size="lg" color='cyan' rounded href="/edit-team">Go back</MDBBtn>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Nom </label>
                        <input type="text" onChange={(event) => setNameUser(event.target.value)} className="form-control" name="name" placeholder="Nom d'user" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Post </label>
                        <input type="text" onChange={(event) => setPostUser(event.target.value)} className="form-control" name="name" placeholder="Post d'user" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Description </label>
                        <textarea rows="8" onChange={(event) => setDescription(event.target.value)} className="form-control" name="name" placeholder="Description" />
                    </div>

                    <div>
                        <MDBBtn color="cyan" rounded onClick={modifTeam}>Confirmer</MDBBtn>
                    </div>
                </div>
            </MDBContainer>
        </MDBView>
    )
}

export default EditTeam
