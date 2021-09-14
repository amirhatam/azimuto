import React from 'react'
import { MDBContainer, MDBView, MDBBtn } from 'mdbreact';
import { useState, useEffect } from 'react'
import axios from 'axios'
import EditList from "./EditList"


const EditTeam = (props) => {

    const [users, setUsers] = useState([]);
    const [editingId, setEditingId] = useState([])
    const [views, setViews] = useState("List")
    const [deleteId, setDeleteId] = useState("")

    useEffect(async () => {

        try {
            const response = await axios.get("http://localhost:8080/teams")

            // console.log(response.data.teamFound);

            if (response.status === 200) {

                setUsers(response.data.teamFound)

            }

        } catch (error) {
            console.error(error)
        }

    }, []);
    console.log(users);

    const deleteUser = async () => {
        try {
            const response = await axios.delete(`http://localhost:8080/teams/${deleteId}/deleteteam`)
            const responseData = await axios.get("http://localhost:8080/teams")
            setUsers(responseData.data.teamFound)
            setViews("List")
        } catch (error) {
            console.log(error)
        }
    }

    const [userAdded, setUserAdded] = useState(false);
    const [nameUser, setNameUser] = useState("");
    const [postUser, setPostUser] = useState("");
    const [description, setDescription] = useState("");
    const [imageUser, setImageUser] = useState("");


    const send = async () => {

        try {
            const newUserForm = new FormData()
            newUserForm.append("name", nameUser)
            newUserForm.append("post", postUser)
            newUserForm.append("description", description)
            newUserForm.append("image", imageUser)

            const response = await axios.post("http://localhost:8080/teams", newUserForm)
            const responseData = await axios.get("http://localhost:8080/teams")
            setUsers(responseData.data.teamFound)
            setViews("List")

            if (response.status === 200) {
                setUserAdded(true)
            }

        } catch (error) {
            console.error(error)
        }
    }

    if (views === "List") {
    } else if (views === "Add") {
        return (
            <MDBView className="purple-slight">
                <div className="container my-5 ">
                    <section className="mb-5" style={{ marginTop: "15vmax" }}>
                        <MDBContainer>
                            <div className="row my-5">
                                {userAdded
                                    ? <h2>User a été ajouté correctement!</h2>
                                    : <>
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
                                    </>
                                }
                            </div>
                        </MDBContainer>
                    </section>
                </div>
            </MDBView>
        )

    } else if (views === "Edit") {
        return <EditList editingId={editingId} setEditingId={setEditingId} setUsers={setUsers} setViews={setViews} />
    } else if (views === "Delete") {
        return (
            <MDBView className="purple-slight ">
                <div className="container my-5 ">
                    <section className="mb-5" style={{ marginTop: "15vmax" }}>
                        <div className="text-center my-5">
                            <MDBBtn size="lg" color='cyan' rounded href="/edit-team">Go back</MDBBtn>
                        </div>
                        <div>
                            <h2>Es que vous êtes sur de suprimmer la question ?</h2>
                            <MDBBtn color="cyan" rounded onClick={deleteUser}>Confirmer</MDBBtn>
                        </div>
                    </section>

                </div>
            </MDBView>
        )
    }

    return (
        <MDBView className="purple-slight">

            <div className="container my-5 ">

                <section className="mb-5" style={{ marginTop: "15vmax" }}>
                    <MDBContainer>
                        <div className="row">
                            <h1 className="my-5 text-center font-weight-bold">Liste d'users</h1>

                            {users.map(elem => {
                                return <>
                                    <div className="col-6">
                                        <h3 className="my-5">{elem.name}</h3>
                                        <h5 className="my-5 font-weight-bold grey-text">{elem.post}</h5>
                                        <p className="my-5">{elem.description}</p>
                                        <MDBBtn size="sm" outline color='purple' className="btn-rounded btn-1" onClick={(e) => { setEditingId(elem._id); setViews("Edit") }}>Editer</MDBBtn >
                                        <MDBBtn size="sm" outline color='purple' className="btn-rounded btn-1" onClick={(e) => { setDeleteId(elem._id); setViews("Delete") }}>Effacer</MDBBtn >
                                    </div>
                                    <div className="col-6">
                                        <img class="img-fluid" src={`http://localhost:8080/uploads/${elem.image}`} alt="" />
                                    </div>
                                </>
                            })}
                        </div>
                        <div className="text-center my-5">
                            <MDBBtn size="lg" color='cyan' rounded onClick={(e) => { setViews("Add") }}>Ajouter</MDBBtn >
                        </div>

                    </MDBContainer>
                </section>
            </div>
        </MDBView>
    )
}

export default EditTeam
