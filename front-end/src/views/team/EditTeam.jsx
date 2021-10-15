import React from 'react'
import { MDBContainer, MDBView, MDBBtn, MDBIcon } from 'mdbreact';
import { useState, useEffect } from 'react'
import axios from 'axios'
import EditList from "./EditList"
import AddTeam from './AddTeam';
import DeleteTeam from './DeleteTeam';


const EditTeam = (props) => {

    const [users, setUsers] = useState([]);
    const [editingId, setEditingId] = useState([])
    const [views, setViews] = useState("List")
    const [deleteId, setDeleteId] = useState("")

    // useEffect(async () => {

    //     try {
    //         const response = await axios.get("http://localhost:8080/teams")

    //         if (response.status === 200) {
    //             setUsers(response.data.teamFound)
    //         }
    //     } catch (error) {
    //         console.error(error)
    //     }

    // }, []);

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get("http://localhost:8080/teams")

                if (response.status === 200) {
                    setUsers(response.data.teamFound)
                }
            } catch (error) {
                console.error(error)
            }
        })();
    }, []);


    if (!localStorage.tokenAdmin) {
        return (
            <MDBView className="bgc-light ">
                <MDBContainer className="text-center mb-5" style={{ marginTop: "17vmax", height: "200px" }}>
                    <h1 className="h1 mb-0"><MDBIcon far icon="frown" /></h1>
                    <h3 className="h1-responsive fontW mb-5">
                        Page Not Found !
                    </h3>
                </MDBContainer>
            </MDBView>
        )
    } else {

        if (views === "Add") {
            return <AddTeam
                setViews={setViews}
                setUsers={setUsers}
            />
        } else if (views === "Edit") {
            return <EditList
                editingId={editingId}
                setEditingId={setEditingId}
                setUsers={setUsers}
                setViews={setViews}
            />
        } else if (views === "Delete") {
            return <DeleteTeam
                setViews={setViews}
                setUsers={setUsers}
                deleteId={deleteId}
            />
        } else if (views === "List") {
            return (
                <MDBView className="bgc-light">
                    <MDBContainer className="mb-5" style={{ marginTop: "15vmax" }}>
                        <div className="text-center my-5 ">
                            <h2 className="h1-responsive fontW text-center  pr-5 mb-5">
                                <a href="/EP" className="h2 px-2"><MDBIcon icon="angle-left" /> </a> Liste de bénévoles
                            </h2>
                        </div>
                        <div className="row ">
                            {users.map((elem) => {
                                return <>
                                    <div className="col-6">
                                        <h3 className="my-5" >{elem.name}</h3>
                                        <h5 className="my-5 fontW grey-text" >{elem.post}</h5>
                                        <p className="my-5" >{elem.description}</p>
                                        <MDBBtn size="sm"  color='amber' className="btn-rounded btn-1"  onClick={(e) => { setEditingId(elem._id); setViews("Edit") }}>Editer</MDBBtn >
                                        <MDBBtn size="sm"  color='amber' className="btn-rounded btn-1"  onClick={(e) => { setDeleteId(elem._id); setViews("Delete") }}>Effacer</MDBBtn >
                                    </div>
                                    <div className="col-6">
                                        <img class="img-fluid"  src={`http://localhost:8080/uploads/${elem.image}`} alt="" />
                                    </div>
                                </>
                            })}
                        </div>
                        <div className="text-center my-5">
                            <MDBBtn size="lg" color='amber' rounded onClick={(e) => { setViews("Add") }}>Ajouter</MDBBtn >
                        </div>

                    </MDBContainer>
                </MDBView>
            )
        }
    }
}

export default EditTeam
