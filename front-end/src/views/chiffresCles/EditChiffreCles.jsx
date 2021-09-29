import React from 'react'
import { MDBView, MDBBtn, MDBContainer,MDBIcon } from 'mdbreact';
import { useState } from 'react'
import axios from 'axios'


function EditChiffreCles(props) {

    const [rapport, setrapport] = useState("");
    const [detail, setdetail] = useState("");

    const editChiffre = async () => {
        try {
            const response = await axios.patch(`http://localhost:8080/chiffres-cles/${props.editingId}/updateChiffre`, { rapport: rapport, detail: detail })
            props.setEditingId("")

            const responseData = await axios.get("http://localhost:8080/chiffres-cles")
            props.setChiffre(responseData.data.chiffresFound)
            props.setViews("List")
        } catch (err) {
            console.error(err);
        }
    }
    return (
        <MDBView className="purple-slight">
            <MDBContainer className="mb-5" style={{ marginTop: "15vmax" }}>
                <div>
                   
                    <div className="text-center my-5 ">
                    <h2 className="h1-responsive font-weight-bold text-center  pr-5 mb-5">
                        <a href="/chiffres-cles" className="h2 px-2"><MDBIcon icon="angle-left" /> </a> Nos Chiffres Clés
                    </h2>
                </div>
                    <div className="mb-3">
                        <label className="form-label">Chiffre </label>
                        <input type="text" onChange={(event) => setrapport(event.target.value)} className="form-control" name="name" placeholder="" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Description </label>
                        <textarea rows="8" onChange={(event) => setdetail(event.target.value)} className="form-control" name="name" placeholder="" />
                    </div>
                </div>
                <div>
                    <MDBBtn color="cyan" rounded onClick={editChiffre}>Confirmer</MDBBtn>
                </div>
            </MDBContainer>
        </MDBView>
    )
}

export default EditChiffreCles
