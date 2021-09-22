import React from 'react'
import { MDBView, MDBBtn, MDBContainer } from 'mdbreact';
import { useState } from 'react'
import axios from 'axios'



const EditPartenaires = (props) => {

    const [url, setUrl] = useState("");
    const [image, setImage] = useState("");

    // console.log("image", image);

    const modifPartenaire = async () => {


        const newPartenaire = new FormData()

        newPartenaire.append("url", url)
        newPartenaire.append("image", image)

        try {
            const response = await axios.patch(`http://localhost:8080/partenaires/${props.editingId}/updatePartenaire`, newPartenaire)
            props.setEditingId("")
            console.log("response", response);
            const responseData = await axios.get("http://localhost:8080/partenaires")
            props.setPartenaires(responseData.data.partenaires)
            props.setViews("List")

        } catch (err) {
            console.error(err);
        }
    }


    return (
        <MDBView className="purple-slight">
            <MDBContainer className="mb-5" style={{ marginTop: "15vmax" }}>
                <div >
                    <div className="text-center my-5">
                        <MDBBtn size="lg" color='cyan' rounded href="/partenaires">Go back</MDBBtn>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Url </label>
                        <input type="text" onChange={(event) => setUrl(event.target.value)} className="form-control" name="name" placeholder="Entrer Url" />
                    </div>
                    <div className="mb-3">
                        <label for="formFile" className="form-label">Logo</label>
                        <input type="file" onChange={(event) => setImage(event.target.files[0])} className="form-control" name="image" />
                    </div>

                    <div>
                        <MDBBtn color="cyan" rounded onClick={modifPartenaire}>Confirmer</MDBBtn>
                    </div>
                </div>
            </MDBContainer>
        </MDBView>
    )

}

export default EditPartenaires