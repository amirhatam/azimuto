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
import AddPartenaire from './AddPartenaire';
import EditPartenaires from './EditPartenaires';
import DeletePartenaire from './DeletePartenaire';

const Partenaires = (props) => {

    const [partenaires, setPartenaires] = useState([]);
    const [editingId, setEditingId] = useState([])
    const [deleteId, setDeleteId] = useState("")
    const [views, setViews] = useState("List")


    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get("http://localhost:8080/partenaires")
                // console.log("response", response);
                if (response.status === 200) {
                    setPartenaires(response.data.partenaires)
                }

            } catch (err) {
                console.error(err);
            }
        })();
    }, []);

    // console.log("partenaires", partenaires);



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
            return <AddPartenaire
                setViews={setViews}
                setPartenaires={setPartenaires}
            />
        } else if (views === "Edit") {
            return <EditPartenaires
                setViews={setViews}
                editingId={editingId}
                setEditingId={setEditingId}
                setPartenaires={setPartenaires}
            />
        } else if (views === "Delete") {
            return <DeletePartenaire
                setViews={setViews}
                setPartenaires={setPartenaires}
                deleteId={deleteId}
            />
        } else if (views === "List") {
            return (
                <MDBView className="purple-slight">
                    <MDBContainer className="mb-5" style={{ marginTop: "15vmax" }}>

                        <div className="text-center my-5 ">
                            <h2 className="h1-responsive font-weight-bold text-center  pr-5 mb-5">
                                <a href="/EP" className="h2 px-2"><MDBIcon icon="angle-left" /> </a> NOS PARTENAIRES
                            </h2>
                        </div>
                        <MDBRow >
                            {partenaires.map((e,index) => {
                                return <>
                                    <MDBCol lg="4" md="12" className=" my-5 mx-0 px-0 align-self-center" style={{ textAlign: "-webkit-center" }}>
                                        <div style={{ width: "60%" }}>
                                            <MDBBtn href={`${e.url}`} target="_blank" className="rounded-circle p-0">
                                                <img
                                                    src={`http://localhost:8080/uploads/${e.image}`}
                                                    className="mx-0  mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                                                    tag="img"
                                                    alt={`https://www.${e.url}`}
                                                    key={index}
                                                />
                                            </MDBBtn>
                                            <MDBRow center>
                                                <MDBCol className="px-0" size="4">
                                                    <MDBBtn size="sm" outline color='purple' className="btn-rounded btn-1 my-3 px-3" onClick={(elem) => { setEditingId(e._id); setViews("Edit") }} >Editer</MDBBtn >
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
            );
        }
    }
}
export default Partenaires