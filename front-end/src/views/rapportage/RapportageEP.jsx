import React from 'react'
import {
    MDBCol,
    MDBRow,
    MDBView,
    MDBContainer,
    MDBBtn,
    MDBIcon
} from 'mdbreact';
import { useState, useEffect } from 'react'
import axios from 'axios'
import AddRapportage from './AddRapportage';
import DeleteRapportage from './DeleteRapportage';
import EditRapportage from './EditRapportage';

const RapportageEP = () => {

    const [rapportage, setRapportage] = useState([]);
    const [editingId, setEditingId] = useState([])
    const [deleteId, setDeleteId] = useState("")
    const [views, setViews] = useState("List");

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get("http://localhost:8080/rapportage")

                console.log("response", response.data.rapportage);
                if (response.status === 200) {
                    setRapportage(response.data.rapportage)
                }

            } catch (err) {
                console.error(err);
            }
        })();
    }, [])

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
        if (views === "Add") {
            return <AddRapportage
                setViews={setViews}
                setRapportage={setRapportage}
            />
        } else if (views === "Edit") {
            return <EditRapportage
                setViews={setViews}
                editingId={editingId}
                setEditingId={setEditingId}
                setRapportage={setRapportage}
            />
        } else if (views === "Delete") {
            return <DeleteRapportage
                setViews={setViews}
                setRapportage={setRapportage}
                deleteId={deleteId}
            />
        } else if (views === "List") {

            return (
                <MDBView className="purple-slight">
                    <MDBContainer className="mb-5" style={{ marginTop: "15vmax" }}>
                        <div className="text-center my-5 ">
                            <h2 className="h1-responsive font-weight-bold text-center  pr-5 mb-5">
                                <a href="/EP" className="h2 px-2"><MDBIcon icon="angle-left" /> </a> Rapportage
                            </h2>
                        </div>
                        <MDBRow>
                            {rapportage.map((e,index) => {
                                return <>
                                    <MDBCol lg="4" md="12" className=" my-5 mx-0 px-0" >

                                        <div className="text-center">
                                            <a href={`http://localhost:8080/uploads/${e.pdf}`}  key={index} target="_blank" rel="noreferrer">
                                                <i data-test="fa" className="fa fa-file-pdf pr-2 h1"></i>
                                            </a>
                                            <h5  key={index} className="my-3 font-weight-bold">
                                                {e.description}
                                            </h5>
                                            <MDBRow center className="my-5">
                                                <MDBCol className="px-0" size="4">
                                                    <MDBBtn size="sm" outline color='purple' className="btn-rounded btn-1 my-3 px-3" onClick={(elem) => { setEditingId(e._id); setViews("Edit") }}  >Editer</MDBBtn >
                                                </MDBCol>
                                                <MDBCol className="px-0" size="4">
                                                    <MDBBtn size="sm" outline color='purple' className="btn-rounded btn-1 my-3 px-3" onClick={(elem) => { setDeleteId(e._id); setViews("Delete") }} >Effacer</MDBBtn >
                                                </MDBCol>
                                            </MDBRow>
                                        </div>

                                    </MDBCol>

                                </>
                            })}
                            <MDBCol lg="12" md="12" className="my-5 text-center">
                                <MDBBtn size="lg" color='cyan' rounded onClick={(e) => { setViews("Add") }}>Ajouter</MDBBtn >
                            </MDBCol>
                        </MDBRow>

                    </MDBContainer>

                </MDBView>
            )
        }
    }
}

export default RapportageEP