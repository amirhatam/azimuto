import React from 'react'
import { MDBContainer, MDBView, MDBBtn } from 'mdbreact';
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
            <MDBView className="purple-slight">
                <MDBContainer className="mb-5" style={{ marginTop: "15vmax" }}>
                    <div className="row">
                        <h1 className="my-5 text-center font-weight-bold">Liste de bénévoles</h1>
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
            </MDBView>
        )
    }
}

export default EditTeam
