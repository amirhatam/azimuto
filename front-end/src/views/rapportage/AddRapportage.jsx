import React from 'react'
import { MDBContainer, MDBView, MDBIcon } from 'mdbreact';
import { useState} from 'react'
import axios from 'axios'



const AddRapportage = (props) => {

    const [pdf, setPdf] = useState("");
    const [description, setDescription] = useState("");
    const [rapportageAdded, setRapportageAdded] = useState(false);

    if(!rapportageAdded){
        console.error("rapportage add err:",rapportageAdded);
    }

    const send = async () => {

        try {
            const newRapportage = new FormData()

            newRapportage.append("pdf", pdf)
            newRapportage.append("description", description)

            const response = await axios.post("http://localhost:8080/rapportage", newRapportage)
            const responseData = await axios.get("http://localhost:8080/rapportage")
            props.setRapportage(responseData.data.rapportage)
            props.setViews("List")

            if (response.status === 200) {
                setRapportageAdded(true)
            }

        } catch (err) {
            console.error(err);
        }

    }

    return (
        <MDBView className="bgc-light">
            <MDBContainer className="mb-5" style={{ marginTop: "15vmax" }}>
                <div className="row my-5">

                    
                    <div className="text-center my-5 ">
                        <h2 className="h1-responsive fontW text-center  pr-5 mb-5">
                            <a href="/rapportage" className="h2 px-2"><MDBIcon icon="angle-left" /> </a> NOS PARTENAIRES
                        </h2>
                    </div>

                    <h2 >Ajouter une nouvelle rapportage</h2>

                    <div className="mb-3">
                        <label for="formFile" className="form-label">PDF</label>
                        <input type="file" onChange={(event) => setPdf(event.target.files[0])} className="form-control" name="pdf" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Description</label>
                        <input type="text" onChange={(event) => setDescription(event.target.value)} className="form-control" name="description" placeholder="Description" />
                    </div>

                    <div className="mb-3">
                        <button className="btn btn-primary" onClick={send}>Envoyer</button>
                    </div>

                </div>
            </MDBContainer>
        </MDBView>
    )

}

export default AddRapportage