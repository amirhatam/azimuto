import React from 'react'
import { MDBContainer, MDBView, MDBBtn } from 'mdbreact';
import { useState, useEffect } from 'react'
import axios from 'axios'


const AddTeam = (props) => {
    const [nameUser, setNameUser] = useState("");
    const [postUser, setPostUser] = useState("");
    const [description, setDescription] = useState("");
    const [imageUser, setImageUser] = useState("");
    const [userAdded, setUserAdded] = useState(false);

    const send = async () => {
        try {
            const newUserForm = new FormData()

            newUserForm.append("name",nameUser)
            newUserForm.append("post",postUser)
            newUserForm.append("description",description)
            newUserForm.append("image",imageUser)

            const response = await axios.post("http://localhost:8080/teams", newUserForm)
            const responseData = await axios.get("http://localhost:8080/teams")
            props.setUsers(responseData.data.teamFound)
            props.setViews("List")

            if (response.status === 200) {
                setUserAdded(true)
            }

        } catch (error) {
            console.error(error)
        }
    }

    return (
        <MDBView className="purple-slight">
            <MDBContainer className="mb-5" style={{ marginTop: "15vmax" }}>
                <div className="row my-5">
                    {/* {props.userAdded
                        ? <h2>User a été ajouté correctement!</h2>
                        : <> */}
                            <div className="text-center my-5">
                                <MDBBtn size="lg" color='cyan' rounded href="/edit-team">Go back</MDBBtn>
                            </div>

                            <h2>Ajouter une nouvelle personne</h2>

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

                            <div className="mb-3">
                                <label for="formFile" className="form-label">Image d'user</label>
                                <input type="file" onChange={(event) => setImageUser(event.target.files[0])} className="form-control" name="image" />
                            </div>

                            <div className="mb-3">
                                <button className="btn btn-primary" onClick={send}>Envoyer</button>
                            </div>
                        {/* </>
                    } */}
                </div>
            </MDBContainer>
        </MDBView>
    )
    
}

export default AddTeam