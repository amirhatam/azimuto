import React from 'react'
import { MDBView, MDBBtn, MDBContainer, MDBIcon } from 'mdbreact';
import { useState } from 'react'
import axios from 'axios'



const EditRapportage = (props) => {

    const [description, setDescription] = useState("");
    const [pdf, setPdf] = useState("");


    const modifRapportage = async () => {


        const newRapportage = new FormData()

        newRapportage.append("description", description)
        newRapportage.append("pdf", pdf)

        try {
            const response = await axios.patch(`http://localhost:8080/rapportage/${props.editingId}/updateRapportage`, newRapportage)
            props.setEditingId("")
            console.log("response", response);

            const responseData = await axios.get("http://localhost:8080/rapportage")
            props.setRapportage(responseData.data.rapportage)
            props.setViews("List")

        } catch (err) {
            console.error(err);
        }
    }

    return (
        <MDBView className="bgc-light">
            <MDBContainer className="mb-5" style={{ marginTop: "15vmax" }}>
                <div >
                    <div className="text-center my-5 ">
                        <h2 className="h1-responsive fontW text-center  pr-5 mb-5">
                            <a href="/rapportage" className="h2 px-2"><MDBIcon icon="angle-left" /> </a> NOS PARTENAIRES
                        </h2>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Description </label>
                        <input type="text" onChange={(event) => setDescription(event.target.value)} className="form-control" name="name" placeholder="Description" />
                    </div>
                    <div className="mb-3">
                        <label for="formFile" className="form-label">Pdf</label>
                        <input type="file" onChange={(event) => setPdf(event.target.files[0])} className="form-control" name="pdf" />
                    </div>

                    <div>
                        <MDBBtn color="amber" rounded onClick={modifRapportage}>Confirmer</MDBBtn>
                    </div>
                </div>
            </MDBContainer>
        </MDBView>
    )
}

export default EditRapportage